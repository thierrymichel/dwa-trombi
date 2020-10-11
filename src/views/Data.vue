<template>
  <div class="data">
    <h1>I am the "data" view</h1>
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Data',
  setup() {
    let count = 0

    // Do not update UI because there is no reactivity
    // but logs into the console…
    setInterval(() => {
      count += 1
    }, 500)

    // Everything returned here can be used inside <template>
    return {
      // Same as :
      // count: count,
      count,
    }
  },
})
</script>
