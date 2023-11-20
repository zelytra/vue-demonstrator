import {createRouter, createWebHistory} from "vue-router";
import Home from "@components/Home.vue";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/exo1",
        name: "Logs",
        component: Home
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;