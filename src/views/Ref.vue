<template>
  <div class="data">
    <h1>I am the "ref" view</h1>
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
// Import `ref` function
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Ref',
  setup() {
    // Create a `ref` = reactive variable
    // ref() returns an object with a `value` property
    // Intented use: string, number, boolean, array, …
    const count = ref(0)

    setInterval(() => {
      // Increment ref through `.value`
      count.value += 1
    }, 500)

    // Everything returned here can be used inside <template>
    return {
      count,
    }
  },
})
</script>
