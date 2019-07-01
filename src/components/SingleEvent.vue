<template>
  <div class="bg-white">
    <div class="bg-gray-200 -my-4 mb-1">
      <HeaderComponent class="flex-start"/>      
    </div>
    <div class="bg-white">
      <div class=" md:w-3/5 mx-12 py-8">
        <div class=" px-4 py-3 shadow">
          <div class="mb-4">
            <iframe src="//iframe.dacast.com/b/131308/f/703794" width="750" height="450" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
          </div>
          <div class="flex items-center border-b border-gray-600 pb-4">
            <img class="h-12 w-12 object-contain border border-gray-500 rounded-full" src="https://res.cloudinary.com/invitro/image/upload/v1561583860/9jastream/il9mveyuqcem3okehd4q.jpg">
            <div class="font-bold ml-8 text-2xl">Simi London Concert</div>
          </div>
        </div>
      </div>
      <div class="md:w-2/5">
        
      </div>
    </div>
    
  </div>
</template>
<script>
import Bus from '../helpers/bus.js';
import HeaderComponent from './Header';
export default {
  components: {
    HeaderComponent
  },
  mounted() {
    // Bus.$emit('register.trigger', true);
  },
};
</script>

<style scoped>
</style>
