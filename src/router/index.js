import Vue from 'vue';
import VueRouter from 'vue-router';
import movie from './movie'
import cinema from './cinema'
import news from './news'
import mine from './mine'
Vue.use(VueRouter);

const router = new VueRouter({
    mode:'hash',
    routes:[
       {
           path:'/',
           redirect:'/movie'
       },
       movie,
       cinema,
       news,
       mine,
       {
            path:'/login',
            name:'login',
            component:()=>import ('@pages/login')
       }
    ],
})
router.beforeEach((to,from,next)=>{
    if(to.path!=='/login' && to.meta.requirePass === true){
        if(localStorage.getItem('token')){
            next();
        }else{
            next({name:'login',params:{to:to.path}})
        }
    }else{
        next();
    }
})
export default router;