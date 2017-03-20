import Vue from 'Vue';
import comHeader from '../component/comHeader.vue';
import comFooter from '../component/comFooter.vue';
import index from './index.vue';

import '../scss/main.scss';

Vue.config.productionTip = true;

new Vue({
    el: 'body',
    components: {
        comHeader,
        comFooter,
        index
    }
});
