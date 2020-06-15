export async function getPostedData (url,keyParam,valueParam){
    console.log(`${url}?${keyParam}=${valueParam}`)
    let resp= fetch(`${url}?${keyParam}=${valueParam}`)
    return resp.then(finalResp =>{
        return finalResp.json()
    })
       
}

export function onBlur() {
    var x = document.getElementById("input");
    x.value = x.value.toUpperCase();
  }

  