<template>
  <div class="bg-layout26backgroundColor h-screen">
    <div class="bg-white top-6 sticky w-4/6 mx-auto h-144 rounded-lg shadow-2xl">
      <div class="flex justify-start mx-10">
        <div class="mt-4 w-2/5 rounded h-130 bg-gradient-to-tl from-layout26gradientBottomColor to-layout26gradientTopColor">
          <div class="mt-10 ml-10 text-white bg-layout26markCircleColor w-6 h-6 rounded-full">
            <svg class="fill-current" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
            <path d="M40.267,14.628L20.974,33.921l-9.293-9.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l10,10
              c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l20-20c0.391-0.391,0.391-1.023,0-1.414S40.657,14.237,40.267,14.628z
              "/>
            </svg>
          </div>
          <div class="pt-3 ml-10 text-base font-semibold text-gray-100">
            Quick and free sign-up
          </div>
          <div class="text-xs text-gray-100 pt-2 ml-10 w-44 tracking-wider font-semibold">
            Enter your email address to create an account
          </div>
          <div class="mt-8 ml-10 text-white bg-layout26markCircleColor w-6 h-6 rounded-full">
            <svg class="fill-current" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
            <path d="M40.267,14.628L20.974,33.921l-9.293-9.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l10,10
              c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l20-20c0.391-0.391,0.391-1.023,0-1.414S40.657,14.237,40.267,14.628z
              "/>
            </svg>
          </div>
          <div class="pt-3 ml-10 text-base font-semibold text-gray-100">
            Cross-platform solution
          </div>
          <div class="text-xs text-gray-100 pt-2 ml-10 w-44 tracking-wider font-semibold">
            Preview your newsletter on any device before sending them out.
          </div>
          <div class="mt-8 ml-10 text-white bg-layout26markCircleColor w-6 h-6 rounded-full">
            <svg class="fill-current" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
            <path d="M40.267,14.628L20.974,33.921l-9.293-9.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l10,10
              c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l20-20c0.391-0.391,0.391-1.023,0-1.414S40.657,14.237,40.267,14.628z
              "/>
            </svg>
          </div>
          <div class="pt-3 ml-10 text-base font-semibold text-gray-100">
            Start sending emails
          </div>
          <div class="text-xs text-gray-100 pt-2 ml-10 w-44 tracking-wider font-semibold">
            Use our API or pick our pre-built templates.
          </div>
        </div>
        <div class="w-2/5 ml-20">
          <div class="pt-24 text-2xl font-semibold text-gray-800">
            Create your account
          </div>
          <div class="pt-4 text-sm font-semibold text-gray-600">
            Email
          </div>
          <div class="mt-2 w-80">
            <input type="text" class="w-full border-gray-200 text-sm font-semibold py-3 rounded-md" placeholder="Enter your email address" />
          </div>
          <div class="pt-4 text-sm font-semibold text-gray-600">
            Full name
          </div>
          <div class="mt-2 w-80">
            <input type="text" class="w-full border-gray-200 text-sm font-semibold py-3 rounded-md" placeholder="Enter your full name" />
          </div>
          <div class="pt-4 text-sm font-semibold text-gray-600">
            Password
          </div>
          <div class="mt-2 w-80">
            <input type="password" class="w-full border-gray-200 text-sm font-semibold py-3 rounded-md" placeholder="Type to create password" />
          </div>
          <div class="flex justify-start mt-3">
            <div class="">
              <input type="checkbox" class="w-5 h-5 text-layout26gradientBottomColor border-gray-200" />
            </div>
            <div class="text-xs pt-2 ml-2 font-semibold text-gray-400">
              Get updates and notifications about our product.
            </div>
          </div>
          <div class="w-80 mt-6 bg-layout26gradientBottomColor rounded-md text-sm text-white font-semibold text-center shadow-2xl cursor-pointer py-2.5">
            Type to create a password
          </div>
        </div>
      </div>
    </div>
  </div>
  <page-link class="-mt-12">
    <a href="https://www.uidesigndaily.com/posts/sketch-sign-up-ui-design-form-day-1206" target="_blank" rel="noopener noreferrer">page link</a>
  </page-link>
</template>

<script>
import { defineComponent } from 'vue';
import PageLink from '../components/PageLink.vue';

export default defineComponent({
  name: 'Layout26',
  components: {
    PageLink
  }
})
</script>