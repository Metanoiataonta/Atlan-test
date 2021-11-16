import Vue from 'vue';
import Vuex from 'vuex';
// import '@src/index.scss';

Vue.use(Vuex);

new Vue({
    el: '#App',
    data: function () {
        return {
            text: 'some text',
        };
    },
});
