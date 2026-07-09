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

const skillSlides = document.querySelectorAll(".skill-slide");
const skillDots = document.querySelectorAll(".skill-dots .dot");
const nextSkillBtn = document.querySelector(".skill-arrow.next");
const prevSkillBtn = document.querySelector(".skill-arrow.prev");

let currentSkill = 0;

function showSkillSlide(index) {
  skillSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  skillDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

if (nextSkillBtn && prevSkillBtn) {
  nextSkillBtn.addEventListener("click", () => {
    currentSkill = (currentSkill + 1) % skillSlides.length;
    showSkillSlide(currentSkill);
  });

  prevSkillBtn.addEventListener("click", () => {
    currentSkill = (currentSkill - 1 + skillSlides.length) % skillSlides.length;
    showSkillSlide(currentSkill);
  });
}

skillDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSkill = index;
    showSkillSlide(currentSkill);
  });
});

// Auto slide every 4 seconds
setInterval(() => {
  currentSkill = (currentSkill + 1) % skillSlides.length;
  showSkillSlide(currentSkill);
}, 4000);

showSkillSlide(currentSkill);
// =========================
// PROJECT IMAGE SLIDESHOW
// =========================
const projectSliders = document.querySelectorAll(".project-image-slider");

projectSliders.forEach((slider) => {
  const slides = slider.querySelectorAll(".project-slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  showSlide(current);

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000); // change image every 3 sec
});