<template>
  <div class="app">
    <div class="nav">
      <ol>
        <li><router-link to="/">Data</router-link></li>
        <li><router-link to="/ref">Ref</router-link></li>
        <li><router-link to="/reactive">Reactive</router-link></li>
        <li><router-link to="/computed">Computed</router-link></li>
        <li><router-link to="/event">Event</router-link></li>
      </ol>
    </div>
    <button class="bt_navMain" @click="blabla">Menu</button>
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
  transform: translateX(0%);
  transition-duration: 1s;

  &-close {
    transform: translateX(-100%);
  }

  ol {
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

.main {
  padding: 5rem;
}

.bt_navMain {
  position: relative;
  background-image: url('assets/menu.svg');
  background-position: center;
  background-size: contain;
  overflow: hidden;
  height: 50px;
  width: 50px;
  text-indent: 100%;
  background-repeat: no-repeat;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: inherit;
  margin: 1em;
}
</style>

<script>
export default {
  name: 'nav',
  setup() {
    var burger = false
    var blabla = () => {
      var nav = document.querySelector('.nav')
      nav.classList.toggle('nav-close')
    }
    return {
      blabla,
      burger,
    }
  },
}
</script>
