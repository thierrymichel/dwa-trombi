<template>
  <div class="data">
    <h1>I am the "data" page</h1>
    <hr />
    <h2>Counter</h2>
    <pre>Value: {{ count }}</pre>
  </div>
</template>

<style lang="scss">
.data > pre {
  padding: 1rem;
  border: 1px dotted rebeccapurple;
}
</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Data',
  setup() {
    const count = 0

    // Tout ce qui est retourné ici peut être utilisé dans le <template>
    return {
      count,
    }
  },
})
</script>
