import {createRouter, createWebHistory} from "vue-router";
import Home from "@components/Home.vue";
import Exercise1 from "@components/exercises/Exercise1.vue";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/exo1",
        name: "Exo1",
        component: Exercise1
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;