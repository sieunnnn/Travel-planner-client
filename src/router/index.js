import { createRouter, createWebHistory } from "vue-router";
import Feed from '../views/Feed.vue';
import Login from '../views/user/Login.vue';
import Signup from "../views/user/Signup.vue";
import Oauth from "../views/user/Oauth.vue";
import Profile from "../views/Profile.vue";
import UserDelete from "../components/profile/UserDelete.vue";
import UserEdit from "../components/profile/UserEdit.vue";
import UserDetail from "../components/profile/UserDetail.vue";

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
        component: Profile,
        children: [
            {
              path: '',
              component: UserDetail
            },
            {
                path:'update',
                component: UserEdit
            },
            {
                path: 'delete',
                component: UserDelete
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;