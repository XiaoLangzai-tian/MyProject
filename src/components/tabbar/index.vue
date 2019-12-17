<template>
    <div class="tabbar">
        <router-link :to="item.path" tag="div" v-for="(item,index) in tabbar" :key="index">
            <i :class="item.img"></i>
            <span>{{item.title}}</span>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'tabbar',
    data(){
        return {
            tabbar:[
                {
                    title:'电影',
                    img:'iconfont icon-dianying',
                    path:'/movie'
                },
                {
                    title:'影院',
                    img:'iconfont icon-yingyuan',
                    path:'/cinema'
                },
                {
                    title:'资讯',
                    img:'iconfont icon-xinwenzixun',
                    path:'/news'
                },
                {
                    title:'我的',
                    img:'iconfont icon-icon-test',
                    path:'mine'
                },
            ]
        }
    }
}
</script>
<style>
    .tabbar{
        border-top: 1px solid #ededed;
        width:100%;
        height:0.5rem;
        position:fixed;
        bottom:0;
        left:0;
        display:flex;
        justify-content: space-between;
    }
    .tabbar div{
        flex:1;
        font-size:12px;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .tabbar span{
        font-size: 10px;
        line-height: 12px;
        word-break: keep-all;
        color: #797d82;
        margin-top:5px;

    }
    .tabbar div i{
        width:21px;
        height:21px;
        font-size:21px;
    }
    .router-link-active{
        color: #ff5f16;
    }
</style>