<template>
  <div class="bg-gray-900 font-sans leading-normal tracking-normal mt-12">
    <nav class="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
      <div class="flex flex-wrap items-center">
        <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <a href="#">
                <span class="text-xl pl-2">9JAStream</span>
            </a>
        </div>
        <Search/>      
        <TopBar/>
      </div>
    </nav>

    <div class="flex flex-col md:flex-row">
        <SideBar/>
        <div class="main-content flex-1 bg-gray-100 mt-12 mx-auto md:mt-2 pb-24 md:pb-5">
            <router-view></router-view>
            
        </div>
    </div>
  </div>
</template>
<script>
  import SideBar from './parts/sidebar.vue'
  import Search from './parts/search.vue'
  import TopBar from './parts/TopBar.vue'
  export default {
    components: {
      SideBar,
      Search,
      TopBar
    },
    mounted() {

    },
    beforeRouteEnter (to, from, next)
    {
      // determine if user is and admin by role
      next();
      // console.log(from)
    }
  }
</script>