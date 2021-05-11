<template>
  <div class="bg-layout23backgroundColor h-screen">
    <div class="flex justify-center">
      <div class="bg-layout23cardBackgroundColor h-60 rounded-xl w-124 top-6 sticky shadow-2xl">
        <div class="flex justify-between pt-8">
          <div class="text-white text-lg font-semibold mx-10">
            Projects
          </div>
          <div class="text-layout23textColor text-sm mx-10 font-semibold">
            Archieved projects
          </div>
        </div>
        <div class="text-gray-400 text-xs font-semibold tracking-wide ml-10 mr-32 pt-4">
          Group your projects into seperate folders. When you are uploading use the "Add to folder" checkbox.
        </div>
        <div class="mx-10 bg-layout23buttonColor text-white mt-10 text-center text-sm font-semibold rounded py-3 cursor-pointer shadow-2xl w-36">
          View my projects
        </div>
      </div>
      <div class="bg-layout23cardBackgroundColor h-72 rounded-xl w-80 mt-88 -ml-40 shadow-2xl">
        <div class="pt-10 text-white text-lg font-semibold text-center">
          Pro (Annual)
        </div>
        <div class="text-white text-xl font-semibold text-center">
          $60
        </div>
        <div class="text-gray-400 text-xs pt-4 font-semibold tracking-wide text-center">
          Next payment occurs on July 22, 2021
        </div>
        <div class="w-40 shadow-2xl cursor-pointer border text-sm mx-auto mt-10 border-layout23textColor text-center text-layout23textColor font-semibold py-3 rounded">
          Cancel subscription
        </div>
      </div>
      <page-link class="text-white pt-10">
        <a href="https://www.uidesigndaily.com/posts/sketch-dark-themed-cards-theme-button-day-1326" target="_blank" rel="noopener noreferrer">page link</a>
      </page-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PageLink from '../components/PageLink.vue';

export default defineComponent({
  name: 'Layout23',
  components: {
    PageLink
  }
})
</script>