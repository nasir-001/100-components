<template>
  <div class="bg-layout14backgroundColor h-screen">
    <div class="bg-white w-3/8 mx-auto rounded-xl h-164 sticky top-4 shadow-2xl">
      <div class="pt-20 font-bold text-gray-700 text-center text-lg">
        Generate a report for your website
      </div>
      <div class="mt-4 mx-24 text-sm font-semibold tracking-tight text-gray-600">
        Identify problems that affect your website's performance, accessibility and user experience.
      </div>
      <div class="mx-24 mt-10">
        <div class="flex justify-between">
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" class="rounded w-5 h-5 mr-1.5" checked />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              Performance
            </div>
          </div>
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" class="rounded w-5 h-5 mr-1.5" />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              Progressive Web App
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-2">
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" class="rounded w-5 h-5 mr-1.5" checked />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              Best practices
            </div>
          </div>
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" class="rounded w-5 h-5 mr-1.5" checked />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              Best practices
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-2">
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" class="rounded w-5 h-5 mr-1.5" checked />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              Accessibility
            </div>
          </div>
          <div class="flex justify-start w-1/2">
            <div class="">
              <input type="checkbox" class="rounded w-5 h-5 mr-1.5" checked />
            </div>
            <div class="text-xs mt-1.5 font-semibold text-gray-700">
              SEO
            </div>
          </div>
        </div>
      </div>
      <div class="mx-24 mt-16">
        <div class="text-xs font-bold">
          Device
        </div>
        <div class="flex justify-start">
          <div class="w-20 mr-2 border-2 cursor-pointer border-layout14buttonColor h-20 rounded-lg mt-2">
            <div class="">
              <svg class="w-8 h-8 mx-auto mt-4" viewBox="0 0 365.449 365.449"
                xml:space="preserve">
                <path d="M281.507,10.85C274.279,3.614,265.71,0,255.813,0H109.637c-9.9,0-18.464,3.617-25.697,10.85
                  c-7.233,7.229-10.85,15.796-10.85,25.693v292.361c0,9.896,3.617,18.462,10.85,25.693c7.233,7.234,15.797,10.852,25.697,10.852
                  h146.176c9.896,0,18.466-3.621,25.693-10.852c7.234-7.231,10.852-15.797,10.852-25.693V36.543
                  C292.358,26.646,288.745,18.083,281.507,10.85z M159.885,36.543h45.685c3.046,0,4.565,1.523,4.565,4.569
                  c0,3.045-1.52,4.57-4.565,4.57h-45.685c-3.045,0-4.568-1.525-4.568-4.57C155.316,38.066,156.839,36.543,159.885,36.543z
                  M198.861,345.036c-4.476,4.469-9.852,6.707-16.135,6.707c-6.28,0-11.656-2.238-16.13-6.707c-4.474-4.477-6.711-9.856-6.711-16.132
                  c0-6.283,2.24-11.66,6.711-16.133c4.471-4.469,9.851-6.714,16.13-6.714c6.284,0,11.66,2.245,16.135,6.714
                  c4.473,4.473,6.708,9.85,6.708,16.133S203.331,340.56,198.861,345.036z M264.954,283.225c0,2.471-0.903,4.62-2.714,6.424
                  c-1.813,1.807-3.949,2.707-6.42,2.707H109.637c-2.474,0-4.615-0.903-6.423-2.707s-2.712-3.953-2.712-6.424V82.229
                  c0-2.474,0.903-4.617,2.712-6.423c1.809-1.805,3.949-2.714,6.423-2.714h146.176c2.478,0,4.616,0.905,6.427,2.714
                  c1.811,1.807,2.71,3.949,2.71,6.423v200.995H264.954z"/>
              </svg>
            </div>
            <div class="text-xs text-gray-600 font-semibold text-center">
              Mobile
            </div>
          </div>
          <div class="w-20 ml-2 border-2 cursor-pointer border-gray-100 h-20 rounded-lg mt-2">
            <div class="">
              <svg class="w-8 h-8 mx-auto mt-4" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>Desktop Computer</title><path id="Desktop_Computer" data-name="Desktop Computer" d="M17,23V20H8v3H5v1H20V23ZM23.75,1H1.25A1.25,1.25,0,0,0,0,2.25v15.5A1.25,1.25,0,0,0,1.25,19h22.5A1.25,1.25,0,0,0,25,17.75V2.25A1.25,1.25,0,0,0,23.75,1ZM14,17.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5ZM23,15H2V3.25C2,3.11,2,3,2.12,3H22.88c.13,0,.12.11.12.25Z" fill="#0e1d25"/></svg>
            </div>
            <div class="text-xs text-gray-600 font-semibold text-center">
              Desktop
            </div>
          </div>
        </div>
      </div>
      <div class="mx-24 cursor-pointer mt-12 py-4 rounded-md bg-layout14buttonColor text-gray-300 font-semibold text-center text-sm">
        Generate report
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout14'
})
</script>