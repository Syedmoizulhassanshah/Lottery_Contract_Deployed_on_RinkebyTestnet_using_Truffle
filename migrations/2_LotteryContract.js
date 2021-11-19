const LotteryContract = artifacts.require("Basic_Lottery_By_Moiz");

module.exports = function (deployer) {
  deployer.deploy(LotteryContract);
};
