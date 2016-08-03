<style>

.code-box-meta {
    position: relative;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #E9E9E9;
}

.code-box-title {
    position: absolute;
    top: -10px;
    padding: 1px 1.1em;
    color: #777;
    border-radius: 6px;
    background: #fff;
}

.code-box-title span {
    color: #2db7f5;
}

.code-box-title span i {
    color: #ccc;
    margin-right: 5px;
}

.code-box-meta .row {
    margin: 10px 0px 0px 5px;
}

.code-box-meta .col-5 {
    color: #999;
}

.dl-horizontal {
    margin-bottom: 0px;
}

.dl-horizontal dt,
.dl-horizontal dd {
    padding: 5px 0px;
}

.dl-horizontal dt {
    text-align: left;
    color: #999;
}

.dl-horizontal dd {
    color: #666;
}


/*
时间轴
 */

.qa-message-list{
    margin-top: 10px;
}

.message-item {
    margin-bottom: 25px;
    margin-left: 40px;
    position: relative;
}

.message-item .message-inner {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 5px 10px;
    position: relative;
    font-size: 12px;
}

.message-item .message-inner:before {
    border-right: 10px solid #ddd;
    border-style: solid;
    border-width: 10px;
    color: rgba(0, 0, 0, 0);
    content: "";
    display: block;
    height: 0;
    position: absolute;
    left: -20px;
    top: 6px;
    width: 0;
}

.message-item .message-inner:after {
    border-right: 10px solid #fff;
    border-style: solid;
    border-width: 10px;
    color: rgba(0, 0, 0, 0);
    content: "";
    display: block;
    height: 0;
    position: absolute;
    left: -18px;
    top: 6px;
    width: 0;
}

.message-item:before {
    background: #fff;
    border-radius: 2px;
    bottom: -30px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    content: "";
    height: 100%;
    left: -30px;
    position: absolute;
    width: 3px;
}

.message-item:after {
    background: #fff;
    border: 2px solid #ccc;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    content: "";
    height: 15px;
    left: -36px;
    position: absolute;
    top: 10px;
    width: 15px;
}

.message-item .message-head .user-detail h5 {
    font-weight: normal;
    margin: 0;
}
.message-list-active{
    color: #87d068;
}

.message-list-active:after{
    border: 2px solid #87d068;
}
.OrderdetailsItemTitle{
    width: 100%;
    overflow: hidden;
    height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 5px;
}
.order-details-foot dt{
    width: auto;
}
.order-details-foot dd{
    margin-left: 70px;
}
.express-info-table th, .express-info-table td{
    width: 10%;
}
.express-info-table th:first-child, .express-info-table td:first-child{
    width: 40%;
}

</style>

<template>
    <div class="row" style="margin-bottom:20px;">
        <div class="col-md-6">
            <div class="code-box-meta">
                <div class="code-box-title">
                    <span><i class="glyphicon glyphicon-tags"></i>基本信息</span>
                </div>
                <dl class="dl-horizontal">
                    <dt>订购时间</dt>
                    <dd>{{details.data.orderCreateTimeFormat}}</dd>
                    <dt>订单状态</dt>
                    <dd>{{details.data.orderStatusName}}</dd>
                    <dt>订单类型</dt>
                    <dd>普通订单</dd>
                    <dt>客服备注</dt>
                    <dd></dd>
                </dl>
            </div>
        </div>
        <div class="col-md-6">
            <div class="code-box-meta">
                <div class="code-box-title">
                    <span><i class="glyphicon glyphicon-tags"></i>配送信息</span>
                </div>
                <dl class="dl-horizontal">
                    <dt>收货人</dt>
                    <dd>{{details.data.receiverName}}</dd>
                    <dt>手机号码</dt>
                    <dd>{{details.data.receiverMobile}}</dd>
                    <dt>配送地址</dt>
                    <dd>{{details.data.receiverAddress}}</dd>
                    <dt>买家留言</dt>
                    <dd></dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="row" style="margin-bottom:20px;">
        <div class="col-md-6">
            <div class="code-box-meta">
                <div class="code-box-title">
                    <span><i class="glyphicon glyphicon-tags"></i>支付信息</span>
                </div>
                <dl class="dl-horizontal">
                    <dt>支付状态</dt>
                    <dd>{{details.data.paymentStatusName}}</dd>
                    <dt>商品总额</dt>
                    <dd>¥{{details.data.orderAmount}}.00
                    </dd>
                    <dt>运费金额</dt>
                    <dd>¥{{details.data.deliveryFee}}.00
                    </dd>
                    <dt>优惠金额</dt>
                    <dd>¥
                        <s>{{details.data.couponAmount}}.00</s>
                    </dd>
                    <dt>应付金额</dt>
                    <dd>¥{{details.data.orderAmount}}.00</dd>
                </dl>
            </div>
        </div>
    </div>
    <div v-if="details.data.deliveryOrders!=undefined&&details.data.deliveryOrders.length>0" class="row" style="margin-bottom:20px;">
        <div class="col-md-12">
            <div class="code-box-meta">
                <div class="code-box-title">
                    <span><i class="glyphicon glyphicon-tags"></i>已发货商品</span>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <table class="express-info-table table order-list" style="margin-bottom:0px;">
                            <thead>
                                <tr>
                                    <th>商品</th>
                                    <th class="text-center">单价</th>
                                    <th class="text-center">数量</th>
                                    <th class="text-center">订单状态</th>
                                    <th class="text-center">商品总额</th>
                                    <th class="text-center">
                                        运费
                                    </th>
                                </tr>
                            </thead>
                        </table>
                        <table class="express-info-table table order-list" v-for="items in details.data.deliveryOrders">
                            <thead>
                                <tr>
                                    <td class="tbodyHead" colspan="6">
                                        <ul class="list-inline">
                                            <li style=:width:70px;>
                                                <b>包裹 - {{$index+1}}</b>
                                            </li>
                                            <li class="text-muted">{{items.deliveryCompanyName}} 运单号：{{items.deliveryOrderNo}}</li>
                                            <li>
                                                <span class="text-success">2016-07-20 12:57:05 [签收] 已签收,签收人是: 草签</span>
                                                <a @click="getExpressInfo({code:items.deliveryCompanyName,number:items.deliveryOrderNo})" href="javascript:;">更多</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <!--单件商品渲染-->
                                <tr v-for="itemsList in items.orderItems" v-if="items.orderItems.length<=1">
                                    <td>
                                        <img class="pull-left" style="height:80px;margin-right:5px;" v-bind:src="itemsList.specImg">
                                        <span class="pull-left">
                                            <p>
                                                <a href="javascript:void(0);">
                                                    {{itemsList.productName}}
                                                </a>
                                            </p>
                                            <p class="text-muted">
                                                {{itemsList.specName}}
                                            </p>
                                            <p class="text-muted">
                                                {{itemsList.color}}
                                            </p>
                                        </span>
                                    </td>
                                    <td class="text-center">
                                        <p>{{itemsList.sellPrice}}.00</p>
                                    </td>
                                    <td class="text-center">
                                        <p>{{itemsList.productQty}}</p>
                                    </td>
                                    <td class="text-center">
                                        <p>
                                            {{details.data.paymentStatusName}}
                                        </p>
                                    </td>
                                    <td class="text-center">
                                        <p>{{itemsList.productTotalAmount}}.00</p>
                                    </td>
                                    <td class="text-center">
                                        <p v-if="details.data.deliveryFee==''">
                                            免运费
                                        </p>
                                        <p v-if="details.data.deliveryFee!=''">
                                            {{details.data.deliveryFee}}.00
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="details.data.unShipOutOrderItems.length>0" class="row" style="margin-bottom:20px;">
        <div class="col-md-12">
            <div class="code-box-meta">
                <div class="code-box-title">
                    <span><i class="glyphicon glyphicon-tags"></i>未发货商品</span>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <table class="express-info-table table order-list" style="margin-bottom:0px;">
                            <thead>
                                <tr>
                                    <th>商品</th>
                                    <th class="text-center">单价</th>
                                    <th class="text-center">数量</th>
                                    <th class="text-center">订单状态</th>
                                    <th class="text-center">商品总额</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="items in details.data.unShipOutOrderItems">
                                    <td>
                                        <img class="pull-left" style="height:80px;margin-right:5px;" v-bind:src="items.specImg">
                                        <span class="pull-left">
                                            <p>
                                                <a href="javascript:void(0);">
                                                    {{items.productName}}
                                                </a>
                                            </p>
                                            <p class="text-muted">
                                                {{items.specName}}
                                            </p>
                                            <p class="text-muted">
                                                {{items.color}}
                                            </p>
                                        </span>
                                    </td>
                                    <td class="text-center">
                                        <p>{{items.sellPrice}}.00</p>
                                    </td>
                                    <td class="text-center">
                                        <p>{{items.productQty}}</p>
                                    </td>
                                    <td class="text-center">
                                        <p>
                                            {{details.data.paymentStatusName}}
                                        </p>
                                    </td>
                                    <td class="text-center">
                                        <p>{{items.productTotalAmount}}.00</p>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <modal :show.sync="showmodal">
        <h4 slot="header" class="modal-title">物流信息</h4>
        <button slot="close" type="button" class="close" @click="showmodal=false">&times;</button>
        <div slot="body">
            <div class="row" style="max-height:400px; overflow:scroll">
                <div class="col-md-12">
                    <dl class="dl-horizontal">
                        <dt>承运公司</dt>
                        <dd>{{expressModalInfo.com}}</dd>
                        <dt>货单运号</dt>
                        <dd>{{expressModalInfo.nu}}</dd>
                    </dl>
                    <div class="qa-message-list">
                        <div v-bind:class="{'message-list-active':$index==0}" class="message-item" v-for="item in expressModalInfo.list">
                            <div class="message-inner">
                                <div class="message-head clearfix">
                                    <div class="user-detail">
                                        <h5 class="handle">{{item.context}}</h5>
                                        <div class="post-meta">
                                            <div class="asker-meta">
                                                <span>{{item.time}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div slot="footer">
            <button @click="showmodal=false" type="button" class="btn btn-default expressButton">关闭</button>
        </div>
    </modal>
</template>
<script type="text/javascript">
    import Modal from '../../components/common/Modal'
    export default{
        props:['details'],
        data(){
            return{
                showmodal:false,
                expressModalInfo:{
                    com:'',
                    nu:'',
                    list:[]
                }
            }
        },
        methods:{
            //弹出层查询快递100物流接口
            getExpressInfo:function(data){
                this.$set('expressModalInfo.com',data.code);
                this.$set('expressModalInfo.nu',data.number)
                this.$set('showmodal',true);
                this.$http.post('http://apidev.dev.wowdsgn.com/home/express',{express_company:data.code,express_code:data.number}).then((response) => {
                    console.log(response);
                    this.$set('expressModalInfo.list',response.data.data.data)
                }, (response) => {
                });
            },

            //刚进入详情路由的时候查询快递接口
            readyExpressInfo:function(index,data){
                console.log('######查询收货内容#####');
                console.log(index);
                console.log(data);
            }
        },
        components:{
            Modal
        },
        watch:{
            'details':function(val,oldval){
                if (val.data.deliveryOrders!=undefined) {
                    if (val.data.deliveryOrders.length>0) {
                        for (let a = 0; a < val.data.deliveryOrders.length; a++) {
                            this.readyExpressInfo(a,{com:val.data.deliveryOrders[a].deliveryCompanyName,nu:val.data.deliveryOrders[a].deliveryOrderNo})
                        }
                    }
                }
            }
        }
    }
</script>
