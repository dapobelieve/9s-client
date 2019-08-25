<template>
  <div class="flex justify-center items-center">
    <div class="log bg-green-700 md:w-1/2 md:flex hidden p-4 items-center justify-center">
      <div class="">
        <img class="my-img" src="../assets/img/auth.svg">
        <div class="flex flex-col justify-center">
          <div class="text-white font-bold text-xl self-center">Let’s get you set up</div>
          <p class="text-white font-bold self-center">
            It should only take a couple of minutes
            to pair with your watch
          </p>
          
        </div>
      </div>
    </div>
    <div class="log bg-white md:w-1/2 w-full flex items-center justify-center">
      <div class="">
        <form class="w-full">
          <div class="uppercase justify-center text-3xl">
            <router-link class="hover:underline-none" to="/">
              <span class="font-thin tracking-tighter">9JA</span>
              <span class="font-black tracking-tighter">STREAM</span>
            </router-link>
          </div>
          <p class="text-green-500 font-bold text-xl text-center mb-10">Create an account</p>
          <ErrorAlert v-if="error" :error_msg="error_msg" class="mb-4"></ErrorAlert>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >Full Name</label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"

                type="text"
                placeholder="Jane Doe"
                v-model="data.name"
                required
              >
            </div>
          </div>
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

                type="email"
                placeholder="mail@9jastreeam.com"
                v-model="data.email"
                required
              >
              <small class="text-red-800" v-if="errors.email">{{ errors.email[0] }}</small>
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for=""
              >Password</label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id=""
                type="password"
                placeholder="******************"
                required
                v-model="data.password"
              >
              <small class="text-red-800" v-if="errors.password">{{ errors.password[0] }}</small>
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for=""
              >Confirm Password</label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id=""
                type="password"
                placeholder="******************"
                required
                v-model="data.password_confirmation"
              >
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <pulse-loader v-if="loading"></pulse-loader>
              <button
                :disabled="loading"
                class="shadow bg-green-500 hover:bg-white hover:text-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                @click="register() "
              >Sign Up</button>
              <p>
                Already have an account?
                <router-link class="underline" to="/login">Sign In</router-link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import ErrorAlert from '../components/ErrorAlert';

export default {
  data() {
    return {
      data: {},
      loading: false,
      error: false,
      error_msg: '',
      errors: {},
    };
  },
  components: {
    PulseLoader,
    ErrorAlert,
  },
  methods: {
    register() {
      this.error = false;
      this.error_msg = '';
      if (this.data.name == '') {
        this.error = true;
        this.error_msg = 'You seem to have forgotten to enter your name';
        return;
      }

      if (this.data.email == '') {
        this.error = true;
        this.error_msg = 'Your email is a neccesity';
        return;
      }

      if (this.data.password !== this.data.password_confirmation) {
        this.error = true;
        this.error_msg = 'Passwords dont match';
        return;
      }

      const self = this;
      this.loading = true;

      axios
        .post('http://167.71.139.209/api/register', this.data)
        .then((response) => {
          this.loading = false;
          // we may not need to do this if check if it gets here its successful
          localStorage.setItem('9S-User', response.data.user);
          localStorage.setItem('9S-token', response.data.token);
          this.$router.replace('/');
        })
        .catch((error) => {
          self.loading = false;
          this.errors = error.response.data.errors;
          console.log(this.errors);
          // console.log(error.response.data);
        });
    },
  },
};
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
