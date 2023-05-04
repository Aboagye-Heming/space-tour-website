<template>
  <div class="crew-page">
    <NavBar />
    <div class="crew-content">
      <div class="crew-personality">
        <p class="crew-personality-heading"><span> 02 </span> Meet your crew</p>
        <p class="crew-title">Commander</p>
        <h3 class="crew-name">Douglas Hurley</h3>
        <p class="crew-profile">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
        <div class="circular-btn">
          <div class="circle active"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
      <img src="../assets/crew/image-douglas-hurley.png" alt="pic of douglas" />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "CrewPage",
  components: { NavBar },
};
</script>

<style scoped>
.crew-page {
  background-image: url(../assets/crew/background-crew-desktop.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
}
.crew-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
}
.crew-content img {
  width: 568.07px;
  height: 609px;
  margin-top: 1.5%;
}
.crew-personality {
  margin-left: 11.5%;
}
.crew-personality-heading {
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: #ffffff;
  margin-top: 76px;
  margin-bottom: 157px;
}
.crew-personality-heading span {
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
}
.crew-title {
  font-size: 32px;
  line-height: 37px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
}
.crew-name {
  font-size: 56px;
  line-height: 64px;
  color: #ffffff;
}
.crew-profile {
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  width: 444px;
  height: 128px;
}
.circular-btn{
    display: flex;
    align-items: center;
    column-gap: 24px;
    margin-top: 70px;
}
.circle {
  border: #ffffff solid 1px;
  width: 15px;
  height: 15px;
  border-radius: 100%;
}
.cirlce.active{
    color:#ffffff;
    
}
</style>
