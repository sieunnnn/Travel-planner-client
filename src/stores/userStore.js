
export default ({
    state: {
        loginUser: null,
        isLoggedIn: false
    },

    mutations: {
        setLoginUser(state, payload) {
            state.loginUser = payload;
            state.isLoggedIn = payload !== null;
        },
        logout(state) {
            state.loginUser = null;
            state.isLoggedIn = false;
        }
    },

    getters: {
        isLoggedIn: state => state.isLoggedIn,
        loginUser: state => state.loginUser,
        getUserProfileImgUrl: (state) => {
            return state.loginUser && state.loginUser.profileImgUrl;
        },
        getUserId: (state) => {
            return state.loginUser && state.loginUser.userId;
        }
    },

    actions: {
        setLoginUser({ commit }, loginUser) {
            commit('setLoginUser', loginUser);
        },
        logout({ commit }) {
            commit('logout');
        }
    }
})