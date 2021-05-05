<template>
  <div class="bg-layout21backgroundColor h-screen">
    <div class="bg-white top-20 sticky rounded-2xl mx-88 w-72 h-48 shadow-2xl">
      first
    </div>
    <div class="flex justify-center mt-40">
      <div class="bg-white rounded-xl w-124 h-72 shadow-2xl">
        third
      </div>
      <div class="bg-white rounded-2xl w-72 h-60 -ml-20 -mt-48 shadow-2xl">
        second
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Layout21'
})
</script>