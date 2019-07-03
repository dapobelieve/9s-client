<template>
  <div class="bg-white">
    <div class="bg-gray-200 -my-4 mb-1">
      <HeaderComponent class="flex-start"/>      
    </div>
    <div class="bg-white">
      <div class="md:w-3/5 mx-2 md:mx-12 py-8">
        <div class="mb-2 sticky top-0">
          <div class="resp-container mb-3 shadow">
            <!-- uncomment this to see how it looks, very reponsive -->
            <iframe :src=src width="590" height="431" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>            
          </div>
        </div>
        <div class="flex md:border-b md:border-gray-200 pb-4">
          <img 
            class="h-8 w-8 md:h-12 md:w-12 object-contain border border-gray-500 rounded-full" 
            :src=event.image>
          <div class="ml-5">
            <div class="font-bold text-xl mb-2">{{ event.title }}</div>
            <p class="align-middle">
              {{ event.details }}
            </p>
            
          </div>
        </div>
      </div>
      <div class="md:w-2/5 bg-green-300">
        
      </div>
    </div>
    
  </div>
</template>
<script>
import Bus from '../helpers/bus.js';
import HeaderComponent from './Header';
import axios from  "axios";
export default {
  data () {
    return {
      event: {},
      src: null
    }
  },
  components: {
    HeaderComponent
  },
  // mounted() {
  //   // Bus.$emit('register.trigger', true);
  // },
  created() {
    let user = localStorage.getItem("9S-User");
    let token = localStorage.getItem("9S-token");
    user = JSON.parse(user);

    if (user && token) {
      this.authenticated = true;
      this.user = user;
      this.token = token;
    }
    axios.get(`http://134.209.24.105/api/v1/events/${this.$route.params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      this.event = response.data.data
      let src = this.event.meta;
      this.src = src.slice(src.indexOf("//"), src.indexOf('width'));
      this.src = this.src.slice(0, -2)
      // console.log(src)
    })
    .catch((error) => {
      console.log(error.respose.data)
    })
  }
};
</script>

<style scoped>
.resp-container {
  position: relative;
  overflow: hidden;
  padding-top:56.25%;
}
iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>
