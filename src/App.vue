<template>
    <div id="app" @click="closeDropdownsAndPopovers" class="container-fluid" style="padding:0px; background:#404040;">
        <Topnav></Topnav>
        <leftsider></leftsider>
        <div class="layout-main">
            <breadcrumb></breadcrumb>
            <div class="containerPadding"><router-view keep-alive></router-view></div>
        </div>
    </div>
</template>

<script>

import Topnav from './components/common/Topnav'
import Leftsider from './components/common/Leftsider'
import Breadcrumb from './components/common/Breadcrumb'
import store from './vuex/store' // import 我们刚刚创建的 store

export default {
    components: {
        Topnav,
        Leftsider,
        Breadcrumb
    },
    methods:{
        closeDropdownsAndPopovers:function(){
            this.$broadcast('hide::popover')
            this.$broadcast('hide::tooltip')
            this.$broadcast('hide::dropdown')
        }
    },
    store // 在根组件加入 store，让它的子组件和 store 连接
}

</script>

<style media="screen">
    .layout-main{
        margin-left: 224px;
        overflow: hidden;
        background: #F4F4F4;
        position:relative;
    }
    .containerPadding{
        padding: 10px;
        background: #fff;
    }
</style>
