import 'core-js';
import Vue from 'vue';
import Vuex from 'vuex';
import '@src/index.scss';
import DocumentEditor from '@layouts/DocumentEditor/DocumentEditor.vue';
import {store} from '@src/store/Store';

Vue.use(Vuex);

new Vue({
    el: '#App',
    components: {
        'document-editor-cmp': DocumentEditor,
    },
    data: function () {
        return {};
    },
    store,
    template: '<document-editor-cmp></document-editor-cmp>',
});


window.addEventListener('message', (e) => {
    if (e.data && typeof e.data === 'string' && e.data.match(/webpackHotUpdate/)) {
        console.log('hot reload happened');
        console.clear();
    }
});
