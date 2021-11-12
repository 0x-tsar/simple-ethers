const Simple = artifacts.require("Simple");

module.exports = async (deployer, network, account) => {
  await deployer.deploy(Simple);
  const simple = await Simple.deployed();
};
