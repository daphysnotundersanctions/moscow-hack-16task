import { createRouter, createWebHashHistory } from "vue-router";
import Vacancys from '../pages/Vacancys.vue';

const routes = [
    {
        path: '/', component : Vacancys,
        
    }
]

export const routerConfig = createRouter({
    history: createWebHashHistory(),
    routes, 
})