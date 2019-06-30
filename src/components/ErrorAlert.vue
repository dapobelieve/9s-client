<template>
<div role="alert">
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Danger
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    <p>{{error_msg}}</p>
  </div>
</div>
</template>

<script>
export default {
  props: ['error_msg'],
};
</script>

<style lang="scss" scoped>
</style>
