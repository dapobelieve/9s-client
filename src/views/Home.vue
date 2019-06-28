<template>
  <div class="home">
    <Landing/>
    <div class="mx-16 mt-16 mb-4">
      <!-- mini nav area -->
      <nav class="flex items-start border-b border-gray-400 mb-4">
        <div class="flex justify-between -mb-px">
          <a
            href="#"
            class="px-3 pb-2 text-green-500 font-semibold tracking-normal border-b-2 border-green-700"
          >Live Events</a>
          <a
            href="#"
            class="px-3 pb-2 text-gray-500 ml-6 border-b border-gray-400 tracking-normal font-semibold hover:border-green-700 hover:text-green-500"
          >Upcoming</a>
          <a
            href="#"
            class="px-3 pb-2 text-gray-500 border-gray-400 ml-6 border-b tracking-normal font-semibold hover:border-green-700 hover:text-green-500"
          >Past Events</a>
        </div>
      </nav>

      <div class="flex flex-wrap" v-if="!loading">
        <div v-for="(event, i) in events" :key="i" class="w-full md:w-1/4 px-3 mt-6">
          <div class="bg-white shadow rounded cursor-pointer">
            <div class="bg-gray-400">
              <img class="object-cover w-full h-48" :src=event.image>
            </div>
            <!-- <img
              class = "object-fit w-full"
              :src=event.image
            >-->
            <div class="py-4">
              <span class="font-bold text-black flex text-xl justify-start ml-4">{{event.title}}</span>
              <p
                class="flex justify-start ml-4 font-bold text-sm text-gray-600 tracking-wide"
              >{{event.date}} | 1700hrs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Bus from "../helpers/bus.js";
import Landing from "@/components/Landing.vue";
import SingleEvent from "@/components/SingleEvent.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    Landing,
    SingleEvent,
    Footer
  },
  data() {
    return {
      loading: true,
      events: []
    };
  },
  mounted() {
    const self = this;
    axios
      .get("http://134.209.24.105/api/v1/events")
      .then(function(response) {
        self.loading = false;
        if (response.status == "200" || response.status == "201") {
          self.events = response.data.data;
        } else {
          self.error = true;
          self.error_msg = "An error occured";
        }
      })
      .catch(function(error) {
        // self.loading = false;
        // self.error = true;
        // self.error_msg = error.response.data.error;
        console.log(error.response.data);
      });
  },
  methods: {
    trigger(state) {
      Bus.$emit("register.trigger", state);
    },
    getEvents() {
      // axios.get()
    }
  }
};
</script>
