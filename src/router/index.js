import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content'
import mainst from '@/components/mainst'
import look from '@/components/look'
import fix from '@/components/fix'
import neaw from '@/components/neaw'

Vue.use(Router)
// const router = new Router({
export default new Router({
    routes:[
        {
            path: '/',
            redirect: '/content'
        },
        {
            path:'/content',
            name:'content',
            component:content,
        },
        {
            // children:[
            //     {
                    path:'/mainst',
                    name:'mainst',
                    component:mainst,
                // },
            //     {
            //         path:'/mmm',
            //         name:'mmm',
            //         component:mmm,
            //     },
            // ]
        },
        {
            path:'/look/:id',
            name:'look',
            component:look,
        },
        // {
        //     path:'/neaw/:id',
        //     name:'neaws',
        //     component:neaws,
        // },
        {
            path:'/fix/:id',
            name:'fix',
            component:fix,
        },
        {
            path:'/neaw',
            name:'neaw',
            component:neaw,
        }
    ]
})

// router.beforeEach((to, from, next) => {
//         if (to.path === '/content') {
//           next();
//         } else {
//           let token = localStorage.getItem('Authorization');
//           if (token === null || token === '') {
//             next('/content');
//           } else {
//             next();
//           }
//         }
//       });
//       export default router;
