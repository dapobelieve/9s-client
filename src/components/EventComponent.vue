<template>
  <div class="w-full md:w-1/4 px-3 mt-6">
    <div class="bg-white shadow rounded cursor-pointer">
      <div class="bg-gray-400">
        <img class="object-cover w-full h-48" :src=event.image>
      </div>
      <div class="py-4">
        <span class="font-bold text-black flex text-xl justify-start ml-4">{{event.title}}</span>
        <p
          class="flex justify-start ml-4 font-bold text-sm text-gray-600 tracking-wide"
        >{{event.date}} | 1700hrs</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['event'],
  mounted () {
    // console.log(event);
  }
  }
</script>