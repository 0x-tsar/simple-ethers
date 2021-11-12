const Simple = artifacts.require("Simple");

module.exports = async () => {
  const simple = await Simple.deployed();
  const [account, _] = await web3.eth.getAccounts();
  console.log(account);
};
