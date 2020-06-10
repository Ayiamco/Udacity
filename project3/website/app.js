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
    url=base_url + `${zip_code}&appid=${api_key}&units=imperial`
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
    //get feeling from user
    let feeling=document.getElementById('feelings')
    feeling=feeling.value
    return response.then((data)=>{
        let temperature= data['main']['temp']
    
        // Create a new date instance 
        let d = new Date();
        const newDate = d.getMonth()+'-'+ d.getDate()+'-'+ d.getFullYear();
        
        let postingdata= postData('/addData',{temperature,feeling,date:newDate})
   }).then( async (postResp)=>  {
        let retrivedData= await getPostedData('/getData','feeling',feeling)
        console.log("recieved Data: ",retrivedData)
        let entryHolder=document.getElementById("entryHolder")
        entryHolder.style.display='none'
        let entrydate=document.getElementById('date')
        entrydate.innerHTML=`<p>Date: ${retrivedData.date}</p>`
        let entryTemp=document.getElementById('temp')
        entryTemp.innerHTML=`<p>Temperature: ${retrivedData.temperature} &deg F</p>`
        let entryContent=document.getElementById('content')
        entryContent.innerHTML=`<p>Current Emotional State: <br>${retrivedData.feeling} </p>`

        entryHolder.style='border:2px white solid';
        entryHolder.style.display='block'
        
   }).catch(error=>{
        console.log('There was an error') //mostly wrong zipcode or bad network
        /*return entryHolder div to default*/
        document.getElementById("entryHolder").style.border='none'
        let entrydate=document.getElementById('date')
        let entryContent=document.getElementById('content')

        /*display proper error message*/
        let entryTemp=document.getElementById('temp')
        if (zipCode===''){

            entrydate.innerHTML=`<p> Please Enter a  valid zip code </p>`
            let entryHolder=document.getElementById("entryHolder")
            entryHolder.style.backgroundColor='rgb(129, 111, 111)'
            entryContent.innerHTML=''
            entryTemp.innerHTML=''
        }
        else{
            entrydate.innerHTML=`<p> Error!!! ${zipCode} is not a valid zip code  in the United States. </p>`
            let entryHolder=document.getElementById("entryHolder")
            entryHolder.style.backgroundColor='rgb(129, 111, 111)' 
            entryContent.innerHTML=''
            entryTemp.innerHTML=''
        }
        
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

getPostedData= async function (url,keyParam,valueParam){
    let resp= fetch(`${url}?${keyParam}=${valueParam}`)
    return resp.then(finalResp =>{
        return finalResp.json()
    })
       
}
