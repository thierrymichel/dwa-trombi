<template>
  <div class="app">
    <transition name="fade">
      <div class='nav' v-if="fading">
          <ol>
            <li><router-link to="/">Data</router-link></li>
            <li><router-link to="/ref">Ref</router-link></li>
            <li><router-link to="/reactive">Reactive</router-link></li>
            <li><router-link to="/computed">Computed</router-link></li>
            <li><router-link to="/event">Event</router-link></li>
          </ol>
        
      </div>
    </transition>
    <router-view class="main" />
    <div @click="fading = !fading" class="burger-icon">
          <p>Menu</p>
    </div>
</div>
</template>


<script>

    export default {
        data: () => ({
          fading : true,
        })
    }

</script>


<style lang="scss">
body {
  margin: 0;
}
.burger-icon {
  & p {
    margin-block-start: 0px;
    margin:10px;
    cursor:pointer;
  }

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
    position:absolute;
    left:0;
    background-color:whitesmoke;
    padding:1em;
    height: 100vh;
}
nav {

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
.fade-enter-active,
.fade-leave-active {
  animation: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  animation-delay: 0.3;
}
.fade-enter-from,
.fade-leave-to {
  animation: reverse transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  animation-delay: 0.3;
}

@keyframes transform {
  from {
    margin-left: -100px;
  }

  to {
    margin-left: 0px;
  }
}
</style>
