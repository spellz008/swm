let menuIcon = document.querySelector(".menu");
let hamMenu = document.querySelector(".ham");

menuIcon.addEventListener("click", () => {
  hamMenu.style.display = "block";
  menuIcon.style.display = "none";
}); 
console.log("script is running")