const burger = document.getElementById("burger");
const nav = document.getElementById("conteneur-nav");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");    
    nav.classList.toggle("active");
});