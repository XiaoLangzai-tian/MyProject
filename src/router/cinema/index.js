export default {
    path:'/cinema',
    name:'cinema',
    component:()=>import ('@pages/cinema'),
    meta:{
        flg:true,
        requirePass:false,
    }
}