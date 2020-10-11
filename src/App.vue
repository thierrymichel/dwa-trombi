<template>
  <div class="app">
    <div class="burger"><span>Menu</span></div>
    <div class="nav nav--hide">
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

.nav {
  padding: 1rem 2rem;
  border-right: 1px solid gray;
  transition: 300ms;
  animation-timing-function: ease-in-out;

  ol {
    margin: 5rem 0 0;
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

.nav--hide {
  transform: translateX(-100%);
}

.main {
  padding: 5rem;
}

.burger{
  cursor: pointer;
  padding: 10px 0;
  box-sizing: content-box;
  position: absolute;

  padding: 0.5rem;
  margin: 1.5rem;

  &:hover span{
    background-color: #42b983;

    &::after, &::before{
      background-color: #42b983;
    }
  }

  span {
    font-size: 0;
    width: 35px;
    height: 5px;
    background-color: #2c3e50;
    display: inline-block;
    transition: 300ms;
    animation-timing-function: ease-in-out;

    &::after, &::before{
      content: ' ';
      display: block;
      width: 35px;
      transform-origin: left;
      transition: 300ms;
      height: 5px;
      background-color: #2c3e50;
      position: relative;
      top: 8px;
    }

    &::before{
      top: -13px;
    }
  }

  &--open{
    span{
      background-color: inherit;
      &::after{
        transform: rotate(-45deg);
        width: 38px;
      }

      &::before{
        transform:  rotate(45deg);
        width: 38px;
      }
    }

    &:hover{
      span{
        background-color: inherit;
      }
    }
  }
}
</style>
