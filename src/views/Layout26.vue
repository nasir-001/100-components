<template>
  <div class="bg-layout26backgroundColor h-screen">
    <div class="bg-white top-6 sticky w-4/6 mx-auto h-144 rounded-lg shadow-2xl">
      <div class="flex justify-start mx-10">
        <div class="mt-4 w-2/5 rounded h-130 bg-gradient-to-tl from-layout26gradientBottomColor to-layout26gradientTopColor">
          card
        </div>
        <div class="w-2/5 ml-20">
          <div class="pt-28 text-2xl font-semibold text-gray-800">
            Create your account
          </div>
          <div class="pt-6 text-sm font-semibold text-gray-600">
            Email
          </div>
          <div class="mt-2 w-80">
            <input type="text" class="w-full border-gray-200 text-sm font-semibold py-3 rounded-md" placeholder="Enter your email address" />
          </div>
          <div class="pt-6 text-sm font-semibold text-gray-600">
            Full name
          </div>
          <div class="mt-2 w-80">
            <input type="text" class="w-full border-gray-200 text-sm font-semibold py-3 rounded-md" placeholder="Enter your full name" />
          </div>
          <div class="pt-6 text-sm font-semibold text-gray-600">
            Password
          </div>
          <div class="mt-2 w-80">
            <input type="password" class="w-full border-gray-200 text-sm font-semibold py-3 rounded-md" placeholder="Type to create password" />
          </div>
          <div class="flex justify-start mt-3">
            <div class="">
              <input type="checkbox" class="w-5 h-5 border-gray-200" />
            </div>
            <div class="text-xs pt-2 ml-2 font-semibold text-gray-400">
              Get updates and notifications about our product.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout26'
})
</script>