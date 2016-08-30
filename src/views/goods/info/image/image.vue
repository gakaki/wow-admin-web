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
    .details-img-group p{
        width: 140px;
        height: 94px;
        border: 1px solid #ccc;
        position: absolute;
        left: 0px;
        top: 25px;
        cursor:pointer;
        text-align: center;
    }
    .details-img-group p img{
        max-width: 138px;
        max-height: 90px;
    }
    .details-img-group-nopic{
        line-height: 92px;
    }
</style>
<template>
    <div class="col-md-12 addproduct-box-html form-horizontal" id="edit-product-img">
        <div class="well well-sm">
            <ul class="edit-product-title list-inline">
                <li>商品详情</li>
                <li class="text-right">
                    <button v-bind:class="{'btn-danger':disabled==false}" v-bind:disabled="disabled==true" id="edit-product-img-button" type="button" class="btn">确认修改</button>
                </li>
            </ul>
        </div>

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
                    <li @click="setImgIndex($index)" v-bind:style="{ zIndex: imagesprimary.length-$index}" class="add-product-hide-input" v-if="item.primary==true" id="primary{{item.sortOrder}}"  v-for="item in imagesprimary | orderBy 'sortOrder' 1">
                        <input data-rule="required" :name="'primaryImg'+$index" v-bind:value="item.imgUrl"  type="text" class="form-control hidden" placeholder={{item.imgDesc}}>
                        <span class="primary-img-remove glyphicon glyphicon-remove-sign text-danger"></span>
                        <p>
                            <img alt="" v-bind:src="item.imgUrl+'?imageView2/1/w/90/h/90'">
                        </p>
                        {{item.imgDesc}}
                    </li>
                </ul>
            </div>
        </div>

        <div class="form-group">
            <label class="col-sm-2 control-label">
                <span class="text-danger">*</span>图文详情<br /><span class="text-danger">(图片比例3:2)</span>
            </label>
            <div class="col-sm-7">
                <div id="img-text-upload" style="display:none;">
                    <button id="img-text-upload-btn" type="button" name="button">图文上传按钮</button>
                </div>
                <ul class="details-img-group bg-muted">
                    <li @click="setImgIndex($index)" v-for="item in imagesdesc | orderBy 'sortOrder' 1">
                        <p class="edit-img-text-desc-file add-product-hide-input" v-bind:class="{'details-img-group-nopic':item.imgUrl==''}" v-if="item-imgUrl!=''">
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

    <!-- 隐藏域，用于触发图文详情上传按钮 -->
    <img class="testImg" alt="" style="display:none;">
</template>
<script type="text/javascript">
    import {
        imgNameSplit,
        qiNiu,
        qiniuimgsrc,
        uploadImgLoad,
        httpPost
    }                       from    '../../../../config'
    import md5              from    'md5'
    import lodash           from    'lodash'

    export default{
        props:['imagesprimary','imagesdesc','alertobj','productid'],
        data(){
            return{
                primaryIndex:null,
                //删掉的图片ID
                deleteds:[],
                updateds:[],
                copyPrimary:[],
                copyImgDesc:[],
                disabled:true,
            }
        },
        watch:{
            'imagesprimary': {
                handler: 'isEqual',
                deep: true
            },
            'imagesdesc': {
                handler: 'isEqual',
                deep: true
            }
        },
        methods:{
            // 深拷贝，用于比较数据是否有变化
            copyList:function(){
                this.$set('copyPrimary',JSON.parse(JSON.stringify(this.imagesprimary)));
                this.$set('copyImgDesc',JSON.parse(JSON.stringify(this.imagesdesc)));
                this.$set('disabled',true);
            },

            // 比较数值是否被修改了
            isEqual:function(){
                if (_.isEqual(this.imagesprimary, this.copyPrimary)&&_.isEqual(this.imagesdesc, this.copyImgDesc)) {
                    this.$set('disabled',true)
                }else {
                    this.$set('disabled',false)
                }
            },

            //点击选择图片的时候，记录数组的索引，便于查询对应的数据更改
            setImgIndex:function(index){
                this.$set('primaryIndex',index)
            },

            // 提交修改商品图片
            modificationInfo:function(){
                let editImg={
                    productId:this.productid,
                    deleteds:this.deleteds,
                    updateds:this.imagesprimary.concat(this.imagesdesc)
                }
                httpPost('v1/product/images',editImg,'修改失败',(data)=> {
                    this.$dispatch('loadingEnd', 'msg');
                    if (data.resCode==0) {
                        this.$set('alertobj',{alertType:'alert-success',alertInfo:'修改成功',alertShow:true})
                        this.copyList();
                    }else {
                        this.$set('alertobj',{alertType:'alert-danger',alertInfo:'修改失败',alertShow:true})
                    }
                });
            },

            //图文详情列表操作
            img_text_desc_add:function(){
                this.imagesdesc.push({imgUrl:'',imgDesc:'',primary:false,sortOrder:this.imagesdesc.length+1});
            },
            img_text_desc_delete:function(index){
                //如果包含id，表示这是后端返回的内容
                if (this.imagesdesc[index].id) {
                    this.deleteds.push(this.imagesdesc[index].id);
                }
                this.imagesdesc.del(index);
                for(let i=1;i<this.imagesdesc.length;i++){
                    this.$set('imagesdesc['+i+'].sortOrder',i+1);
                }
            },
            sort_push:function(index,sort){
                if (index==0) {
                    return;
                }
                let indexS=index-1;
                this.$set('imagesdesc['+index+'].sortOrder',sort-1);
                this.$set('imagesdesc['+indexS+'].sortOrder',sort);
                this.imagesdesc.sort(function(a1, a2) {
                    return a1.sortOrder - a2.sortOrder;
                });
            },
            sort_minus:function(index,sort){
                if (index+1==this.imagesdesc.length) {
                    return;
                }
                let indexS=index+1;
                this.$set('imagesdesc['+index+'].sortOrder',sort+1);
                this.$set('imagesdesc['+indexS+'].sortOrder',sort);
                this.imagesdesc.sort(function(a1, a2) {
                    return a1.sortOrder - a2.sortOrder;
                });
            }
        },
        events:{
            'imagesList':function(msg){
                this.copyList();
                var _this=this;
                setTimeout(function(){
                    /**
                     * 商品主图上传实例
                     * start
                     */
                    var Qiniu1 = new QiniuJsSDK();

                    // 生成主图上传实例按钮
                    let primary_button=[]
                    for (let i = 0; i < msg.length; i++) {
                        if (msg[i].primary==true) {
                            primary_button.push('primary'+msg[i].sortOrder);
                        }
                    }

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
                                    $('#edit-product-img').validator('cleanUp');
                                    _this.imagesprimary[_this.primaryIndex].imgUrl=uploadImgLoad;
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
                                        _this.$set('alertobj',{alertType:'alert-danger',alertInfo:'您的图片比例不正确',alertShow:true})
                                        return;
                                    }
                                    if (objImg.naturalWidth<800) {
                                        _this.$set('alertobj',{alertType:'alert-danger',alertInfo:'您的图片宽度小于800',alertShow:true})
                                        return;
                                    }
                                    if (objImg.naturalHeight<800) {
                                        _this.$set('alertobj',{alertType:'alert-danger',alertInfo:'您的图片高度小于800',alertShow:true})
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
                                _this.imagesprimary[_this.primaryIndex].imgUrl=domain+encodeURI(res.key);
                            },
                            'Error': function(up, err, errTip) {
                                //上传出错时,处理相关的事情
                                if (err.status==614) {
                                    _this.$set('alertobj',{alertType:'alert-danger',alertInfo:'文件已存在，请更改文件名',alertShow:true})
                                }else {
                                    _this.$set('alertobj',{alertType:'alert-danger',alertInfo:errTip,alertShow:true})
                                }
                                _this.imagesprimary[_this.primaryIndex].imgUrl=uploadImgLoad;
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
                },100)
            }
        },
        ready(){

            let _this=this;

            $('#edit-product-img').validator({
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
                    $("body").animate({scrollTop: $(".msg-wrap").offset().top-35},500);
                },
                valid: function(){
                    _this.$dispatch('loadingStart', 'msg');
                    //表单验证通过，提交表单到服务器
                    _this.modificationInfo();
                }
            })
            .on("click", "#edit-product-img-button", function(e){
                $(e.delegateTarget).trigger("validate");
            });

            /**
            * 商品图文详情上传实例
            * start
            */
            var Qiniu2 = new QiniuJsSDK();

            $(document).on("click",".edit-img-text-desc-file",function(){
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
                            $('#edit-product-img').validator('cleanUp');
                            _this.imagesdesc[_this.primaryIndex].imgUrl=uploadImgLoad;
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
                               _this.$set('alertobj',{alertType:'alert-danger',alertInfo:'您的图片比例不正确',alertShow:true})
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
                        _this.imagesdesc[_this.primaryIndex].imgUrl=domain+encodeURI(res.key);
                    },
                    'Error': function(up, err, errTip) {
                        //上传出错时,处理相关的事情
                        if (err.status==614) {
                            _this.$set('alertobj',{alertType:'alert-danger',alertInfo:'文件已存在，请更改文件名',alertShow:true})
                        }else {
                            _this.$set('alertobj',{alertType:'alert-danger',alertInfo:errTip,alertShow:true})
                        }
                        _this.imagesdesc[_this.primaryIndex].imgUrl='';
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
            * 商品图文详情上传实例
            * end
            */
        }
    }
</script>
