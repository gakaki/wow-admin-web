<template>
    <spinner id="spinner-box" :size="spinnerSize" :fixed="spinnerFixed" text="数据加载中..." ></spinner>
    <p class="text-primary pull-left"><span class="glyphicon glyphicon-list-alt"></span> 订单ID：{{$route.params.orderid}}</p>
    <p class="pull-right">
        <button v-if="orderDetails.data.orderStatus==1||orderDetails.data.orderStatus==2" @click="modalShow({tag:true,orderid:$route.params.orderid,name:orderDetails.data.receiverName,phone:orderDetails.data.receiverMobile,address:orderDetails.data.receiverAddress,itemlist:orderDetails.data.unShipOutOrderItems})" class="btn btn-info btn-sm">物流发货</button>
    </p>
    <Express :ordertag="'details'" :showbox="Getexpressobj.tag" :orderid="Getexpressobj.orderid" :address="Getexpressobj.address" :mobile="Getexpressobj.phone" :name="Getexpressobj.name" :itemslistarr="Getexpressobj.itemlist"></Express>
    <Steps :steps="steps" :status="orderDetails.orderStatus"></Steps>
    <Orderdetails :details="orderDetails"></Orderdetails>

</template>

<script type="text/javascript">
import Orderdetails                     from    '../../components/order/Orderdetails'
import Express                          from    '../../components/order/Express'
import Steps                            from    '../../components/order/Steps'
import {getOrderdetails,getExpressobj}  from    '../../vuex/getters'
import {orderDetails,expressObj}        from    '../../vuex/actions'
import spinner                          from    '../../components/common/spinner/Spinner';
import WebStorageCache                  from    'web-storage-cache'

export default {
    components: {
        Orderdetails,
        Steps,
        Express,
        spinner
    },
    data() {
        return {
            spinnerSize: 'lg',
            steps: [{
                name: '待付款',
                key: 0
            }, {
                name: '待发货',
                key: 1
            }, {
                name: '待收货',
                key: 2
            }, {
                name: '已完成',
                key: 3
            }],
        }
    },
    vuex: {
        getters: {
            orderDetails: getOrderdetails,
            Getexpressobj:getExpressobj
        },
        actions: {
            orderdetails: orderDetails,
            Setexpressobj:expressObj
        }
    },
    methods:{
        modalShow:function(data){
            this.Setexpressobj(data)
        },
        showloading:function(){
            this.$broadcast('show::spinner');
        }
    },
    watch:{
        'orderDetails': function (val, oldVal) {
            this.$broadcast('hide::spinner');
        }
    },
    detached(){
        this.Setexpressobj({tag: false});
    },
    route: {
        activate: function (transition) {
            setTimeout(() => {
                this.showloading();
            }, 0)
            transition.next();
        },
        data({ to: { params: {orderid}}}) {
            window.scrollTo(0, 0);
            this.orderdetails({orderCode: orderid});
            setTimeout(()=>{
                this.Setexpressobj({tag: false})
            },0)
        }
    }
}

</script>
