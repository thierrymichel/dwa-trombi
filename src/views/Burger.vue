<template>
  <div class="data">
    <h1>I am the "Burger Menu" view</h1>
    <hr />
    <button class="button" 
    @click="toggle">
    </button>
    <nav class="burgermenu"
      :class="{ 'active' : isActive }">
      <ul class="list">
        <li class="list__el">
            <a href="#">Lien 1</a>
        </li>
        <li class="list__el">
            <a href="#">Lien 2</a>
        </li>
        <li class="list__el">
            <a href="#">Lien 3</a>
        </li>
        <li class="list__el">
            <a href="#">Lien 4</a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<style lang="scss">
.data > pre {
  padding: 1rem;
  border: 1px dotted rebeccapurple;
}
h1{
  color: #42b983;
}
.button{
  border: none;
  position: relative;
  width: 40px;
  height: 6px;
  background-color: #42b983;

}
.button::after, 
.button::before{
  content: '';
  display: block;
  position: absolute;
  background-color: #42b983;
  width: 40px;
  height: 6px;
  left: 0;
  top: 0px;
}
.button::after{
  top: 10px;
}
.button::before{
  top: -10px;
}
.burgermenu{
    position: fixed;
    background-color: #42b983;
    height: 50%;
    margin-top: 24px;
    width: 100%;
    left: 100%;
    transition: .3s;
}
.burgermenu.active{
    left: 0;
}
.list{

    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.list__el{
    padding-bottom: 20px;
}
.list__el:last-child{
    padding-bottom: 0;
}
.list__el a{
    text-decoration: none;
    color: #0e0e0e;
}

</style>

<script>
//ANCIENNE NOMENCLATURE/
    export default {
        data: () => ({
            isActive: false
        }),
        methods: {
            toggle() {
                this.isActive = !this.isActive
            }
        }
    }



/* NOUVELLE NOMENCLATURE PLUS RECENTE/ 
import { defineComponent,  } from 'vue'

export default defineComponent({
  setup() {
    const isActive = ref(false)
    const toggle = () => {
      isActive.value = !isActive.value
    }
    /// Everything returned here can be used inside <template>
    return {
      isActive,
      toggle,
    }
  },
})
*/

</script>