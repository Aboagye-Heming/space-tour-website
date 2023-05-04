<template>
  <div class="tech-page">
    <NavBar />
    <p class="tech-title"><span> 03</span> Space launch 101</p>
    <div class="tech-content">
      <div class="tech">
        <div class="bulleting">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div class="tech-content-main">
          <p>The terminology...</p>
          <h2 class="tech-name">Launch vehicle</h2>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
    </div>
    <div>
      <img
        src="../assets/technology/image-launch-vehicle-landscape.jpg"
        alt=""
      />
    </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "TechPage",
  components: { NavBar },
};
</script>

<style scoped>
.tech-page {
  background-image: url(../assets/technology/background-technology-desktop.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
}
.tech-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tech-title {
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  margin-top: 90px;
  color: #ffffff;
}
.tech-title span {
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  margin-left: 8%;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
}
.tech {
  display: flex;
  justify-content: space-around;
  align-items:center;
  column-gap: 40px;
}
.bulleting p {
  width: 20px;
  height: 20px;
  padding: 22px;
  background-color: aliceblue;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: #ffffff solid 1px;
  color: #d0d6f9;
}
.tech-content-main {
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  width: 444px;
  height: 192px;
  margin-top: -100px;
}
.tech-name p {
  font-size: 56px;
  line-height: 64px;
  color: #ffffff;
}
img{
    width: 515px;
    height: 527px;
    margin-left: 300px;
    margin-top: -20px;
}
</style>
