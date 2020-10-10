<template>

</template>

<style lang="scss">
.nav {
  padding: 1rem 2rem;
  border-right: 1px solid gray;
  &-hidden {
    display: none;
  }
  &-show {
    display: block;
  }
}
.burger-icon p {
  margin-block-start: 0px;
  margin:10px;
  cursor:pointer;
}
</style>

<script>
import { defineComponent, reactive } from 'vue'

export default({
  name: 'Burger',
  setup() {

    return {

    }
  },
})


</script>
