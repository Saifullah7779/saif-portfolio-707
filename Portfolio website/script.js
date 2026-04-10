// Mobile Menu
let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");
menuBtn.addEventListener("click", ()=>menu.classList.toggle("show"));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", e=>{
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

// Skills Animation on Scroll
window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".skill-level").forEach(skill=>{
    let position = skill.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.2;
    if(position < screenPosition) skill.style.width = skill.getAttribute("data-level");
  });
});

// Typing Animation
let texts=["Frontend Developer","Web Designer","JavaScript Enthusiast"];
let i=0,j=0; let currentText=""; let isDeleting=false; let speed=150;
function type(){
  if(i>=texts.length)i=0;
  if(!isDeleting && j<=texts[i].length){
    currentText=texts[i].substring(0,j);
    document.getElementById("typing").innerHTML=currentText;
    j++; if(j>texts[i].length){setTimeout(()=>{isDeleting=true;type();},1000);return;}
  } else if(isDeleting && j>=0){
    currentText=texts[i].substring(0,j);
    document.getElementById("typing").innerHTML=currentText;
    j--; if(j<0){isDeleting=false;i++;setTimeout(type,200);return;}
  }
  setTimeout(type,speed);
}
type();

// Dark/Light Mode
let themeToggle=document.getElementById("theme-toggle");
themeToggle.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
  themeToggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
});

// Contact Form using EmailJS
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',this)
  .then(()=>{alert("Message Sent Successfully!");this.reset();})
  .catch(()=>{alert("Error! Please try again later.");});
});