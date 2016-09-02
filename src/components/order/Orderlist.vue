<template>
    <div>
        <Express :orderlistobj="list" :ordertag="'list'" :showbox="Getexpressobj.tag" :orderid="Getexpressobj.orderid" :address="Getexpressobj.address" :mobile="Getexpressobj.phone" :name="Getexpressobj.name" :itemslistarr="Getexpressobj.itemlist"></Express>
        <table class="table order-list">
            <thead>
                <tr>
                    <th>商品</th>
                    <th class="text-center">单价/数量</th>
                    <th class="text-center">收货人</th>
                    <th class="text-center">订单状态</th>
                    <th class="text-center">实付金额</th>
                </tr>
            </thead>
            <tbody v-for="items in list.data.orderLists">
                <tr>
                    <td style="border:0px;" colspan="5"></td>
                </tr>
                <tr>
                    <td class="tbodyHead" colspan="5">
                        <ul class="list-inline">
                            <li>{{items.orderCreateTimeFormat}}</li>
                            <li>订单号：<span class="text-primary">{{ items.orderCode }}</span></li>
                            <li class="pull-right"><a v-link='{ path: "/order/list/details/"+items.orderCode}'>详情</a></li>
                            <li class="pull-right"><a href="javascript:void(0);">备注</a></li>
                        </ul>
                    </td>
                </tr>

                <!--单件商品渲染-->
                <tr v-for="itemsList in items.orderItemVos" v-if="items.orderItemVos.length<=1">
                    <td style="border-right:1px solid #fff;"  @click='click_h5_link(itemsList.productId)'>
                        <img class="pull-left" style='height:80px; margin-right:5px;' v-bind:src=itemsList.specImg />
                        <span class="pull-left">
                            <p>
                                <a href="javascript:void(0);">{{itemsList.productName}}</a>
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
                        <p>
                            x {{itemsList.productQty}}
                        </p>
                        <p class="text-muted">
                            ¥{{itemsList.sellPrice}}
                        </p>
                        <p>¥{{itemsList.productTotalAmount}}</p>
                    </td>
                    <td class="text-center">
                        <address>
                            <strong>{{items.receiverName}}</strong><br />
                            <abbr title="Phone">{{items.receiverMobile}}</abbr>
                        </address>
                    </td>
                    <td class="text-center">
                        <p>
                            {{items.orderStatusName}}
                        </p>
                        <p>
                            <button v-if="items.orderStatus==1||items.orderStatus==2" @click="getExpressObjAjax(items.orderCode)" class="btn btn-info btn-sm">物流发货</button>
                        </p>
                    </td>
                    <td class="text-center">
                        <p>¥{{items.orderAmount}}</p>
                        <p class="text-muted">含运费：¥{{items.deliveryFee}}</p>
                    </td>
                </tr>

                <!--多商品渲染-->
                <tr v-for="itemsList in items.orderItemVos" v-if="items.orderItemVos.length>1">
                    <td style="border-right:1px solid #fff;"  @click='click_h5_link(itemsList.productId)'>
                        <img class="pull-left" style='width:80px' v-bind:src=itemsList.specImg />
                        <span class="pull-left">
                            <p>
                                <a href="javascript:void(0);">{{itemsList.productName}}</a>
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
                        <p>
                            x {{itemsList.productQty}}
                        </p>
                        <p class="text-muted">
                            ¥{{itemsList.sellPrice}}
                        </p>
                        <p>¥{{itemsList.productTotalAmount}}</p>
                    </td>
                    <td class="text-center" rowspan={{items.orderItemVos.length}} v-if='$index==0'>
                        <address>
                            <strong>{{items.receiverName}}</strong><br />
                            <abbr title="Phone">{{items.receiverMobile}}</abbr>
                        </address>
                    </td>
                    <td class="text-center" rowspan={{items.orderItemVos.length}} v-if='$index==0'>
                        <p>
                            {{items.orderStatusName}}
                        </p>
                        <p>
                            <button v-if="items.orderStatus==1||items.orderStatus==2" @click="getExpressObjAjax(items.orderCode)" class="btn btn-info btn-sm">物流发货</button>
                        </p>

                    </td>
                    <td class="text-center" rowspan={{items.orderItemVos.length}} v-if='$index==0'>
                        <p>¥{{items.orderAmount}}</p>
                        <p class="text-muted">含运费：¥{{items.deliveryFee}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="bg-warning text-warning" colspan="5">
                        买家备注： {{items.tips}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript">
import Express          from    '../../components/order/Express'
import {getExpressobj}  from    '../../vuex/getters'
import {expressObj}     from    '../../vuex/actions'
import {API_ROOT}       from    '../../config.js'
import WebStorageCache  from    'web-storage-cache'

export default {
    props:['list'],
    data(){
        return{
        }
    },
    components:{
        Express
    },
    vuex: {
        getters: {
            Getexpressobj:getExpressobj
        },
        actions: {
            Setexpressobj:expressObj
        }
    },
    watch:{
        'list':function(val,oldval){
            let wsCache = new WebStorageCache();
            wsCache.set('orderlistobjs', val);
        }
    },
    methods:{
        click_h5_link:function(id){
            console.log(id)
            window.open(`http://m.wowdsgn.com/item/${id}`, '_blank');
        },
        getExpressObjAjax:function(orderid){
            let jsontext=JSON.stringify({"orderCode":orderid});
            this.$http.get(API_ROOT+'v1/order/orderDetail',{paramJson:jsontext}).then((response) => {
                if (response.data.resCode=='0') {
                    let obj={
                        tag:true,
                        orderid:response.data.data.orderCode,
                        name:response.data.data.receiverName,
                        phone:response.data.data.receiverMobile,
                        address:response.data.data.receiverAddress,
                        itemlist:response.data.data.unShipOutOrderItems
                    }
                    this.modalShow(obj);
                }
            }, (response) => {
            });
        },
        modalShow:function(data){
            this.Setexpressobj(data)
        }
    }
}

</script>
