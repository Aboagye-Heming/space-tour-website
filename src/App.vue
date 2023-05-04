<template>
  <desktopHomePage />
  <DestinationPage />
  <CrewPage />
  <TechPage/>
</template>

<script>
import DesktopHomePage from "./pages/DesktopHomePage.vue";
import DestinationPage from "./pages/DestinationPage.vue";
import CrewPage from "./pages/CrewPage.vue"
import TechPage from './pages/TechPage.vue';

export default {
  name: "App",
  components: {
    DesktopHomePage,
    DestinationPage,
    CrewPage,
    TechPage,
  },
};
</script>

<style>
@import url("@/assets/css/style.css");
</style>
