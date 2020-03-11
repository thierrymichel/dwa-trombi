<template>
  <div class="data">
    <h1>I am the "ref" page</h1>
    <p>and I am a paragraph</p>
    <hr />
    <h2>Counter</h2>
    <pre>Value: {{ count }}</pre>
  </div>
</template>

<style lang="scss" scoped>
.data > pre {
  padding: 1rem;
  border: 1px dotted rebeccapurple;
}
p {
  &::after {
    content: ' … scoped!';
    font-weight: 700;
  }
}
</style>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Ref',
  setup() {
    const count = ref(0)

    setInterval(() => {
      console.info('inc')
      // !!! ref.value
      count.value += 1
    }, 500)

    // Tout ce qui est retourné ici peut être utilisé dans le <template>
    return {
      count,
    }
  },
})
</script>
