<template>
  <div class="mt-20">
    <div class="bg-white shadow-2xl rounded-md bg-opacity-80 w-3/6 ml-52 h-100">
      <div class="pt-16 mx-16 font-semibold text-lg">
        Invite People
      </div>
      <div class="text-xs ml-16 text-gray-700 font-semibold pt-4">
        All invited people will be granted access to all sites within your organisation
      </div>
      <div class="flex mt-6 w-56 border border-gray-100 mx-16 justify-between bg-layout12InvitebackgroundColor rounded-full">
        <div class="text-xs font-semibold text-gray-700 py-2 px-3">
          Invite with email
        </div>
        <div class="bg-white m-0.5 rounded-full">
          <div class="py-1 text-xs font-semibold text-gray-700 px-3">
            Invite with link
          </div>
        </div>
      </div>
      <div class="mx-16 mt-8 font-semibold text-sm">
        Add to team
      </div>
      <div class="flex justify-between border-2 mt-1 border-gray-100 mx-16 bg-gray-100 rounded-md">
        <div class="ml-4 text-sm font-semibold py-3">
          https://examplelinktoshare/my-team/jid9890032
        </div>
        <div class="bg-layout12ButtonsColor m-0.5 text-sm rounded-md px-4 font-semibold pt-2 text-white">
          Copy link
        </div>
      </div>
      <div class="mx-16 text-xs text-gray-700 mt-4 font-semibold">
        People with organisational email will be able to join with a link. <i class="underline text-black cursor-pointer">Deactivating</i> it if you don't need this.
      </div>
    </div>
    <div class="flex justify-center mb-20">
      <div class="bg-white rounded-md h-96 -mt-10 -ml-32 bg-opacity-80 shadow-2xl w-3/7">
        second
      </div>
      <div class="bg-white rounded-md w-96 -mt-20 shadow-2xl bg-opacity-80 ml-20 h-100">
        <div class="flex justify-between mt-10 mx-10">
          <div class="font-semibold text-lg">
            Invite to Board
          </div>
          <div class="bg-gray-100 rounded-full w-10 h-10 text-xl text-gray-600 text-center font-thin">
            <p class="pt-1">X</p>
          </div>
        </div>
        <div class="mt-16 mx-10">
          <input type="text" class="border-2 border-gray-200 rounded-md w-full text-black bg-gray-100" placeholder="email@address.com">
        </div>
        <div class="mt-6 ml-10 text-gray-800 font-semibold text-sm">
          Invite with link
        </div>
        <div class="text-xs mt-2 font-semibold ml-10 text-gray-700">
          Anyone with link cana view your board. <i class="underline text-purple-600">Create Link</i>
        </div>
        <div class="mt-14 bg-layout12ButtonsColor rounded-md py-3 mx-10 text-white text-center">
          Send invitation
        </div>
      </div>
    </div>
  </div>
</template>

<script type="application/javascript">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout12'
})
</script>