import {createRouter, createWebHistory} from "vue-router";
import Home from "@components/Home.vue";
import Exercise1 from "@components/exercises/Exercise1.vue";
import Exercise2 from "@components/exercises/Exercise2.vue";
import Exercise3 from "@components/exercises/Exercise3.vue";

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
    ,
    {
        path: "/exo2",
        name: "Exo2",
        component: Exercise2
    },
    {
        path: "/exo3",
        name: "Exo3",
        component: Exercise3
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;