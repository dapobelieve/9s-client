<template>
  <div class="mt-12 font-bold">
    Add Event
    <form class="w-1/2 m-auto mt-8">
    <ErrorAlert v-if="error" :error_msg="error_msg" class="mb-4"></ErrorAlert>
    <SuccessAlert v-if="success"/>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >Event Title</label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="e.g Simi Live in Concert"
            value="e.g World Cup 2019"
            v-model="event.title"
          >
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >Event Details</label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-username"
            type="text"
            placeholder="A match between two great teams"
            v-model="event.details"
          >
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >Event Price</label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-username"
            type="number"
            placeholder="0"
            v-model="event.price"
          >
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >Event Link</label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-username"
            type="text"
            placeholder="www.webiste.com"
            v-model="event.link"
          >
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >Event Banner</label>
        </div>
        <div class="md:w-2/3">
          <input
            class="appearance-none w-full py-2 px-4 text-gray-700 leading-tight"
            id
            type="file"
            placeholder="******************"
            @change="onFileSelected"
            accept="image/*"
          >
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
        <pulse-loader v-if="loading"></pulse-loader>
          <button
            class="shadow bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="addEvent() "
          >Add event</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import ErrorAlert from "../../components/ErrorAlert";
import SuccessAlert from "../../components/SuccessAlert.vue";
import axios from "axios";
export default {
  data() {
    return {
      event: {
        link: ""
      },
      loading: false,
      error: false,
      success: false,
      error_msg: "",
      errors: {}
    };
  },
  components: {
    PulseLoader,
    ErrorAlert,
    SuccessAlert
  },
  methods: {
    onFileSelected(event){
      console.log(event.target.files[0])
    },
    addEvent() {
      this.error = false;
      this.error_msg = "";
      this.success = false;
      if (this.event.title == "") {
        this.error = true;
        this.error_msg = "You seem to have the event title";
        return;
      }

      if (this.event.details == "") {
        this.error = true;
        this.error_msg = "Kindly enter the event description";
        return;
      }

      if (this.event.price == "") {
        this.error = true;
        this.error_msg = "Kindly enter the event price";
        return;
      }

      if (this.event.image == "") {
        this.error = true;
        this.error_msg = "Kindly upload the event banner";
        return;
      }

      const self = this;
      this.loading = true;

      let fd = new FormData();
      fd.append("title", this.event.title);
      fd.append("details", this.event.details);
      fd.append("price", this.event.price);
      // fd.append("image", this.event.image);
      fd.append("link", this.event.link);

      axios
        .post("http://134.209.24.105/api/events", this.fd)
        .then(response => {
          self.loading = false;
          self.success = true;
          self.event = {
            link: ""
          };
        })
        .catch(error => {
          self.loading = false;
          self.error = true;
          self.error_msg = "An error occurred"
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>