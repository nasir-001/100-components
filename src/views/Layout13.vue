<template>
  <div class="flex justify-center mt-20 mb-10">
    <div class="bg-white rounded-2xl shadow-2xl w-108 h-60">
      <div class="bg-gray-200 rounded-full w-10 h-10 font-thin text-xl text-center pt-1 float-right m-4">
        X
      </div>
      <div class="font-semibold mt-12 font-serif text-xl tracking-wide mx-10">
        Looking for a developer?
      </div>
      <div class="mx-10 mt-4 font-medium text-base text-gray-700 font-serif">
        Start hiring from millions developers.
      </div>
      <div class="mx-10 py-2 cursor-pointer px-3 font-semibold text-center text-base text-white bg-black rounded-full mt-10 w-32">
        Post a job
      </div>
    </div>
    <div class="bg-white mt-32 rounded-2xl shadow-2xl -ml-20 w-108 h-96">
      <div class="font-semibold text-center mt-12 font-serif text-xl tracking-wide mx-10">
        Post a job
      </div>
      <div class="text-center text-base font-serif font-medium mt-6 text-gray-700">
        Start hiring from millions developers.
      </div>
      <div class="mx-14 font-bold mt-10 text-sm">
        Company
      </div>
      <input type="text" class="mx-14 rounded-md border-2 border-gray-200 py-3 w-80 mt-2" placeholder="Company name">
      <div class="flex mx-14 mt-8 justify-between">
        <div class="font-base mt-2 cursor-pointer">
          Cancel
        </div>
        <div class="flex justify-start px-4 bg-black rounded-full w-32 py-2">
          <div class="font-semibold cursor-pointer text-white px-3">
            Next
          </div>
          <div class="text-white">
            <svg class="fill-current h-5 mt-0.5 w-8" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z" fill-rule="evenodd" id="Arrow_Forward"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <page-link>
    <a href="https://www.uidesigndaily.com/posts/figma-cards-card-pop-up-modal-input-day-1336" target="_blank" rel="noopener noreferrer">page link</a>
  </page-link>
</template>

<script>
import { defineComponent } from 'vue';
import PageLink from '../components/PageLink.vue';

export default defineComponent({
  name: 'Layout13',
  components: {
    PageLink
  }
})
</script>