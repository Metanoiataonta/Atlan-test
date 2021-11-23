import Vue from 'vue';
import Vuex from 'vuex';
import doc from './modules/doc';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    mutations: {},
    getters: {},
    modules: {
        doc,
    },
});
