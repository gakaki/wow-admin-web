<template>
    <Tab :name='tabname' @btn-click="setstatus"></Tab>
    <orderlist :list="orderList"></orderlist>
    <Pager :cur.sync="cur" :all.sync='orderList.totalPages' @btn-click="listen"></Pager>
</template>

<script type="text/javascript">

import Tab from '../../components/common/Tab'
import Orderlist from '../../components/order/Orderlist'
import Pager from '../../components/common/Pager'
import {getOrderlist} from '../../vuex/getters'
import {orderList, expressObj} from '../../vuex/actions'
export default {
    props: ['orderList'],
    data() {
        return {
            cur: 1,
            status:'100',
            tabname:[
                {tab:'所有订单',key:'100'},
                {tab:'待付款',key:'0'},
                {tab:'待发货',key:'1'},
                {tab:'已发货',key:'2'},
                {tab:'已完成',key:'3'},
                {tab:'已关闭',key:'20'}
            ]
        }
    },
    components: {
        Orderlist,
        Pager,
        Tab
    },
    vuex: {
        getters: {
            orderList: getOrderlist,
        },
        actions: {
            orderlist: orderList,
            Setexpressobj:expressObj
        }
    },
    methods: {
        setstatus:function(data){
            this.status=data.status;
            this.cur=1;
            this.orderlist({page: '1',status: this.status})
        },
        listen: function(data) {
            this.orderlist({page: data,status: this.status})
        }
    },
    ready: function() {
        this.orderlist({page: '1',status: this.status})
    },
    route: {
        activate: function(transition) {
            transition.next();
        },
        data({
            to: {
                params: {
                    orderlist
                }
            }
        }) {
            setTimeout(()=>{
                this.Setexpressobj({tag: false})
            },0)
        }
    }
}

</script>
