<template>
  <div class="event">
    <h1>I am the "event" page</h1>
    <hr />
    <h2>Counter</h2>
    <pre>Value: {{ count }}</pre>
    <button class="btn" @click="increase">+</button>
    <button class="btn" @click="decrease">-</button>
  </div>
</template>

<style lang="scss" scoped>
.event > pre {
  padding: 1rem;
  border: 1px dotted rebeccapurple;
}
.btn {
  width: 2rem;
  font-size: 1.6em;
  font-weight: 700;
}
</style>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Ref',
  setup() {
    const count = ref(0)

    // Anciennes méthodes === fonctions qui manipulent mes variables
    const increase = () => (count.value += 1)
    const decrease = () => (count.value -= 1)

    // Tout ce qui est retourné ici peut être utilisé dans le <template>
    // y compris les méthodes pour les boutons cliquables
    return {
      count,
      decrease,
      increase,
    }
  },
})
</script>
