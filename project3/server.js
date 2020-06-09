// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express=require('express')

// Start up an instance of app
app=express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors=require('cors')
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'))

// Setup Server
const port =8080
const server=app.listen(port,()=>{
    console.log('sever is running')
    console.log(`server is located at ${port}`)
})

/*Routes*/
function addData(request,response){
    projectData.push(request.body)
    return {status:200}
}
function getData(request,response){
    //dont know wat to do yet
    console.log("Last Added Data: ",projectData[projectData.length-1])
    response.send(JSON.stringify(projectData[0]))
    console.log("server response: ",JSON.stringify(projectData[0]))
    console.log('#############################################')
}
app.post('/addData',addData)

app.get('/getData',getData)