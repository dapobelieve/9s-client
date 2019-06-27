<template>
  <div class="home">
    <Landing/>
    <div class="mx-16 mt-16 mb-4">
      <!-- mini nav area -->
      <nav class="flex items-start border-b border-gray-400 mb-4">
        <div class="flex justify-between -mb-px ">
          <a href="#" class="px-3 pb-2 text-green-500 font-semibold tracking-normal border-b-2 border-green-700">Live Events</a>
          <a @click.prevent="trigger(true)" href="#" class="px-3 pb-2 text-gray-500 ml-6 border-b border-gray-400 tracking-normal font-semibold hover:border-green-700 hover:text-green-500">Upcoming</a>
          <a href="#" class="px-3 pb-2 text-gray-500 border-gray-400 ml-6 border-b tracking-normal font-semibold hover:border-green-700 hover:text-green-500">Past Events</a>
        </div>
      </nav>

      <div class="flex flex-wrap">
        <div v-for="x in 5" :key="x" class="w-full md:w-1/4 px-3 mt-6">
          <div class="bg-white shadow rounded cursor-pointer">
              <img class="" src="https://res.cloudinary.com/invitro/image/upload/v1561296154/9jastream/hx3b190wbxh62fq2bnir.jpg">              
              <div class="py-4">
                <span class="font-bold text-black flex text-xl justify-start ml-4">Simi London Concert</span>
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
import Bus from '../helpers/bus.js';
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
  methods: {
    trigger(state) {
      Bus.$emit('register.trigger', state)
    }
  }
};
</script>
