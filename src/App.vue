<template>
  <div class="app" :class="{ 'open' : isBurgerActive }">
    <div class="nav">
      <button class="nav__btn" @click.prevent="toggle">Menu</button>
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
    &__btn{
      &::before{
        transform: rotate(45deg) translateY(9px);
      }
      &::after{
        transform: rotate(-45deg) translateY(-11px) translateX(3px);;
      }
    }
  }
}


.nav {
  padding: 1rem 2rem;
  border-right: 1px solid gray;

  &__btn{
    background-color: transparent;
    color : white;
    border: none;
    position: fixed;
    &::before,
    &::after{
      background-color : red;
      width : 60%;
      height: 2px;
      content: '';
      position : absolute;
      top : 0;
      left : 0;
    }
    &::after{
      top : 100%;
    }
  }



  ol {
    margin: 60px 0 0 0;
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
</script>

