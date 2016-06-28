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
                    <dd>{{details.created_at}}</dd>
                    <dt>订单状态</dt>
                    <dd>{{details.status_chs}}</dd>
                    <dt>订购IP</dt>
                    <dd>{{details.charge.client_ip}}</dd>
                </dl>
            </div>
        </div>
        <div class="col-md-6">
            <div class="code-box-meta">
                <div class="code-box-title">
                    <span><i class="glyphicon glyphicon-tags"></i>账号信息</span>
                </div>
                <dl class="dl-horizontal">
                    <dt>顾客姓名</dt>
                    <dd>{{details.address_username}}</dd>
                    <dt>联系方式</dt>
                    <dd>{{details.address_mobile}}</dd>
                    <dt>顾客组别</dt>
                    <dd>普通顾客</dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="row" style="margin-bottom:20px;">
        <div class="col-md-6">
            <div class="code-box-meta">
                <div class="code-box-title">
                    <span><i class="glyphicon glyphicon-tags"></i>配送信息</span>
                </div>
                <dl class="dl-horizontal">
                    <dt>收货人</dt>
                    <dd>{{details.address_username}}</dd>
                    <dt>手机号码</dt>
                    <dd>{{details.address_mobile}}</dd>
                    <dt>配送地址</dt>
                    <dd>{{details.address_full}}</dd>
                </dl>
            </div>
        </div>
        <div class="col-md-6">
            <div class="code-box-meta">
                <div class="code-box-title">
                    <span><i class="glyphicon glyphicon-tags"></i>支付信息</span>
                </div>
                <dl class="dl-horizontal">
                    <dt>支付状态</dt>
                    <dd>{{details.status_chs}}</dd>
                    <dt>支付方式</dt>
                    <dd>
                        <span v-if="details.pay_method=='ali'">
                            支付宝
                        </span>
                        <span v-if="details.pay_method=='weixin'">
                            微信支付
                        </span>
                    </dd>
                    <dt>支付金额</dt>
                    <dd>￥{{details.total}}.00</dd>
                    <dt>流水号码</dt>
                    <dd>{{details.charge.time_expire}}</dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="row" style="margin-bottom:20px;">
        <div class="col-md-6">
            <div class="code-box-meta">
                <div class="code-box-title">
                    <span><i class="glyphicon glyphicon-tags"></i>商品信息</span>
                </div>
                <div class="row">
                    <div class="col-md-6" v-for="items in details.items">
                        <div class="thumbnail">
                            <img v-bind:src="items.image" alt="通用的占位符缩略图">
                            <div class="caption">
                                <h5 class="OrderdetailsItemTitle">{{items.name}}</h5>
                                <p class="OrderdetailsItemTitle">
                                    规格：{{items.sku_title}}
                                </p>
                                <p class="OrderdetailsItemTitle">
                                    单价：￥{{items.price}}.00 * {{items.count}}件
                                </p>
                                <p class="OrderdetailsItemTitle">
                                    优惠：<span v-if="original_price='undefined'">￥0.00</span><span v-if="original_price!='undefined'">￥{{original_price}}.00</span>
                                </p>
                                <p class="OrderdetailsItemTitle">
                                    总价：￥{{items.total}}.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="code-box-meta">
                <div class="code-box-title">
                    <span><i class="glyphicon glyphicon-tags"></i>物流信息</span>
                </div>
                <dl class="dl-horizontal">
                    <dt>送货方式</dt>
                    <dd>普通快递</dd>
                    <dt>承运公司</dt>
                    <dd>顺丰速运</dd>
                    <dt>货单运号</dt>
                    <dd>201605012222</dd>
                </dl>
                <div class="qa-message-list">
                    <div class="message-item message-list-active">
                        <div class="message-inner">
                            <div class="message-head clearfix">
                                <div class="user-detail">
                                    <h5 class="handle">已签收,感谢使用顺丰,期待再次为您服务</h5>
                                    <div class="post-meta">
                                        <div class="asker-meta">
                                            <span>2016-05-06 18:38:54</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="message-item">
                        <div class="message-inner">
                            <div class="message-head clearfix">
                                <div class="user-detail">
                                    <h5 class="handle">已签收,感谢使用顺丰,期待再次为您服务</h5>
                                    <div class="post-meta">
                                        <div class="asker-meta">
                                            <span>2016-05-06 18:38:54</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="message-item">
                        <div class="message-inner">
                            <div class="message-head clearfix">
                                <div class="user-detail">
                                    <h5 class="handle">已签收,感谢使用顺丰,期待再次为您服务</h5>
                                    <div class="post-meta">
                                        <div class="asker-meta">
                                            <span>2016-05-06 18:38:54</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="message-item">
                        <div class="message-inner">
                            <div class="message-head clearfix">
                                <div class="user-detail">
                                    <h5 class="handle">已签收,感谢使用顺丰,期待再次为您服务</h5>
                                    <div class="post-meta">
                                        <div class="asker-meta">
                                            <span>2016-05-06 18:38:54</span>
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
    <div class="row" style="margin-bottom:20px;">
        <div class="col-md-12">
            <div class="code-box-meta">
                <div class="code-box-title">
                    <span><i class="glyphicon glyphicon-tags"></i>信息总览</span>
                </div>
                <div class="row order-details-foot">
                    <div class="col-md-3">
                        <h5>收货人信息</h3>
                        <dl class="dl-horizontal">
                            <dt>订购时间</dt>
                            <dd>{{details.created_at}}</dd>
                            <dt>订单状态</dt>
                            <dd>{{details.status_chs}}</dd>
                            <dt>订购IP</dt>
                            <dd>{{details.charge.client_ip}}</dd>
                        </dl>
                    </div>
                    <div class="col-md-3">
                        <h5>配送信息</h3>
                        <dl class="dl-horizontal">
                            <dt>配送方式</dt>
                            <dd>普通快递</dd>
                            <dt>运费</dt>
                            <dd>￥0.00</dd>
                        </dl>
                    </div>
                    <div class="col-md-3">
                        <h5>付款信息</h3>
                        <dl class="dl-horizontal">
                            <dt>付款方式</dt>
                            <dd>在线支付</dd>
                            <dt>商品总额</dt>
                            <dd>￥{{details.total}}.00</dd>
                            <dt>应付金额</dt>
                            <dd>￥{{details.total}}.00</dd>
                            <dt>运费金额</dt>
                            <dd>￥0.00</dd>
                            <dt>优惠金额</dt>
                            <dd>￥0.00</dd>
                        </dl>
                    </div>
                    <div class="col-md-3">
                        <h5>发票信息</h3>
                        <dl class="dl-horizontal">
                            <dt>发票类型</dt>
                            <dd>普通发票</dd>
                            <dt>发票抬头</dt>
                            <dd>个人</dd>
                            <dt>发票内容</dt>
                            <dd>明细</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        props:['details']
    }
</script>
