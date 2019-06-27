<template>
  <div class="flex justify-center items-center">
    <div class="log bg-green-700 md:w-2/5 md:flex hidden  p-4 items-center justify-center">
      <div class="block">
        <img class="my-img" src="../assets/img/auth.svg">
        <p class="text-white font-bold text-xl">Let’s get you logged in</p>
        <p class="text-white font-bold">
          It should only take a couple of secounds
          to pair with your watch
        </p>
      </div>
    </div>
    <div class="log bg-white md:w-3/5 w-full flex items-center justify-center">
      <div class="block">
        <form class="w-full">
                    <div class="uppercase text-3xl items-center">
          <span class="font-thin tracking-tighter">9JA</span>
          <span class="font-black tracking-tighter">STREAM</span>
        </div>
            <p class="text-green-500 font-bold text-xl text-center mb-10">Sign In</p>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >Email</label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="email"
                placeholder="mail@9jastreeam.com"
              >
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-username"
              >Password</label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-username"
                type="password"
                placeholder="******************"
              >
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="shadow bg-green-500 hover:bg-white hover:text-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >Sign In</button>
              <p class="">Don't have an account? Sign Up</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.log {
  min-height: 100vh;
}

.my-img {
  width: 60%;
  height: 60%;
  margin: auto;
}
</style>