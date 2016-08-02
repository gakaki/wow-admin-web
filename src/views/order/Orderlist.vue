<template>
    <div class="well well-sm">
        <div class="row">
            <div class="col-md-12 right-head-search">
                <div class="form-inline">
                    <div class="clearfix">
                        <div class="form-group">
                            <label for="exampleInputName2">订单号</label>
                            <input type="text" class="form-control" placeholder="订单号">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName2">下单时间</label>
                            <my-datepicker :time.sync="startTime" :option="startTimeObj"></my-datepicker>
                        </div>
                        <div class="form-group">
                            <my-datepicker :time.sync="endTime" :option="endTimeObj"></my-datepicker>
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="form-group">
                            <label for="exampleInputName2">收货人姓名</label>
                            <input type="text" class="form-control" placeholder="收货人姓名">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName2">收货人手机</label>
                            <input type="text" class="form-control" placeholder="收货人手机">
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="form-group">
                            <label for="exampleInputName2">商品名称</label>
                            <input type="text" class="form-control" placeholder="商品名称">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName2"></label>
                            <div class="btn-group">
                                <button @click="searchOrder" class="btn btn-primary">查询</button>
                                <button class="btn btn-default">重置</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Tab :name='tabname' @btn-click="setstatus"></Tab>
    <orderlist :list="orderList"></orderlist>
    <Pager :cur.sync="cur" :all.sync='totalPage' @btn-click="listen"></Pager>
</template>

<script type="text/javascript">

import Tab                      from    '../../components/common/Tab'
import Orderlist                from    '../../components/order/Orderlist'
import Pager                    from    '../../components/common/Pager'
import {getOrderlist}           from    '../../vuex/getters'
import {orderList, expressObj}  from    '../../vuex/actions'
import myDatepicker             from    'vue-datepicker'
import WebStorageCache          from    'web-storage-cache'

export default {
    props: ['orderList'],
    data() {
        return {
            search:{
                orderCode:'',
                beginDate:'',
                endDate:'',
                receiverName:'',
                receiverMobile:'',
                productName:''
            },
            cur: 1,
            status:'',
            totalPage:'',
            tabname:[
                {tab:'所有订单',key:''},
                {tab:'待付款',key:'0'},
                {tab:'待发货',key:'1'},
                {tab:'已发货',key:'2'},
                {tab:'待收货',key:'3'},
                {tab:'已完成',key:'4'},
                {tab:'已取消',key:'5'},
                {tab:'交易关闭',key:'6'}
            ],
            /**日历数据 start**/
            dateText: '',
            startTime: '',
            startTimeObj: {
                type: 'min',
                week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                format: 'YYYY-MM-DD HH:mm',
                placeholder: '开始时间',
                buttons: {
                    ok: '确认',
                    cancel: '取消'
                }
            },
            endTime:'',
            endTimeObj:{
                type: 'min',
                week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                format: 'YYYY-MM-DD HH:mm',
                placeholder: '结束时间',
                buttons: {
                    ok: '确认',
                    cancel: '取消'
                }
            }
            /**日历数据 end**/
        }
    },
    components: {
        Orderlist,
        Pager,
        Tab,
        myDatepicker
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
            this.orderlist({page: '1',status: this.status,pageSize:'2'})
        },
        listen: function(data) {
            this.orderlist({page: data,status: this.status,pageSize:'2'})
        },
        searchOrder:function(){
            console.log(this.startTime)
            console.log(this.endTime)
        }
    },
    ready: function() {
        // this.orderlist({page: '1',status: this.status})
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
                this.orderlist({page: '1',status: Number(this.status),pageSize:'2'})
                this.Setexpressobj({tag: false});
            },0)
        }
    },
    watch:{
        'orderList':function(val,oldval){
            let wsCache = new WebStorageCache();
            this.$set('totalPage',wsCache.get('oorderListTotalPage'));
        }
    }
}

</script>
