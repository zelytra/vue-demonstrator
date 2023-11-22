import {createRouter, createWebHistory} from "vue-router";
import Home from "@components/Home.vue";
import Exercise1 from "@components/exercises/Exercise1.vue";
import Exercise2 from "@components/exercises/Exercise2.vue";
import Exercise3 from "@components/exercises/Exercise3.vue";
import Exercise4 from "@components/exercises/Exercise4.vue";
import Exercise5 from "@components/exercises/Exercise5.vue";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/exo1",
        name: "Static data",
        component: Exercise1
    },
    {
        path: "/exo2",
        name: "Ref",
        component: Exercise2
    },
    {
        path: "/exo3",
        name: "Props",
        component: Exercise3
    },
    {
        path: "/exo4",
        name: "Lifecycle",
        component: Exercise4
    },
    {
        path: "/exo5",
        name: "Slots",
        component: Exercise5
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;