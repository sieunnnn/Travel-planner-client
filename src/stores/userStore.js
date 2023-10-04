
export default ({
    state: {
        loginUser: null
    },

    mutations: {
        setLoginUser(state, payload) {
            state.loginUser = payload;
        }
    },

    actions: {
        setLoginUser({ commit }, loginUser) {
            commit('setLoginUser', loginUser);
        }
    }
})