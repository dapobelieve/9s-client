<template>
    <sweet-modal icon="error" ref="register" hide-close-button blocking overlay-theme="dark" modal-theme="dark">
      This is an error…
    </sweet-modal>
</template>
<script>
  export default {
    mounted() {
      this.$refs.register.open()
    }
  }
</script>