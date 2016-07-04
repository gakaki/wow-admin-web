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
        background: #fff;
        display: inline-block;
        width: 12px;
        height: 12px;
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
    .sales-attribute-table tbody td input[type=text]{
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
        width: 90px;
        height: 90px;
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
    }
    .details-img-group p img{
        width: 138px;
        height: 138px;
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
    <div class="row">
        <div class="col-md-12" style="margin-top:20px;">
            <div style="width:740px; margin:0 auto;">
                <Steps :stepsinfo="list" :stateinfo="state" :nowtag="nowtag"></Steps>
            </div>
        </div>
    </div>
    <Selectcategory v-show="nowtag=='1'"></Selectcategory>
    <div class="row" v-show="nowtag=='1'">
        <div class="text-center col-md-12" style="margin-top:30px;">
            <button @click="nextSteps" class="btn btn-primary">下一步</button>
        </div>
    </div>

    <nav class="addproductsFoot navbar navbar-fixed-bottom bg-warning" role="navigation">
       <div class="row">
           <div class="col-md-12 text-center">
               <button type="button" class="btn btn-primary">保存商品</button>
               <button type="button" class="btn btn-warning">预览商品</button>
           </div>
       </div>
    </nav>

    <div class="row" v-show="nowtag=='2'">
        <Basicinformation></Basicinformation>
        <Salesattribute></Salesattribute>
        <Productdetails></Productdetails>
        <Other></Other>
    </div>
</template>
<script type="text/javascript">
    import Steps                from    './Steps'
    import Selectcategory       from    './Selectcategory'
    import Basicinformation     from    './info/Basicinformation'
    import Salesattribute       from    './info/Salesattribute'
    import Productdetails       from    './info/Productdetails'
    import Other                from    './info/Other'
    export default{
        components:{
            Steps,
            Selectcategory,
            Basicinformation,
            Salesattribute,
            Productdetails,
            Other
        },
        data(){
            return{
                list:[
                    {
                        name:'选择分类',
                        state:'1'
                    },
                    {
                        name:'填写商品信息',
                        state:'2'
                    },
                    {
                        name:'完成',
                        state:'3'
                    }
                ],
                state:'2',
                nowtag:'2'
            }
        },
        methods:{
            nextSteps:function(){
                this.$set('state','2');
                this.$set('nowtag','2');
            }
        },
        events:{
            'callStepsChangeFater':function(msg){
                this.$set('nowtag',msg);
                this.$set('state',msg);
            }
        }
    }
</script>
