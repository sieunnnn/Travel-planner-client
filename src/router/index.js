import { createRouter, createWebHistory } from "vue-router";
import Feed from '../views/Feed.vue';
import Login from '../views/user/Login.vue';
import Signup from "../views/user/Signup.vue";

const routes = [
    {
        path: '/feed',
        component: Feed
    },
    {
        path: '/auth/login',
        component: Login
    },
    {
        path: '/auth/signup',
        component: Signup
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;