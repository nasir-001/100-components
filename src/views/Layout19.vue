<template>
  <div class="bg-layout19backgroundColor h-screen">
    <div class="w-180 mx-auto rounded-lg h-124 bg-white top-20 sticky">
      <div class="bg-layout19backgroundColor text-center mt-6 mr-4 w-8 h-8 rounded-full float-right text-lg font-thin">
        X
      </div>
      <div class="flex justify-between pt-32 mx-16">
        <div class="w-2/3">
          <div class="flex justify-between">
            <div class="text-sm tracking-wide font-semibold text-gray-600 w-1/2">
              STUDIO
            </div>
            <div class="text-sm tracking-wide font-semibold text-gray-600 w-1/2">
              COMPANY
            </div>
          </div>
          <div class="flex justify-between">
            <div class="text-sm tracking-wide font-semibold text-gray-700 mt-7 w-1/2">
              Case Studies
            </div>
            <div class="text-sm tracking-wide font-semibold text-gray-700 mt-7 w-1/2">
              Revenues
            </div>
          </div>
          <div class="flex justify-between">
            <div class="text-sm tracking-wide font-semibold text-gray-700 mt-7 w-1/2">
              About Us
            </div>
            <div class="text-sm tracking-wide font-semibold text-gray-700 mt-7 w-1/2">
              Brand and Guides
            </div>
          </div>
          <div class="flex justify-between">
            <div class="text-sm tracking-wide font-semibold text-gray-700 mt-3 -mb-3 w-1/2 bg-gradient-to-tl from-layout19buttonRightColor to-layout19buttonLeftColor py-3 -ml-6 pl-6 rounded-full">
              Our Customuers
            </div>
            <div class="text-sm tracking-wide font-semibold text-gray-700 mt-7 w-1/2">
              Press
            </div>
          </div>
          <div class="flex justify-between">
            <div class="text-sm tracking-wide font-semibold text-gray-700 mt-7 w-1/2">
              Contact
            </div>
            <div class="text-sm tracking-wide font-semibold text-gray-700 mt-7 w-1/2">
              Legal
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="text-sm tracking-wide font-semibold text-gray-600">
            FROM THE BLOG
          </div>
          <div class="border-2 mt-4 border-gray-200 rounded-md w-full h-32">
            <div class="flex justify-between pt-4 mx-4">
              <div class="text-base w-1/2 font-semibold tracking-tight">
                The signs of Spring
                <div class="text-xs text-gray-400 font-semibold mt-1">
                  by Josh Bean
                </div>
              </div>
              <div class="w-18">
                <img class="h-18 object-cover rounded-lg shadow-xl" src="/img/pexels-jeff-wang-462402.jpg">
              </div>
            </div>
          </div>
          <div class="border-2 mt-4 border-gray-200 rounded-md w-full h-32">
            <div class="flex justify-between pt-4 mx-4">
              <div class="text-base w-1/2 font-semibold tracking-tight">
                Avoid A Disappointing Cavation
                <div class="text-xs text-gray-400 font-semibold mt-1">
                  by Josh Bean
                </div>
              </div>
              <div class="w-18">
                <img class="h-18 object-cover rounded-lg shadow-xl" src="/img/pexels-pixabay-415687.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <page-link class="-mt-10">
    <a href="https://www.uidesigndaily.com/posts/sketch-menu-pop-up-day-1298" target="_blank" rel="noopener noreferrer">page link</a>
  </page-link>
</template>

<script>
import { defineComponent } from 'vue';
import PageLink from '../components/PageLink.vue';

export default defineComponent({
  name: 'Layout19',
  components: {
    PageLink
  }
})
</script>