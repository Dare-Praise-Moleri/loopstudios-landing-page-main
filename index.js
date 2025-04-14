const hamMenu = document.querySelector(".ham-menu");
const navBar = document.querySelector(".navBar");

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle("active")
    navBar.classList.toggle("active")
})