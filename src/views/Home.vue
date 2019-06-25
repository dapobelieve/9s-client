<template>
  <div class="home">
    <Landing/>
    <div class="mx-16 mt-16">
      <!-- mini nav area -->
      <nav class="flex items-start border-b border-gray-400 mb-10">
        <div class="flex justify-between -mb-px ">
          <a href="#" class="px-3 pb-2 text-green-500 font-semibold tracking-normal border-b-2 border-green-700">Live Events</a>
          <a href="#" class="px-3 pb-2 text-gray-500 ml-6 border-b border-gray-400 tracking-normal font-semibold hover:border-green-700 hover:text-green-500">Upcoming</a>
          <a href="#" class="px-3 pb-2 text-gray-500 border-gray-400 ml-6 border-b tracking-normal font-semibold hover:border-green-700 hover:text-green-500">Past Events</a>
        </div>
      </nav>

      <div class="events flex">
        <div class="w-1/4 flex">
          <div class="bg-white shadow-xl rounded">
            <div>
              <img class="h-64 w-full " src="https://res.cloudinary.com/invitro/image/upload/v1561296154/9jastream/hx3b190wbxh62fq2bnir.jpg">              
            </div>
            <div class="my-3 ">
              <span class="font-bold text-black flex justify-start ml-4">Simi London Concert</span>
              <p class="flex justify-start ml-4 font-bold text-sm text-gray-600 tracking-wide">June 24th 2019 | 1700hrs</p>
            </div>            
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue';
import SingleEvent from '@/components/SingleEvent.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Landing,
    SingleEvent,
    Footer,
  },
};
</script>
