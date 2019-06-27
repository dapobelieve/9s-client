<template>
  <div class="flex justify-center items-center">
    <div class="log bg-green-700 md:w-2/5 md:flex hidden p-4 items-center justify-center">
      <div class="block">
        <img class="my-img" src="../assets/img/auth.svg">
        <p class="text-white font-bold text-xl">Let’s get you set up</p>
        <p class="text-white font-bold">
          It should only take a couple of minutes
          to pair with your watch
        </p>
      </div>
    </div>
    <div class="log bg-white md:w-3/5 w-full flex items-center justify-center">
      <div class="block">
        <form class="w-full">
          <div class="uppercase text-3xl items-center">
            <router-link class="hover:underline" to="/">
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
                id="inline-full-name"
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
                id="inline-full-name"
                type="email"
                placeholder="mail@9jastreeam.com"
                v-model="data.email"
                required
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
                required
                v-model="data.password"
              >
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-username"
              >Confirm Password</label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-username"
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
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import ErrorAlert from "../components/ErrorAlert";
export default {
  data() {
    return {
      data: {},
      loading: false,
      error: false,
      error_msg: ""
    };
  },
  components: {
    PulseLoader,
    ErrorAlert
  },
  methods: {
    register() {
      this.error = false;
      this.error_msg = "";
      if (this.data.name == "") {
        this.error = true;
        this.error_msg = "You seem to have forgotten to enter your name";
        return;
      }

      if (this.data.email == "") {
        this.error = true;
        this.error_msg = "Your email is a neccesity";
        return;
      }

      if (this.data.password !== this.data.password_confirmation) {
        this.error = true;
        this.error_msg = "Passwords dont match";
        return;
      }

      const self = this;
      this.loading = true;

      axios
        .post("http://134.209.24.105/api/register", this.data)
        .then(function(response) {
          self.loading = false;
          if (response.status == "200" || response.status == "201") {
            console.log(response.data);
            localStorage.setItem("9S-User", response.data.user);
            localStorage.setItem("9S-token", response.data.token);
            self.$router.push("/");
          } else {
            self.error = true;
            self.error_msg = "An error occured";
            // Dsiplay
            console.log(response);
          }
        })
        .catch(function(error) {
          self.loading = false;
          console.log(error);
        });
    }
  }
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