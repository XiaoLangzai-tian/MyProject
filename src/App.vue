<template>
  <div id="app">
    <Tabbar v-if="$route.meta.flg"></Tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'app',
  components:{
    Tabbar,
  },
  
}
</script>

<style>
</style>
