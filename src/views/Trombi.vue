<template>
  <div class="trombi">
    <h1>I am the "trombi" view</h1>
    <hr />
    <h2>Trombinoscope</h2>
    <input
      type="text"
      name="search"
      id="search"
      class="search"
      placeholder="Prénom"
    />
    <hr />
    <ul class="grid">
      <li v-for="person in people" :key="person.email">
        <img :src="person.picture" :alt="person.picture" />
        <strong>{{ person.firstname }}</strong>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.trombi {
  width: 100%;
}
.search {
  margin-bottom: 2rem;
  padding: 0.25em 0.5em;
  font-size: 2em;
}
.grid {
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    position: relative;
    display: flex;
    height: 16rem;

    img {
      width: 100%;
      object-fit: cover;
    }

    strong {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0.5rem;
      color: white;
      background-color: rgba(0, 0, 0, 0.6);
      text-align: center;
    }
  }
}
</style>

<script>
import { defineComponent } from 'vue'
import data from '@/inc/data'

export default defineComponent({
  name: 'Trombi',
  setup() {
    return {
      people: data.b3g1,
    }
  },
})
</script>
