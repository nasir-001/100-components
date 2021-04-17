<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>

<script>
import { defineComponent } from 'vue';
import Home from './pages/Home.vue';

export default defineComponent({
  name: 'App',
  components: { Home }
})
</script>
