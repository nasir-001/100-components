<template>
  <div class="bg-gradient-to-tl from-layou28gradientBottomColor to-layout28gradientTopColor h-screen">
    <div class="top-10 sticky bg-white w-72 rounded-lg h-4/5 mx-auto">
      <div class="bg-layou28smallCircleColor mt-2 mr-2 float-right w-8 h-8 rounded-full text-center text-lg text-gray-500">
        X
      </div>
      <div class="ml-5 mr-20 text-lg font-semibold pt-5 text-gray-700">
        Create an account to view this page
      </div>
      <div class="text-xs ml-5 pt-3 font-semibold text-gray-700">
        Already have an account? <i class="text-blue-600 underline">Login</i>
      </div>
      <div class="flex justify-between mt-6 mx-6">
        <div>
          <div class="font-semibold text-sm">
            First Name
          </div>
          <div class="mt-1">
            <input type="text" class="w-full border-t border-l border-b rounded-tl-md rounded-bl-md border-gray-200 py-3" placeholder="First name" />
          </div>
        </div>
        <div>
          <div class="font-semibold text-sm">
            First Name
          </div>
          <div class="mt-1">
            <input type="text" class="w-full border-t border-r rounded-tr-md rounded-br-md border-gray-200 py-3" placeholder="Last name" />
          </div>
        </div>
      </div>
      <div class="font-semibold text-sm mx-6 pt-2">
        Email
      </div>
      <div class="mt-1 mx-6">
        <input type="text" class="w-full rounded-md border-gray-200 py-3" placeholder="Enter your email address" />
      </div>
      <div class="pt-6 text-gray-700 ml-6 mr-12 text-xs font-semibold">
        By signing up you to our <i class="text-blue-500 underline">Terms</i> and <i class="text-blue-600 underline">Privacy policy</i>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout28'
})
</script>