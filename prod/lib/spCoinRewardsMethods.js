const { bigIntToDecString } = require("./utils/dateTime");
const { SpCoinLogger } = require("./utils/logging");

let spCoinLogger;

class SpCoinRewardsMethods {

  constructor(_spCoinContractDeployed) {
    this.spCoinContractDeployed = _spCoinContractDeployed;
    spCoinLogger = new SpCoinLogger(_spCoinContractDeployed)
    this.setSigner(_spCoinContractDeployed.signer);
  }

  setSigner(_signer) {
    this.signer = _signer;
  }

  /*  REMOVE LATER
testStakingRewards
  testStakingRewards = async(lastUpdateTime, testUpdateTime, interestRate, quantity) => {
    // spCoinLogger.logFunctionHeader("getStakingRewards(lastUpdateTime,  interestRate,  quantity)");
    let stakingRewards = await this.spCoinContractDeployed.connect(this.signer).testStakingRewards(lastUpdateTime, testUpdateTime, interestRate, quantity);
    
    spCoinLogger.logExitFunction();
    return stakingRewards;
  }

  getStakingRewards = async(lastUpdateTime,  interestRate,  quantity) => {
    // spCoinLogger.logFunctionHeader("getStakingRewards(lastUpdateTime,  interestRate,  quantity)");
    let stakingRewards = await this.spCoinContractDeployed.connect(this.signer).getStakingRewards(lastUpdateTime,  interestRate,  quantity);
    
    spCoinLogger.logExitFunction();
    return stakingRewards;
  }

  getTimeMultiplier = async(_timeMultiplier) => {
    // spCoinLogger.getTimeMultiplier("getTimeMultiplier(_timeMultiplier)");
    let timeMultiplier = await this.spCoinContractDeployed.connect(this.signer).getTimeMultiplier(_timeMultiplier);
    
    spCoinLogger.logExitFunction();
    return timeMultiplier;
  }

  getAccountTimeInSecondeSinceUpdate = async(_tokenLastUpdate) => {
    let timeInSecondeSinceUpdate = await this.spCoinContractDeployed.connect(this.signer).getAccountTimeInSecondeSinceUpdate(_tokenLastUpdate);
    
    spCoinLogger.logExitFunction();
    return timeInSecondeSinceUpdate;
  }

  getMillenniumTimeIntervalDivisor = async(_timeInSeconds) => {
      // console.log("getMillenniumTimeIntervalDivisor("+ _timeInSeconds + ")"); 
      let annualizedPercentage = await spCoinContractDeployed.connect(this.signer).getMillenniumTimeIntervalDivisor(_timeInSeconds);

    // return annualizedPercentage;
    return bigIntToDecString(annualizedPercentage);
  }

  depositSponsorStakingRewards = async (
    _sponsorAccount, 
    _recipientAccount,
    _recipientRate ,
    _amount) => {
      spCoinLogger.logFunctionHeader(
      "depositSponsorStakingRewards = async(" +
      _sponsorAccount + ", " +
      _recipientAccount + ", " +
      _recipientRate  + ", " +
      _amount + ")"
    );
    await this.spCoinContractDeployed.connect(this.signer).depositStakingRewards (
      SPONSOR,
      _sponsorAccount,
      _recipientAccount,
      _recipientRate ,
      _sponsorAccount,
      0,
      _amount
      );
    spCoinLogger.logExitFunction();
  };
    
  depositRecipientStakingRewards = async (
    _sponsorAccount, 
    _recipientAccount,
    _recipientRate,
    _amount) => {
    spCoinLogger.logFunctionHeader(
      "depositRecipientStakingRewards = async(" +
      _sponsorAccount + ", " +
      _recipientAccount + ", " +
      _recipientRate + ", " +
      _amount + ")"
    );
    await this.spCoinContractDeployed.connect(this.signer).depositStakingRewards (
      RECIPIENT,
      _sponsorAccount,
      _recipientAccount,
      _recipientRate,
      burnAddress,
      0,
      _amount
    );
    spCoinLogger.logExitFunction();
  };
    
  depositAgentStakingRewards = async (
    _sponsorAccount,
    _recipientAccount,
    _recipientRate,
    _agentAccount, 
    _agentRate,
    _amount) => {
    spCoinLogger.logFunctionHeader(
      "depositAgentStakingRewards = async(" +
      _recipientAccount,
      _agentAccount + ", " +
      _agentRate + ", " +
      _amount + ")"
    );
    await this.spCoinContractDeployed.connect(this.signer).depositStakingRewards (
      AGENT,
      _sponsorAccount,
      _recipientAccount,
      _recipientRate,
      _agentAccount,
      _agentRate,
      _amount
    );
    spCoinLogger.logExitFunction();
  };

  backDateAgentRateRecord = async (
    _sponsorAccount,
    _recipientAccount,
    _recipientRate,
    _agentAccount, 
    _agentRate,
    _backDateInSecs
  ) => {
    await this.spCoinContractDeployed.connect(this.signer).backDateAgentRateRecord (
      _sponsorAccount,
      _recipientAccount,
      _recipientRate,
      _agentAccount,
      _agentRate,
      _backDateInSecs
    );
  }

  backDateRecipientRateRecord = async (
    _sponsorAccount,
    _recipientAccount,
    _recipientRate,
    _backDateInSecs
  ) => {
    await this.spCoinContractDeployed.connect(this.signer).backDateRecipientRateRecord (
      _sponsorAccount,
      _recipientAccount,
      _recipientRate,
      _backDateInSecs
    );
  }
*/
};

/////////////////////// EXPORT MODULE FUNCTIONS ///////////////////////

module.exports = {
  SpCoinRewardsMethods
};