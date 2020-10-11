<template>
  <div class="app" :class="{ 'open' : isBurgerActive }">
    <div class="nav">
      <button class="btn" @click.prevent="toggle">menu</button>
        <ol>
          <li><router-link to="/">Data</router-link></li>
          <li><router-link to="/ref">Ref</router-link></li>
          <li><router-link to="/reactive">Reactive</router-link></li>
          <li><router-link to="/computed">Computed</router-link></li>
          <li><router-link to="/event">Event</router-link></li>
        </ol>
    </div>
    <router-view class="main" />

    <p>- - -</p>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

.app {
  display: flex;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.open{
  .nav{
    ol{
      transform: translateX(0%);
    }
    .btn{
      &::before{
        transform: rotate(-45deg) translateY(13px);
      }
      &::after{
        transform: rotate(45deg) translateY(-13px);
      }
    }
  }
}
.nav {
  padding: 1rem 2rem;
  border-right: 1px solid gray;
  
  .btn{
    background-color: transparent;
    border: none;
    position: fixed;
    color: white;
    height: 20px;
    width: 35px;
    padding: 0;
    &::before,
    &::after{
      background-color: #42b983;
      height: 2px;
      width: 35px;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
    }
    &::after{
      top: 100%;
    }
  }

  ol {
    margin: 60px 0 0;
    padding: 0;
    transform: translateX(-200%);
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main {
  padding: 5rem;
}
</style>
<script>
    export default {
        data: () => ({
            isBurgerActive: false
        }),
        methods: {
            toggle() {
                this.isBurgerActive = !this.isBurgerActive
            }
        }
    }
/*let btn = document.querySelector(".btn");
let appclass = document.querySelector(".app");
btn.addEventListener("click", e => {
  if(appclass.classList.contains("open")){
    appclass.classList.remove("open")
  }else{
    appclass.classList.add("open")
  }
});*/
</script>
