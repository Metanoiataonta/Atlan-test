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
