<template>
  <div class="bg-layout5backgroundcolor h-screen">
    <div class="bg-layout5cardcolor h-144 w-4/7 mx-auto sticky top-14 rounded-2xl">
      <div class="flex justify-between">
        <div></div>
        <div class="bg-layout5cancelcolor font-thin m-4 text-xl text-gray-300 text-center align-middle rounded-full w-8 h-8">
          X
        </div>
      </div>
      <div class="mx-12 text-2xl font-medium text-gray-200">
        Edit structure
      </div>
      <div class="mx-12 mt-1 font-medium text-gray-400">
        Drag and drop items to build your structure.
      </div>
      <div class="flex justify-between">
        <div>
          <div class="flex mt-10 mx-6 py-3 rounded-md hover:bg-layout5focuscolor w-64">
              <div class="mr-1 mt-1 text-gray-200">
                <svg class="w-4 ml-6 mr-1 fill-current h-4 font-semibold" viewBox="0 0 51.388 51.388" xml:space="preserve">
                  <path d="M9.169,51.388c-0.351,0-0.701-0.157-0.93-0.463c-0.388-0.514-0.288-1.243,0.227-1.634l31.066-23.598L8.461,2.098
                    C7.95,1.708,7.85,0.977,8.237,0.463c0.395-0.517,1.126-0.615,1.64-0.225l33.51,25.456L9.877,51.151
                    C9.664,51.31,9.415,51.388,9.169,51.388z"/>
                </svg>
              </div>
              <div class="text-gray-300">
                Colour
              </div>
          </div>
          <div class="flex mt-4 mx-6 py-3 rounded-md hover:bg-layout5focuscolor w-64">
              <div class="mr-1 mt-1 text-gray-200">
                <svg class="w-4 ml-6 mr-1 fill-current h-4 font-semibold" viewBox="0 0 51.388 51.388" xml:space="preserve">
                  <path d="M9.169,51.388c-0.351,0-0.701-0.157-0.93-0.463c-0.388-0.514-0.288-1.243,0.227-1.634l31.066-23.598L8.461,2.098
                    C7.95,1.708,7.85,0.977,8.237,0.463c0.395-0.517,1.126-0.615,1.64-0.225l33.51,25.456L9.877,51.151
                    C9.664,51.31,9.415,51.388,9.169,51.388z"/>
                </svg>
              </div>
              <div class="text-gray-300">
                Company
              </div>
          </div>
          <div class="flex mt-4 mx-6 py-3 rounded-md hover:bg-layout5focuscolor w-64">
              <div class="mr-1 mt-1 text-gray-200">
                <svg class="w-4 ml-6 mr-1 fill-current h-4 font-semibold" viewBox="0 0 51.388 51.388" xml:space="preserve">
                  <path d="M9.169,51.388c-0.351,0-0.701-0.157-0.93-0.463c-0.388-0.514-0.288-1.243,0.227-1.634l31.066-23.598L8.461,2.098
                    C7.95,1.708,7.85,0.977,8.237,0.463c0.395-0.517,1.126-0.615,1.64-0.225l33.51,25.456L9.877,51.151
                    C9.664,51.31,9.415,51.388,9.169,51.388z"/>
                </svg>
              </div>
              <div class="text-gray-300">
                Brand
              </div>
          </div>
          <div class="flex mt-4 mx-6 py-3 rounded-md hover:bg-layout5focuscolor w-64">
              <div class="mr-1 mt-1 text-gray-200">
                <svg class="w-4 ml-6 mr-1 fill-current h-4 font-semibold" viewBox="0 0 51.388 51.388" xml:space="preserve">
                  <path d="M9.169,51.388c-0.351,0-0.701-0.157-0.93-0.463c-0.388-0.514-0.288-1.243,0.227-1.634l31.066-23.598L8.461,2.098
                    C7.95,1.708,7.85,0.977,8.237,0.463c0.395-0.517,1.126-0.615,1.64-0.225l33.51,25.456L9.877,51.151
                    C9.664,51.31,9.415,51.388,9.169,51.388z"/>
                </svg>
              </div>
              <div class="text-gray-300">
                Size
              </div>
          </div>
        </div>
        <div class="bg-layout5backgroundcolor mt-10 rounded-xl h-80 w-72 mx-14">
          <div class="flex justify-between mx-6 mt-4">
            <div class="text-gray-300 font-semibold text-lg">
              Recently used
            </div>
            <div class="text-sm text-blue-500 underline mt-1 cursor-pointer">
              See all
            </div>
          </div>
          <div class="flex justify-start mx-6 mt-4">
            <div class="text-gray-300 text-base w-20 text-center py-1 mx-1 rounded-lg bg-layout5cardcolor">
              Tags<i class="mx-2 text-lg">+</i>
            </div>
            <div class="text-gray-300 text-base w-20 text-center py-1 mx-1 rounded-lg bg-layout5cardcolor">
              Style<i class="mx-2 text-lg">+</i>
            </div>
          </div>
          <div class="flex justify-start mx-6 mt-3">
            <div class="text-gray-300 text-base w-24 text-center py-1 mx-1 rounded-lg bg-layout5cardcolor">
              Material<i class="mx-2 text-lg">+</i>
            </div>
            <div class="text-gray-300 text-base w-24 text-center py-1 mx-1 rounded-lg bg-layout5cardcolor">
              Position<i class="mx-2 text-lg">+</i>
            </div>
          </div>
          <div class="flex justify-start mx-6 mt-3">
            <div class="text-gray-300 text-base w-28 text-center py-1 mx-1 rounded-lg bg-layout5cardcolor">
              Attribute<i class="mx-2 text-lg">+</i>
            </div>
            <div class="text-gray-300 text-base w-28 text-center py-1 mx-1 rounded-lg bg-layout5cardcolor">
              Warranty<i class="mx-2 text-lg">+</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <page-link class="sticky bottom-0 text-white">
    <a href="https://www.uidesigndaily.com/posts/xd-settings-modal-tags-dark-theme-day-1319" target="_blank" rel="noopener noreferrer">page link</a>
  </page-link>
</template>

<script type="application/javascript">
import { defineComponent } from 'vue';
import PageLink from '../components/PageLink.vue';

export default defineComponent({
  name: 'Layout5',
  components: {
    PageLink
  }
})
</script>