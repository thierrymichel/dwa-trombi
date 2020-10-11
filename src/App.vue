<template>
  <div class="app">
    <div class="nav" v-bind:class="{navOff:menuOff}">
      <ol>
        <li><router-link to="/">Data</router-link></li>
        <li><router-link to="/ref">Ref</router-link></li>
        <li><router-link to="/reactive">Reactive</router-link></li>
        <li><router-link to="/computed">Computed</router-link></li>
        <li><router-link to="/event">Event</router-link></li>
      </ol>
    </div>
     <button class="menu" v-on:click="menuOff= !menuOff" v-bind:class="{menuOff:menuOff}" @click="menuOpen">Menu</button>
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
.menu{
  background-color: #42b983;
  padding: 10px 15px;
  border: none;
  outline: none;
  width: max-content;
  height: max-content;
  margin-top: 25px;
  
	transition:0.6s cubic-bezier(0.83, 0, 0.17, 1);

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
      menuOff: true,
    }
  

  },
  setup() {
    let menuOpen = () => {
      let nav=document.querySelector('.nav')
      nav.style.transition="0.6s cubic-bezier(0.83, 0, 0.17, 1)"
    }
    return {
      menuOpen
    }
  },
}
</script>