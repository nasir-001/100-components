<template>
  <div class="flex mx-10 mt-20">
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout1" exact>Component 1</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout2" exact>Component 2</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout3" exact>Component 3</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout4" exact>Component 4</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout5" exact>Component 5</router-link>
    </div>
  </div>
  <div class="flex mx-10 mt-20">
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout6" exact>Component 6</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout7" exact>Component 7</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
})
</script>