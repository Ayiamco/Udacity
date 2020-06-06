function myfunc (event){
    console.log(event)
    const blogTitle=document.querySelector('h1'); 
    if (event.target.nodeName.toLowerCase()=='h1')
    {blogTitle.style.cssText='background-color:red;';}
    setTimeout(function(){
        blogTitle.style.cssText='background-color:blue;'
        setTimeout(function(){
            blogTitle.style.cssText='background-color:green;';
        },2000);
    },2000)
}
document.addEventListener('click',myfunc) ;
document.addEventListener('mouseover',function(evt){
    console.log(evt)
    console.log("##############################################################################################")
    if (evt.target.nodeName.toLowerCase()=='p'){
        let newElement=document.createElement('h6')
        newElement.textContent="This s my trial of adding elements to the "
        let postContainer=document.querySelector(".container")
        postContainer.children[0].remove()
        


    }

function optimalCode(){
    let documnetFragment=document.createDocumentFragment()
    for (let i=0;i<10;i++){
        let pTag=document.createElement('p')
        pTag.textContent='this is just a big fat lie'
        documnetFragment.appendChild(pTag)
    }
    document.appendChild()
}
        
            
})
