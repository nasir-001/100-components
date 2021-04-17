<template>
  <div>
    <div>
      <router-link :to="{ name: 'layout1' }" exact>Layout 1</router-link>
    </div>
    <div>
      <router-link to="/layout2" exact>Layout 2</router-link>
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