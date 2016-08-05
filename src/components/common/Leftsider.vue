
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
        <!--订单管理菜单-->
        <div v-if="permissions.tag=='order'">
            <h5>订单管理</h5>
            <ul class="list-unstyled">
                <li>
                    <ul class="menu-dark">
                        <li class="menu-item-selected">
                            <a v-link='{ path: "/order/list"}'>
                                订单管理
                            </a>
                        </li>
                        <!-- <li>
                            <a v-link='{ path: "/order/refund"}'>
                                退款处理
                            </a>
                        </li> -->
                    </ul>
                </li>
            </ul>
        </div>

        <!--商品管理菜单-->
        <div v-if="permissions.tag=='goods'">
            <h5>商品管理</h5>
            <ul class="list-unstyled">
                <li>
                    <ul class="menu-dark">
                        <li class="menu-item-selected">
                            <a v-link='{ path: "/goods/addproducts"}'>
                                新增商品
                            </a>
                        </li>
                        <li class="menu-item-selected">
                            <a v-link='{ path: "/goods/list"}'>
                                商品管理
                            </a>
                        </li>
                            <!--
                        <li class="menu-item-selected">
                            <a v-link='{ path: "/goods/combination"}'>
                                组合商品管理
                            </a>
                        </li>
                        <li class="menu-item-selected">
                            <a v-link='{ path: "/goods/import"}'>
                                批量导入商品
                            </a>
                        </li>
                        <li class="menu-item-selected">
                            <a v-link='{path: "/goods/recycle"}'>
                                回收站
                            </a>
                        </li>
                        <hr class="left-nav-hr">
                        <li>
                            <a v-link='{ path: "/goods/brand"}'>
                                品牌
                            </a>
                        </li>
                        <li>
                            <a v-link='{ path: "/goods/designers"}'>
                                设计师
                            </a>
                        </li>
                        <hr class="left-nav-hr">
                        <li>
                            <a v-link='{ path: "/goods/category"}'>
                                分类管理
                            </a>
                        </li>
                        <li>
                            <a v-link='{ path: "/goods/category-attr-set"}'>
                                分类属性设置
                            </a>
                        </li>
                        <li>
                            <a v-link='{ path: "/goods/attribute"}'>
                                商品属性
                            </a>
                        </li> -->
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script type="text/javascript">
    import {getPermissions} from '../../vuex/getters'
    export default{
        vuex:{
            getters:{
                permissions:getPermissions
            }
        }
    }
</script>
