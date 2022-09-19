import * as fse from 'fs-extra';
import glob from 'glob';
import * as path from 'path';
import * as rimraf from 'rimraf';

const { chainConfig: chainConfig_ } = require('@nomiclabs/hardhat-etherscan/dist/src/ChainConfig.js');

const chainConfig = {
  ...chainConfig_,
  okcTestnet: {
    chainId: 65,
  },
  okcMainnet: {
    chainId: 66,
  },
  evmosTestnet: {
    chainId: 9000,
  },
  evmosMainnet: {
    chainId: 9001,
  },
  zksyncTestnet: {
    chainId: 280,
  },
};

type Dependency = string;

type Facet = {
  title: string;
  repo: string;
  ref: string;
  fqn: string;
  version: string;
  peer_dependencies: Dependency[];
  dependencies: Dependency[];
  addresses: Record<string, string>;
  providesInterfaces: string[];
  functionSelectors: string[];
};

async function main() {
  const distPath = path.resolve(__dirname, '../dist');

  fse.mkdirSync(distPath, { recursive: true });

  // Add Solidity source code
  fse.copySync(path.resolve(__dirname, '../src'), distPath);

  // Add type bindings
  fse.copySync(path.resolve(__dirname, '../typechain'), distPath + '/typechain');

  // Add ABI artifacts
  const artifactsRoot = path.resolve(__dirname, '../artifacts/src');
  const files = glob.sync('**/*.json', {
    nodir: true,
    cwd: artifactsRoot,
    follow: true,
  });
  for (const file of files) {
    fse.copySync(
      path.resolve(artifactsRoot, file),
      path.resolve(distPath, path.dirname(path.dirname(file)), path.basename(file)),
    );
  }

  // Add OpenZeppelin ABI artifacts for convenience
  const ozRoot = path.resolve(__dirname, '../node_modules/@openzeppelin/contracts');
  const ozBuildRoot = path.resolve(ozRoot, 'build');
  const ozFiles = glob.sync('**/*.json', {
    nodir: true,
    cwd: ozBuildRoot,
    follow: true,
  });
  for (const file of ozFiles) {
    let { sourceName } = fse.readJsonSync(path.resolve(ozBuildRoot, file));
    sourceName = sourceName.replace(/^contracts\//i, '');

    fse.copySync(
      path.resolve(ozBuildRoot, file),
      path.resolve(distPath + '/openzeppelin', sourceName.replace(/\.sol$/i, '.json')),
    );
    fse.copySync(path.resolve(ozRoot, sourceName), path.resolve(distPath + '/openzeppelin', sourceName));
  }
  fse.removeSync(path.resolve(distPath, 'misc/openzeppelin'));

  // Add Manifold.xyz ABI artifacts for convenience
  const manifoldRoot = path.resolve(__dirname, '../artifacts/@manifoldxyz/contracts');
  const manifoldFiles = glob.sync('**/*.json', {
    nodir: true,
    cwd: manifoldRoot,
    follow: true,
  });
  for (const file of manifoldFiles) {
    fse.copySync(
      path.resolve(manifoldRoot, file),
      path.resolve(distPath + '/manifoldxyz', path.dirname(path.dirname(file)), path.basename(file)),
    );
  }

  // Add deployment addresses
  const contractNameToChainToAddress: Record<string, Record<string, string>> = {};
  const deploymentsRoot = path.resolve(__dirname, '../deployments');
  const deploymentFiles = glob.sync('*/*.json', {
    nodir: true,
    cwd: deploymentsRoot,
    follow: true,
  });
  for (const file of deploymentFiles) {
    const chainName = path.dirname(file);

    if (!chainConfig[chainName]) {
      throw new Error(`Could not find ID for chain ${chainName} in chainConfig`);
    }

    const chainId = Number(chainConfig[chainName].chainId);
    const deploymentJson = await fse.readJSON(path.resolve(deploymentsRoot, file));
    const contractAddress = deploymentJson.address;
    const artifactName = path.basename(file).split('.', -1)[0];
    const sourceFile = `${artifactName}.sol`;

    const files = glob.sync(`**/${sourceFile}`, {
      cwd: path.resolve(__dirname, '../src'),
      nodir: true,
      follow: true,
    });

    if (files.length !== 1) {
      throw new Error(`Could not find contract ${artifactName} in src/ directory: ${JSON.stringify(files)}`);
    }

    const artifactKey = files[0].split('.', -1)[0];

    if (!artifactKey) {
      throw new Error(`Could not get artifact key for ${file}`);
    }

    if (!contractNameToChainToAddress[artifactKey]) {
      contractNameToChainToAddress[artifactKey] = {};
    }

    contractNameToChainToAddress[artifactKey][chainId] = contractAddress;
    contractNameToChainToAddress[artifactKey][chainName] = contractAddress;
  }

  fse.writeJSONSync(path.resolve(distPath, 'addresses.json'), contractNameToChainToAddress);

  // Add build info
  const buildInfoRoot = path.resolve(__dirname, '../artifacts/build-info');
  const buildInfoFiles = glob.sync('*.json', {
    nodir: true,
    cwd: buildInfoRoot,
    follow: true,
  });

  const buildInfo = fse.readJSONSync(path.resolve(buildInfoRoot, buildInfoFiles[0]));

  fse.writeJSONSync(path.resolve(distPath, 'build-info.json'), {
    compilerVersion: `v${buildInfo.solcLongVersion}`,
    solcInput: buildInfo.input,
  });

  // Remove debug files
  rimraf.sync(path.resolve(distPath) + '/**/*.dbg.json');

  // Add package files
  fse.copySync(path.resolve(__dirname, '../package.json'), distPath + '/package.json');
  fse.copySync(path.resolve(__dirname, '../README.md'), distPath + '/README.md');

  // TODO Auto-generate facets
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
