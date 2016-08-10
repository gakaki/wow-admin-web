<style media="screen">
    .expressSelected .v-select.searchable .dropdown-toggle{
        height: 34px;
    }
    .expressSelected .v-select .selected-tag{
        margin-top: 3px;
        padding: 0px 10px;
        line-height: 22px;
    }
    .hiddenInputBox .msg-box{
        position: absolute;
    }
    table.expressTable>tbody>tr>td{
        vertical-align:middle;
    }
    .expressTable{
        border-bottom: 1px solid #ddd;
    }
    .expressRadio{margin: 15px 0px;}
    .expressRadio input[type="radio"]{
        margin-top: -4px;
    }
</style>
<template>
    <Alert :duration="2000" :alertshow.sync="alertObj.alertShow" :type="alertObj.alertType" :info="alertObj.alertInfo"></Alert>
    <modal :show.sync="showbox" id="expressBox{{orderid}}" class="expressBox">
        <button slot="close" type="button" class="close" @click="closeMoadl()">&times;</button>
        <h5 slot="header" class="modal-title">商品发货-订单ID：{{orderid}}</h5>
        <div slot="body">
            <div style="width:100%; max-height:300px; overflow-x: hidden; overflow-y: scroll;">
                <table class="table table-striped expressTable">
                    <thead>
                        <tr>
                            <th style="position:relative" class="text-center">
                                <input v-model="checkAll" type="checkbox" id="checkAllExpress" >
                                <label style="cursor: pointer; position:absolute; left:0px; right:0px; top:0px; bottom:0px; height:100%;" for="checkAllExpress"></label>
                            </th>
                            <th>商品</th>
                            <th class="text-center">数量</th>
                            <th class="text-center">商品总计</th>
                        </tr>
                    </thead>
                    <tbody class="checkboxdo">
                        <tr v-for="item in itemslistarr">
                            <td style="position:relative" class="text-center">
                                <input v-devchecked="checkAll" type="checkbox" v-bind:value="item.saleOrderItemId" v-bind:name="item.saleOrderItemId+'name'+$index" v-bind:id="item.saleOrderItemId+'name'+$index" v-model="checkedItems" v-bind:checked="item.expressinstatus==false" />
                                <label style="cursor: pointer; position:absolute; left:0px; right:0px; top:0px; bottom:0px; height:100%;" for="{{item.saleOrderItemId+'name'+$index}}"></label>
                            </td>
                            <td style="width:45%;">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style="width:60px;">
                                                <img style="width:70px; border:1px solid #ccc;" v-bind:src=item.specImg alt="" />
                                            </td>
                                            <td style="padding-left:15px; width:80%;">
                                                <a target="_blank" class="clearfix">{{item.productName}}</a>
                                                <span class="text-muted clearfix">
                                                    {{item.color}}
                                                </span>
                                                <span class="clearfix">
                                                    {{item.specName}}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="text-center"><span class="label label-success">{{item.productQty}}</span></td>
                            <td class="text-center">
                                <span class="label label-default">¥ {{item.productTotalAmount}}.00</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                <span>已选择的商品ID: {{ checkedItems | json }}</span>
            </p>
            <h5>
                收货信息：{{address}}，{{name}}，{{mobile}}
            </h5>
            <h5 class="expressRadio" style="display:none;">
                发货方式：
               <label class="checkbox-inline" style="padding:0px;">
                  <input type="radio" name="expressRadios" value="true" checked="checked" v-model="needExpress"> 需要物流
               </label>
               <label class="checkbox-inline" v-show=''>
                  <input type="radio" name="expressRadios" value="false" v-model="needExpress"> 不需要物流
               </label>
           </h5>
            <div class="row" v-show="needExpress=='true'">
                <div class="col-md-6 expressSelected hiddenInputBox">
                    <input v-bind:value="expressinfo.arr" name="expresscompany" class="form-control" type="text" placeholder="快递公司" style="display:none;" >
                    物流公司：<v-select :placeholder="'请选择一个物流公司'" :value.sync="expressinfo.arr" :options="fruitOptions" :search="true" :close-on-select="true">
                    </v-select>
                </div>
                <div class="col-md-6">
                   <input v-model="expressinfo.number" autocomplete="off" name="expresscode" class="form-control" type="text" placeholder="快递单号">
                </div>
            </div>

        </div>
        <div slot="footer">
            <div class="btn-group">
                <button @click="closeMoadl()" type="button" class="btn btn-danger">取消</button>
                <button v-bind:disabled="checkedItems==''" type="button" class="btn btn-success expressButton">确认</button>
            </div>
        </div>
    </modal>
</template>
<script type="text/javascript">
import Modal                        from    '../../components/common/Modal'
import {expressObj}                 from    '../../vuex/actions'
import vSelect                      from    '../common/selecte/Select'
import WebStorageCache              from    'web-storage-cache'
import {orderList,orderDetails}     from    '../../vuex/actions'
import {API_ROOT}                   from    '../../config.js'
import Alert                        from    '../../components/common/alert/Alert'
import Vue                          from    'vue'

Vue.directive( 'devchecked', function( val ){
    this.el.checked = val;
    if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        this.el.dispatchEvent(evt);
    }
    else {
        this.el.fireEvent("onchange");
    }
});

export default{
    components:{
        Modal,
        vSelect,
        Alert
    },
    props:['orderid','orderstatus','address','mobile','name','showbox','itemslistarr','ordertag','orderlistobj'],
    data() {
        return {
            checkAll : false,
            fruitOptions: [
                {value:'{"name":"顺丰速运","code":"shunfeng"}', label:'顺丰速运'},
                {value:'{"name":"日日顺","code":"rrs"}', label:'日日顺'},
            ],
            checkedItems:[],
            expressinfo:{
                arr: [],
                number:null
            },
            needExpress:true,
            showModal: false,
            alertObj:{
                alertType:null,
                alertInfo:null,
                alertShow:false,
            },
        }
    },
    vuex: {
        actions: {
            Setexpressobj:expressObj,
            orderlist: orderList,
            orderdetails: orderDetails,
        }
    },
    watch:{
        'expressinfo.arr':function(val,oldval){
            $('#expressBox'+this.orderid).validator('cleanUp');
        },
        'itemslistarr':function(val,oldval){
            this.$set('checkAll',false)
        }
    },
    methods:{
        setdata:function(){
            //清空快递内存里面的值
            this.expressinfo.arr=[];
            this.expressinfo.number=null;
        },
        getdata:function(){
            //获取需要提交到接口的发货数据
            if (this.expressinfo.arr[0]==undefined||this.expressinfo.arr[0]=='undefined') {
            }else {
                let expressinfoArr=JSON.parse(this.expressinfo.arr[0]);
                // console.log('订单号码：'+this.orderid);
                // console.log('选中的商品ID：'+this.checkedItems);
                // console.log('快递公司：'+expressinfoArr.name);
                // console.log('快递代码：'+expressinfoArr.code);
                // console.log('快递号码：'+this.expressinfo.number);
                var obj={
                    saleOrderItemIds:this.checkedItems,
                    deliveryCompanyCode:expressinfoArr.code,
                    deliveryOrderNo:this.expressinfo.number,
                    orderCode:this.orderid
                }
                var wsCache = new WebStorageCache();
                var orderSearch=wsCache.get('orderListSearch');
                var orderlistobjs=wsCache.get('orderlistobjs');
                if (orderlistobjs.data.orderLists.length<=1) {
                    orderSearch.currentPage=Number(orderSearch.currentPage-1).toString();
                    this.$dispatch('exprss-page', Number(orderSearch.currentPage-1))
                }
                /**
                 * 判断用户在哪个界面触发发货操作
                 * 通过组件传过来的值ordertag判断是来自己列表还是详情页触发发货
                 * list-订单列表，details-订单详情
                 */
                if (this.ordertag=='list') {
                    let jsontext=JSON.stringify(obj);
                    this.$http.post(API_ROOT+'v1/order/deliver',{paramJson:jsontext}).then((response) => {
                        if (response.data.resCode=='0') {
                            let wsCache = new WebStorageCache();
                            this.orderListRes(orderSearch);
                            this.$set('alertObj',{alertType:'alert-success',alertInfo:response.data.resMsg,alertShow:true})
                        }else {
                            this.$set('alertObj',{alertType:'alert-danger',alertInfo:response.data.resMsg,alertShow:true})
                        }
                    }, (response) => {
                        this.$set('alertObj',{alertType:'alert-danger',alertInfo:'网络请求失败',alertShow:true})
                    });
                }else if(this.ordertag=='details'){
                    let jsontext=JSON.stringify(obj);
                    this.$http.post(API_ROOT+'v1/order/deliver',{paramJson:jsontext}).then((response) => {
                        if (response.data.resCode=='0') {
                            this.orderdetails({orderCode: this.orderid});
                            this.closeMoadl();
                            this.$set('alertObj',{alertType:'alert-success',alertInfo:response.data.resMsg,alertShow:true})
                        }else {
                            this.$set('alertObj',{alertType:'alert-danger',alertInfo:response.data.resMsg,alertShow:true})
                        }
                    }, (response) => {
                        this.$set('alertObj',{alertType:'alert-danger',alertInfo:'网络请求失败',alertShow:true})
                    });
                }
            }
        },
        orderListRes:function(data){
            //在订单列表发货操作成功后，重新请求对应的订单列表数据
            this.orderlist(data)
            this.closeMoadl();
        },
        closeMoadl:function(){
            //关闭发货弹出层，清空内存里面的值
            this.$set('checkedItems',[])
            this.expressinfo.arr=[];
            this.expressinfo.number=null;
            this.Setexpressobj({tag:false});
        }
    },
    ready(){
        /*
        ** 表单验证
         */
        var _this=this;
        $('#expressBox'+this.orderid).validator({
            theme: "yellow_top",
            stopOnError: true,
            focusCleanup: false,
            focusInvalid:false,
            timely: 2,
            // 获取display
            display: function(el) {
                return el.getAttribute('placeholder') || '';
            },
            fields: {
                'expresscompany': 'required;',
                'expresscode': 'required;'
            },
            valid: function(){
                //表单验证通过，提交表单到服务器
                _this.getdata();
                _this.setdata();
            }
        })
        .on("click", ".expressButton", function(e){
            /**
             * needExpress等于0表示需要物流
             */
            if (_this.needExpress=='true') {
                $(e.delegateTarget).trigger("validate");
            }else {
                _this.getdata();
                _this.setdata();
            }
        });
    }
}
</script>
