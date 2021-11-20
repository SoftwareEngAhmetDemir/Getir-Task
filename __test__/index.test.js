import mongoose from 'mongoose';
import {DB_USER,DB_PASS,Cluster_Name,Document_Name} from '../config'
import MsgIndexs from './MessagesIndexs';
import {checkIfOneOfThreeRequiredFieldIsNotFound,checkNumberOfField} from './testsHelperFunctions'
import app from './server'
const supertest = require("supertest");


const url = `mongodb+srv://${DB_USER}:${DB_PASS}
@challenge-xzwqd.mongodb.net/${Cluster_Name}?retryWrites=true`

   
    
        beforeAll(()=>{

      
      
          describe('check connecting with Mongo Db',()=>{

      

         
           mongoose.connect(url,(error,response)=>{
                   if(response) expect('DBisconnected').toBe('DBisconnected')
                   
                  
               else    {
                   
                mongoose.connection.close();
                expect('DBisconnected').toBe('DBisnotconnected')
               
               }
            }) 
                
                 
                })
               
                mongoose.connection.close();
               
    })
    
  
expect.extend({
    togetError(recieved,target){
        let data = recieved;
        
let keys = Object.keys(data);
if( checkIfOneOfThreeRequiredFieldIsNotFound(keys)){
        return {
            message:()=> MsgIndexs[1].msg,
            pass: false
        }
}
else
if(checkNumberOfField(keys)){
    return {
        message:()=> MsgIndexs[2].msg,
        pass: false
    }
}

    else {

        let {startDate,endDate,minCount,maxCount} = data;
        let startDateInDateFormat = new Date(startDate);
        let endDateInDateFormat = new Date(endDate);
    
    
    
    
        if(startDateInDateFormat =='Invalid Date'){
      
       return{     message:()=> MsgIndexs[3].msg,
            pass: false
       }
        }
        else
        if(endDateInDateFormat =='Invalid Date'){
      
            return{     message:()=> MsgIndexs[4].msg,
                pass: false
           }
      
        }
    
        else
        if(startDateInDateFormat.getTime()> endDateInDateFormat.getTime()){
       
            return{     message:()=> MsgIndexs[5].msg,
                pass: false
           }
        
        }
        else
        if(minCount>maxCount){
            return{     message:()=> MsgIndexs[6].msg,
                pass: false
           }
        
        }
else{
    return{     message:()=> MsgIndexs[0].msg,
        pass: true
   }
}    
}




    }
})

    test("check The Request  ",async () => {
       
      //Request Example
        let RequestedData = {
        "startDate": "2005-10-06",
        "endDate": "2021-10-02",
        "minCount": 0,
        "maxCount": 999999000
        }

       await  supertest(app).post("/")
         .send(RequestedData)
         .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
          .expect(200)
          .then((response) => {
          expect(response.body).togetError('its not important here cause i just check the received value');
          });
      });

//Close Connection and done the test
afterAll((done) => {
   mongoose.connection.close();

 return  done()
  });
