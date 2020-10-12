<template>
  <div class="app" :class="{ 'open' : isBurgerActive }">
    <div class="nav">
      <button class="btn" @click.prevent="toggle">menu</button>
      <ol class="menu">
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

.nav {
  padding: 1rem 2rem;
  border-right: 1px solid gray;

  .btn{
  background-color:transparent;
  border:#131316 solid 2px;
  border-radius: 5px;
  position: relative;
  width: 50px;
  height:50px;
  white-space: nowrap;
  text-indent: 150%;
  overflow: hidden;
  outline:0;
  &::before,
  &::after{
    content:'';
    width:70%;
    height:2px;
    background-color:#131316;
    z-index:10;
    position: absolute;
    left:15%;
    }
    &::before{
      top:35%;
    }
    &::after{
      bottom:35%;
    }
}

  ol {
    margin:50px 0;
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

.menu{
  transform:translate(-200%);
  margin-top:20px;
  transition: cubic-bezier(0.165, 0.84, 0.44,1);
}

.main {
  padding: 5rem;
}

.open{
  .nav{
    .btn{
      &:before, &:after{
        top: 50%;
      }
      &:before{
        transform: rotate(45deg);
      }
      &:after{
        transform: rotate(-45deg);
      }
    }
    .menu{
      display: block;
      transform:translate(0%);
    }
  }
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