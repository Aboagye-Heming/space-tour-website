<template>
  <desktopHomePage />
  <DestinationPage />
  <CrewPage />
</template>

<script>
import DesktopHomePage from "./pages/DesktopHomePage.vue";
import DestinationPage from "./pages/DestinationPage.vue";
import CrewPage from "./pages/CrewPage.vue"

export default {
  name: "App",
  components: {
    DesktopHomePage,
    DestinationPage,
    CrewPage,
  },
};
</script>

<style>
@import url("@/assets/css/style.css");
</style>
