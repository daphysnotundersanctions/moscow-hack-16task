import { createRouter, createWebHistory } from "vue-router";
import Vacancys from "../pages/Vacancys.vue";
import Vacancy from "../pages/Vacancy.vue";
import Interns from "../pages/Interns.vue";
import Intern from "../pages/Intern.vue";

const routes = [
  {
    path: "/",
    component: Vacancys,
  },
  { path: "/:vacancy", component: Vacancy },
  { path: "/interns", component: Interns },
  { path: "/interns/:intern", component: Intern },
];

export const routerConfig = createRouter({
  history: createWebHistory(),
  routes,
});
