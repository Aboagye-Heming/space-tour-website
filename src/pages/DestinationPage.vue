<template>
  <diV class="destination">
    <NavBar />
    <p class="destination-title"><span>01</span> Pick your destination</p>
    <div class="destination-point">
      <img
        class="destination-img"
        src="../assets/destination/image-moon.png"
        alt=""
      />

      <div class="destination-content">
        <div class="sub-nav-bar">
          <p class="active">Moon</p>
          <p>Mars</p>
          <p>Europa</p>
          <p>Titan</p>
        </div>
        <h2 class="destination-name">Moon</h2>
        <p class="destination-description">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div class="destination-avg-content">
          <div class="destination-distance">
            <p>Avg. distance</p>
            <p class="avg-distance">384,400 km</p>
          </div>
          <div class="destination-travel-time">
            <p>Est. travel time</p>
            <p class="est-time">3 days</p>
          </div>
        </div>
      </div>
    </div>
  </diV>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "DestinationPage",
  components: { NavBar },
};
</script>

<style scoped>
.destination {
  background-image: url(../assets/destination/background-destination-desktop.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
}
.destination-title {
  margin-top: 76px;
  color: #ffffff;
  margin-left: 11.5%;

  font-size: 28px;
  line-height: 34px;
  /* identical to box height */
  letter-spacing: 4.725px;
  color: #ffffff;
}
.destination-title span {
  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.25;
  margin-right: 28px;
}
.destination-point {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: #ffffff;
  column-gap: 180px;
}
.destination-img {
  width: 400px;
  height: 400px;
}
.destination-content {
  width: 445px;
  height: 472px;
  text-align: left;
}
.sub-nav-bar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 40px;
}
.sub-nav-bar .active {
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  padding-bottom: 12px;

  color: #ffffff;
  cursor: pointer;
  border-bottom: white solid 1px;
}
.destination-name {
  font-size: 100px;
  line-height: 115px;
  color: #ffffff;
}
.destination-avg-content {
  display: flex;
  column-gap: 79px;
  border-top: #383b4b solid 1px;
  padding-top: 28px;
  margin-top: 54px;
}
.destination-description {
  font-size: 18px;
  line-height: 20px;
  color: #d0d6f9;
}
.avg-distance {
  font-size: 28px;
  line-height: 20px;
  color: #ffffff;
}
.est-time {
  font-size: 28px;
  line-height: 32px;
  color: #ffffff;
}
</style>
