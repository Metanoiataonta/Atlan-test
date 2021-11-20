export default {
    state: {
        controlEnabled: true,
    },
    getters: {},
    mutations: {
        toggleControl(state) {
            state.controEnabled = !state.controEnabled;
        },
    },
};
