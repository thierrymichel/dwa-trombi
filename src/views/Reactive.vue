<template>
  <div class="reactive">
    <h1>I am the "reactive" view</h1>
    <hr />
    <h2>Coordinates</h2>
    <pre>x: {{ coords.x }} / y: {{ coords.y }}</pre>
  </div>
</template>

<style lang="scss">
.data > pre {
  padding: 1rem;
  border: 1px dotted rebeccapurple;
}
</style>

<script>
// Import `reactive` function
import { defineComponent, reactive } from 'vue'




export default defineComponent({
  name: 'Reactive',
  setup() {
    const coords = reactive({ x: 0, y: 0 })

    document.addEventListener('mousemove', e => {
      const { clientX, clientY } = e

      coords.x = clientX
      coords.y = clientY
    })

    /// Everything returned here can be used inside <template>
    return {
      coords,
    }
  },
})
</script>
