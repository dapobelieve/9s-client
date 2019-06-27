<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-transparent p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <router-link to="/">
          <div class="uppercase text-3xl items-center">
            <span class="font-thin tracking-tighter">9JA</span>
            <span class="font-black tracking-tighter">STREAM</span>
          </div>
        </router-link>
      </div>
      <div class="block hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow md:flex md:items-center md:w-auto">
        <div class="text-sm md:flex-grow">
          <!-- <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >Docs</a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >Hello</a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >Blog</a>-->
        </div>
        <div>
          <router-link to="login">
            <button
              class="bg-green-500 text-white font-bold py-2 px-4 mx-2 focus:outline-none rounded"
            >Login</button>
          </router-link>
          <router-link to="register">
            <button
              class="bg-transparent-500 py-2 px-4 text-white border mx-2 hover:bg-white hover:text-green-500 border-solid border-white-800 font-bold py-2 px-4 rounded"
            >Register</button>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>