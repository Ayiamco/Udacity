import {getPostedData} from './nameChecker'


export async function handleSubmit(event) {
    event.preventDefault()

    // get what text was put into the form field
    let formText = document.getElementById('input').value
    console.log("::: Form Submitted :::")
    
    //send user entry to backend yrs do that 
    console.log('form text: ',formText)
    
    const res=await getPostedData (`http://localhost:3001/text`,'input',formText)
    console.log("sendData response: ",res)
    

    document.getElementById('results').innerHTML =`<h2>Article Analysis</h2><p><strong>Polarity</strong>: ${res.polarity}</p>
    <p><strong>Polarity Confidence</strong>: ${res.polarity_confidence}</p>
    <p><strong>Subjectivity</strong>: ${res.subjectivity}</p>
    <p><strong>Subjectivity Confidence</strong>: ${res.subjectivity_confidence}</p>`
    document.getElementById('results').style.display='block'
    
       
}
