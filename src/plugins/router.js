import { createRouter, createWebHistory } from "vue-router";
import Intern from "../pages/Intern.vue";
import Interns from "../pages/Interns.vue";
import MyResumes from "../pages/MyResumes.vue";
import SingleResponse from "../pages/SingleResponse.vue";
import Responses from "../pages/Responses.vue";
import Vacancy from "../pages/Vacancy.vue";
import Vacancys from "../pages/Vacancys.vue";

const routes = [
  { path: "/", component: Vacancys },
  { path: "/:vacancy", component: Vacancy },
  { path: "/interns", component: Interns },
  { path: "/interns/:intern", component: Intern },
  { path: "/responses", component: Responses },
  { path: "/resumes", component: MyResumes },
  { path: "/responses/:resume", component: SingleResponse },
];

export const routerConfig = createRouter({
  history: createWebHistory(),
  routes,
});
