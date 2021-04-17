<template>
  <div class="text-center mb-20">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageLink'
})
</script>