export default {
    state: {
        controlEnabled: true,
        showModal: false,
    },
    getters: {},
    mutations: {
        toggleControl(state) {
            state.controlEnabled = !state.controlEnabled;
            setTimeout(() => state.controlEnabled = !state.controlEnabled, 2000);
        },
        toggleModal(state) {
            state.showModal = !state.showModal;
            state.controlEnabled = !state.controlEnabled;
        },
    },
};
