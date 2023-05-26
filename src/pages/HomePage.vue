<template>
  <div class="hero">
    <NavBar />
    <div class="hero-content container">
      <div class="hero-content-main">
        <h3>So, you want to travel to</h3>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <p class="explore">Explore</p>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "DestopHomePage",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
@import url("../assets/css/homePage.css");
</style>
