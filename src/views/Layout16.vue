<template>
  <div class="bg-layout16backgroundColor h-screen">
    <div class="bg-white bg-opacity-50 top-6 sticky w-1/2 mx-auto rounded-md h-144">
      <div class="top-20 sticky">
        <div class="bg-gradient-to-tl from-layout16gradientDownColor to-layout16gradientUpColor w-96 h-60 mx-auto rounded-2xl">
          <div class="text-center text-gray-100 pt-6 font-semibold text-lg">
            Hi George
          </div>
          <div class="text-center text-sm mx-16 font-semibold pt-2 text-gray-200">
            You can contact whenever you need help or just curios about something.
          </div>
        </div>
        <div class="bg-white mx-auto rounded-2xl h-80 -mt-24 w-80 shadow-xl">
          <div class="text-center text-lg font-semibold pt-8">
            Start chatting
          </div>
          <div class="pt-8">
            <img class="rounded-full w-16 h-16 object-cover mx-auto" src="/img/pexels-luriko-yamaguchi-2804282.jpg" alt="">
          </div>
          <div class="text-base font-semibold text-center text-gray-700">
            Essie Walton
          </div>
          <div class="border-2 mx-auto w-16 mt-1 border-gray-100 rounded-full">
            <div class="flex justify-center">
              <div class="bg-green-500 w-3 h-3 mt-0.5 mr-1 rounded-full"></div>
              <div class="text-gray-400 text-xs font-semibold">
                Active
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-tl from-layout16gradientDownColor to-layout16gradientUpColor rounded-lg py-3 text-gray-200 text-center mx-14 mt-6">
            Send a message
          </div>
        </div>
      </div>
    </div>
  </div>
  <page-link class="-mt-14">
    <a href="https://www.uidesigndaily.com/posts/sketch-contact-card-day-1290" target="_blank" rel="noopener noreferrer">page link</a>
  </page-link>
</template>

<script>
import { defineComponent } from 'vue';
import PageLink from '../components/PageLink.vue';

export default defineComponent({
  name: 'Layout16',
  components: {
    PageLink
  }
})
</script>