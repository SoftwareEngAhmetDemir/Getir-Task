import records from "../models/getir-case-study";


export  async function get_Data ({startDate, endDate,minCount,maxCount}){
 const data = await   records.aggregate([
     { 
         "$project": {
            _id:0, // we donot need this
             key:1,
            createdAt:1,
        
          "totalCount": {
            "$sum": "$counts"  //calculate the sum of counts elements
           },
        }
    }
    ,        
        {
            
           "$match": {
               $and:[
           { "totalCount":  {$gte:minCount, $lte: maxCount}}, // get the total account which is in arrange[minCount,maxCount]
            {"createdAt":  {$gte:new Date(startDate), $lte:new Date(endDate)} } ,//get the date in arrange
          
               ]
        }  
        }
    
     ]).catch(e=>{
        console.log(e);
        return [];// ther is no result return  an empty array
     })


 return data;
}
