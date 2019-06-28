<template>
  <div class="flex justify-center items-center">
    <div class="log bg-green-700 md:w-2/5 md:flex hidden p-4 items-center justify-center">
      <div class="block">
        <img class="my-img" src="../assets/img/auth2.svg">
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
            <router-link class="hover:underline" to="/">
              <span class="font-thin tracking-tighter">9JA</span>
              <span class="font-black tracking-tighter">STREAM</span>
            </router-link>
          </div>
          <p class="text-green-500 font-bold text-xl text-center mb-10">Sign In</p>
          <ErrorAlert v-if="error" :error_msg="error_msg" class="mb-4"></ErrorAlert>
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
                v-model="data.password"
              >
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <pulse-loader v-if="loading" class="mt-2"></pulse-loader>
              <button
                class="shadow bg-green-500 hover:bg-white hover:text-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                @click="login"
              >Sign In</button>
              <p class>
                Don't have an account?
                <router-link class="underline" to="/register">Sign Up</router-link>
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
    getRole(token) {
      const self = this;
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      };
      axios
        .get("http://134.209.24.105/api/v1/user", options)
        .then(function(response) {
          if (response.status == "200" || response.status == "201") {
            console.log(response.data.data.email)
            let user = response.data.data;
            console.log(user)
            localStorage.setItem("9S-User", JSON.stringify(user));
            self.$router.push("/");
          } else {
            self.error = true;
            self.error_msg = "An error occured";
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    login() {
      this.error = false;
      this.error_msg = "";
      if (this.data.email == "") {
        this.error = true;
        this.error_msg = "Your email is a neccesity";
        return;
      }

      if (this.data.password == "") {
        this.error = true;
        this.error_msg = "You need to fill in your password";
        return;
      }

      const self = this;
      this.loading = true;

      axios
        .post("http://134.209.24.105/api/login", this.data)
        .then(function(response) {
          self.loading = false;
          if (response.status == "200" || response.status == "201") {
            console.log(response.data.token);
            localStorage.setItem("9S-token", response.data.token);
            self.getRole(response.data.token);
          } else {
            self.error = true;
            self.error_msg = "An error occured";
          }
        })
        .catch(function(error) {
          console.log("jjhbhb")
          self.loading = false;
          self.error = true;
          self.error_msg = error.response.data.error;
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
  width: 30%;
  height: 30%;
  margin: auto;
}
</style>