<template>
  <div class="border-4 border-gray-800 bg-white rounded-2xl w-4/6 mx-auto mt-20 mb-14">
    <div class="flex justify-center">
      <div class="mt-16 mb-6">
        <p class="text-center font-semibold text-lg">Search for statistics</p>
      </div>
    </div>
    <div class="relative shadow-md mx-auto bg-white w-3/6 mb-16">
      <div class="absolute inset-y-0 animate-bounce left-0 flex items-center pl-3">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-600">
          <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
        </svg>
      </div>
      <input placeholder="Enter any keyword" class="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight pl-10 pr-4">
    </div>
    <div class="flex justify-center mx-10 mb-10">
      <div class="w-1/3 h-56 mx-2 rounded-lg bg-layout2firstcard">
        <div class="font-semibold mx-6 mt-8 text-lg">
          Price calculator
        </div>
        <div class="mt-4 text-xs mx-6 font-semibold">
          How much does 1 Eur in 1963 equals in today's price? Adjust the rent?
        </div>
        <div class="flex justify-start w-4/6 rounded-full text-xs font-semibold border-2 border-layout2firstborder mt-6 py-2 px-2 mx-4">
          <div>
            Calculate price changes
          </div>
          <div>
            <svg class="h-3 w-4 ml-2 mt-1" viewBox="0 0 51.388 51.388">
              <path d="M9.169,51.388c-0.351,0-0.701-0.157-0.93-0.463c-0.388-0.514-0.288-1.243,0.227-1.634l31.066-23.598L8.461,2.098
                C7.95,1.708,7.85,0.977,8.237,0.463c0.395-0.517,1.126-0.615,1.64-0.225l33.51,25.456L9.877,51.151
                C9.664,51.31,9.415,51.388,9.169,51.388z"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="w-1/3 h-56 mx-2 rounded-lg bg-layout2secondcard">
        <div class="font-semibold mx-6 mt-8 text-lg">
          Name statistics
        </div>
        <div class="mt-4 text-xs mx-6 font-semibold">
          How much does 1 Eur in 1963 equals in today's price? Adjust the rent?
        </div>
        <div class="flex justify-start w-3/5 rounded-full text-xs font-semibold border-2 border-layout2secondborder mt-6 py-2 px-2 mx-4">
          <div>
            Search by name
          </div>
          <div>
            <svg class="h-3 w-4 ml-2 mt-1" viewBox="0 0 51.388 51.388">
              <path d="M9.169,51.388c-0.351,0-0.701-0.157-0.93-0.463c-0.388-0.514-0.288-1.243,0.227-1.634l31.066-23.598L8.461,2.098
                C7.95,1.708,7.85,0.977,8.237,0.463c0.395-0.517,1.126-0.615,1.64-0.225l33.51,25.456L9.877,51.151
                C9.664,51.31,9.415,51.388,9.169,51.388z"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="w-1/3 h-56 mx-2 rounded-lg bg-layout2thirdcard">
        <div class="font-semibold mx-6 mt-8 text-lg">
          Stats table
        </div>
        <div class="mt-4 text-xs mx-6 font-semibold">
          Find detailed tables with time and create your own
        </div>
        <div class="flex justify-start w-3/6 rounded-full text-xs font-semibold border-2 bg-white border-layout2thirdborder mt-6 py-2 px-2 mx-4">
          <div>
            Go to tables
          </div>
          <div>
            <svg class="h-3 w-4 ml-4 mt-1" viewBox="0 0 51.388 51.388">
              <path d="M9.169,51.388c-0.351,0-0.701-0.157-0.93-0.463c-0.388-0.514-0.288-1.243,0.227-1.634l31.066-23.598L8.461,2.098
                C7.95,1.708,7.85,0.977,8.237,0.463c0.395-0.517,1.126-0.615,1.64-0.225l33.51,25.456L9.877,51.151
                C9.664,51.31,9.415,51.388,9.169,51.388z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mx-10 mb-10">
      <div class="w-1/3 h-56 mx-2 rounded-lg">
        <div class="font-semibold mx-6 mt-8 text-lg">
          Calendar
        </div>
        <div class="mt-4 text-xs mx-6 font-semibold">
          See the advance of release of calendars in 2021
        </div>
        <div class="font-semibold text-xs mt-3 py-2 px-2 mx-4 text-blue-700 underline">
          Go to calendar
        </div>
      </div>
      <div class="w-1/3 h-56 mx-2 rounded-lg">
        <div class="font-semibold mx-6 mt-8 text-lg">
          Subscribe to news 
        </div>
        <div class="mt-4 text-xs mx-6 font-semibold">
          Get the latest statistics release and publication by e-mail
        </div>
        <div class="font-semibold text-xs mt-3 py-2 px-2 mx-4 text-blue-700 underline">
          Recieve e-mail alerts
        </div>
      </div>
      <div class="w-1/3 h-56 mx-2 rounded-lg">
        <div class="font-semibold mx-6 mt-8 text-lg">
          API
        </div>
        <div class="mt-4 text-xs mx-6 font-semibold">
          Easily retrieve and integrate statistics with your own system
        </div>
        <div class="font-semibold text-xs mt-3 py-2 px-2 mx-4 text-blue-700 underline">
          Open API
        </div>
      </div>
    </div>
  </div>
  <page-link>
    <a href="https://www.uidesigndaily.com/posts/sketch-website-card-day-1270" target="_blank" rel="noopener noreferrer">page link</a>
  </page-link>
</template>

<script type="application/javascript">
import { defineComponent } from 'vue';
import PageLink from '../components/PageLink.vue'

export default defineComponent({
  name: 'Layout2',
  components: {
    PageLink
  }
})
</script>