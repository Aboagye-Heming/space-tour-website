<template>
  <header>
    <div class="nav">
      <img class="logo" src="../assets/shared/logo.svg" alt="logo" />
      <div class="line"></div>
      <div class="header-icons">
        <router-link to="/"> <p>00 Home</p></router-link>
        <router-link to="destination"> <p>01 Destination</p></router-link>
        <router-link to="crew"> <p>02 Crew</p></router-link>
        <router-link to="tech"> <p>03 Technology</p></router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
@import url("../assets/css/navBar.css");
</style>
