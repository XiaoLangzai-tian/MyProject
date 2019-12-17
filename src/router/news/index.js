export default {
    path:'/news',
    name:'news',
    component:()=>import ('@pages/news'),
    meta:{
        flg:false,
        requirePass:false,
    }
}