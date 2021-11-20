import express from 'express';

//This File To check the Request which sent by user or Client just testing
const app = express()
const port = 3000 ;
app.use(express.json());

app.post('/', (req, res) => {

  res.json(req.body)
});


module.exports = app;