<template>
  <desktopHomePage />
  <DestinationPage />
</template>

<script>
import DesktopHomePage from "./pages/DesktopHomePage.vue";
import DestinationPage from "./pages/DestinationPage.vue";

export default {
  name: "App",
  components: {
    DesktopHomePage,
    DestinationPage,
  },
};
</script>

<style>
@import url("@/assets/css/style.css");
</style>
