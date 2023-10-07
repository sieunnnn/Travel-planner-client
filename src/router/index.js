import { createRouter, createWebHistory } from "vue-router";
import Feed from '../views/Feed.vue';
import Login from '../views/user/Login.vue';
import Signup from "../views/user/Signup.vue";
import Oauth from "../views/user/Oauth.vue";
import Profile from "../views/Profile.vue";

const routes = [
    {
        path: '/auth/login',
        component: Login
    },
    {
        path: '/auth/signup',
        component: Signup
    },
    {
        path:'/oauth/callback',
        component: Oauth
    },
    {
        path: '/feed',
        component: Feed
    },
    {
        path: '/profile',
        component: Profile
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;