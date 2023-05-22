import { createRouter, createWebHashHistory } from "vue-router";
import Vacancys from "../pages/Vacancys.vue";
import Vacancy from "../pages/Vacancy.vue";

const routes = [
  {
    path: "/",
    component: Vacancys,
  },
  { path: "/:vacancy", component: Vacancy },
];

export const routerConfig = createRouter({
  history: createWebHashHistory(),
  routes,
});
