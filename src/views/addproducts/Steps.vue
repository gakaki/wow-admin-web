<style media="screen">
    .steps, .steps ul{
        width: 100%;
        font-size: 0px;
    }
    .steps *{
        display: inline-block;
        font-size: 14px;
    }
    .steps span{
        border:2px solid #ccc;
        width: 30px;
        height: 30px;
        line-height: 26px;
        text-align: center;
        border-radius: 100%;
        color: #ccc;
        margin: 0px 5px;
    }
    .steps em{
        font-style: normal;
    }
    .steps i{
        border-bottom: 1px solid #ccc;
        width: 90%;
        position: absolute;;
        top: 50%;
        left: 5%;
    }
    .steps li{
        position: relative;
    }
    .steps-current{
        color: #4cb9fc;
    }
    .steps-current span{
        border:2px solid #4cb9fc;
        color: #fff;
        background: #4cb9fc;
    }
    .steps-current i{
        border-bottom:1px solid  #4cb9fc;
    }
    .steps li div{
        background: #fff;
        position:relative;
        z-index: 2;
        padding-right: 10px;
    }
    /*.steps li:last-child i{
        width: 0px;
    }*/
</style>
<template>
    <div class="steps">
        <ul>
            <li v-bind:style="{ width: 100/stepsinfo.length + '%' }" v-bind:class="{'steps-current':item.state==stateinfo||item.state<stateinfo}" v-for="item in stepsinfo">
                <div>
                    <span v-if="item.state<stateinfo" class="glyphicon glyphicon-ok"></span>
                    <span v-if="item.state==stateinfo||item.state>stateinfo">{{$index+1}}</span>
                    <em>{{item.name}}</em>
                </div>
                <i></i>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    export default{
        props:[
            'stepsinfo',
            'stateinfo',
            'nowtag'
        ]
    }
</script>
