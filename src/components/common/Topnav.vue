<style>

.navbar{
    margin-bottom: 0px;
}

.navbar .navbar-text.navbar-right:last-child {
    margin-right: 0;
    line-height: inherit;
    margin-right: 15px;
}

.topNavLogo {
    width: 223px;
    text-align: center;
}

.topNavLogo img {
    width: 30px;
    margin-top: -10px;
}

.topNavLogo a {
    padding-left: 0px;
    font-size: 20px;
}

.topNavLogo * {
    display: inline-block;
    float: none !important;
}

.navbar-inverse{
    background-color: #404040;
}

.navbar-nav a.v-link-active{background: #666!important; color:#fff !important;}
.navbar-nav a.v-link-active:hover{background: #666!important; color:#fff !important;}
.topNav>li>a{ text-align: center;}
.topNav>li>a>em{margin-right: 3px;}
</style>

<template>

<nav class="navbar navbar-inverse navbar-static-top">
    <div class="navbar-header topNavLogo">
        <img class="pull-left" src="../../assets/topNavLogo.png" />
        <a class="navbar-brand">尖叫设计</a>
    </div>
    <div>
        <ul class="nav navbar-nav topNav">
            <li>
                <a v-link='{ path: "/index"}'><em class="glyphicon glyphicon-home"></em>首页</a>
            </li>
            <li>
                <a v-link='{ path: "/order"}'><em class="glyphicon glyphicon-th-large"></em>订单</a>
            </li>
            <li>
                <a v-link='{ path: "/goods"}'><em class="glyphicon glyphicon-picture"></em>商品</a>
            </li>
            <li><a><em class="glyphicon glyphicon-user"></em>顾客</a></li>
            <li><a><em class="glyphicon glyphicon-flag"></em>营销</a></li>
            <li><a><em class="glyphicon glyphicon-book"></em>故事</a></li>
            <li><a><em class="glyphicon glyphicon-shopping-cart"></em>采购</a></li>
            <li><a><em class="glyphicon glyphicon-briefcase"></em>仓储</a></li>
            <li><a><em class="glyphicon glyphicon-usd"></em>财务</a></li>
            <li><a><em class="glyphicon glyphicon-list-alt"></em>报表</a></li>
            <li><a><em class="glyphicon glyphicon-cog"></em>系统</a></li>
        </ul>
    </div>
    <div class="navbar-text navbar-right">
        <span class="glyphicon glyphicon-user"></span> {{userName}} | <a href="javascript:;" @click="loginOut">退出登录</a>
    </div>
</nav>

</template>

<script type="text/javascript">
    export default{
        data(){
            return{
                userName:$.cookie('realName')||''
            }
        },
        methods:{
            loginOut:function(){
                $.cookie('realName', '',{ path: "/"});
                $.cookie('userName', '',{ path: "/"});
                $.cookie('token', '',{ path: "/"});
                window.location.href="/login"
            }
        }
    }
</script>
