import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router/index.js';

import _ from 'lodash';
import axios from 'axios';

import '../scss/main.scss';
import 'element-ui/lib/theme-default/index.css';

Vue.config.productionTip = true;

Vue.use(ElementUI);

var app = new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
