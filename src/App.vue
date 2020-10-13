<template>
  <div class="app">
    <div class="nav" v-bind:class="{navOff:menu_off}">
      <ol>
        <li><router-link to="/">Data</router-link></li>
        <li><router-link to="/ref">Ref</router-link></li>
        <li><router-link to="/reactive">Reactive</router-link></li>
        <li><router-link to="/computed">Computed</router-link></li>
        <li><router-link to="/event">Event</router-link></li>
      </ol>
    </div>
     <button class="button" v-on:click="menu_off= !menu_off" v-bind:class="{menuOff:menu_off}" @click="menu_open">Menu</button>
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
.nav {
  padding: 1rem 2rem;
  border-right: 1px solid gray;
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navOff{
  transform:translateX(-100%) ;
}
.main {
  padding: 5rem;
}
.button{
  background-color: #ffffff; 
  border: solid 1px #000000;
  border-style: dotted; 
  color: #42b983;
  padding: 10px 15px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  outline: none;
  width: max-content;
  height: max-content;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 5px;

  transition: 0.1s cubic-bezier(0.83, 0, 0.17, 1);

  &Off{
    background-color:hsl(200, 47%, 49%);
  }
}

.navOff{
  overflow: hidden;
}

</style>

<script>
export default {
  name: 'openNav',
  data() {
    return{
      menu_off: true,
    }
  

  },
  setup() {
    let menu_open = () => {
      let nav=document.querySelector('.nav')
      nav.style.transition="0.6s cubic-bezier(0.83, 0, 0.17, 1)"
    }
    return {
      menu_open
    }
  },
}
</script>