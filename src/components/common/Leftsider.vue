
<style media="screen">
    .left-sider {
        width: 224px;
        background: #404040;
        position: absolute;
        overflow: auto;
        padding-bottom: 24px;
        left: 0px;
        top: 51px;
        min-height: 100%;
    }
    .menu{
        color: #999;
    }
    .menu h5{
        color: #999;
        padding: 8px 16px;
        margin: 0px;
    }
    .menu-submenu-title{
        padding: 0 16px 0 28px;
        font-size: 12px;
        line-height: 42px;
        height: 42px;
        position: relative;
        cursor:pointer;
    }
    .menu-submenu-title:hover, .menu-submenu-title:hover i{
        color: #2db7f5;
    }
    .menu-submenu-title *{
        display: inline-block;
        vertical-align: middle;
    }
    .menu-submenu-title em{
        font-size: 14px;
    }
    .menu-submenu-title i{
        float: right;
        color: #999;
        font-size: 18px;
    }
    .menu-submenu-title span{
        margin-left: 5px;
    }
    .menu-dark{
        background: #333;
    }
    .menu-dark a{
        display: block;;
        color: #999;
        padding-left: 48px;
        text-decoration: none;
        line-height: 42px;
        height: 42px;
    }
    .menu-dark a:hover{
        color: #fff;
    }
    a.v-link-active{
        background: #2db7f5;
        color: #fff;
    }
    .left-nav-hr{
        width: 90%;
        margin: 0 auto;
        border-top: 1px solid #404040;
    }
</style>

<template>

<div class="left-sider">
    <div class="menu">
        <!--左侧菜单-->
        <div>
            <h5>订单管理</h5>
            <ul class="list-unstyled">
                <li>
                    <ul class="menu-dark">
                        <li v-for="item in leftNavList" class="menu-item-selected">
                            <a v-link='{ path: item.path}'>
                                {{item.name}}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script type="text/javascript">

    /**
     * getPermissions是vuex里面的数据，
     * 顶部菜单路由切换的时候，同时改变vuex里面的Permissions值
     * 该值主要是给watch监控变化，更改左侧菜单内容
     */
    import {getPermissions}     from    '../../vuex/getters'
    import {leftSider}          from    '../../config.js'

    export default{
        data(){
            return{
                leftNavList:[]
            }
        },
        vuex:{
            getters:{
                permissions:getPermissions
            }
        },
        watch:{
            /**
             * 根据watch监控路由变化，填充对应的菜单
             * 菜单的数据在config.js里面的leftSider常量
             */
            'permissions.tag':function(val,oldval){
                this.$set('leftNavList',leftSider[val])
            }
        }
    }
</script>
