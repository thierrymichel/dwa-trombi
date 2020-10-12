<template>
  <div class="app" :class="{ 'open' : isBurgerActive }">
    
    <div class="nav">
      <button class="burger" @click.prevent="toggle">Menu</button>
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

 .burger{
   background-color: #2c3e50;
   border-radius: 15px;
   padding: 10px 15px;
   border-right:inherit;
   text-transform: uppercase;
   color: #fff;
   font-weight: 400;
   border:solid 1px;
}

.burger:hover{
  background-color:#42b983;
  transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
  color: #2c3e50;
  border:#42b983 ;
}

.menu{
  transform:translate(-200%);
  margin-top:20px;
  transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
  top:50%;
  top: 10%;
  position: absolute;

}

.open{

    .menu{
      display: block;
      transform:translate(0%);
    }
  }

.nav {
  padding: 1rem 3.5rem;
  border-right: 1px solid gray;

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
        //animation Javascript 
    }

    
</script>
