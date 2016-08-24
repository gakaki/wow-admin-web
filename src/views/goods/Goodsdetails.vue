<style media="screen">
    .addproduct-box-html .well{
        margin-top: 20px;
    }
    .addproduct-box-html-left,.addproduct-box-html-right{
        display: inline-block;
    }
    .addproduct-box-html-left{
        width: 120px;
        text-align: right;
        padding-right: 5px;
    }
    .addproduct-box-html .form-group label.control-label{
        width: 150px;
    }
    .addproduct-box-html .form-group p.control-label{
        text-align:left;
    }
    .addproduct-box-html .btn{
        margin: 0px 5px;
    }
    .addproduct-box-html .btn-group .btn{
        margin: 0px;
    }
    .addproduct-box-html .btn-group .btn+.btn{
        margin-left: -1px;
    }
    .addproduct-box-html .checkbox-inline, .addproduct-box-html .radio-inline{
        margin: 5px 12px;
        padding-top: 0px;
    }
    .bg-muted{
        background: #f9f9f9;
    }
    .addproduct-box-html hr{
        border-top: 1px dashed #eee;
    }
    .addproduct-box-html-color-box{
        display: inline-block;
        width: 13px;
        height: 13px;
        border: 1px solid #ddd;
        vertical-align: middle;
        margin-top: -3px;
    }
    .sales-attribute-table{
        width: 840px;
        margin-left: 140px;
    }
    .sales-attribute-table thead th, .sales-attribute-table tbody td{
        text-align:center;
        font-size: 12px;
    }
    .sales-attribute-table tbody td{
        padding:10px 3px !important;
    }
    .sales-attribute-table tbody td input[type=text],.sales-attribute-table tbody td input[type=number]{
        text-align: center;
    }
    .sales-attribute-table-text{
        width: 74px;
        display: inline-block;
    }
    .sales-attribute-disabled{
        background: #f1f1f1;
    }
    .main-img-group li{
        float:left;
        width: 92px;
        margin-right: 20px;
        color: #999;
        text-align: center;
    }
    .main-img-group li p{
        background: #f2f2f2;
        border:1px solid #ccc;
        cursor:pointer;
    }
    .main-img-group-nopic{
        line-height: 90px;
    }
    .main-img-group img{
        max-width: 90px;
        max-height: 90px;
    }
    .details-img-group {
        padding: 10px;
    }
    .details-img-group li{
        position: relative;
        padding-left: 155px;
        margin-bottom: 15px;
    }
    .details-img-group li:last-child{
        margin-bottom: 0px;
    }
    .details-img-group p{
        width: 140px;
        height: 140px;
        border: 1px solid #ccc;
        position: absolute;
        left: 0px;
        top: 0px;
        cursor:pointer;
        text-align: center;
    }
    .details-img-group p img{
        max-width: 138px;
        max-height: 138px;
    }
    .details-img-group-nopic{
        line-height: 138px;
        text-align: center;
    }
    .details-img-group textarea{
        height: 140px;
    }
    .addproductsFoot{
        margin-left: 225px;
    }
    .addproductsFoot .col-md-12{
        padding-top: 7px;
    }
</style>
<template>
    <div class="row" style="padding-bottom: 50px;">
        <div class="col-md-12 addproduct-box-html">
            <div class="well well-sm">
                修改信息分为三块：基本信息／销售信息／图片信息<br />
                <span class="text-danger">
                    修改完对应区域的内容后，请点击对应区域的右上角确认按钮提交
                </span>
            </div>
        </div>
        <spinner id="spinner-box" :size="spinnerSize" :fixed="spinnerFixed" :text="spinnerText" ></spinner>
        <Alert :duration="2000" :alertshow.sync="alertObj.alertShow" :type="alertObj.alertType" :info="alertObj.alertInfo"></Alert>

        <!-- 基础信息 -->
        <Basicinformation :alertobj.sync="alertObj" :productid="vuex_getProductDetails.data.productId" :info.sync="vuex_getProductDetails.data.info"></Basicinformation>

        <!-- 销售属性 -->
        <sales-attribute :alertobj.sync="alertObj" :productid="vuex_getProductDetails.data.productId" :serials="vuex_getProductDetails.data.serials"></sales-attribute>

        <!-- 商品图片 -->
        <product-image :productid="vuex_getProductDetails.data.productId" :alertobj.sync="alertObj" :imagesprimary="imagesPrimary" :imagesdesc="imagesDesc"></product-image>
    </div>
</template>

<script type="text/javascript">
    import Basicinformation     from    './info/basic/Basicinformation'
    import salesAttribute       from    './info/salesAttribute/salesAttribute'
    import productImage         from    './info/image/image.vue'
    import {getProductDetails}  from    '../../vuex/getters'
    import {setProductDetails}  from    '../../vuex/actions'
    import spinner              from    '../../components/common/spinner/Spinner';
    import Alert                from    '../../components/common/alert/Alert'

    export default{
        components:{
            Basicinformation,
            productImage,
            salesAttribute,
            spinner,
            Alert
        },
        data(){
            return{
                spinnerFixed:true,
                spinnerText:'数据加载中...',
                alertObj:{
                    alertType:null,
                    alertInfo:null,
                    alertShow:false,
                },
                imagesPrimary:[],
                imagesDesc:[],
            }
        },
        vuex:{
            getters:{
                vuex_getProductDetails:getProductDetails,
            },
            actions:{
                vuex_setProductDetails:setProductDetails,
            }
        },
        watch:{
            /**
             * 判断vuex获取的数据是否成功
             */
            'vuex_getProductDetails':function(val,oldval){
                if (val.resCode==0) {
                    this.$broadcast('infoGetData', 'msg');
                    this.$broadcast('deepCopyInfo', val.data.info);
                    // 过滤掉图片列表里面多余的modifed字段
                    for (var i = 0; i < val.data.images.length; i++) {
                        delete val.data.images[i].modifed
                        if (i+1==val.data.images.length) {
                            this.imgFilter(val.data.images)
                            this.$broadcast('imagesList', val.data.images)
                            this.$broadcast('colorImgList','msg')
                        }
                    }
                }else {
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'获取商品数据错误',alertShow:true})
                }
                this.loadingEnd();
            },
        },
        events:{
            'loadingStart':function(msg){
                this.loadingStart();
            },
            'loadingEnd':function(msg){
                this.loadingEnd();
            }
        },
        methods:{
            //过滤图片数据分组，便于渲染
            imgFilter:function(val){
                for (let i = 0; i < val.length; i++) {
                    if (val[i].primary==true) {
                         this.imagesPrimary.push(val[i])
                    }else {
                        this.imagesDesc.push(val[i])
                    }
                }
            },

            //loading start
            loadingStart:function(){
                this.$broadcast('show::spinner');
            },

            //loading end
            loadingEnd:function(){
                this.$broadcast('hide::spinner');
            }
        },
        detached(){
            this.$set('imagesPrimary',[])
            this.$set('imagesDesc',[])
        },
        route: {
            activate: function (transition) {
                transition.next();
            },
            data({ to: { params: {goodsid}}}) {
                window.scrollTo(0, 0);
                this.vuex_setProductDetails({productId: goodsid});
            }
        },
        ready(){
            this.loadingStart();
        }
    }
</script>
