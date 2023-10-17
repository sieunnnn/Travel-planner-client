import { createRouter, createWebHistory } from "vue-router";
import Feed from '../views/Feed.vue';
import Login from '../views/user/Login.vue';
import Signup from "../views/user/Signup.vue";
import Oauth from "../views/user/Oauth.vue";
import Profile from "../views/Profile.vue";
import UserDelete from "../components/profile/UserDelete.vue";
import UserEdit from "../components/profile/UserEdit.vue";
import UserDetail from "../components/profile/UserDetail.vue";
import PlannerList from "../views/planner/PlannerList.vue";

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
        props: true,
        children: [
            {
                path: '',
                component: UserDetail,
                props: true,
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
    },
    {
        path: '/planner',
        component: PlannerList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;