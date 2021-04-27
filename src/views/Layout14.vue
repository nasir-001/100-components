<template>
  <div class="bg-layout14backgroundColor h-screen">
    <div class="bg-white w-3/8 mx-auto rounded-xl h-164 sticky top-4 shadow-2xl">
      <div class="pt-20 font-bold text-gray-700 text-center text-lg">
        Generate a report for your website
      </div>
      <div class="mt-4 mx-24 text-sm font-semibold tracking-tight text-gray-600">
        Identify problems that affect your website's performance, accessibility and user experience.
      </div>
      <div class="mx-24 mt-10">
        <div class="flex justify-between">
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" value="check" class="rounded w-5 h-5 mr-1.5" />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              Performance
            </div>
          </div>
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" value="check" class="rounded w-5 h-5 mr-1.5" />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              Progressive Web App
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-2">
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" value="check" class="rounded w-5 h-5 mr-1.5" />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              Best practices
            </div>
          </div>
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" value="check" class="rounded w-5 h-5 mr-1.5" />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              Best practices
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-2">
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" value="check" class="rounded w-5 h-5 mr-1.5" />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              Accessibility
            </div>
          </div>
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" value="check" class="rounded w-5 h-5 mr-1.5" />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              SEO
            </div>
          </div>
        </div>
      </div>
      <div class="mx-24 mt-16">
        <div class="text-xs font-bold">
          Device
        </div>
        <div class="flex justify-start">
          <div class="w-20 mr-2 border-2 border-layout14buttonColor h-20 rounded-lg mt-2">
            <div class="">
              
            </div>
            <div class="text-xs text-gray-600 font-semibold text-center">
              Mobile
            </div>
          </div>
          <div class="w-20 ml-2 border-2 border-gray-100 h-20 rounded-lg mt-2">
            <div class="">
              
            </div>
            <div class="text-xs text-gray-600 font-semibold text-center">
              Desktop
            </div>
          </div>
        </div>
      </div>
      <div class="mx-24 mt-12 py-4 rounded-md bg-layout14buttonColor text-gray-300 font-semibold text-center text-sm">
        Generate report
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout14'
})
</script>