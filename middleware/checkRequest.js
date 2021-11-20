
import {checkIfOneOfThreeRequiredFieldIsNotFound,checkNumberOfField} from '../__test__/testsHelperFunctions';

import MsgIndexs from '../__test__/MessagesIndexs.js'

export function checkRequest (req,res,next){
    
    let keys = Object.keys(req.body);
// check required fileds 
    if(checkIfOneOfThreeRequiredFieldIsNotFound(keys) ){
        res.json( MsgIndexs[1]) 
      
    }
   else
//check number of fileds
   if(checkNumberOfField(keys)){
    res.json(MsgIndexs[2])
   }

    else {

    let {startDate,endDate,minCount,maxCount} = req.body;
    let startDateInDateFormat = new Date(startDate);
    let endDateInDateFormat = new Date(endDate);



//check first date format
    if(startDateInDateFormat =='Invalid Date'){
  
        res.json(MsgIndexs[3]);
   
    }
    else
    //check second date format
    if(endDateInDateFormat =='Invalid Date'){
  
        res.json(MsgIndexs[4]);
  
    }

    else
    ////check first date is after the second date
    if(startDateInDateFormat.getTime()> endDateInDateFormat.getTime()){
   
    res.json(MsgIndexs[5])
    
    }
    else
    // mincount should be smaller than maxCount
    if(minCount>maxCount){
        res.json(MsgIndexs[6])
    
    }

    else
    next();
    }
}