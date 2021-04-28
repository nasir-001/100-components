<template>
  <div class="bg-layout18backgroundColor h-screen">
    <div class="top-10 sticky mx-auto w-144 h-130 rounded-lg shadow-lg bg-white">
      <div class="pt-12 mx-10 font-semibold text-lg">
        Your stats in February
      </div>
      <div class="text-sm mx-10 text-gray-600 font-semibold pt-2">
        Thank you for sharing with the community!
      </div>
      <div class="flex justify-center mt-14 mx-10">
        <div class="w-1/3 mx-3 shadow-xl rounded bg-gradient-to-tl from-layout18firstCardDownColor to-layout18firstCardUpColor h-52">
          <div class="pt-6 pl-6 text-sm font-semibold text-gray-700">
            Views
          </div>
          <div class="pt-14 pl-6 text-4xl">
            477
          </div>
          <div class="text-xs text-gray-500 font-semibold pl-6">
            +29 views
          </div>
        </div>
        <div class="w-1/3 mx-3 shadow-xl rounded bg-gradient-to-tl from-layout18secondCardDownColor to-layout18secondCardUpColor h-52">
          <div class="pt-6 pl-6 text-sm font-semibold text-gray-700">
            Views
          </div>
          <div class="pt-14 pl-6 text-4xl">
            1
          </div>
          <div class="text-xs text-gray-500 font-semibold pl-6">
            +0 likes
          </div>
        </div>
        <div class="w-1/3 mx-3 shadow-xl rounded bg-gradient-to-tl from-layout18thirdCardDownColor to-layout18thirdCardUpColor h-52">
          <div class="pt-6 pl-6 text-sm font-semibold text-gray-700">
            Views
          </div>
          <div class="pt-14 pl-6 text-4xl">
            4
          </div>
          <div class="text-xs text-gray-500 font-semibold pl-6">
            +0 downloads
          </div>
        </div>
      </div>
      <div class="mx-14 mt-16 py-3  text-gray-200 text-center text-xs rounded-md w-32 shadow-xl font-semibold cursor-pointer bg-black">
        Keep sharing
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout18'
})
</script>