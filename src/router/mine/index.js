export default {
    path:'/mine',
    name:'mine',
    component:()=>import ('@pages/mine'),
    meta:{
        flg:true,
        requirePass:true,
    }
}