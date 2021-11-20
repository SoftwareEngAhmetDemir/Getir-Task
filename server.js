import express from 'express';
import { get_Data } from './Helper/helper-functions';
import MsgIndexs from './__test__/MessagesIndexs.js'

import { checkRequest} from './middleware/checkRequest';


const app = express()

app.use(express.json());
app.set('view engine', 'hbs');
app.get('/', (req, res) => {


  res.render('index' , {Project: 'Getir Company Task !!!'})
})


app.post('/test',checkRequest,async function(req,res){
    try{
    const data = [...await get_Data(req.body)];

    let filteredData =MsgIndexs[7] // default status is empty
    
    if(data.length>0)
     filteredData = {
        ...MsgIndexs[0],
        'records':[...data]
       
    };
    res.json(filteredData);
}
catch(e){
    console.log(e)
    res.json({msg:'unsuccessful '+e})
}
  
});


export default app;