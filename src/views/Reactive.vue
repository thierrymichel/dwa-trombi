<template>
  <div class="data">
    <h1>I am the "reactive" page</h1>
    <hr />
    <h2>Coordinates</h2>
    <pre>x: {{ coords.x }} / y: {{ coords.y }}</pre>
  </div>
</template>

<style lang="scss" scoped>
.data > pre {
  padding: 1rem;
  border: 1px dotted rebeccapurple;
}
</style>

<script>
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  name: 'Reactive',
  setup() {
    const coords = reactive({ x: 0, y: 0 })

    document.addEventListener('mousemove', e => {
      const { clientX, clientY } = e

      coords.x = clientX
      coords.y = clientY
    })

    // Tout ce qui est retourné ici peut être utilisé dans le <template>
    return {
      coords,
    }
  },
})
</script>
