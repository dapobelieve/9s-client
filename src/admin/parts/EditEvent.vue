<template>
  <div class="mt-12 font-bold">
    Edit Event
    <form class="w-1/2 m-auto mt-8">
      <ErrorAlert v-if="error" :error_msg="error_msg" class="mb-4"></ErrorAlert>
      <SuccessAlert v-if="success" :success_msg="success_msg" />
      <div class="md:flex mb-6">
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
          />
        </div>
      </div>
      <div class="md:flex mb-6">
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
          />
        </div>
      </div>
      <div class="md:flex mb-6">
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
          />
        </div>
      </div>
      <div class="md:flex mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >Event Date</label>
        </div>
        <div class="md:w-2/3">
          <datetime class="w-6" v-model="event.date"></datetime>
        </div>
      </div>
      <div class="md:flex mb-6">
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
          />
        </div>
      </div>
      <div v-if="event.image" class="md:flex mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >Current Banner</label>
        </div>
        <div class="md:w-2/3">
          <span>
            <img :src=event.image>
          </span>
        </div>
      </div>
      <div class="md:flex mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >Event Banner</label>
        </div>
        <div class="md:w-2/3">
          <vueDropzone
            @vdropzone-removed-file="imageRemoved"
            @vdropzone-file-added="imageAdded"
            id="uploader2"
            :options="dropOptions2"
          ></vueDropzone>
        </div>
      </div>
      <div class="md:flex">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <pulse-loader v-if="loading"></pulse-loader>
          <button
            class="shadow bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="editEvent"
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
import { Datetime } from "vue-datetime";
import vueDropzone from "vue2-dropzone";
import moment from "moment";

export default {
  mounted() {
    let user = localStorage.getItem("9S-User");
    let token = localStorage.getItem("9S-token");
    user = JSON.parse(user);

    if (user && token) {
      this.authenticated = true;
      this.user = user;
      this.token = token;
    }
    this.getEvent();
  },
  data() {
    return {
      event: {
        link: "",
        image: ""
      },
      dropOptions2: {
        acceptedFiles: "image/*",
        url: "http://localhost:8000/api/image",
        maxFilesize: 5, // MB
        maxFiles: 1,
        chunking: true,
        preventDuplicates: true,
        chunkSize: 500, // Bytes
        thumbnailWidth: 150, // px
        thumbnailHeight: 150,
        addRemoveLinks: true,
        autoProcessQueue: false,
        dictDefaultMessage: `<i class='fa fa-file-image-o' style='font-size:100px; text-align: center'></i>
      <br> Upload Display Image  <span style='color: red'>Upload</span>`
      },
      loading: false,
      loading2: false,
      error: false,
      success: false,
      success_msg: "",
      user: {},
      token: "",
      error_msg: "",
      errors: {}
    };
  },
  components: {
    PulseLoader,
    ErrorAlert,
    SuccessAlert,
    vueDropzone,
    dateTime: Datetime
  },
  methods: {
    imageAdded(e) {
      this.event.newImage = e;
    },
    imageRemoved() {
      this.event.newImage = "";
    },
    addEvent() {
      const options = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${this.token}`
        }
      };

      this.error = false;
      this.error_msg = "";
      this.success_msg = "";
      this.success = false;
      if (!this.event.title) {
        this.error = true;
        this.error_msg = "You seem to have no event title";
        return;
      }

      if (!this.event.details) {
        this.error = true;
        this.error_msg = "Kindly enter the event description";
        return;
      }

      if (!this.event.price) {
        this.error = true;
        this.error_msg = "Kindly enter the event price";
        return;
      }

      if (!this.event.image) {
        this.error = true;
        this.error_msg = "Kindly upload the event banner";
        return;
      }

      if (!this.event.date) {
        this.error = true;
        this.error_msg = "Kindly set the event date";
        return;
      }

      let dat = moment(this.event.date).format("YYYY-MM-DD");
      console.log(dat);

      const self = this;
      this.loading = true;

      let fd = new FormData();
      fd.append("title", this.event.title);
      fd.append("details", this.event.details);
      fd.append("price", this.event.price);
      if (this.event.image != "") {
        fd.append("image", this.event.image);
      }
      fd.append("date", dat);
      fd.append("link", this.event.link);

      axios
        .post("http://134.209.24.105/api/v1/events", fd, options)
        .then(response => {
          self.loading = false;
          self.success = true;
          self.success_msg = "Event added successfully";
          self.event = {
            link: ""
          };
        })
        .catch(error => {
          self.loading = false;
          self.error = true;
          self.error_msg = "An error occurred";
          self.success_msg = "";
          console.log(error);
        });
    },
    getEvent() {
      const self = this;
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${self.token}`
        }
      };
      let id = this.$route.params.id;
      axios
        .get(`http://134.209.24.105/api/v1/events/${id}`, options)
        .then(response => {
          self.loading2 = false;
          // console.log(response.data.data);
          self.event = response.data.data;
        })
        .catch(error => {
          self.loading2 = false;
          self.error = true;
          self.error_msg = "An error occurred";
          self.success_msg = "";
          console.log(error);
        });
    },
    editEvent() {
      const options = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${this.token}`
      }
    };

    this.error = false;
    this.error_msg = "";
    this.success_msg = "";
    this.success = false;
    if (!this.event.title) {
      this.error = true;
      this.error_msg = "You seem to have no event title";
      return;
    }

    if (!this.event.details) {
      this.error = true;
      this.error_msg = "Kindly enter the event description";
      return;
    }

    if (!this.event.price) {
      this.error = true;
      this.error_msg = "Kindly enter the event price";
      return;
    }

    if (!this.event.image) {
      this.error = true;
      this.error_msg = "Kindly upload the event banner";
      return;
    }

    if (!this.event.date) {
      this.error = true;
      this.error_msg = "Kindly set the event date";
      return;
    }

    let dat = moment(this.event.date).format("YYYY-MM-DD");

    const self = this;
    this.loading = true;

    let fd = new FormData();
    fd.append("title", this.event.title);
    fd.append("details", this.event.details);
    fd.append("price", this.event.price);
    if (this.event.newImage) {
      fd.append("image", this.event.newImage);
    }
    fd.append("date", dat);
    fd.append("link", this.event.link);
    fd.append("_method", 'PUT');

    console.log(fd)

    axios.post(`http://134.209.24.105/api/v1/events/${this.event.id}`, fd, options)
      .then(response => {
        self.loading = false;
        self.success = true;
        self.success_msg = "Event added successfully";
        self.event = {
          link: ""
        };
      })
      .catch(error => {
        self.loading = false;
        self.error = true;
        self.error_msg = "An error occurred";
        self.success_msg = "";
        console.log(error);
      });
  }
  }
};
</script>

<style lang="scss" scoped>
</style>
