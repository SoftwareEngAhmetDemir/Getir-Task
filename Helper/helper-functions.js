import records from "../models/getir-case-study";


export  async function get_Data ({startDate, endDate,minCount,maxCount}){
 const data = await   records.aggregate([
     { 
         "$project": {
            _id:0,
             key:1,
            createdAt:1,
        
          "totalCount": {
            "$sum": "$counts" 
           },
        }
    }
    ,        
        {
            
           "$match": {
               $and:[
           { "totalCount":  {$gte:minCount, $lte: maxCount}},
            {"createdAt":  {$gte:new Date(startDate), $lte:new Date(endDate)} } ,
          
               ]
        }  
        }
    
     ]).catch(e=>{
        console.log(e);
        return [];// ther is no result return  an empty array
     })


 return data;
}