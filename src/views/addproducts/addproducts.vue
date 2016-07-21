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
    <Alert :duration="2000" :alertshow.sync="alertObj.alertShow" :type="alertObj.alertType" :info="alertObj.alertInfo"></Alert>
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
            {{productBasiInfo.Selectcategory | json}}
            <button v-bind:disabled="productBasiInfo.Selectcategory.one==null||productBasiInfo.Selectcategory.two==null||productBasiInfo.Selectcategory.three==null" @click="nextSteps" class="btn btn-primary">下一步</button>
        </div>
    </div>

    <div class="row" v-show="nowtag=='2'" style="padding-bottom:50px;">
        <Basicinformation :productbasiinfo="productBasiInfo"></Basicinformation>
        <Salesattribute :spectbodylist="specTbodyList" :productsalesattribute="productSalesAttribute"></Salesattribute>
        <Productdetails :productdetails="productDetails"></Productdetails>
        <!-- <Other></Other> -->
        <nav class="addproductsFoot navbar navbar-fixed-bottom bg-warning" role="navigation">
           <div class="row">
               <div class="col-md-12 text-center">
                   <button @click="saveProducts()" type="button" class="btn btn-primary">保存商品</button>
                   <button type="button" class="btn btn-warning">预览商品</button>
               </div>
           </div>
        </nav>
    </div>
</template>
<script type="text/javascript">
    import Steps                from    './Steps'
    import Selectcategory       from    './Selectcategory'
    import {productBasiInfo,productSalesAttribute,specTbodyList,imgIndex,productDetails}    from    './model'
    import Basicinformation     from    './info/basic/Basicinformation'
    import Salesattribute       from    './info/sales/Salesattribute'
    import Productdetails       from    './info/details/Productdetails'
    import Other                from    './info/other/Other'
    import Alert                from    '../../components/common/alert/Alert'

    export default{
        components:{
            Steps,
            Selectcategory,
            Basicinformation,
            Salesattribute,
            Productdetails,
            Other,
            Alert
        },
        data(){
            return{
                alertObj:{
                    alertType:null,
                    alertInfo:null,
                    alertShow:false,
                },
                uploader:null,
                productBasiInfo:productBasiInfo,
                productSalesAttribute:productSalesAttribute,
                specTbodyList:specTbodyList,
                productDetails:productDetails,
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
            },
            saveProducts:function(){
                console.log(this.productBasiInfo);
                console.log(this.productSalesAttribute);
                console.log(this.productDetails);
            }
        },
        events:{
            'callStepsChangeFater':function(msg){
                this.$set('nowtag',msg);
                this.$set('state',msg);
            }
        },
        ready(){
            /**
             * [上传颜色图片初始化]
             * start
             */
            let _this=this;
            let specColorPic_button=['Apickfiles0','Apickfiles1','Apickfiles2','Apickfiles3','Apickfiles4','Apickfiles5','Apickfiles6','Apickfiles7','Apickfiles8','Apickfiles9','Apickfiles10','Apickfiles11']
            let specColorPic = {
                runtimes: 'html5,flash,html4', //上传模式,依次退化
                browse_button: specColorPic_button, //上传选择的点选按钮，**必需**
                uptoken_url: 'http://apidev.dev.wowdsgn.com:8400/apiv1/qiniu/token', //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                uptoken: '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                domain: 'http://o7s1lyy5h.bkt.clouddn.com', //bucket 域名，下载资源时用到，**必需**
                get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
                container: 'clor-pic-box', //上传区域DOM ID，默认是browser_button的父元素，
                max_file_size: '1mb', //最大文件体积限制
                flash_swf_url: 'http://cdn.bootcss.com/plupload/2.1.8/Moxie.swf', //引入flash,相对路径
                max_retries: 3, //上传失败最大重试次数
                dragdrop: false, //开启可拖曳上传
                drop_element: 'clor-pic-box', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '4mb', //分块上传时，每片的体积
                auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                init: {
                    'FilesAdded': function(up, files) {
                        plupload.each(files, function(file) {
                            // 文件添加进队列后,处理相关的事情
                            productSalesAttribute.color[imgIndex.img_index].img='loading.gif';
                        });
                    },
                    'BeforeUpload': function(up, file) {
                        // 每个文件上传前,处理相关的事情
                    },
                    'UploadProgress': function(up, file) {
                        // 每个文件上传时,处理相关的事情
                    },
                    'FileUploaded': function(up, file, info) {
                        // 每个文件上传成功后,处理相关的事情
                        let domain = up.getOption('domain');
                        let res=$.parseJSON(info);
                        productSalesAttribute.color[imgIndex.img_index].img=encodeURI(res.key);
                    },
                    'Error': function(up, err, errTip) {
                        _this.$set('alertObj',{alertType:'alert-danger',alertInfo:'上传失败',alertShow:true})
                        //上传出错时,处理相关的事情
                    },
                    'UploadComplete': function() {
                        //队列文件处理完毕后,处理相关的事情
                    },
                }
            };
            var uploader = Qiniu.uploader(specColorPic);
            /**
             * [上传颜色图片初始化]
             * end
             */















             let arr1=[
             {
                 name:'白色',
                 selected: true,
                 specList:[
                     {spec:'L',selected: false},
                     {spec:'XL',selected: true},
                     {spec:'',selected: false}
                 ],
                 specListVal:[
                     {spec:'',sell_price:1000,disabled:false},
                     {spec:'',sell_price:2000,disabled:true},
                     {spec:'',sell_price:'',disabled:true}
                 ],
             },
             {
                 name:'灰色',
                 selected: true,
                 specList:[
                     {spec:'L',selected: true},
                     {spec:'XL',selected: false},
                     {spec:'',selected: false}
                 ],
                 specListVal:[
                     {spec:'',sell_price:1100,disabled:true},
                     {spec:'',sell_price:2200,disabled:false},
                     {spec:'',sell_price:'',disabled:true}
                 ],
             },
             {
                 name:'银色',
                 selected: false,
                 specList:[
                     {spec:'L',selected: true},
                     {spec:'XL',selected: false},
                     {spec:'',selected: false}
                 ],
                 specListVal:[
                     {spec:'',sell_price:1100,disabled:true},
                     {spec:'',sell_price:2200,disabled:false},
                     {spec:'',sell_price:'',disabled:true}
                 ],
             }
         ]
        //  var arr2=[
        //      {name:'白色',spec:'L',sell_price:1000,disabled:false},
        //      {name:'白色',spec:'XL',sell_price:2000,disabled:true},
        //      {name:'灰色',spec:'L',sell_price:1100,disabled:true},
        //      {name:'灰色',spec:'XL',sell_price:2200,disabled:false}
        //  ]

        //过滤掉没选中的颜色
        let arr2=[];
        for (let val of arr1) {
            if (val.selected==true) {
                arr2.push(val);
            }
        }
        console.log(arr2);
        let arr3=[];
        for(let a=0;a<arr2.length;a++){
            //console.log(arr2[i].specList);
        }

        // for (let a of arr2) {
        //     for (let b of a.specList) {
        //         if (b.selected==true) {
        //             console.log(a.specListVal);
        //         }
        //     }
        // }


        // for (let a of arr2) {
        //     for (let b of a.specListVal) {
        //         if (b.selected==true) {
        //             console.log(b);
        //         }
        //     }
        // }












        }
    }
</script>
