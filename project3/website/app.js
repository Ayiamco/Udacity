/*steps:
step 1: set up api key and get base url
step 2: set up functions to send request to openweather api
step 3: add event listener to element with id generate get the temp for the zip code and feeling.
step 4: set up function to post data to '/addData' url
*/


/* Step 1*/
/*  Global Variables */
const APIKEY='43613e3d0e2c001e967fad7516a60d92'
const BASEURL='https://api.openweathermap.org/data/2.5/weather?zip='



/* Step 2*/
//get request to openweather api
async function getWeather(base_url,api_key,zip_code){
    url=base_url + `${zip_code}&appid=${api_key}`
    const response=await fetch(url)
    const responseData= await response.json()
    return responseData
}

/* Step 3 */
let generate=document.getElementById('generate')
generate.addEventListener('click',async ()=>{
    let zipCode=document.getElementById('zip')
    zipCode=zipCode.value
    console.log("zipcode: ",zipCode)
    const response= getWeather(BASEURL,APIKEY,zipCode)
    console.log(response)
    return response.then((data)=>{
        let temperature= data['main']['temp']
        console.log('Tempearture: ',temperature)

        //get feeling from user
        let feeling=document.getElementById('feelings')
        feeling=feeling.value
        console.log("feeling: ",feeling)

        // Create a new date instance 
        let d = new Date();
        const newDate = d.getMonth()+'-'+ d.getDate()+'-'+ d.getFullYear();
        console.log("date:",newDate)

        let postingdata=postData('/addData',{temperature,feeling,date:newDate})
   }).then( async (postResp)=>  {
        let retrivedData= await getPostedData('/getData',)
        console.log(retrivedData.json)
   })
    
})



/* Step 4*/
const postData=async (url='',data={}) =>{
    response = await fetch(url,{
        method:"POST",
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })

    console.log(data,url) 
    const newData=await response.json();
    console.log(newData) 
}

getPostedData= async function (url=''){
    let resp= await fetch(url)
    resp.then(finalResp =>{
        console.log("final Resp: ",finalResp)
    })
    
    return postedResp
       
}