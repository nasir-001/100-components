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
      <div class="bg-white w-80 h-108 mt-24 mx-10 rounded-xl shadow-2xl">
        <div class="pt-8 mx-24 font-semibold text-center text-lg">
          Jump a specific week
        </div>
        <div class="border border-gray-200 mt-4"></div>
        <div class="flex justify-evenly mt-6 mx-5">
          <div class="text-base font-semibold w-1/3">
            <svg class="w-8 h-8 fill-current font-bold mt-0.5 float-left" enable-background="new 0 0 32 32"  id="Слой_1" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M11.262,16.714l9.002,8.999  c0.395,0.394,1.035,0.394,1.431,0c0.395-0.394,0.395-1.034,0-1.428L13.407,16l8.287-8.285c0.395-0.394,0.395-1.034,0-1.429  c-0.395-0.394-1.036-0.394-1.431,0l-9.002,8.999C10.872,15.675,10.872,16.325,11.262,16.714z" fill="#121313" fill-rule="evenodd" id="Chevron_Right"/></svg>
          </div>
          <div class="text-base font-semibold w-1/3 text-center">
            Apr 2021
          </div>
          <div class="text-base font-semibold w-1/3">
            <svg class="w-8 h-8 fill-current font-bold mt-0.5 float-right" enable-background="new 0 0 32 32"  id="Слой_1" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#121313" fill-rule="evenodd" id="Chevron_Right"/></svg>
          </div>
        </div>
        <div class="flex justify-evenly text-center mt-4 mx-4">
          <div class="w-1/5 text-base font-semibold">
            M
          </div>
          <div class="w-1/5 text-base font-semibold">
            T
          </div>
          <div class="w-1/5 text-base font-semibold">
            W
          </div>
          <div class="w-1/5 text-base font-semibold">
            T
          </div>
          <div class="w-1/5 text-base font-semibold">
            F
          </div>
        </div>
        <div class="flex justify-evenly text-center mt-4 mx-4">
          <div class="w-1/5 text-base text-gray-500">
            29
          </div>
          <div class="w-1/5 text-base text-gray-500">
            30
          </div>
          <div class="w-1/5 text-base text-gray-500">
            31
          </div>
          <div class="w-1/5 text-base">
            1
          </div>
          <div class="w-1/5 text-base">
            2
          </div>
        </div>
        <div class="flex justify-evenly text-center mt-4 mx-4">
          <div class="w-1/5 text-base font-semibold">
            5
          </div>
          <div class="w-1/5 text-base font-semibold">
            6
          </div>
          <div class="w-1/5 text-base font-semibold">
            7
          </div>
          <div class="w-1/5 text-base font-semibold">
            8
          </div>
          <div class="w-1/5 text-base font-semibold">
            9
          </div>
        </div>
        <div class="bg-black text-white rounded-full mx-3">
          <div class="flex justify-evenly text-center mt-4 mx-1 py-1">
            <div class="w-1/5 text-base font-semibold -pt-1">
              12
            </div>
            <div class="w-1/5 text-base font-semibold">
              13
            </div>
            <div class="w-1/5 text-base font-semibold">
              14
            </div>
            <div class="w-1/5 text-base font-semibold">
              15
            </div>
            <div class="w-1/5 text-base font-semibold">
              16
            </div>
          </div>
        </div>
        <div class="flex justify-evenly text-center mt-4 mx-4">
          <div class="w-1/5 text-base font-semibold">
            19
          </div>
          <div class="w-1/5 text-base font-semibold">
            20
          </div>
          <div class="w-1/5 text-base font-semibold">
            21
          </div>
          <div class="w-1/5 text-base font-semibold">
            22
          </div>
          <div class="w-1/5 text-base font-semibold">
            23
          </div>
        </div>
        <div class="flex justify-evenly text-center mt-4 mx-4">
          <div class="w-1/5 text-base font-semibold">
            26
          </div>
          <div class="w-1/5 text-base font-semibold">
            27
          </div>
          <div class="w-1/5 text-base font-semibold">
            28
          </div>
          <div class="w-1/5 text-base font-semibold">
            29
          </div>
          <div class="w-1/5 text-base font-semibold">
            30
          </div>
        </div>
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