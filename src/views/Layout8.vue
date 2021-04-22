<template>
  <div class="bg-layout8backgroundColor bg-gradient-to-t h-screen">
    <div class="top-6 mb-6 sticky text-white mx-auto bg-gradient-to-t from-layout8secondbackgroundColor to-layout8backgroundCardColor h-170 rounded-xl w-3/7">
        <div class="text-sm font-semibold text-white">
          Already have an account?
        </div>
        <div class="text-sm font-semibold cursor-pointer text-layout8textColor ml-1">
          Sign in
        </div>
      </div>
      <div class="mt-10 font-semibold tracking-wider text-white text-lg text-center">
        Have a question about this product?
      </div>
      <div class="mx-32">
        <div class="mt-4 text-sm text-center">
          Have a question about this product? Sign up for a free account to open an issue and contact its maintainers.
        </div>
        <div class="mt-6 text-sm font-semibold">
          Pick a username
        </div>
        <div class="mt-2">
          <input type="text" class="appearance-none border-2 border-layout8inputBorderColor bg-layout8backgroundCardColor w-full rounded-md" placeholder="Username" />
        </div>
        <div class="mt-3 text-sm font-semibold">
          Your email address
        </div>
        <div class="mt-2">
          <input type="email" class="appearance-none border-2 border-layout8inputBorderColor bg-layout8backgroundCardColor w-full rounded-md" placeholder="Enter your email address" />
        </div>
        <div class="mt-3 text-sm font-semibold">
          Password
        </div>
        <div class="mt-2">
          <input type="password" class="appearance-none border-2 border-layout8inputBorderColor bg-layout8backgroundCardColor w-full rounded-md" placeholder="Enter a password" />
        </div>
        <div class="bg-layout8buttonColor mt-4 font-semibold py-3 text-center text-white rounded-md text-sm">
          Sign up
        </div>
      </div>
      <div class="mx-14 py-4 text-gray-300 rounded-lg mt-6 text-xs bg-layout8smallCardColor text-center">
        <div class="mx-4">
          By clicking "Sign Up". you agree to our terms of service and privacy statement. We'll occasionally send you account related emails.
        </div>
      </div>
    </div>
  </div>
  <page-link>
    <a href="https://www.uidesigndaily.com/posts/xd-sign-up-form-dark-theme-log-in-day-1315" target="_blank" rel="noopener noreferrer">page link</a>
  </page-link>
</template>

<script type="application/javascript">
import { defineComponent } from 'vue';
import PageLink from '../components/PageLink.vue';

export default defineComponent({
  name: 'Layout8',
  components: {
    PageLink
  }
})
</script>