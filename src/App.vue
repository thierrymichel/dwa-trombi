<template>
  <div class="app">
    <ChromeNav />
    <router-view class="app__main" />
    <p>- - -</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ChromeNav from '@/components/chrome/Nav.vue'

export default defineComponent({
  components: {
    ChromeNav,
  },
})
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

.app__main {
  padding: 5rem;
}
</style>

