import Vue from 'vue';
import App from './App.vue';

import _ from 'lodash';
import axios from 'axios';

import '../scss/main.scss';

Vue.config.productionTip = true;

var app = new Vue({
    render: (h) => h(App)
}).$mount('#app');
