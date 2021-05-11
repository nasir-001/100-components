<template>
  <div class="bg-component24backgroundColor h-screen">
    <div class="bg-white w-4/6 mx-auto h-144 rounded-2xl top-10 sticky">
      <div class="text-center text-3xl font-semibold font-serif pt-14">
        Help Center
      </div>
      <div class="relative mx-auto mt-10 bg-white w-3/6 mb-10">
        <div class="absolute inset-y-0 left-0 text-gray-400 flex items-center pl-3">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current">
            <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
          </svg>
        </div>
        <input placeholder="Search" class="appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded-full py-4 px-4 mb-3 leading-tight pl-10 pr-4">
      </div>
      <div class="flex justify-evenly text-center mx-32">
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-r border-gray-200 py-8">
          Billing and membership
        </div>
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-r border-gray-200 py-8">
          Managing and Organizing
        </div>
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-gray-200 py-8">
          Uploading
        </div>
      </div>
      <div class="flex justify-evenly text-center mx-32">
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-r border-gray-200 py-8">
          Uploading
        </div>
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-r border-gray-200 py-8">
          Video Enterprise
        </div>
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-gray-200 py-8">
          Creators
        </div>
      </div>
      <div class="flex justify-evenly text-center mx-32">
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-r border-gray-200 py-8">
          Enterprise
        </div>
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-r border-gray-200 py-8">
          Features
        </div>
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-gray-200 py-8">
          Sales
        </div>
      </div>
      <div class="flex justify-evenly text-center mx-32">
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-r border-gray-200 py-8">
          Embeding and Sharing
        </div>
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-r border-gray-200 py-8">
          FAQs
        </div>
        <div class="text-sm font-semibold w-1/3 text-gray-700 border-b border-gray-200 py-8">
          Developers
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Layout24'
})
</script>