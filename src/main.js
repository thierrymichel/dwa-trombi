import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')


let btn = document.querySelector(".burger");
let nav = document.querySelector(".nav");

btn.addEventListener("click", () =>{
nav.classList.toggle("nav--hide");
})