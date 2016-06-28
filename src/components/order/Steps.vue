<template>
    <div class="sui-steps steps-auto">
        <div class="wrap" v-for="item in steps" v-if="status<3">
            <div class="current" v-if="item.key==status">
                <label><span class="round">{{item.key}}</span><span>{{item.name}}</span></label><i class="triangle-right-bg"></i><i class="triangle-right"></i>
            </div>
            <div class="current" v-if="item.key<status">
                <label><span class="round"><i class="glyphicon glyphicon-ok"></i></span><span>{{item.name}}</span></label><i class="triangle-right-bg"></i><i class="triangle-right"></i>
            </div>
            <div class="todo" v-if="item.key!=status&&item.key>status">
                <label><span class="round">{{item.key}}</span><span>{{item.name}}</span></label>
            </div>
        </div>
    </div>
    <div class="alert alert-success" v-if="status==3">
        <span class="glyphicon glyphicon-ok"></span> 订单已完成
    </div>
    <div class="alert alert-danger" v-if="status==20">
        <span class="glyphicon glyphicon-remove"></span> 订单已取消
    </div>
</template>
<script type="text/javascript">
    export default{
        props:['steps','status']
    }
</script>
