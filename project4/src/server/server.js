var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
  application_id: process.env.TEXT_API_ID,
  application_key: process.env.TEXT_API_KEY
});


const app = express()
const cors=require('cors')

app.use(express.static('dist'))
app.use(cors())


app.get('/', function (req, res) {
    
    res.sendFile('/dist/index.html')
})

// set port 
let port=3001
app.listen(port, function () {
    console.log(`Example app listening on port ${port} !`)
})

app.get('/text', aylienApiText)


//function to do shit
async function aylienApiText(req,res){
  console.log("get request input query parameter: ",req.query['input'])
  console.log(req)
  console.log(req.query)
  textapi.sentiment({
      'text': req.query['input']
    }, function(error, response) {
      if (error === null) {
        console.log(response);
        res.send(JSON.stringify(response))
      }
    })
  }