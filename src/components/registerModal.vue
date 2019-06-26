<template>
    <sweet-modal icon="error" ref="register" hide-close-button blocking overlay-theme="dark" modal-theme="dark">
      This is an error…
      <a href="" @click.prevent="cancel(false)">Close</a>
    </sweet-modal>
</template>
<script>
  import Bus from '../helpers/bus.js';
  export default {
    mounted() {
      this.$refs.register.open()
    },
    methods: {
      cancel (state) {
        this.$refs.register.close();
        Bus.$emit('register.trigger', state)
      }
    }
  }
</script>