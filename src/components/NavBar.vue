<template>
  <header>
    <img src="../assets/shared/logo.svg" alt="logo" />

    <div class="header-icons">
      <p>00 Home</p>
      <p>01 Destination</p>
      <p>02 Crew</p>
      <p>03 Technology</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
img {
  background-color: white;
  border-radius: 100%;
  margin-left: 55px;
}
header {
  margin-top: -40px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  position: relative;
}
.header-icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 48px;
  margin-right: 165px;
}
.blur-bg {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  position: absolute;
  width: 830px;
  height: 96px;
  left: 610px;
}
</style>
