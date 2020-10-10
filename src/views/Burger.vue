<template>
    <div class="burger-icon">
      <p>Menu</p>
    </div>
    <div class="nav">
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
.nav {
  padding: 1rem 2rem;
  border-right: 1px solid gray;
  &-hidden {
    display: none;
  }
  &-show {
    display: block;
  }
}
.burger-icon p {
  margin-block-start: 0px;
  margin:10px;
  cursor:pointer;
}
</style>

<script>
import { defineComponent, ref, computed } from 'vue'


</script>
