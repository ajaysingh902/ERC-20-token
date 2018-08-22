pragma solidity ^0.4.2;
import "./DappToken.sol";
contract DappTokenSale {
    address admin;
    DappToken public tokencontract;
    uint256 public tokenprice;
    function DappTokenSale(DappToken _tokencontract,uint256 _tokenprice) public 
    {
        admin=msg.sender;
        tokencontract=_tokencontract;
        tokenprice=_tokenprice;
    }

}