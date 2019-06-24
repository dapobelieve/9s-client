<template>
  <div class="home">
    <Landing/>
    <SingleEvent/>
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
