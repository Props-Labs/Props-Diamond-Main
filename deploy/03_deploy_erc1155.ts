import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

import { deployPermanentContract } from '../hardhat.util';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const accounts = await hre.getUnnamedAccounts();

  //
  // Presets
  //
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155', []);
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155WithERC2771', []);

  //
  // Facets
  //

  // Supply
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155SupplyOwnable', []);

  // Metadata
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155Metadata', []);

  // Lockable
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155LockableOwnable', []);
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155LockableRoleBased', []);

  // Mintable
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155MintableOwnable', []);
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155MintableOwnableERC2771', []);
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155MintableRoleBased', []);
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155MintableRoleBasedERC2771', []);

  // Tiered Sales
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155TieredSales', []);
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155TieredSalesERC2771', []);
  await deployPermanentContract(hre.deployments, accounts[0], 'ERC1155TieredSalesOwnable', []);
};

export default func;
