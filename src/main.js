import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')

const navbarToggler = document.querySelector(".nav__open");
const navbarMenu = document.querySelector(".nav ul");
const navbarLinks = document.querySelectorAll(".nav a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
    navbarToggler.classList.toggle("open-nav__open");
    navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
    if(navbarMenu.classList.contains("open")) {
        navbarToggler.click();
    }
}