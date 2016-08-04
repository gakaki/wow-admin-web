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
    <div id="add-product-from">
        <Alert :duration="2000" :alertshow.sync="alertObj.alertShow" :type="alertObj.alertType" :info="alertObj.alertInfo"></Alert>
        <spinner id="spinner-box" :size="spinnerSize" :fixed="spinnerFixed" text="请稍后">
        </spinner>
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
                <button v-bind:disabled="productBasiInfo.Selectcategory.one==null||productBasiInfo.Selectcategory.two==null||productBasiInfo.Selectcategory.three==null" @click="nextSteps" class="btn btn-primary">下一步</button>
            </div>
        </div>

        <div class="row" v-show="nowtag=='2'" style="padding-bottom:50px;">
            <Basicinformation :productbasiinfo="productBasiInfo"></Basicinformation>
            <Salesattribute :spectbodylist="specTbodyList" :productsalesattribute="productSalesAttribute"></Salesattribute>
            <Productdetails :imgtimestamp="imgTimeStamp" :username="userName" :productdetails="productDetails"></Productdetails>
            <!-- <Other></Other> -->
            <nav class="addproductsFoot navbar navbar-fixed-bottom bg-warning" role="navigation">
               <div class="row">
                   <div class="col-md-12 text-center">
                       <button id="app-product-button" type="button" class="btn btn-primary">保存商品</button>
                       <button type="button" class="btn btn-warning">预览商品</button>
                   </div>
               </div>
            </nav>
        </div>
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
    import spinner              from    '../../components/common/spinner/Spinner'
    import {API_ROOT,imgNameSplit,qiNiu,qiniuimgsrc}           from    '../../config'
    import md5                  from    'md5'

    export default{
        components:{
            Steps,
            Selectcategory,
            Basicinformation,
            Salesattribute,
            Productdetails,
            Other,
            Alert,
            spinner
        },
        data(){
            return{
                spinnerFixed:true,
                spinnerSize: 'lg',
                alertObj:{
                    alertType:null,
                    alertInfo:null,
                    alertShow:false,
                },
                productSpecList:{
                    productBasiInfo:{},
                    productSalesAttribute:{},
                    productDetails:{}
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
                state:'1',
                nowtag:'1',
                imgTimeStamp:new Date().valueOf(),
                userName:$.cookie('userName')||'',
            }
        },
        methods:{
            nextSteps:function(){
                let categoryId=productBasiInfo.Selectcategory.three
                let jsontext=JSON.stringify({"categoryId":categoryId});
                this.$http.get(API_ROOT+'admin-api-dev/v1/material/queryCategoryMaterial',{paramJson:jsontext}).then((response) => {
                    if (response.data.resCode==0) {
                        this.$set('productBasiInfo.material_list',response.data.materialList)
                    }else {
                    }
                }, (response) => {
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'获取分类属性错误',alertShow:true})
                });
                this.$set('state','2');
                this.$set('nowtag','2');
            },
            saveProducts:function(){
                let product=this.productSalesAttribute;

                //过滤掉没选中的颜色数组
                let colorFilter = product.color.filter(function(a) {
                    return a.selected == true;
                })
                this.$set('productSalesAttribute.color',colorFilter);

                //给已选的对应的价格设置标示
                for (let a = 0; a < product.color.length; a++) {
                    for (var b = 0; b < product.color[a].specList.length; b++) {
                        if (product.color[a].specList[b].selected==true) {
                            this.$set('productSalesAttribute.color['+a+'].specListVal['+b+'].selected',true);
                        }else {
                            this.$set('productSalesAttribute.color['+a+'].specListVal['+b+'].selected',false);
                        }
                    }
                }

                //过滤掉没选的尺寸
                for (let a = 0; a < product.color.length; a++) {
                    let specListFilter=product.color[a].specList.filter(function(i) {
                         return i.selected == true
                    });
                    this.$set('productSalesAttribute.color['+a+'].specList',specListFilter);
                }

                //过滤掉没选尺寸的价格
                for (let a = 0; a < product.color.length; a++) {
                    let specListFilter=product.color[a].specListVal.filter(function(i) {
                         return i.selected == true
                    });
                    this.$set('productSalesAttribute.color['+a+'].specListVal',specListFilter);
                }

                /**
                 * 设置最终提交到接口对象集
                 */
                this.$set('productSpecList.productBasiInfo',this.productBasiInfo);
                this.$set('productSpecList.productSalesAttribute',this.productSalesAttribute.color);
                this.$set('productSpecList.productDetails',this.productDetails);

                //适用场景数组正序排列
                this.productSpecList.productBasiInfo.applicable_scene_text.sort();

                //材质数组正序排列
                this.productSpecList.productBasiInfo.material_text.sort();

                //过滤掉设计师的name字段
                let product_designer=this.productSpecList.productBasiInfo.product_designer;
                product_designer.filter(function(i) {return delete i.designerName;});

                //过滤掉多余的图片详情
                this.productDetails.primary_img.splice(5,10)

                //把图文详情并进主图数组
                let primary_img=this.productSpecList.productDetails.primary_img;
                let img_text_desc=this.productSpecList.productDetails.img_text_desc;
                for (let val of img_text_desc) {
                    primary_img.push(val);
                }

                /**
                 * 去除多余的字段，最终提交的对象
                 */
                let addProductOb={
                    colorSpecVoList:[]
                }

                //设置提交的单个属性
                addProductOb.categoryId=this.productSpecList.productBasiInfo.Selectcategory.three
                addProductOb.productName=this.productSpecList.productBasiInfo.product_name
                addProductOb.sellingPoint=this.productSpecList.productBasiInfo.selling_point
                addProductOb.productModel=this.productSpecList.productBasiInfo.product_model
                addProductOb.brandId=this.productSpecList.productBasiInfo.brand_id
                addProductOb.designerVoList=this.productSpecList.productBasiInfo.product_designer
                addProductOb.originCountryId=this.productSpecList.productBasiInfo.origin_country
                addProductOb.originProvinceId=this.productSpecList.productBasiInfo.origin_province
                addProductOb.originCity=this.productSpecList.productBasiInfo.origin_city
                addProductOb.styleId=this.productSpecList.productBasiInfo.style
                addProductOb.length=this.productSpecList.productBasiInfo.long
                addProductOb.width=this.productSpecList.productBasiInfo.width
                addProductOb.height=this.productSpecList.productBasiInfo.height
                addProductOb.applicablePeople=this.productSpecList.productBasiInfo.applicable_people
                addProductOb.canCustomized=this.productSpecList.productBasiInfo.can_customize
                addProductOb.applicableSceneList=this.productSpecList.productBasiInfo.applicable_scene_text
                addProductOb.materialList=this.productSpecList.productBasiInfo.material_text
                addProductOb.detailDescription=this.productSpecList.productDetails.detail_description

                //设置提交的图片数组
                addProductOb.productImgVoList=this.productSpecList.productDetails.primary_img

                //设置销售属性需要提交的数据遍历，字段改成后台需要的。
                let colorSpecVoList=this.productSpecList.productSalesAttribute;
                for (let a = 0; a < colorSpecVoList.length; a++) {
                    //设置颜色属性
                    addProductOb.colorSpecVoList.push({});
                    addProductOb.colorSpecVoList[a].colorId=colorSpecVoList[a].colorId;
                    addProductOb.colorSpecVoList[a].productColorImg=colorSpecVoList[a].img;
                    addProductOb.colorSpecVoList[a].colorDisplayName=colorSpecVoList[a].name;
                    addProductOb.colorSpecVoList[a].specVoList=[];
                    for (var b = 0; b < colorSpecVoList[a].specListVal.length; b++) {
                        addProductOb.colorSpecVoList[a].specVoList.push({});
                        for (var c = 0; c < addProductOb.colorSpecVoList[a].specVoList.length; c++) {
                            //设置颜色对应的尺码属性
                            addProductOb.colorSpecVoList[a].specVoList[c].specName=colorSpecVoList[a].specList[c].spec
                            addProductOb.colorSpecVoList[a].specVoList[c].sellPrice=colorSpecVoList[a].specListVal[c].sell_price
                            addProductOb.colorSpecVoList[a].specVoList[c].weight=colorSpecVoList[a].specListVal[c].weight
                            if (colorSpecVoList[a].specListVal[c].disabled==false) {
                                addProductOb.colorSpecVoList[a].specVoList[c].enabled=true;
                            }else {
                                addProductOb.colorSpecVoList[a].specVoList[c].enabled=false;
                            }

                        }
                    }
                }
                //如果商品规格状态禁用，提交的数据里面删除这条数据
                for (let a = 0; a < addProductOb.colorSpecVoList.length; a++) {
                    for (var b = 0; b < addProductOb.colorSpecVoList[a].specVoList.length; b++) {
                        if (addProductOb.colorSpecVoList[a].specVoList[b].enabled==false) {
                            addProductOb.colorSpecVoList[a].specVoList.del(b);
                        }else {
                            delete addProductOb.colorSpecVoList[a].specVoList[b].enabled
                        }
                    }
                }
                /**
                 * 校验录入商品的信息
                 */
                if (addProductOb.categoryId==''||addProductOb.categoryId==null) {
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'请选择分类',alertShow:true})
                    return;
                }

                /**
                 * 发送请求后端录入
                 */
                let jsontext=JSON.stringify(addProductOb);
                this.$broadcast('show::spinner');
                this.$http.post(API_ROOT+'admin-api-dev/v1/product/create',{paramJson:jsontext}).then((response) => {
                    if (response.data.resCode==0) {
                        this.$set('alertObj',{alertType:'alert-success',alertInfo:response.data.resMsg,alertShow:true})
                        setTimeout(() => {
                            this.$broadcast('hide::spinner');
                            $("body").removeAttr("style");
                            window.location.href="/goods/addproducts"
                        }, 2000);
                    }else{
                        this.$set('alertObj',{alertType:'alert-danger',alertInfo:response.data.resMsg,alertShow:true})
                        setTimeout(() => {
                            this.$broadcast('hide::spinner');
                        }, 1000);
                        setTimeout(() => {
                            $("body").removeAttr("style");
                        }, 1100);
                    }
                }, (response) => {
                    // error callback
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'网络错误',alertShow:true});
                    this.$broadcast('hide::spinner');
                    $("body").removeAttr("style");
                });
            }
        },
        events:{
            'callStepsChangeFater':function(msg){
                this.$set('nowtag',msg);
                this.$set('state',msg);
            }
        },
        ready(){

            let _this=this;

            $('#add-product-from').validator({
                theme: "yellow_right",
                stopOnError: true,
                focusCleanup: true,
                focusInvalid:false,
                timely: 2,
                // 获取display
                display: function(el) {
                    return el.getAttribute('placeholder') || '';
                },
                fields: {
                    //必填项直接绑定表单的 data-rule="required"
                    //复杂的验证正则放这处理
                },
                invalid: function(form, errors){
                    //数据验证没通过
                    $("body").animate({scrollTop: $(".msg-wrap").offset().top-15},500);
                },
                valid: function(){
                    //表单验证通过，提交表单到服务器
                    _this.saveProducts();
                }
            })
            .on("click", "#app-product-button", function(e){
                $(e.delegateTarget).trigger("validate");
            });

            /**
             * [上传颜色图片初始化]
             * start
             */
            let specColorPic_button=['Apickfiles0','Apickfiles1','Apickfiles2','Apickfiles3','Apickfiles4','Apickfiles5','Apickfiles6','Apickfiles7','Apickfiles8','Apickfiles9','Apickfiles10','Apickfiles11']
            let specColorPic = {
                runtimes: 'html5,flash,html4', //上传模式,依次退化
                browse_button: specColorPic_button, //上传选择的点选按钮，**必需**
                uptoken_url: qiNiu.uptokenUrl, //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                uptoken: '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                // unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                domain: qiniuimgsrc, //bucket 域名，下载资源时用到，**必需**
                get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
                container: 'clor-pic-box', //上传区域DOM ID，默认是browser_button的父元素，
                max_file_size: '500kb', //最大文件体积限制
                flash_swf_url: 'http://cdn.bootcss.com/plupload/2.1.8/Moxie.swf', //引入flash,相对路径
                max_retries: 3, //上传失败最大重试次数
                dragdrop: false, //开启可拖曳上传
                drop_element: 'clor-pic-box', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '500kb', //分块上传时，每片的体积
                auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                init: {
                    'FilesAdded': function(up, files) {
                        plupload.each(files, function(file) {
                            // 文件添加进队列后,处理相关的事情
                            $('#add-product-from').validator('cleanUp');
                            productSalesAttribute.color[imgIndex.img_index].img='loading.gif';
                        });
                    },
                    'BeforeUpload': function(up, file) {
                        // 每个文件上传前,处理相关的事情
                        let testImgSrc=file.getNative();
                        let temUrl=window.URL.createObjectURL(testImgSrc);
                        let objImg = document.querySelector('.testImg');
                        objImg.src = temUrl;
                        setTimeout(()=>{
                            if (objImg.naturalWidth/100!=objImg.naturalHeight/100) {
                                _this.$set('alertObj',{alertType:'alert-danger',alertInfo:'您的图片比例不正确',alertShow:true})
                                return;
                            }
                        },100);
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
                        //上传出错时,处理相关的事情
                        if (err.status==614) {
                            _this.$set('alertObj',{alertType:'alert-danger',alertInfo:'文件已存在，请更改文件名',alertShow:true})
                        }else {
                            _this.$set('alertObj',{alertType:'alert-danger',alertInfo:errTip,alertShow:true})
                        }
                        productSalesAttribute.color[imgIndex.img_index].img='';
                    },
                    'UploadComplete': function() {
                        //队列文件处理完毕后,处理相关的事情
                    },
                    'Key': function(up, file) {
                        let fileName=file.id+'.'+imgNameSplit(file.name);
                        // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                        // 该配置必须要在 unique_names: false , save_key: false 时才生效
                        let key = "product/spec/"+md5(_this.imgTimeStamp+_this.userName)+'/'+fileName;
                        // do something with key here
                        return key
                    }
                }
            };
            var uploader = Qiniu.uploader(specColorPic);
            /**
             * [上传颜色图片初始化]
             * end
             */
        }
    }
</script>
