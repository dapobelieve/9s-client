<template>
  <div id="app">
    <RegModal/>
    <router-view/>
  </div>
</template>
<script>
  import Bus from './helpers/bus'
  import RegModal from './components/registerModal.vue'
  export default {
    components: {
      RegModal
    },
    mounted() {
      
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
