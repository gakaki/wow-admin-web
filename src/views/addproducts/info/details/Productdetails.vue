<style media="screen">
    .products-primary-img li{
        position:relative;
    }
    .products-primary-img li:hover .primary-img-remove{
        display: block;
    }
    .primary-img-remove{
        position: absolute;
        right: 5px;
        top: 5px;
        cursor:pointer;
        background: #fff;
        font-size: 16px;
        line-height: 16px;
        border-radius: 100%;
        display: none;
    }
    .details-img-group-right{
        position: absolute;
        right: -64px;
        top: -10px;
        background: #f9f9f9;
        height: 165px;
        padding: 20px;
    }
    .img-text-desc-arrow-up{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #333333 transparent;
        cursor: pointer;
    }
    .img-text-desc-arrow-down{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 10px 0 10px;
        border-color: #333333 transparent transparent transparent;
        cursor: pointer;
    }
    .details-img-group-right>.glyphicon{
        font-size: 22px;
        display: block;
        cursor:pointer;
    }
</style>
<template>
    <Alert :duration="2000" :alertshow.sync="alertObj.alertShow" :type="alertObj.alertType" :info="alertObj.alertInfo"></Alert>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">商品详情</div>
        <div class="form-group">
            <label class="col-sm-2 control-label"><span class="text-danger">*</span>商品主图</label>
            <div class="col-sm-10">
                <p class="control-label text-muted">
                    5张商品图片，图片尺寸为<span class="text-danger">(800*800px)</span>以上，无品牌LOGO和其他网站水印，建议图片为白底
                </p>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label"></label>
            <div class="col-sm-10 control-label" id="primary-pic-box">
                <ul class="main-img-group text-left products-primary-img">
                    <li v-bind:style="{ zIndex: productdetails.primary_img.length-$index}" class="add-product-hide-input" v-if="item.primary==1" id="primary{{$index}}" @click="imgIndex.set_img_index($index)" v-for="item in productdetails.primary_img | orderBy 'sortOrder' 1">
                        <input data-rule="required" :name="'primaryImg'+$index" v-bind:value="item.imgUrl"  type="text" class="form-control hidden" placeholder={{item.imgDesc}}>
                        <span v-if="item.imgUrl!=''" class="primary-img-remove glyphicon glyphicon-remove-sign text-danger"></span>
                        <p v-if="item.imgUrl!=''">
                            <img v-bind:src="item.imgUrl+'?imageView2/1/w/90/h/90'" alt="" />
                        </p>
                        <p v-if="item.imgUrl==''" class="main-img-group-nopic">
                            添加图片
                        </p>
                        {{item.imgDesc}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">商品描述</label>
            <div class="col-sm-7">
                <p class="control-label text-muted">
                    <textarea data-rule="required" name="detailDescription" v-model="productdetails.detail_description" placeholder="商品描述" class="form-control" rows="5"></textarea>
                </p>
            </div>
            <span class="col-sm-3 control-label">
                <div class="text-left text-muted">{{productdetails.detail_description.length}}/200</div>
            </span>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">
                <span class="text-danger">*</span>图文详情<br /><span class="text-danger">(图片比例3:2)</span>
            </label>
            <div class="col-sm-7">
                <!-- 隐藏域，用于触发图文详情上传按钮 -->
                <img class="testImg" alt="" style="display:none;">
                <div id="img-text-upload" style="display:none;">
                    <button id="img-text-upload-btn" type="button" name="button">图文上传按钮</button>
                </div>
                <ul class="details-img-group bg-muted">
                    <li @click="imgIndex.set_img_index($index)" v-for="item in productdetails.img_text_desc | orderBy 'sortOrder' 1">
                        <p class="img-text-desc-file add-product-hide-input" v-bind:class="{'details-img-group-nopic':item.imgUrl==''}" v-if="item-imgUrl!=''">
                            <input data-rule="required" :name="'img_text_desc_src'+item.sortOrder" v-bind:value="item.imgUrl"  type="text" class="form-control hidden" placeholder="图片">
                            <img v-if="item.imgUrl!=''" v-bind:src="item.imgUrl+'?imageView2/1/w/138/h/92'" alt="" />
                            <span v-if="item.imgUrl==''">添加图片</span>
                        </p>
                        <div class="add-product-hide-input">
                            <input :name="'img_text_desc_text'+item.sortOrder" v-bind:value="item.imgDesc"  type="text" class="form-control hidden" placeholder="商品详情">
                            <textarea v-model="item.imgDesc" placeholder="商品详情" class="form-control" rows="5"></textarea>
                        </div>
                        <div class="details-img-group-right">
                            <div @click="sort_push($index,item.sortOrder)" class="img-text-desc-arrow-up" style="margin-bottom:15px;"></div>
                            <div @click="sort_minus($index,item.sortOrder)" class="img-text-desc-arrow-down" style="margin-bottom:60px;"></div>
                            <div @click="img_text_desc_add()" v-if="$index==0" class="glyphicon glyphicon-plus-sign text-muted" style="margin-bottom:5px;"></div>
                            <div @click="img_text_desc_delete($index)" v-if="$index>0" class="glyphicon glyphicon-remove-sign text-danger"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import {imgIndex}   from    '../../model'
    import Alert        from    '../../../../components/common/alert/Alert'
    import {imgNameSplit,qiNiu,qiniuimgsrc,uploadImgLoad}           from    '../../../../config'
    import md5          from    'md5'

    export default{
        props:['productdetails','imgtimestamp','username'],
        components:{
            Alert
        },
        data(){
            return{
                imgIndex:imgIndex,
                alertObj:{
                    alertType:null,
                    alertInfo:null,
                    alertShow:false,
                },
            }
        },
        methods:{
            img_text_desc_add:function(){
                //最多添加10条，目前注释掉，暂无限制
                // if (this.productdetails.img_text_desc.length>=10) {
                //     return false;
                // }
                this.productdetails.img_text_desc.push({imgUrl:'',imgDesc:'',primary:false,sortOrder:this.productdetails.img_text_desc.length+1});
            },
            img_text_desc_delete:function(index){
                this.productdetails.img_text_desc.del(index);
                for(let i=0;i<this.productdetails.img_text_desc.length;i++){
                    this.$set('productdetails.img_text_desc['+i+'].sortOrder',i);
                }
            },
            sort_push:function(index,sort){
                if (index==0) {
                    return;
                }
                let indexS=index-1;
                this.$set('productdetails.img_text_desc['+index+'].sortOrder',sort-1);
                this.$set('productdetails.img_text_desc['+indexS+'].sortOrder',sort);
                this.productdetails.img_text_desc.sort(function(a1, a2) {
                    return a1.sortOrder - a2.sortOrder;
                });
            },
            sort_minus:function(index,sort){
                if (index+1==this.productdetails.img_text_desc.length) {
                    return;
                }
                let indexS=index+1;
                this.$set('productdetails.img_text_desc['+index+'].sortOrder',sort+1);
                this.$set('productdetails.img_text_desc['+indexS+'].sortOrder',sort);
                this.productdetails.img_text_desc.sort(function(a1, a2) {
                    return a1.sortOrder - a2.sortOrder;
                });
            }
        },
        ready(){
            /**
             * 商品主图上传实例
             * start
             */

            var Qiniu1 = new QiniuJsSDK();
            var Qiniu2 = new QiniuJsSDK();

            let _this=this;
            let primary_button=['primary0','primary1','primary2','primary3','primary4']
            let primaryImg = {
                runtimes: 'html5,flash,html4', //上传模式,依次退化
                browse_button: primary_button, //上传选择的点选按钮，**必需**
                uptoken_url: qiNiu.uptokenUrl, //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                uptoken: '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                // unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                domain: qiniuimgsrc, //bucket 域名，下载资源时用到，**必需**
                get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
                container: 'primary-pic-box', //上传区域DOM ID，默认是browser_button的父元素，
                max_file_size: '1000kb', //最大文件体积限制
                flash_swf_url: 'http://cdn.bootcss.com/plupload/2.1.8/Moxie.swf', //引入flash,相对路径
                max_retries: 3, //上传失败最大重试次数
                dragdrop: false, //开启可拖曳上传
                drop_element: 'primary-pic-box', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '1000kb', //分块上传时，每片的体积
                auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                init: {
                    'FilesAdded': function(up, files) {
                        plupload.each(files, function(file) {
                            // 文件添加进队列后,处理相关的事情
                            $('#add-product-from').validator('cleanUp');
                            _this.productdetails.primary_img[imgIndex.img_index].imgUrl=uploadImgLoad;
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
                            if (objImg.naturalWidth<800) {
                                _this.$set('alertObj',{alertType:'alert-danger',alertInfo:'您的图片宽度小于800',alertShow:true})
                                return;
                            }
                            if (objImg.naturalHeight<800) {
                                _this.$set('alertObj',{alertType:'alert-danger',alertInfo:'您的图片高度小于800',alertShow:true})
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
                        _this.productdetails.primary_img[imgIndex.img_index].imgUrl=domain+encodeURI(res.key);
                    },
                    'Error': function(up, err, errTip) {
                        //上传出错时,处理相关的事情
                        if (err.status==614) {
                            _this.$set('alertObj',{alertType:'alert-danger',alertInfo:'文件已存在，请更改文件名',alertShow:true})
                        }else {
                            _this.$set('alertObj',{alertType:'alert-danger',alertInfo:errTip,alertShow:true})
                        }
                        _this.productdetails.primary_img[imgIndex.img_index].imgUrl=uploadImgLoad;
                    },
                    'UploadComplete': function() {
                        //队列文件处理完毕后,处理相关的事情
                    },
                    'Key': function(up, file) {
                        let fileName=file.id+'.'+imgNameSplit(file.name);
                        // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                        // 该配置必须要在 unique_names: false , save_key: false 时才生效
                        var key = "product/"+md5(_this.imgTimeStamp+_this.userName)+'/'+fileName;
                        // do something with key here
                        return key
                    }
                }
            };
            var uploader1 = Qiniu1.uploader(primaryImg);
            /**
             * 商品主图上传实例
             * end
             */

            /**
             * 图文详情上传
             * 通过代理事件触发上传图片的按钮
             * start
             */
             $(document).on("click",".img-text-desc-file",function(){
                 $("#img-text-upload-btn").trigger("click");
             })
             let ImgTextDesc = {
                 runtimes: 'html5,flash,html4', //上传模式,依次退化
                 browse_button: 'img-text-upload-btn', //上传选择的点选按钮，**必需**
                 uptoken_url: qiNiu.uptokenUrl, //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                 uptoken: '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                //  unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                 // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                 domain: qiniuimgsrc, //bucket 域名，下载资源时用到，**必需**
                 get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
                 container: 'img-text-upload', //上传区域DOM ID，默认是browser_button的父元素，
                 max_file_size: '1000kb', //最大文件体积限制
                 flash_swf_url: 'http://cdn.bootcss.com/plupload/2.1.8/Moxie.swf', //引入flash,相对路径
                 max_retries: 3, //上传失败最大重试次数
                 dragdrop: false, //开启可拖曳上传
                 drop_element: 'img-text-upload', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                 chunk_size: '1000kb', //分块上传时，每片的体积
                 auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                 init: {
                     'FilesAdded': function(up, files) {
                         plupload.each(files, function(file) {
                             // 文件添加进队列后,处理相关的事情
                             $('#add-product-from').validator('cleanUp');
                             _this.productdetails.img_text_desc[imgIndex.img_index].imgUrl=uploadImgLoad;
                         });
                     },
                     'BeforeUpload': function(up, file) {
                        // 每个文件上传前,处理相关的事情
                        let testImgSrc=file.getNative();
                        let temUrl=window.URL.createObjectURL(testImgSrc);
                        let objImg = document.querySelector('.testImg');
                        objImg.src = temUrl;
                        setTimeout(()=>{
                            if (objImg.naturalWidth/objImg.naturalHeight!=1.5) {
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
                         _this.productdetails.img_text_desc[imgIndex.img_index].imgUrl=domain+encodeURI(res.key);
                     },
                     'Error': function(up, err, errTip) {
                         //上传出错时,处理相关的事情
                         if (err.status==614) {
                             _this.$set('alertObj',{alertType:'alert-danger',alertInfo:'文件已存在，请更改文件名',alertShow:true})
                         }else {
                             _this.$set('alertObj',{alertType:'alert-danger',alertInfo:errTip,alertShow:true})
                         }
                         _this.productdetails.img_text_desc[imgIndex.img_index].imgUrl='';
                     },
                     'UploadComplete': function() {
                         //队列文件处理完毕后,处理相关的事情
                     },
                     'Key': function(up, file) {
                         let fileName=file.id+'.'+imgNameSplit(file.name);
                         // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                         // 该配置必须要在 unique_names: false , save_key: false 时才生效
                         var key = "product/"+md5(_this.imgTimeStamp+_this.userName)+'/'+fileName;
                         // do something with key here
                         return key
                     }
                 }
             };
             var uploader2 = Qiniu2.uploader(ImgTextDesc);
             /**
              * 图文详情上传
              * end
              */
        }
    }
</script>
