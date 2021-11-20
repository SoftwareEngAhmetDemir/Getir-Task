import mongoose from 'mongoose';
import {DB_USER,DB_PASS,Cluster_Name,Document_Name} from '../config'
import recordsSchema from './schema'
const { Schema } = mongoose;
const url = `mongodb+srv://${DB_USER}:${DB_PASS}
@challenge-xzwqd.mongodb.net/${Cluster_Name}?retryWrites=true`

 mongoose.connect(url,(error,response)=>{
    if(response) console.log('connected')
   if( error) console.log('error')
})



const records = mongoose.model(`${Document_Name}`, 
new Schema(recordsSchema)
);


export default records;

