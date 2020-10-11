<template>
  <div class="app">
    <button class="btn" @click.prevent="toggle">menu</button>
    <div class="nav" :class="{ open: isActive }">
      <ol>
        <li><router-link to="/">Data</router-link></li>
        <li><router-link to="/ref">Ref</router-link></li>
        <li><router-link to="/reactive">Reactive</router-link></li>
        <li><router-link to="/computed">Computed</router-link></li>
        <li><router-link to="/event">Event</router-link></li>
      </ol>
    </div>
    <router-view class="main" />
    <p>Melih Selamet B2G1</p>
  </div>
</template>

<style lang="scss">
.btn {
  background-color: #42b983;
  position: fixed;
  top: 10px;
  border: solid 0px;
  font-family: 'Public Sans', Arial, sans-serif;
  font-size: 17px;
  color: white;
  border-color: white;
  border-radius: 5px;
  left: 30px;
  font-weight: 700;
  z-index: 40;
  cursor: pointer;
  padding: 5px 10px 5px 10px;
}
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
  transition: 0.3s;
   background-color: #2c3e50;

  ol {
    margin-top: 50px;
    padding: 0;
   
  }

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main {
  padding: 5rem;
}
.open {
  transform: translateX(-200%);
  transition: 0.3s;
}
</style>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
  methods: {
    toggle() {
      this.isActive = !this.isActive
    },
  },
}
</script>