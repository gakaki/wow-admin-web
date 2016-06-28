<template>

    <spinner id="spinner-box" :size="spinnerSize" :fixed="spinnerFixed" text="数据加载中..." ></spinner>
    <p class="text-primary pull-left"><span class="glyphicon glyphicon-list-alt"></span> 订单ID：{{$route.params.orderid}}</p>
    <p class="pull-right">
        <button v-if="orderDetails.status==1" @click="modalShow({tag:true,orderid:$route.params.orderid,name:orderDetails.address_username,phone:orderDetails.address_mobile,address:orderDetails.address_full,itemlist:testitem})" class="btn btn-info btn-sm">物流发货</button>
    </p>
    <Express :showbox="Getexpressobj.tag" :orderid="Getexpressobj.orderid" :address="Getexpressobj.address" :mobile="Getexpressobj.phone" :name="Getexpressobj.name" :itemslistarr="Getexpressobj.itemlist"></Express>
    <Steps :steps="steps" :status="orderDetails.status"></Steps>
    <Orderdetails :details="orderDetails"></Orderdetails>

</template>

<script type="text/javascript">
import Orderdetails from '../../components/order/Orderdetails'
import Express from '../../components/order/Express'
import Steps from '../../components/order/Steps'
import {getOrderdetails,getExpressobj} from '../../vuex/getters'
import {orderDetails,expressObj} from '../../vuex/actions'
import spinner from '../../components/common/spinner/Spinner';
export default {
    components: {
        Orderdetails,
        Steps,
        Express,
        spinner
    },
    data() {
        return {
            spinnerFixed: true,
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
            testitem:[{"expressinstatus":true,"expressinfo":{code:"shunfeng",company:"顺丰速运",number:"20160003182312323"},"item":[{"name":"凹面椅","product_id":"1477","sku_id":"BUT01010001","sku_title":"拉丝银","sku_price":"1350","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/1/_/1.1_1.jpg","count":"1","price":"1350","total":"1350","original_price":"undefined",},{"name":"鹿隐杯","product_id":"1182","sku_id":"FXW04010001","sku_title":"鹿隐杯-tall/350mL","sku_price":"188","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/i/m/img_1542_.jpg","count":"1","price":"188","total":"188","original_price":"undefined",}]},{"expressinstatus":false,"expressinfo":{code:null,company:null,number:null},item:[{"name":"奇异系列︱不锈钢环保杯-紫红短吻鳄","product_id":"1077","sku_id":"Swe04010057","sku_title":"小号（260ml）","sku_price":"265","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/9/o/9oz_auberginealligator__1_2.jpg","count":"1","price":"265","total":"265","original_price":"undefined",}]},{"expressinstatus":false,"expressinfo":{code:null,company:null,number:null},item:[{"name":"石舟套装（一帆风顺茶壶2015版)","product_id":"1197","sku_id":"FXW04010024","sku_title":"石舟套装（一帆风顺茶壶2015版)/岩黑色","sku_price":"999","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/_/1/_1__2_1.jpg","count":"1","price":"999","total":"999","original_price":"undefined"}]},{"expressinstatus":false,"expressinfo":{code:null,company:null,number:null},item:[{"name":"可调节硅胶围嘴围兜（红色）","product_id":"1761","sku_id":"WOW99990004","sku_title":"可调节硅胶围嘴围兜（红色）","sku_price":"190","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/_/5/_500_14.jpg","count":"1","price":"190","total":"190","original_price":"undefined"}]},{"expressinstatus":true,"expressinfo":{code:"yuantong",company:"圆通快递",number:20160333912233},item:[{"name":"伊甸园卡通动物型衣服挂钩","product_id":"1598","sku_id":"roo03050007","sku_title":"伊甸园卡通动物型衣服挂钩","sku_price":"730","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/a/f/afr.jpg","count":"1","price":"730","total":"730","original_price":"undefined"},{"name":"经典潘通瓷制大马克杯","product_id":"716","sku_id":"Roo04010011","sku_title":"PANTONE 2035","sku_price":"128","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/r/o/roo04010011.jpg","count":"1","price":"128","total":"128","original_price":"undefined"},{"name":"  seed组合","product_id":"1198","sku_id":"FXW03020002","sku_title":"seed组合B 影青","sku_price":"299","image":"http://www.wowdsgn.com/media/catalog/product/cache/1/small_image/720x/9df78eab33525d08d6e5fb8d27136e95/i/m/img_7213_.jpg","count":"1","price":"299","total":"299","original_price":"undefined"}]}]
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
            console.log(this.Getexpressobj.tag);
            console.log(data);
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
    route: {
        activate: function (transition) {
            setTimeout(() => {
                this.showloading();
            }, 0)
            transition.next();
        },
        data({ to: { params: {orderid}}}) {
            window.scrollTo(0, 0);
            this.orderdetails({orderid: orderid});
            setTimeout(()=>{
                this.Setexpressobj({tag: false})
            },0)
        }
    }
}

</script>
