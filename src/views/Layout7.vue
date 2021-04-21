<template>
  <div class="bg-layout7backgroundColor h-screen">
    <div class="top-20 sticky h-124 w-2/7 mx-auto bg-white shadow-2xl rounded-lg">
      <div class="mx-10">
        <div class="pt-6 text-lg text-gray-700 font-semibold">
          About
        </div>
        <div class="text-sm pt-2 font-semibold text-gray-600">
          An opportunity for all the members who are visiting your profile, as you really will be giving them a chance to experience something new.
        </div>
        <div class="pt-10 text-sm font-semibold text-gray-800">
          Recently contributed
        </div>
        <div class="flex justify-start">
          <div class="h-10 w-10 mt-5 font-bold bg-layout7firstCircle rounded-full text-sm text-center text-layout7firstText uppercase">
            <p class="pt-2">CW</p>
            <div class="h-3 w-3 rounded-full bg-red-500 ml-7 border-2 border-white"></div>
          </div>
          <div class="font-semibold ml-2 text-gray-800 text-sm mt-6">
            Clayton Weaver
          </div>
        </div>
        <div class="flex justify-start">
          <div class="h-10 w-10 mt-5 font-bold bg-layout7secondCircle rounded-full text-sm text-center text-layout7secondText uppercase">
            <p class="pt-2">DN</p>
            <div class="h-3 w-3 rounded-full bg-green-500 ml-7 border-2 border-white"></div>
          </div>
          <div class="font-semibold ml-2 text-gray-800 text-sm mt-6">
            Dorothy Norris
          </div>
          <div class="text-gray-400 border h-7 mt-5 ml-2 text-center px-2 border-gray-100 rounded-lg">
            Guest
          </div>
        </div>
        <div class="flex justify-start">
          <div class="h-10 w-10 mt-5 font-bold bg-layout7thirdCircle rounded-full text-sm text-center text-layout7thirdText uppercase">
            <p class="pt-2">CW</p>
            <div class="h-3 w-3 rounded-full bg-red-500 ml-7 border-2 border-white"></div>
          </div>
          <div class="font-semibold ml-2 text-gray-800 text-sm mt-6">
            Clayton Weaver
          </div>
          <div class="text-gray-400 border h-7 mt-5 ml-2 text-center px-2 border-gray-100 rounded-lg">
            Guest
          </div>
        </div>
        <div class="flex justify-start">
          <div class="h-10 w-10 mt-5 font-bold bg-layout7fourthCircle rounded-full text-sm text-center text-layout7fourthText uppercase">
            <p class="pt-2">RM</p>
            <div class="h-3 w-3 rounded-full bg-red-500 ml-7 border-2 border-white"></div>
          </div>
          <div class="font-semibold ml-2 text-gray-800 text-sm mt-6">
            Ronald Morris
          </div>
        </div>
        <div class="mt-8 text-layout7linkTextColor cursor-pointer text-sm underline">
          See all members
        </div>
      </div>
    </div>
  </div>
  <page-link class="sticky bottom-0">
    <a href="https://www.uidesigndaily.com/posts/sketch-info-card-list-day-1338" target="_blank" rel="noopener noreferrer">page link</a>
  </page-link>
</template>

<script type="application/javascript">
import { defineComponent } from 'vue';
import PageLink from '../components/PageLink.vue';

export default defineComponent({
  name: 'Layout7',
  components: {
    PageLink
  }
})
</script>