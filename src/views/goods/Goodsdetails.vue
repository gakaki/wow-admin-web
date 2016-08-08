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
        <Basicinformation :brandid="brandId" :brandlist="brandList"></Basicinformation>
    </div>
</template>

<script type="text/javascript">
    import Basicinformation     from    './info/basic/Basicinformation'
    export default{
        components:{
            Basicinformation
        },
        data(){
            return{
                brandList:[],
                brandId:'',
            }
        },
        route: {
            activate: function (transition) {
                transition.next();
            },
            data({ to: { params: {goodsid}}}) {
                window.scrollTo(0, 0);
                console.log('商品id：'+goodsid);
                setTimeout(()=>{
                    this.$set('brandList',[{brandCname:'品牌1',id:'1'},{brandCname:'品牌2',id:'2'},{brandCname:'品牌3',id:'3'}]);
                    this.$set('brandId','2');
                },0)
            }
        }
    }
</script>
