<template>
  <div class="reactive">
    
    <p>Trombiscope</p>
    <input type="text">
    <ul id="trombi">
      <li v-for="student in data" :key="student.firstname">
        {{ student.picture }}
      </li>
    </ul>
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
import data from '@/inc/data.json'
export default defineComponent({
  name: 'List',
  setup() {


    return {
      return
    }
  },
})
</script>
