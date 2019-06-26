<template>
  <div id="app">
    <RegModal v-if="registerState"/>
    <router-view/>
  </div>
</template>
<script>
  import Bus from './helpers/bus.js'
  import RegModal from './components/registerModal.vue'
  export default {
    data () {
      return {
        registerState: false
      }
    },
    components: {
      RegModal
    },
    mounted() {
      Bus.$on('register.trigger', (state) => {
        this.registerState = state;
      })
    }
  }
</script>

<style>
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
