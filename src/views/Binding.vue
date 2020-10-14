<template>
  <div class="binding">
    <h1>I am the "binding" view</h1>
    <hr />
    <h2>Counter</h2>
    <pre :class="{ 'is-invalid': isInvalid }">
      Value: {{ count }}
    </pre>
    <button class="btn" @click="decrease">
      -
    </button>
    <button class="btn" @click="increase" :disabled="isDisabled">
      +
    </button>
  </div>
</template>

<style lang="scss" scoped>
.binding > pre {
  padding: 1rem;
  border: 1px dotted lime;

  &.is-invalid {
    border-color: red;
  }
}
.btn {
  width: 2rem;
  font-size: 1.6em;
  font-weight: 700;
}
</style>

<script>
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  name: 'Binding',
  setup() {
    const count = ref(0)
    const isInvalid = computed(() => count.value < 0)
    const isDisabled = computed(() => count.value >= 5)

    // Anciennes méthodes === fonctions qui manipulent mes variables
    const increase = () => (count.value += 1)
    const decrease = () => (count.value -= 1)

    // Tout ce qui est retourné ici peut être utilisé dans le <template>
    // y compris les méthodes pour les boutons cliquables
    return {
      count,
      decrease,
      increase,
      isInvalid,
      isDisabled,
    }
  },
})
</script>
