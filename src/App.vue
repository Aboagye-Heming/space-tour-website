<template>
  <HomePage />
  <router-view></router-view>
</template>

<script>
import HomePage from "./pages/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
@import url("@/assets/css/style.css");
</style>
