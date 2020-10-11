<template>
  <div class="app" :class="{ 'open' : isBurgerActive }">
    <div class="nav">
      <button class="btn"
         @click.prevent="toggle">menu</button>
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
</script>
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
    opacity: 1;
    }
    .btn{
      &::before{
        transform: rotate(-45deg) translateY(10px);
      }
      &::after{
        transform: rotate(45deg) translateX(0);
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
    color:white;
    width: 35px;
    padding: 0;
    &::after,
    &::before{
      content:'';
      position: absolute;
      height: 2px;
      background-color: red;
      width: 35px;
      top: 0;
      left: 0;
    }
    &::after{
      top: 60%;
    }
  }

  ol {
    margin: 60px 0 0;
    padding: 0;
    opacity: 0;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active{
      color: #42b983;
    }
  }
}

.main {
  padding: 5rem;
}
</style>