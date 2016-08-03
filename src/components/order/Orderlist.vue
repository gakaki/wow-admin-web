<template>
    <div>
        <Express :showbox="Getexpressobj.tag" :orderid="Getexpressobj.orderid" :address="Getexpressobj.address" :mobile="Getexpressobj.phone" :name="Getexpressobj.name" :itemslistarr="Getexpressobj.itemlist"></Express>
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
                    <td style="border-right:1px solid #fff;">
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
                            {{itemsList.sellPrice}}.00
                        </p>
                        <p>{{itemsList.productTotalAmount}}.00</p>
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
                            <button v-if="items.orderStatus==1" @click="modalShow({tag:true,orderid:items.id,name:items.address_username,phone:items.address_mobile,address:items.address_full,itemlist:testitem})" class="btn btn-info btn-sm">物流发货</button>
                        </p>
                    </td>
                    <td class="text-center">
                        <p>{{items.orderAmount}}.00</p>
                        <p class="text-muted">含运费：{{items.deliveryFee}}.00</p>
                    </td>
                </tr>

                <!--多商品渲染-->
                <tr v-for="itemsList in items.orderItemVos" v-if="items.orderItemVos.length>1">
                    <td style="border-right:1px solid #fff;">
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
                            {{itemsList.sellPrice}}.00
                        </p>
                        <p>{{itemsList.productTotalAmount}}.00</p>
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
                            <button v-if="items.orderStatus==1" @click="modalShow({tag:true,orderid:items.id,name:items.address_username,phone:items.address_mobile,address:items.address_full,itemlist:testitem})" class="btn btn-info btn-sm">物流发货</button>
                        </p>

                    </td>
                    <td class="text-center" rowspan={{items.orderItemVos.length}} v-if='$index==0'>
                        <p>{{items.orderAmount}}.00</p>
                        <p class="text-muted">含运费：{{items.deliveryFee}}.00</p>
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

import Express from '../../components/order/Express'
import {getExpressobj} from '../../vuex/getters'
import {expressObj} from '../../vuex/actions'
export default {
    props:['list'],
    data(){
        return{
            testitem:[{"expressinstatus":true,"expressinfo":{code:"shunfeng",company:"顺丰速运",number:"20160003182312323"},"item":[{"name":"凹面椅","product_id":"1477","sku_id":"BUT01010001","sku_title":"拉丝银","sku_price":"1350","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/1/_/1.1_1.jpg","count":"1","price":"1350","total":"1350","original_price":"undefined",},{"name":"鹿隐杯","product_id":"1182","sku_id":"FXW04010001","sku_title":"鹿隐杯-tall/350mL","sku_price":"188","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/i/m/img_1542_.jpg","count":"1","price":"188","total":"188","original_price":"undefined",}]},{"expressinstatus":false,"expressinfo":{code:null,company:null,number:null},item:[{"name":"奇异系列︱不锈钢环保杯-紫红短吻鳄","product_id":"1077","sku_id":"Swe04010057","sku_title":"小号（260ml）","sku_price":"265","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/9/o/9oz_auberginealligator__1_2.jpg","count":"1","price":"265","total":"265","original_price":"undefined",}]},{"expressinstatus":false,"expressinfo":{code:null,company:null,number:null},item:[{"name":"石舟套装（一帆风顺茶壶2015版)","product_id":"1197","sku_id":"FXW04010024","sku_title":"石舟套装（一帆风顺茶壶2015版)/岩黑色","sku_price":"999","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/_/1/_1__2_1.jpg","count":"1","price":"999","total":"999","original_price":"undefined"}]},{"expressinstatus":false,"expressinfo":{code:null,company:null,number:null},item:[{"name":"可调节硅胶围嘴围兜（红色）","product_id":"1761","sku_id":"WOW99990004","sku_title":"可调节硅胶围嘴围兜（红色）","sku_price":"190","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/_/5/_500_14.jpg","count":"1","price":"190","total":"190","original_price":"undefined"}]},{"expressinstatus":true,"expressinfo":{code:"yuantong",company:"圆通快递",number:20160333912233},item:[{"name":"伊甸园卡通动物型衣服挂钩","product_id":"1598","sku_id":"roo03050007","sku_title":"伊甸园卡通动物型衣服挂钩","sku_price":"730","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/a/f/afr.jpg","count":"1","price":"730","total":"730","original_price":"undefined"},{"name":"经典潘通瓷制大马克杯","product_id":"716","sku_id":"Roo04010011","sku_title":"PANTONE 2035","sku_price":"128","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/r/o/roo04010011.jpg","count":"1","price":"128","total":"128","original_price":"undefined"},{"name":"  seed组合","product_id":"1198","sku_id":"FXW03020002","sku_title":"seed组合B 影青","sku_price":"299","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/i/m/img_7213_.jpg","count":"1","price":"299","total":"299","original_price":"undefined"}]}]
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
    methods:{
        modalShow:function(data){
            console.log(this.Getexpressobj.tag);
            console.log(data);
            this.Setexpressobj(data)
        }
    }
}

</script>
