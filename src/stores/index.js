import { createStore } from 'vuex';
import loginUser from './userStore.js';

export default createStore({
    modules: {
        loginUser
    }
});