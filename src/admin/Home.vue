<template>
  <div class="flex flex-wrap">
    <div class="flex flex-wrap" v-if="!loading">
      <!--  -->
      <AdminEvent v-for="(event, i) in events" :key="i" :event="event"></AdminEvent>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Bus from "../helpers/bus.js";
import Landing from "@/components/Landing.vue";
import SingleEvent from "@/components/SingleEvent.vue";
import Footer from "@/components/Footer.vue";
import AdminEvent from "./parts/AdminEvent.vue";
export default {
  name: "home",
  components: {
    Landing,
    SingleEvent,
    Footer,
    Event,
    AdminEvent
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
      .then(response => {
        self.loading = false;
        if (response.status == "200" || response.status == "201") {
          self.events = response.data.data;
        } else {
          self.error = true;
          self.error_msg = "An error occured";
        }
      })
      .catch(error => {
        // self.loading = false;
        // self.error = true;
        // self.error_msg = error.response.data.error;
        console.log(error.response.data);
      });
  }
};
</script>
