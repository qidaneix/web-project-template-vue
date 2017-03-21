import Vue from 'Vue';
import comHeader from '../component/comHeader.vue';
import comFooter from '../component/comFooter.vue';
import mainContent from './mainContent.vue';

import _ from 'lodash';
import axios from 'axios';

import '../scss/main.scss';

Vue.config.productionTip = true;

new Vue({
    el: 'body',
    components: {
        comHeader,
        comFooter,
        mainContent
    }
});
