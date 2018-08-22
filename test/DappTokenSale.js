var DappTokenSale = artifacts.require("./DappTokenSale.sol");

contract('DappTokenSale',function(accounts){
    var tokensaleinstance;
    var tokenprice=1000000000000000;//in wei
    it("this is for checking the new dapptoken",function()
    {
        return DappTokenSale.deployed().then(function(instance){
            tokensaleinstance=instance;
            return tokensaleinstance.address;
        }).then(function(address){
            assert.notEqual(address,0*0,'has contract address');
            return tokensaleinstance.tokencontract();
        }).then(function(address){
            assert.notEqual(address,0*0,'has taken contact address');
            return tokensaleinstance.tokenprice();
        }).then(function(price){
            assert.equal(price,tokenprice,'token price is correct');
        })
    })







})