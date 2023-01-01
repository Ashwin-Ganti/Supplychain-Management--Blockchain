//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

contract Security{
    mapping(address=>uint) public contributors; 
    address public security; 
    uint public sessionTime;
    bool public target1;
    bool public target2;
    uint public barcode;
    mapping(int=>string) public packageStatus;
    

    constructor(uint _deadline){
        //target1=_target1;
        //target2=_target2;
        sessionTime=block.timestamp+_deadline; 
        security=msg.sender;
        //packageStatus[0] = "Damaged";
        //packageStatus[2] = "Partial Accepted";
        //packageStatus[1] = "Accepted";

        
    }
    struct Memo{
        bool target1;
        bool target2;
        uint256 timestamp;
        address from;

    }
    Memo[] memos;
    
    int public packst = -1; 
    function processOrder(bool target1,bool target2) public returns(int) {
        require(block.timestamp < sessionTime,"SessionTimeout");
       
        if(target1==true && target2==true){
            packst = 1;
        }else if((target1==false && target2==true) || (target1==true && target2==false)){
            packst = 2;
        }else{
            packst = 0;
        }
        memos.push(Memo(target1,target2,block.timestamp,msg.sender));
        return packst;


    }
    function getMemos() public view returns (Memo[] memory){
        return memos;
    }
    
    //int public status = packageStatus[packst];
    
}
