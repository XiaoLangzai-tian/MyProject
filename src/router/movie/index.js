export default {
    path:'/movie',
    name:'movie',
    component:()=>import ('@pages/movie'),
    meta:{
        flg:true,
        requirePass:false,
    }
}