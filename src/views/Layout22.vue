<template>
  <div class="bg-layout22backgroundColor h-screen">
    <div class="bg-white w-124 h-130 rounded-xl top-6 sticky mx-auto">
      <div class="border-2 border-gray-100 rounded-xl w-5/6 h-20 mx-auto top-16 sticky">
        <div class="flex justify-evenly mx-8">
          <div class="text-sm font-semibold pt-6">
            Basic
          </div>
          <div class="bg-layout22standardTabColor rounded-xl text-center text-sm mt-4 text-white font-semibold py-3 px-6">
            Standard
          </div>
          <div class="text-sm font-semibold pt-6">
            Premium
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout22'
})
</script>