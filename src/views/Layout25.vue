<template>
  <div class="bg-layout25backgroundColor h-screen">
    <div class="flex justify-center top-10 sticky">
      <div class="bg-white w-80 h-64 mx-10 rounded-xl shadow-2xl">
        <div class="pt-8 ml-8 mr-24 font-semibold text-lg">
          Choose a view for the map
        </div>
        <div class="flex justify-start mx-8 mt-4">
          <div class="mr-2">
            <input class="w-5 h-5 text-black" type="radio">
          </div>
          <div class="font-semibold text-sm mt-1">
            Daily Availability
            <div class="text-xs text-gray-600 mt-1">
              View the hours per day a room is open
            </div>
          </div>
        </div>
        <div class="flex justify-start mx-8 mt-4">
          <div class="mr-2">
            <input class="w-5 h-5 text-black" type="radio">
          </div>
          <div class="font-semibold text-sm mt-1">
            Weekly Capacity
            <div class="text-xs text-gray-600 mt-1">
              View the hours per week a room is open
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-80 h-96 mt-24 mx-10 rounded-xl shadow-2xl">
        first
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout25'
})
</script>