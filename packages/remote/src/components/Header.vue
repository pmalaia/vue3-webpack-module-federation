<template>
  <div class="text-3xl bg-green-800 text-white p-5 flex">
    <div class="font-bold mr-5">Header</div>
    <div class="mr-5"></div>
    <div class="flex gap-3 flex-grow">
      <router-link to="/" class="mr-3">Home</router-link>
      <router-link to="/about" class="mr-3">About</router-link>
    </div>
    <div>{{ count }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store?.state?.count ?? 0;
    },
  },
};
</script>
