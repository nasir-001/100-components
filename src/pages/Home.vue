<template>
  <div class="my-20 w-4/5 mx-auto">
    <div class="flex justify-between border-b-2 px-4 hover:shadow-2xl rounded-lg border-gray-300">
      <div class="text-gray-500 uppercase py-4 font-semibold">
        Component 1
      </div>
      <div class="border border-gray-400 text-gray-500 text-center h-10 mt-2 pt-1 uppercase px-3 rounded-full w-24 font-semibold">
        View
      </div>
    </div>
  </div>
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
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout17" exact>Component 17</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout18" exact>Component 18</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout19" exact>Component 19</router-link>
    </div>
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout20" exact>Component 20</router-link>
    </div>
  </div>
  <div class="flex mx-10 mt-20">
    <div class="w-1/5 uppercase tracking-wide text-green-700">
      <router-link to="/layout21" exact>Component 21</router-link>
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