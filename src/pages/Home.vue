<template>
  <div class="my-20 w-4/5 mx-auto">
    <single-component>
      <router-link class="border border-gray-400 text-gray-500 text-center h-10 mt-2 pt-2 px-3 rounded-full w-24 font-semibold cursor-pointer hover:bg-gray-200 hover:bg-opacity-50" to="/layout1" exact>
        <div class="animate-bounce">
          View
        </div>
      </router-link>
    </single-component>
    
  </div>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import SingleComponent from '../components/SingleComponent.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SingleComponent
  }
})
</script>