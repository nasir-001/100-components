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
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout8" exact>Component 8</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout9" exact>Component 9</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout10" exact>Component 10</router-link>
    </div>
  </div>
  <div class="flex mx-10 mt-20">
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout11" exact>Component 11</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout12" exact>Component 12</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout13" exact>Component 13</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout14" exact>Component 14</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout15" exact>Component 15</router-link>
    </div>
  </div>
  <div class="flex mx-10 mt-20">
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout16" exact>Component 16</router-link>
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