<template>
  <div class="w-5/6 mx-auto h-180 mb-10 mt-10 sticky bg-white rounded-lg">
    <div class="flex justify-between mx-10">
      <div class="pt-8">
        <div class="bg-layout20smallBoxesColor w-8 h-8"></div>
        <div class="bg-layout20smallBoxesColor w-6 h-6 ml-5 -mt-3"></div>
      </div>
      <div class="pt-8">
        <div class="flex justify-between">
          <div class="text-layout20smallBoxesColor text-sm font-semibold cursor-pointer mx-4 pt-1">
            Home
          </div>
          <div class="text-layout20smallBoxesColor text-sm font-semibold cursor-pointer mx-4 pt-1">
            Documents
          </div>
          <div class="text-layout20smallBoxesColor text-sm font-semibold cursor-pointer mx-4 pt-1">
            API
          </div>
          <div class="text-layout20smallBoxesColor text-sm font-semibold cursor-pointer mx-4 pt-1">
            About
          </div>
          <div class="text-layout20smallBoxesColor text-sm font-semibold cursor-pointer mx-4 pt-1">
            Login
          </div>
          <div class="bg-layout20smallBoxesColor py-3 w-24 -mt-2 rounded-md text-center text-white text-sm font-semibold cursor-pointer mx-4 shadow-2xl">
            Sign up
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Layout20'
})
</script>