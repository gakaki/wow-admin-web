<template>
    <spinner id="spinner-box" :size="spinnerSize" :fixed="spinnerFixed" text="数据加载中..." ></spinner>
    <Alert :duration="2000" :alertshow.sync="alertObj.alertShow" :type="alertObj.alertType" :info="alertObj.alertInfo"></Alert>
    <pre class="bg-danger" style="font-weight:bold;">
        提示：测试数据的订单只有三个订单能查询到真实的物流数据。<br />
        订单1：0142564175<br />
        订单2：3721853231<br />
        订单3：3570817321
    </pre>
    <div class="well well-sm">
        <div class="row">
            <div class="col-md-12 right-head-search">
                <div class="form-inline">
                    <div class="clearfix">
                        <div class="form-group">
                            <label for="exampleInputName2">订单号</label>
                            <input v-model="search.orderCode" type="text" class="form-control" placeholder="订单号">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName2">下单时间</label>
                            <my-datepicker :time.sync="search.beginDate" :option="startTimeObj"></my-datepicker>
                        </div>
                        <div class="form-group">
                            <my-datepicker :time.sync="search.endDate" :option="endTimeObj"></my-datepicker>
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="form-group">
                            <label for="exampleInputName2">收货人姓名</label>
                            <input v-model="search.receiverName" type="text" class="form-control" placeholder="收货人姓名">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName2">收货人手机</label>
                            <input v-model="search.receiverMobile" type="text" class="form-control" placeholder="收货人手机">
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="form-group">
                            <label for="exampleInputName2">商品名称</label>
                            <input v-model="search.productName" type="text" class="form-control" placeholder="商品名称">
                        </div>
                        <div class="form-group">
                            <label>订单状态</label>
                            <select v-model="search.orderStatus" class="form-control">
                                <option v-for="item in tabname" v-bind:value="item.key">{{item.tab}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName2"></label>
                            <div class="btn-group">
                                <button @click="searchOrder" class="btn btn-primary">查询</button>
                                <button @click="searchReset" class="btn btn-default">重置</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Tab :curindex.sync="curIndex" :name='tabname' @btn-click="setstatus"></Tab>
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
import spinner                  from    '../../components/common/spinner/Spinner';
import Alert                    from    '../../components/common/alert/Alert'
import moment                   from    'moment'
moment.locale('zh-cn');

export default {
    props: ['orderList'],
    data() {
        return {
            alertObj:{
                alertType:null,
                alertInfo:null,
                alertShow:false,
            },
            curIndex:0,
            pageSize:'2',
            search:{
                orderCode:'',
                beginDate:'',
                endDate:'',
                orderStatus:'',
                receiverName:'',
                receiverMobile:'',
                productName:'',
            },
            searchObj:{},
            cur: 1,
            status:'',
            totalPage:'',
            tabname:[
                {tab:'所有订单',key:''},
                {tab:'待付款',key:'0'},
                {tab:'待发货',key:'1'},
                {tab:'部分发货',key:'2'},
                {tab:'待收货',key:'3'},
                {tab:'已完成',key:'4'},
                {tab:'已取消',key:'5'},
                {tab:'交易关闭',key:'6'}
            ],
            /**日历数据 start**/
            dateText: '',
            startTimeObj: {
                type: 'day',
                week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                format: 'YYYY-MM-DD',
                placeholder: '开始日期',
                buttons: {
                    ok: '确认',
                    cancel: '取消'
                }
            },
            endTimeObj:{
                type: 'day',
                week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                format: 'YYYY-MM-DD',
                placeholder: '结束日期',
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
        myDatepicker,
        spinner,
        Alert
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
        showloading:function(){
            this.$broadcast('show::spinner');
        },
        setstatus:function(data){
            /**
             * 订单列表的tab切换
             * 不带搜索条件，只带订单状态／分页
             */
            this.searchReset();
            this.$set('search.orderStatus','')
            this.$set('status',data.status);
            this.$set('cur',1);
            if (this.status=='') {
                var orderTabStatus=this.status;
            }else {
                var orderTabStatus=Number(this.status);
            }
            this.orderlist(this.getSearchObj('1',orderTabStatus))
        },
        listen: function(data) {
            //订单列表分页点击后的回调
            if (this.status=='') {
                var orderPageStatus=this.status;
            }else {
                var orderPageStatus=Number(this.status);
            }
            this.orderlist(this.getSearchObj(data.toString(),orderPageStatus))
        },
        searchOrder:function(){

            let beginDateNumber=moment(this.search.beginDate).format('X');
            let endDateNumber=moment(this.search.endDate).format('X');
            let today=moment().format('X');
            if (beginDateNumber>endDateNumber) {
                this.$set('alertObj',{alertType:'alert-danger',alertInfo:'开始时间不能大于结束时间',alertShow:true})
                return false;
            }

            //点击搜索按钮切换到对应的tab
            if (this.search.orderStatus=='') {
                var orderStatus=this.search.orderStatus;
                this.$set('status',this.search.orderStatus);
            }else {
                var orderStatus=Number(this.search.orderStatus)+1;
                this.$set('status',Number(this.search.orderStatus));
            }
            this.$set('cur',1);
            this.$set('curIndex',orderStatus);
            this.orderlist(this.getSearchObj('1',this.search.orderStatus))
        },
        getSearchObj:function(page,status){
            /**
             * 过滤并返回搜索条件
             * 调用该方法需要传入两个参数：页码／订单状态
             */
            this.showloading();
            var seacrObj=JSON.parse(JSON.stringify(this.search));
            for (var item in seacrObj) {
                if (item!='status') {
                    if (seacrObj[item]=='') {
                        delete seacrObj[item]
                    }
                }
            }
            seacrObj.currentPage=page;
            if (status=='') {
                seacrObj.orderStatus=status;
            }else {
                seacrObj.orderStatus=Number(status);
            }
            seacrObj.pageSize=this.pageSize;
            let wsCache = new WebStorageCache();
            wsCache.set('orderListSearch', seacrObj);
            return seacrObj;
        },
        searchReset:function(){
            // 重置搜索内容
            for (var item in this.search) {
                this.search[item]='';
            }
        }
    },
    ready: function() {
        this.showloading();
        this.orderlist(this.getSearchObj('1',''));
    },
    route: {
        activate: function (transition) {
            transition.next();
        },
        data({ to: { params: {orderlist}}}) {
            setTimeout(function(){
                window.scrollTo(0, 0);
            },10)
        }
    },
    watch:{
        'orderList':function(val,oldval){
            let wsCache = new WebStorageCache();
            this.$set('totalPage',wsCache.get('oorderListTotalPage'));
            this.$broadcast('hide::spinner');
        }
    },
    events: {
        'exprss-page': function (msg) {
            this.$set('cur',msg);
        }
    },
}

</script>
