<template>
  <div class="flex justify-between border-b-2 px-4 hover:shadow-2xl hover:bg-gray-50 rounded-lg border-gray-300 mb-3">
    <div class="flex justify-start">
      <div class="text-gray-600 mt-4 mr-2">
        <svg class="w-7 h-7 fill-current"
            viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
          <g>
          <path d="M20,21.569c-0.095,0-0.189-0.021-0.282-0.062L5.434,15.115C5.165,14.995,4.994,14.72,5,14.413
            c0.006-0.303,0.191-0.578,0.46-0.683l14.286-5.681C19.828,8.017,19.913,8,20,8c0.086,0,0.172,0.017,0.254,0.049l14.285,5.679
            c0.275,0.11,0.455,0.378,0.461,0.683c0.008,0.308-0.163,0.584-0.434,0.704L20.281,21.51C20.192,21.549,20.096,21.569,20,21.569
            L20,21.569z M7.626,14.468l12.339,5.522l12.409-5.522L20,9.549L7.626,14.468z"/>
          <path d="M5.434,20.49c-0.361-0.163-0.53-0.604-0.376-0.983c0.113-0.275,0.372-0.454,0.659-0.454c0.097,0,0.191,0.021,0.282,0.062
            l13.967,6.249l14.037-6.249c0.092-0.042,0.186-0.062,0.283-0.062c0.286,0,0.544,0.177,0.656,0.454
            c0.155,0.379-0.014,0.82-0.376,0.983L20,27.008L5.434,20.49z"/>
          <path d="M5.434,25.48c-0.362-0.164-0.531-0.604-0.376-0.981c0.113-0.275,0.372-0.454,0.659-0.454c0.097,0,0.191,0.021,0.282,0.061
            l13.967,6.25l14.037-6.25c0.09-0.039,0.186-0.061,0.283-0.061c0.286,0,0.544,0.179,0.656,0.454
            c0.155,0.378-0.014,0.819-0.375,0.981L20,32L5.434,25.48z"/>
        </g>
        </svg>
      </div>
      <div class="text-gray-500 uppercase py-4 animate-pulse font-semibold hover:text-gray-400 cursor-help">
        Component
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SingleComponent'
})
</script>