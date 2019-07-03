<template>
  <div class="">
    <div class="bg-green-600">
      <HeaderComponent class="flex-start"/>      
    </div>
    <!-- <vue-friendly-iframe src='https://www.youtube.com/watch?v=Kkghev-P1bQ'></vue-friendly-iframe> -->
    <iframe src="https://www.youtube.com/watch?v=t2ByLmLnYJ8&t=4s" width="100vw"></iframe>



    
  </div>
</template>
<script>
import Bus from '../helpers/bus.js';
import HeaderComponent from './Header';
import axios from  "axios";
export default {
  data () {
    return {
      event: {}
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
      console.log(this.event)
      // console.log(response.data)
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
/* iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
} */

.vue-friendly-iframe {
  width : 800px;
  height: 1000px;
} 

iframe{
  height:600px;
  width: 100vh;
}
</style>
