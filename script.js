// AOS

AOS.init({

duration:1000,

once:true

});

// Typing

new Typed("#typing",{

strings:[

"Full Stack Developer",

"C# Developer",

"JavaScript Developer",

"BSCS Student"

],

typeSpeed:70,

backSpeed:50,

loop:true

});

// Sticky Navbar

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

header.classList.toggle("sticky",window.scrollY>50);

});

// Mobile Menu

const menu=document.getElementById("menu-btn");

const navbar=document.getElementById("navbar");

menu.onclick=()=>{

navbar.classList.toggle("active");

};

// Active Navigation

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*================ PROJECT FILTER ================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".filter-btn.active").classList.remove("active");

button.classList.add("active");

const filter=button.dataset.filter;

projectCards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else{

if(card.classList.contains(filter)){

card.style.display="block";

}

else{

card.style.display="none";

}

}

});

});

});
/*================ BACK TO TOP ================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*================ CONTACT FORM ================*/

const form=document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});