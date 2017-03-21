import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/foo',
            component: {
                template: '<div>foo</div>'
            }
        },
        {
            path: '/bar',
            component: {
                template: '<div>bar</div>'
            }
        }
    ]
});

export default router;
