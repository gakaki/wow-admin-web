<style media="screen">
    .alert-box{
        position: relative;
        z-index: 999999;
    }
    .alert-fixed{
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        border-radius: 0px;
    }
    .alert-fixed .glyphicon{
        font-size: 18px;
        top: 3px;
        left: -5px;
    }
    .alert-fixed .glyphicon-remove{
        position: absolute;
        right: 15px;
        top: 18px;
        left: auto;
        color:#ccc;
        cursor:pointer;
        font-weight: normal;
    }
    .alert-fixed .glyphicon-remove:hover{
        color: #999;
    }
    .alertfade-transition {
        transition: opacity .3s ease;
    }
    .alertfade-enter,
    .alertfade-leave {
        opacity: 0;
    }
</style>
<template>
    <div class="alert-box">
        <div transition="alertfade" v-if:="alertshow" v-bind:class="type" class="alert-fixed alert text-center">
            <span v-if="type=='alert-success'" class="glyphicon glyphicon-ok-circle"></span>
            <span v-if="type!='alert-success'" class="glyphicon glyphicon-ban-circle"></span>
            <span v-if="type=='alert-danger'" class="glyphicon glyphicon-ban-sign"></span>
            {{info}}
            <span @click="alertshow=false" class="glyphicon glyphicon-remove"></span>
        </div>
    </div>
</template>
<script type="text/javascript">
    /**
     * 弹出通知组件存在4中样式
     * alert-success 成功
     * alert-info 普通提示
     * alert-warning 警告
     * alert-danger 错误
     * 图标显示
     * glyphicon-ok-circle 成功
     * glyphicon-ban-circle 错误
     * glyphicon-info-sign 普通提示/警告
     */
    import coerceBoolean from '../utils/coerceBoolean.js'
    export default{
        //props:['alertshow','type','info'],
        props:{
            alertshow:{
                type:Boolean,
                default: true,
                coerce: coerceBoolean,
                twoWay: true
            },
            type:{
                type: String
            },
            info:{
                type: String
            },
            duration: {
                type: Number,
                default: 3000
            },
        },
        watch:{
            alertshow(val){
                if (this._timeout) clearTimeout(this._timeout)
                if (val && Boolean(this.duration)) {
                    this._timeout = setTimeout(()=> this.alertshow = false, this.duration)
                }
            }
        }
    }
</script>
