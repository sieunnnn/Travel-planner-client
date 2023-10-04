import { createStore } from 'vuex';
import loginState from './loginStateStore.js';
import loginUser from './userStore.js';

export default createStore({
    modules: {
        loginUser,
        loginState
    }
});