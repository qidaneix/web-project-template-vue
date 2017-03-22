import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';

import _ from 'lodash';
import axios from 'axios';

import '../scss/main.scss';
import 'element-ui/lib/theme-default/index.css';

Vue.config.productionTip = true;

var app = new Vue({
    render: (h) => h(App)
}).$mount('#app');
