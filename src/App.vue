<template>
  <div>
    <layout-1></layout-1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Layout1 from './views/Layout1.vue';

export default defineComponent({
  name: 'App',
  components: {
    Layout1
  }
})
</script>
