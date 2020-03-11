<template>
  <div class="list">
    <h1>I am the "list" page</h1>
    <hr />
    <h2>Listings</h2>
    <h3>From minimal array</h3>
    <ol>
      <li v-for="b in beatles" :key="b.name">
        {{ b.name }}
      </li>
    </ol>
    <h3>to complete object</h3>
    <ul>
      <li v-for="(value, key, index) in john" :key="index">
        [{{ index }}] {{ key }} -> {{ value.toUpperCase() }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.list > pre {
  padding: 1rem;
  border: 1px dotted rebeccapurple;
}
</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'List',
  setup() {
    const beatles = [
      { name: 'John' },
      { name: 'Paul' },
      { name: 'Georges' },
      { name: 'Ringo' },
    ]

    const john = {
      firstname: 'John',
      lastname: 'Lennon',
    }

    // Tout ce qui est retourné ici peut être utilisé dans le <template>
    return {
      beatles,
      john,
    }
  },
})
</script>
