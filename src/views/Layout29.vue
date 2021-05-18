<template>
  <div>
    <div class="bg-white my-10 sticky w-4/6 rounded-md h-164 mx-auto">
      <div class="flex mx-12">
        <div class="w-1/3 h-52 bg-layout29firstCardColor mt-14 mx-2">
          card
        </div>
        <div class="w-1/3 h-52 bg-layout29secondCardColor mt-14 mx-2">
          card
        </div>
        <div class="w-1/3 h-52 bg-layout29firstCardColor mt-14 mx-2">
          card
        </div>
      </div>
      <div class="flex mx-12">
        <div class="w-1/3 h-52 bg-layout29secondCardColor mt-4 mx-2">
          card
        </div>
        <div class="w-1/3 h-52 bg-layout29firstCardColor mt-4 mx-2">
          card
        </div>
        <div class="w-1/3 h-52 bg-layout29secondCardColor mt-4 mx-2">
          card
        </div>
      </div>
      <div class="bg-layout29buttonColor mx-14 mt-6 text-center uppercase text-xs font-bold py-8 text-gray-200 cursor-pointer">
        Learn more events
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout29'
})
</script>