<template>
  <div class="reactive">
    <h1>I am the "reactive" view</h1>
    <hr />
    <h2>Total</h2>
    <pre>{{ total }}</pre>
    <pre>{{ message }}</pre>
  </div>
</template>

<style lang="scss">
.data > pre {
  padding: 1rem;
  border: 1px dotted rebeccapurple;
}
</style>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'Reactive',
  setup() {
    const items = ref(0)

    // Total and message are computed based on items.value
    const total = computed(() => `${items.value * 100} €`)
    const message = computed(() => {
      const total = items.value * 100
      let msg = 'Encore 😊'

      if (total > 1000) {
        msg = 'Stop 😱'
      } else if (total > 500) {
        msg = 'Oups 😅'
      }

      return msg
    })

    const i = setInterval(function() {
      items.value += 1

      if (items.value >= 15) {
        clearInterval(i)
      }
    }, 500)

    // Everything returned here can be used inside <template>
    return {
      total,
      message,
    }
  },
})
</script>
