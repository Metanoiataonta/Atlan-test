import Vue from 'vue';
import Vuex from 'vuex';
import doc from './modules/doc';
import form from '@src/store/modules/form';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    mutations: {},
    getters: {},
    modules: {
        doc,
        form,
    },
});
