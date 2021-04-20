<template>
  <div class="bg-layout5backgroundcolor h-screen">
    <div class="bg-layout5cardcolor h-144 w-4/7 shadow-xl mx-auto sticky top-14 rounded-2xl">
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
                <svg class="w-4 ml-6 mr-1 fill-current h-4 font-semibold" viewBox="0 0 24 24">
                  <g id="Iconly/Bold/Category" stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g id="Category" transform="translate(2.000000, 2.000000)">
                      <path d="M5.9199,11.4697 C7.3299,11.4697 8.4599,12.6107 8.4599,14.0307 L8.4599,14.0307 L8.4599,17.4397 C8.4599,18.8497 7.3299,19.9997 5.9199,19.9997 L5.9199,19.9997 L2.5399,19.9997 C1.1399,19.9997 -0.0001,18.8497 -0.0001,17.4397 L-0.0001,17.4397 L-0.0001,14.0307 C-0.0001,12.6107 1.1399,11.4697 2.5399,11.4697 L2.5399,11.4697 Z M17.46,11.4697 C18.86,11.4697 20,12.6107 20,14.0307 L20,14.0307 L20,17.4397 C20,18.8497 18.86,19.9997 17.46,19.9997 L17.46,19.9997 L14.08,19.9997 C12.67,19.9997 11.54,18.8497 11.54,17.4397 L11.54,17.4397 L11.54,14.0307 C11.54,12.6107 12.67,11.4697 14.08,11.4697 L14.08,11.4697 Z M5.9199,-9.32587341e-14 C7.3299,-9.32587341e-14 8.4599,1.15 8.4599,2.561 L8.4599,2.561 L8.4599,5.97 C8.4599,7.39 7.3299,8.53 5.9199,8.53 L5.9199,8.53 L2.5399,8.53 C1.1399,8.53 -0.0001,7.39 -0.0001,5.97 L-0.0001,5.97 L-0.0001,2.561 C-0.0001,1.15 1.1399,-9.32587341e-14 2.5399,-9.32587341e-14 L2.5399,-9.32587341e-14 Z M17.46,-9.32587341e-14 C18.86,-9.32587341e-14 20,1.15 20,2.561 L20,2.561 L20,5.97 C20,7.39 18.86,8.53 17.46,8.53 L17.46,8.53 L14.08,8.53 C12.67,8.53 11.54,7.39 11.54,5.97 L11.54,5.97 L11.54,2.561 C11.54,1.15 12.67,-9.32587341e-14 14.08,-9.32587341e-14 L14.08,-9.32587341e-14 Z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-gray-300">
                Colour
              </div>
          </div>
          <div class="flex mt-4 mx-6 py-3 rounded-md hover:bg-layout5focuscolor w-64">
              <div class="mr-1 mt-1 text-gray-200">
                <svg class="w-4 ml-6 mr-1 fill-current h-4 font-semibold" viewBox="0 0 24 24">
                  <g id="Iconly/Bold/Category" stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g id="Category" transform="translate(2.000000, 2.000000)">
                      <path d="M5.9199,11.4697 C7.3299,11.4697 8.4599,12.6107 8.4599,14.0307 L8.4599,14.0307 L8.4599,17.4397 C8.4599,18.8497 7.3299,19.9997 5.9199,19.9997 L5.9199,19.9997 L2.5399,19.9997 C1.1399,19.9997 -0.0001,18.8497 -0.0001,17.4397 L-0.0001,17.4397 L-0.0001,14.0307 C-0.0001,12.6107 1.1399,11.4697 2.5399,11.4697 L2.5399,11.4697 Z M17.46,11.4697 C18.86,11.4697 20,12.6107 20,14.0307 L20,14.0307 L20,17.4397 C20,18.8497 18.86,19.9997 17.46,19.9997 L17.46,19.9997 L14.08,19.9997 C12.67,19.9997 11.54,18.8497 11.54,17.4397 L11.54,17.4397 L11.54,14.0307 C11.54,12.6107 12.67,11.4697 14.08,11.4697 L14.08,11.4697 Z M5.9199,-9.32587341e-14 C7.3299,-9.32587341e-14 8.4599,1.15 8.4599,2.561 L8.4599,2.561 L8.4599,5.97 C8.4599,7.39 7.3299,8.53 5.9199,8.53 L5.9199,8.53 L2.5399,8.53 C1.1399,8.53 -0.0001,7.39 -0.0001,5.97 L-0.0001,5.97 L-0.0001,2.561 C-0.0001,1.15 1.1399,-9.32587341e-14 2.5399,-9.32587341e-14 L2.5399,-9.32587341e-14 Z M17.46,-9.32587341e-14 C18.86,-9.32587341e-14 20,1.15 20,2.561 L20,2.561 L20,5.97 C20,7.39 18.86,8.53 17.46,8.53 L17.46,8.53 L14.08,8.53 C12.67,8.53 11.54,7.39 11.54,5.97 L11.54,5.97 L11.54,2.561 C11.54,1.15 12.67,-9.32587341e-14 14.08,-9.32587341e-14 L14.08,-9.32587341e-14 Z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-gray-300">
                Company
              </div>
          </div>
          <div class="flex mt-4 mx-6 py-3 rounded-md hover:bg-layout5focuscolor w-64">
              <div class="mr-1 mt-1 text-gray-200">
                <svg class="w-4 ml-6 mr-1 fill-current h-4 font-semibold" viewBox="0 0 24 24">
                  <g id="Iconly/Bold/Category" stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g id="Category" transform="translate(2.000000, 2.000000)">
                      <path d="M5.9199,11.4697 C7.3299,11.4697 8.4599,12.6107 8.4599,14.0307 L8.4599,14.0307 L8.4599,17.4397 C8.4599,18.8497 7.3299,19.9997 5.9199,19.9997 L5.9199,19.9997 L2.5399,19.9997 C1.1399,19.9997 -0.0001,18.8497 -0.0001,17.4397 L-0.0001,17.4397 L-0.0001,14.0307 C-0.0001,12.6107 1.1399,11.4697 2.5399,11.4697 L2.5399,11.4697 Z M17.46,11.4697 C18.86,11.4697 20,12.6107 20,14.0307 L20,14.0307 L20,17.4397 C20,18.8497 18.86,19.9997 17.46,19.9997 L17.46,19.9997 L14.08,19.9997 C12.67,19.9997 11.54,18.8497 11.54,17.4397 L11.54,17.4397 L11.54,14.0307 C11.54,12.6107 12.67,11.4697 14.08,11.4697 L14.08,11.4697 Z M5.9199,-9.32587341e-14 C7.3299,-9.32587341e-14 8.4599,1.15 8.4599,2.561 L8.4599,2.561 L8.4599,5.97 C8.4599,7.39 7.3299,8.53 5.9199,8.53 L5.9199,8.53 L2.5399,8.53 C1.1399,8.53 -0.0001,7.39 -0.0001,5.97 L-0.0001,5.97 L-0.0001,2.561 C-0.0001,1.15 1.1399,-9.32587341e-14 2.5399,-9.32587341e-14 L2.5399,-9.32587341e-14 Z M17.46,-9.32587341e-14 C18.86,-9.32587341e-14 20,1.15 20,2.561 L20,2.561 L20,5.97 C20,7.39 18.86,8.53 17.46,8.53 L17.46,8.53 L14.08,8.53 C12.67,8.53 11.54,7.39 11.54,5.97 L11.54,5.97 L11.54,2.561 C11.54,1.15 12.67,-9.32587341e-14 14.08,-9.32587341e-14 L14.08,-9.32587341e-14 Z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-gray-300">
                Brand
              </div>
          </div>
          <div class="flex mt-4 mx-6 py-3 rounded-md hover:bg-layout5focuscolor w-64">
              <div class="mr-1 mt-1 text-gray-200">
                <svg class="w-4 ml-6 mr-1 fill-current h-4 font-semibold" viewBox="0 0 24 24">
                  <g id="Iconly/Bold/Category" stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g id="Category" transform="translate(2.000000, 2.000000)">
                      <path d="M5.9199,11.4697 C7.3299,11.4697 8.4599,12.6107 8.4599,14.0307 L8.4599,14.0307 L8.4599,17.4397 C8.4599,18.8497 7.3299,19.9997 5.9199,19.9997 L5.9199,19.9997 L2.5399,19.9997 C1.1399,19.9997 -0.0001,18.8497 -0.0001,17.4397 L-0.0001,17.4397 L-0.0001,14.0307 C-0.0001,12.6107 1.1399,11.4697 2.5399,11.4697 L2.5399,11.4697 Z M17.46,11.4697 C18.86,11.4697 20,12.6107 20,14.0307 L20,14.0307 L20,17.4397 C20,18.8497 18.86,19.9997 17.46,19.9997 L17.46,19.9997 L14.08,19.9997 C12.67,19.9997 11.54,18.8497 11.54,17.4397 L11.54,17.4397 L11.54,14.0307 C11.54,12.6107 12.67,11.4697 14.08,11.4697 L14.08,11.4697 Z M5.9199,-9.32587341e-14 C7.3299,-9.32587341e-14 8.4599,1.15 8.4599,2.561 L8.4599,2.561 L8.4599,5.97 C8.4599,7.39 7.3299,8.53 5.9199,8.53 L5.9199,8.53 L2.5399,8.53 C1.1399,8.53 -0.0001,7.39 -0.0001,5.97 L-0.0001,5.97 L-0.0001,2.561 C-0.0001,1.15 1.1399,-9.32587341e-14 2.5399,-9.32587341e-14 L2.5399,-9.32587341e-14 Z M17.46,-9.32587341e-14 C18.86,-9.32587341e-14 20,1.15 20,2.561 L20,2.561 L20,5.97 C20,7.39 18.86,8.53 17.46,8.53 L17.46,8.53 L14.08,8.53 C12.67,8.53 11.54,7.39 11.54,5.97 L11.54,5.97 L11.54,2.561 C11.54,1.15 12.67,-9.32587341e-14 14.08,-9.32587341e-14 L14.08,-9.32587341e-14 Z"></path>
                    </g>
                  </g>
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