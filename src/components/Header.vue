<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-transparent p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <router-link to="/">
          <div class="uppercase text-3xl items-center">
            <img src="https://res.cloudinary.com/invitro/image/upload/v1562204383/9jastream/9slogo.png">
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
        <div class="text-sm md:flex-grow"></div>
        <div v-if="!authenticated">
            <router-link to="/login"
              class="bg-green-500 text-white font-bold py-2 px-4 mx-2 focus:outline-none rounded"
            >Login
          </router-link>
            <router-link to="/register"
              class="bg-transparent-500 py-2 px-4 text-white border mx-2 hover:bg-white hover:text-green-500 border-solid border-white-800 font-bold py-2 px-4 rounded"
            >Register
          </router-link>
        </div>
        <div v-if="authenticated">
          <button
            class="text-white font-bold block md:inline py-2 px-4 mx-2 focus:outline-none rounded"
          >Welcome {{user.name}}</button>
          <router-link :to="{name: 'admin-home'}" v-if="user.roles">
            <button
              class="bg-green-500 text-white font-bold py-2 px-4 mx-2 focus:outline-none rounded"
            >Admin Portal</button>
          </router-link>
          <button
            class="bg-transparent-500 py-2 px-4 text-white border mx-2 hover:bg-white hover:text-green-500 border-solid border-white-800 font-bold py-2 px-4 rounded"
            @click="logout() "
          >Log Out</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { join } from 'path';

export default {
  mounted() {
    let user = localStorage.getItem('9S-User');
    const token = localStorage.getItem('9S-token');
    user = JSON.parse(user);

    if (user && token) {
      this.authenticated = true;
      this.user = user;
      this.token = token;
    }
  },
  data() {
    return {
      user: {},
      token: '',
      authenticated: false,
    };
  },
  methods: {
    logout() {
      const user = localStorage.removeItem('9S-User');
      const token = localStorage.removeItem('9S-token');
      this.authenticated = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
