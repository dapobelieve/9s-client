<template>
  <div class="home">
    <Landing/>
    <div class="mx-4 mt-4 md:mx-16 md:mt-16 mb-4">
      <!-- mini nav area -->
      <nav class="flex items-start border-b border-gray-400 bg-gray-300 sticky top-0 z-20 md:pt-0 pt-2 mb-4">
        <div class="flex justify-between -mb-px md:text-lg  text-xs">
          <a href="#" class="px-3 pb-2 text-green-500 font-semibold tracking-normal border-b-2 border-green-700">Live Events</a>
          <a  href="#" class="px-3 pb-2 text-gray-500 ml-6 border-b border-gray-400 tracking-normal font-semibold hover:border-green-700 hover:text-green-500">Upcoming</a>
          <a href="#" class="px-3 pb-2 text-gray-500 border-gray-400 ml-6 border-b tracking-normal font-semibold hover:border-green-700 hover:text-green-500">Past Events</a>
        </div>
      </nav>

      <div class="flex flex-wrap" v-if="!loading">
        <!--  -->
        <Event v-for="(event, i) in events" :key="i" :event="event" ></Event>
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
import Event from "@/components/EventComponent.vue";
import axios from "axios";
export default {
  name: "home",
  components: {
    Landing,
    SingleEvent,
    Footer,
    Event
  },
  data() {
    return {
      loading: true,
      events: []
    };
  },
  mounted() {
    const self = this;
    axios.get("http://134.209.24.105/api/v1/events")
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
      Bus.$emit("register.trigger", state)
    }
  }
};
</script>
