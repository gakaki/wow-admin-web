<style media="screen">
    .bodybg{
        padding:0px;
        background:#404040;
    }

    /*ie浏览器提示*/
    .ietip{
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        background: #fff;
        z-index: 99999;
        display: table;
        width: 100%;
        height: 100%;
    }
    .ietip-box{
        display: table-cell;
        vertical-align:middle;
    }
    @font-face {
      font-family: 'iconfont';
      src: url('//at.alicdn.com/t/font_1470380891_7738957.eot'); /* IE9*/
      src: url('//at.alicdn.com/t/font_1470380891_7738957.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('//at.alicdn.com/t/font_1470380891_7738957.woff') format('woff'), /* chrome、firefox */
      url('//at.alicdn.com/t/font_1470380891_7738957.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url('//at.alicdn.com/t/font_1470380891_7738957.svg#iconfont') format('svg'); /* iOS 4.1- */
    }
    .ietip-box .iconfont{font-family:"iconfont"; font-size:16px;font-style:normal;}
    .ietip-box .list-inline li{
        margin: 0 05px;
    }
</style>
<template>
    <div id="app" v-bind:class="{'bodybg':loginTag==true}" @click="closeDropdownsAndPopovers" class="container-fluid">
        <div class="ietip" v-if="ietpis==true">
            <div class="ietip-box">
                <div class="well text-center">
                    <img src="./assets/img/opps.png" alt="" />
                    <h3 class="text-danger">请使用webkit内核浏览器</h3>
                    <h4 style="margin:20px 0;">
                        获得到更好的浏览体验
                    </h4>
                    <div>
                        <ul class="list-inline">
                			<li>
                                <a href="http://chrome.360.cn/" target="_blank">
                                    <i class="iconfont">&#xe603;</i>
                                    360极速浏览器
                                </a>
                			</li>
                            <li>
                                <a href="http://www.firefox.com.cn/" target="_blank">
                                    <i class="iconfont">&#xe602;</i>
                                    火狐浏览器
                                </a>
                			</li>
                            <li>
                                <a class="text-muted" href="http://www.opera.com/zh-cn/computer/windows" target="_blank">
                                    <i class="iconfont">&#xe601;</i>
                                    opera浏览器
                                </a>
                			</li>
                            <li>
                                <a class="text-muted" href="http://www.google.cn/chrome/browser/desktop/index.html" target="_blank">
                                    <i class="iconfont">&#xe600;</i>
                                    chrome浏览器
                                </a>
                			</li>
                            <li>
                                <a class="text-muted" href="https://www.apple.com/cn/safari/" target="_blank">
                                    <i class="iconfont">&#xe604;</i>
                                    safari浏览器
                                </a>
                			</li>
                		</ul>
                    </div>
                </div>
            </div>
        </div>
        <Topnav v-if="loginTag==true"></Topnav>
        <leftsider v-if="loginTag==true"></leftsider>
        <div class="layout-main">
            <breadcrumb v-if="loginTag==true"></breadcrumb>
            <div class="containerPadding"><router-view keep-alive></router-view></div>
        </div>
    </div>
</template>

<script>

//根据浏览器的高度设置内容区域高度
$(function(){
    $(".layout-main").css("min-height", $(window).height());
    $(window).resize(function() {
      $(".layout-main").css("min-height", $(window).height());
    });
})

import Topnav       from    './components/common/Topnav'
import Leftsider    from    './components/common/Leftsider'
import Breadcrumb   from    './components/common/Breadcrumb'
import store        from    './vuex/store'
import fuckIE       from    'fuck-ie'

export default {
    components: {
        Topnav,
        Leftsider,
        Breadcrumb
    },
    data(){
        return{
            ietpis:false,
            loginTag:$.cookie('loginTag')||false
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
        //判断是否ie浏览器
        let isIE_6_7_8 = fuckIE(6,7,8,9,10,11)
        let isAnyVersionOfIE = fuckIE();
        if (isAnyVersionOfIE) {
            this.$set('ietpis',true);
            $('body').css('overflow','hidden');
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
        padding: 20px;
        background: #fff;
    }
</style>
