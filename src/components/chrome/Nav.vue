<template>
  <div class="nav" :class="{ 'is-open': isOpen }">
    <div class="nav__trigger" @click="toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ol class="nav__links">
      <li><router-link to="/">Data</router-link></li>
      <li><router-link to="/ref">Ref</router-link></li>
      <li>
        <router-link to="/reactive">Reactive</router-link>
      </li>
      <li>
        <router-link to="/computed">Computed</router-link>
      </li>
      <li>
        <router-link to="/event">Event</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ChromeNav',
  setup() {
    const isOpen = ref(false)
    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    // Bonus : close the nav when the route path changes
    const route = useRoute()

    watch(
      () => route.path,
      () => {
        isOpen.value = false
      }
    )

    return {
      isOpen,
      toggle,
    }
  },
})
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  min-width: $nav-min-width;
  height: 100%;
  border-right: 1px solid gray;
  background-color: $c-primary;
  transform: translateX(-100%);
  transition: transform 0.3s $ease-in-quart;

  &.is-open {
    transform: translateX(0);
    transition: transform 0.5s $ease-out-quart;
  }
}

.nav__links {
  margin: 0;
  padding: 0;
  padding-top: $nav-trigger-width * 2;
  list-style-type: none;

  a {
    display: block;
    padding: 2rem 2rem;
    padding-left: 4rem;
    font-weight: bold;
    text-decoration: none;
    color: $c-white;
    background-color: $c-primary;
    transition: background-color 0.35s ease-in-out;

    &:hover {
      background-color: darken($c-primary, 20%);
    }

    &.router-link-exact-active {
      background-color: $c-secondary;
      cursor: default;
    }
  }
}

/* Trigger
 * https://codepen.io/designcouch/pen/Atyop
 */
.nav__trigger {
  position: absolute;
  top: 2rem;
  right: $nav-trigger-width * 0.5;
  width: $nav-trigger-width;
  height: $nav-trigger-width * 0.75;
  transform: translateX(200%);
  transition: 0.25s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: $nav-trigger-width * 0.15;
    width: 100%;
    background: $c-primary;
    border-radius: $nav-trigger-width * 0.15;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0;
  }

  span:nth-child(2) {
    top: $nav-trigger-width * 0.3;
  }

  span:nth-child(3) {
    top: $nav-trigger-width * 0.6;
  }

  .is-open & {
    transform: translateX(0);

    span {
      background: $c-white;
    }

    span:nth-child(1) {
      top: $nav-trigger-width * 0.3;
      transform: rotate(135deg);
    }

    span:nth-child(2) {
      opacity: 0;
      left: -$nav-trigger-width * 0.5;
    }

    span:nth-child(3) {
      top: $nav-trigger-width * 0.3;
      transform: rotate(-135deg);
    }
  }
}
</style>
