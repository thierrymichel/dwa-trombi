<template>
  <div class="computed">
    <h1>I am the "computed" page</h1>
    <hr />
    <h2>Coordinates</h2>
    <pre>{{ coordsFormatted }}</pre>
  </div>
</template>

<style lang="scss" scoped>
.computed > pre {
  padding: 1rem;
  border: 1px dotted rebeccapurple;
}
</style>

<script>
import { defineComponent, computed, reactive } from '@vue/composition-api'

export default defineComponent({
  name: 'Reactive',
  setup() {
    const coords = reactive({ x: 0, y: 0 })
    const coordsFormatted = computed(
      () => `>>> Position ${coords.x}px / ${coords.y}px <<<`
    )

    document.addEventListener('mousemove', e => {
      const { clientX, clientY } = e

      coords.x = clientX
      coords.y = clientY
    })

    // Tout ce qui est retourné ici peut être utilisé dans le <template>
    return {
      coords,
      coordsFormatted,
    }
  },
})
</script>
