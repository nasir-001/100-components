<template>
  <div class="bg-layout30backgroundColor h-screen">
    <div class="bg-layout30cardColor top-10 sticky rounded-md w-4/6 h-5/6 mx-auto">
      <div class="flex justify-evenly mx-12">
        <div class="w-2/3">
          double
        </div>
        <div class="w-52 bg-layout30smallCardColor h-88 mt-20 border border-white">
          <div class="pt-4 text-sm pl-4 font-bold text-gray-800">
            Why choose us?
          </div>
          <div class="flex justify-start mx-4 mt-6">
            <div class="text-gray-800">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
              <path d="M40.267,14.628L20.974,33.921l-9.293-9.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l10,10
                c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l20-20c0.391-0.391,0.391-1.023,0-1.414S40.657,14.237,40.267,14.628z
                "/>
              </svg>
            </div>
            <div class="text-gray-700 text-xs font-semibold mt-1 ml-1">
              Experienced mentors
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
  name: 'Layout30'
})
</script>