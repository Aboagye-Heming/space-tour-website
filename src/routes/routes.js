const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/crew",
    name: "crewPage",
    component: () => import("@/pages/CrewPage.vue"),
  },
  {
    path: "/destination",
    name: "destinationPage",
    component: () => import("@/pages/DestinationPage.vue"),
  },
  {
    path: "/tech",
    name: "TechPage",
    component: () => import("@/pages/TechPage.vue"),
  }
];
export default routes;
