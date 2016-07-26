<style media="screen">
    .bodybg{
        padding:0px;
        background:#404040;
    }
</style>
<template>
    <div id="app" v-bind:class="{'bodybg':loginTag==true}" @click="closeDropdownsAndPopovers" class="container-fluid">
        <Topnav v-if="loginTag==true"></Topnav>
        <leftsider v-if="loginTag==true"></leftsider>
        <div class="layout-main">
            <breadcrumb v-if="loginTag==true"></breadcrumb>
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
    data(){
        return{
            loginTag:null,
        }
    },
    methods:{
        closeDropdownsAndPopovers:function(){
            this.$broadcast('hide::popover')
            this.$broadcast('hide::tooltip')
            this.$broadcast('hide::dropdown')
        }
    },
    ready(){
        if($.cookie('token')==null||$.cookie('token')==''||$.cookie('token')==undefined||$.cookie('userName')==undefined||$.cookie('userName')==''||$.cookie('userName')==null) {
            this.loginTag=false;
            return
        }else {
            this.loginTag=true;
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
