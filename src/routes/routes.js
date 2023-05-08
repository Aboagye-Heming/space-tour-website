import homePage from "@/pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("@/pages/HomePage.vue"),
  },
];
export default routes  