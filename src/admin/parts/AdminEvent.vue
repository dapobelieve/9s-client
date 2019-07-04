<template>
  <div class="w-full md:w-1/3 px-3 mt-6">
    <div class="bg-white shadow rounded cursor-pointer">
      <div class="bg-gray-400">
        <img class="object-cover w-full h-48" :src="event.image" />
      </div>
      <div class="py-4">
        <span class="font-bold text-black flex text-xl justify-start ml-4">{{event.title}}</span>
        <p
          class="flex justify-start ml-4 font-bold text-sm text-gray-600 tracking-wide"
        >{{event.date}} </p>
      </div>

      <div class="m-2 p-2">
        <router-link :to="{name: 'edit-event', params: {id: event.id}}"
          class="text-white bg-green-500 font-bold block md:inline py-2 px-4 mx-2 focus:outline-none rounded"
        >Edit Event</router-link>
        <button
          @click="$refs.modal.open()"
          class="bg-red-500 text-white font-bold py-2 px-4 mx-2 focus:outline-none rounded"
        >Delete Event</button>
      </div>
    </div>
    <sweet-modal ref="modal" icon="warning">
      Are you sure you want to delete this event. This can't be undone
      <pulse-loader v-if="loading" class="mt-2"></pulse-loader>
      <div class="m-2 p-2">
        <button
          @click="$refs.modal.close()"
          class="text-white bg-green-500 font-bold block md:inline py-2 px-4 mx-2 focus:outline-none rounded"
        >Cancel</button>
        <button @click="deleteEvent"
          class="bg-red-500 text-white font-bold py-2 px-4 mx-2 focus:outline-none rounded"
        >Delete</button>
      </div>
    </sweet-modal>
  </div>
</template>
<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

export default {
  props: ["event"],
  data() {
    return {
      loading: false,
      events: [],
      error: false
    };
  },
  mounted() {
    // console.log(this.event);
  },
  methods: {
    deleteEvent() {
        const self = this;
        self.loading = true;
        self.error = false;
      axios
        .delete(`http://134.209.24.105/api/v1/events`,  { params: { id: event.id } })
        .then(response => {
          self.loading = false;
          console.log(response)

        })
        .catch(error => {
          self.loading = false;
          self.error = true;
          console.log(error.response.data);
        });
    }
  }
};
</script>
