/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 *  

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navlist=['Section 1','Section 2','Section 3','Section 4']
const navBar=document.getElementById('navbar__list')
navBar.style.display='none'

for (let i=1;i<5;i++){
    let listItem=document.createElement('li')
    listItem.innerHTML=`<a href=#${navlist[i-1].replace(/\s/g,'').toLowerCase()} id=link${i}>${navlist[i-1]} </a>`
    
    navBar.appendChild(listItem)
}
navBar.style.cssText='height:35px; color:green ; display:flex; justify-content:space-around; margin-top:10px'

// Add class 'active' to section when near top of viewport
let observer1 = new IntersectionObserver(function(viewPortElement) {
	// when element and viewport are overlapping the attribute isIntersecting will be  true 
    // when element and viewport are not overlapping the attribute isIntersecting will be  false
    
	if(viewPortElement[0].isIntersecting === true){
        //set section1 to active state
        document.querySelector(`#section1`).setAttribute('class','active your-active-class')
        
        //set other sections to class empty
        document.querySelector('#section2').setAttribute('class','')
        document.querySelector('#section3').setAttribute('class','')  
        document.querySelector('#section4').setAttribute('class','') 
        document.querySelector('#link1').style.color='rgb(212, 166, 166)'
        document.querySelector('#link2').style.color='#fff'
        document.querySelector('#link3').style.color='#fff'
        document.querySelector('#link4').style.color='#fff'
    }
}, { threshold: [0.6] });

let observer2 = new IntersectionObserver(function(viewPortElement) {
    // when element and viewport are overlapping the attribute isIntersecting will be  true 
    // when element and viewport are not overlapping the attribute isIntersecting will be  false
    
	if(viewPortElement[0].isIntersecting === true){
        //set section2 to active state
        document.querySelector('#section2').setAttribute('class','active')

        //set other sections to class empty
        document.querySelector('#section1').setAttribute('class','your-active-class')
        document.querySelector('#section3').setAttribute('class','')  
        document.querySelector('#section4').setAttribute('class','')
        document.querySelector('#link1').style.color='#fff'
        document.querySelector('#link2').style.color='rgb(212, 166, 166)'
        document.querySelector('#link3').style.color='#fff'
        document.querySelector('#link4').style.color='#fff'
    }
}, { threshold: [0.6] });

let observer3 = new IntersectionObserver(function(viewPortElement) {
    // when element and viewport are overlapping the attribute isIntersecting will be  true 
    // when element and viewport are not overlapping the attribute isIntersecting will be  false
    
	if(viewPortElement[0].isIntersecting === true){
        //set section2 to active state
        document.querySelector('#section3').setAttribute('class','active')

        //set other sections to class empty
        document.querySelector('#section1').setAttribute('class','your-active-class')
        document.querySelector('#section2').setAttribute('class','') 
        document.querySelector('#section4').setAttribute('class','') 
        document.querySelector('#link1').style.color='#fff'
        document.querySelector('#link2').style.color='#fff'
        document.querySelector('#link3').style.color='rgb(212, 166, 166)'
        document.querySelector('#link4').style.color='#fff'
    }
}, { threshold: [0.6] });

let observer4= new IntersectionObserver(function(viewPortElement) {
    // when element and viewport are overlapping the attribute isIntersecting will be  true 
    // when element and viewport are not overlapping the attribute isIntersecting will be  false
    
	if(viewPortElement[0].isIntersecting === true){
        //set section4 to active state
        document.querySelector('#section4').setAttribute('class','active')
        document.querySelector('#section4').innerHTML="<div class=\"landing__container\"><h2>Section 4</h2><p>Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.\n As name suggests it comes in middle of something and that is request and response cycle.\n Middleware has access to request and response object. \n Middleware has access to next function of request-response life cycle</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div>"

        //set other sections to class empty
        document.querySelector('#section1').setAttribute('class','your-active-class')
        document.querySelector('#section2').setAttribute('class','') 
        document.querySelector('#section3').setAttribute('class','') 
        document.querySelector('#link1').style.color='#fff'
        document.querySelector('#link2').style.color='#fff'
        document.querySelector('#link3').style.color='#fff'
        document.querySelector('#link4').style.color='rgb(212, 166, 166)'
    }
}, { threshold: [0.6] });

let observer5= new IntersectionObserver(function(viewPortElement) {
    // when element and viewport are overlapping the attribute isIntersecting will be  true 
    // when element and viewport are not overlapping the attribute isIntersecting will be  false
    
	if(viewPortElement[0].isIntersecting === true){
        document.querySelector('#link1').style.color='#fff'
        document.querySelector('#link2').style.color='#fff'
        document.querySelector('#link3').style.color='#fff'
        document.querySelector('#link4').style.color='#fff'
    }
}, { threshold: [0.3] });


// Set sections as active or not
observer5.observe(document.querySelector(".main__hero"));
observer1.observe(document.querySelector("#section1"));
observer2.observe(document.querySelector("#section2"));
observer3.observe(document.querySelector("#section3"));
observer4.observe(document.querySelector("#section4"));


// monitor user scroll position on window interface
window.onscroll = function() {showButton()};

function showButton() {
    //Get the button
    var anchorButton = document.getElementById("anchor"); 

    console.log(window.anchorButton)

    // show button if  user scrolls down 100px from the top of the DOM
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        
        anchorButton.style.display = "block";
    } else {
        
        anchorButton.style.display = "none";
    }
}






// When the user clicks on the button, scroll to the top of the document
function BackToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click




