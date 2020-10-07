<template>
  <div class="event">
    <h1>I am the "event" view</h1>
    <hr />
    <h2>Counter</h2>
    <!-- Attribute binding directive: v-bind: === : -->
    <pre :class="{ 'is-positive': isPositive }">{{ count }}</pre>
    <!-- Event directive: v-on: === @ -->
    <button @click="decrease">-</button>
    <button v-on:click="increase" v-bind:disabled="countMax">+</button>
  </div>
</template>

<style lang="scss">
.event > pre {
  padding: 1rem;
  border: 1px dotted rebeccapurple;

  &.is-positive {
    color: green;
    border-color: green;
  }
}
</style>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'Event',
  setup() {
    const count = ref(0)
    const countMax = computed(() => count.value >= 5)
    const isPositive = computed(() => count.value > 0)

    // Callbacks
    const increase = () => (count.value += 1)
    const decrease = () => (count.value -= 1)

    // Everything returned here can be used inside <template>
    return {
      count,
      countMax,
      isPositive,
      increase,
      decrease,
    }
  },
})
</script>
