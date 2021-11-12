const Simple = artifacts.require("Simple");
const { ethers } = require("ethers");

module.exports = async () => {
  const simple = await Simple.deployed();
  const simpleNetwork = simple.networks["80001"].address;
  console.log(simpleNetwork);
  const t = await ethers.providers.getDefaultProvider();
  console.log(t);

  const [account, _] = await web3.eth.getAccounts();
  console.log(account);
};
