const Simple = artifacts.require("Simple");
const { ethers } = require("ethers");

module.exports = async () => {
  const simple = await Simple.deployed();
  const [account, _] = await web3.eth.getAccounts();
  console.log(account);
};
