// THEME TOGGLE
let dark = false;

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  dark = !dark;
  document.body.style.background = dark ? "#0a0f1a" : "#f8fafb";
  document.body.style.color = dark ? "#fff" : "#0f172a";
});

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

function closeMobile(){
  mobileMenu.classList.remove("open");
}

// RESUME BUTTON
document.getElementById("resumeBtn").addEventListener("click", (e)=>{
  e.preventDefault();
  alert("Upload your resume PDF and link it here.");
});

// FORM
document.getElementById("contactForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  alert("Message sent!");
});