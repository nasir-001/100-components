<template>
  <div class="bg-layout30backgroundColor h-screen">
    <div class="bg-layout30cardColor top-10 sticky rounded-md w-4/6 h-5/6 mx-auto">
      <div class="flex justify-evenly mx-12">
        <div class="w-2/3">
          double
        </div>
        <div class="w-1/3">
          single
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout30'
})
</script>