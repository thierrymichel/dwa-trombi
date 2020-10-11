<template>
  <div class="app">
    <nav class="nav">
      <button class="nav__open">
        <span class="nav__open--content">BurgerMenu</span>
      </button>
      <ul class="nav__list list">
        <li><router-link to="/">Data</router-link></li>
        <li><router-link to="/ref">Ref</router-link></li>
        <li><router-link to="/reactive">Reactive</router-link></li>
        <li><router-link to="/computed">Computed</router-link></li>
        <li><router-link to="/event">Event</router-link></li>
      </ul>
    </nav>
    <router-view class="main" />
    <p>- - -</p>
  </div>
</template>

<style lang="scss">
body{
  margin: 0;
}

.app{
  display: flex;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a{
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}

ul{
  margin-left: -10px;
}

li{
  list-style: square;
}

.main {
  padding: 5rem;
}

.nav{
  line-height: 25px;
  border-right: 1px solid gray;
  padding-right: 25px;
}

.nav__list{
  height: 500px;
  max-height: 0;
  overflow: hidden;
  transition: all ease-in-out 0.3s;
}

.nav__list.open {
  margin-top: 110px;
  max-height: 500px;
}

.nav__list-el{
  text-align: center;
}

.nav__list-link{
  border-bottom: none;
}

.nav__list-link:hover{
  border-bottom: none;
}

.nav__open{
  display: block;
  position: absolute;
  height: 40px;
  left: 25px;
  top: 25px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.nav__open--content{
  font-size: 0;
}

.nav__open span,
.nav__open span::before,
.nav__open span::after{
  display: block;
  content: '';
  background-color: #2c3e50;
  border-radius: 25px;
  height: 3px;
  width: 28px;
  transition: all ease-in-out 0.3s;
}

.nav__open span::before{
  transform: translateY(-8px);
}
.nav__open span::after{
  transform: translateY(5px);
}

.nav__open.open-nav__open span{
  background-color: transparent;
}
.nav__open.open-nav__open span::before{
  transform: translateY(0px) rotate(45deg);
}
.nav__open.open-nav__open span::after{
  transform: translateY(-3px) rotate(-45deg);
}

</style>
