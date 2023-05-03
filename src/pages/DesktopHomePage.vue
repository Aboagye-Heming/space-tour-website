<template>
  <div class="hero">
    <NavBar />
    <div class="hero-content">
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
.hero {
  background-image: url("../assets/home/background-home-desktop.jpg");
  background-position: ;
  height: 100vh;
  margin-left: 0px;
  margin-right: 0px;
  
}

.hero-content {
  display: flex;
  justify-content: center;
  align-items:center;
  margin: 287px 165px 131px 165px;
  column-gap: 386px;
}
.hero-content-main {
  color: #d0d6f9;
  max-width: 450px;
  max-height: 382px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  text-align: left;
}
h3 {
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 4.725px;
}
h1 {
  color: #ffffff;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
}
.explore {
  background-color: white;
  border-radius: 100%;
  width: 274px;
  height: 274px;
  color: #0b0d17;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  /* identical to box height */

  letter-spacing: 2px;
}
</style>
