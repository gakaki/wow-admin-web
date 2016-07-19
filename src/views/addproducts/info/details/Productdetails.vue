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
        height: 160px;
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
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">商品详情</div>
        <div class="form-group">
            <label class="col-sm-2 control-label"><span class="text-danger">*</span>商品主图</label>
            <div class="col-sm-10">
                <p class="control-label text-muted">
                    5张商品图片，图片尺寸为800*800px以上，无品牌LOGO和其他网站水印，建议图片为白底
                </p>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label"></label>
            <div class="col-sm-10 control-label" id="primary-pic-box">
                <ul class="main-img-group text-left products-primary-img">
                    <li id="primary{{$index}}" @click="imgIndex.set_img_index($index)" v-for="item in productdetails.primary_img | orderBy 'sort' 1">
                        <span v-if="item.img!=''" class="primary-img-remove glyphicon glyphicon-remove-sign text-danger"></span>
                        <p v-if="item.img!=''">
                            <img v-bind:src="imgIndex.qiniuurl+item.img" alt="" />
                        </p>
                        <p v-if="item.img==''" class="main-img-group-nopic">
                            添加图片
                        </p>
                        {{item.tag}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">商品描述</label>
            <div class="col-sm-7">
                <p class="control-label text-muted">
                    <textarea v-model="productdetails.text_desc" placeholder="商品描述" class="form-control" rows="5"></textarea>
                </p>
            </div>
            <span class="col-sm-3 control-label">
                <div class="text-left text-muted">{{productdetails.text_desc.length}}/200</div>
            </span>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">
                <span class="text-danger">*</span>
                图文详情
            </label>
            <div class="col-sm-7">
                <!-- 隐藏域，用于触发图文详情上传按钮 -->
                <div id="img-text-upload" style="display:none;">
                    <button id="img-text-upload-btn" type="button" name="button">图文上传按钮</button>
                </div>
                {{productdetails.img_text_desc | json}}
                <ul class="details-img-group bg-muted">
                    <li @click="imgIndex.set_img_index($index)" v-for="item in productdetails.img_text_desc | orderBy 'sort' 1">
                        <p class="img-text-desc-file" v-bind:class="{'details-img-group-nopic':item.img==''}" v-if="item-img!=''">
                            <img v-if="item.img!=''" v-bind:src="imgIndex.qiniuurl+item.img" alt="" />
                            <span v-if="item.img==''">添加图片</span>
                        </p>
                        <textarea v-model="item.img_desc" placeholder="商品详情" class="form-control" rows="7"></textarea>
                        <div class="details-img-group-right">
                            <div @click="sort_push($index,item.sort)" class="img-text-desc-arrow-up" style="margin-bottom:15px;"></div>
                            <div @click="sort_minus($index,item.sort)" class="img-text-desc-arrow-down" style="margin-bottom:60px;"></div>
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
    import {imgIndex} from '../../model'
    export default{
        props:['productdetails'],
        data(){
            return{
                imgIndex:imgIndex
            }
        },
        methods:{
            img_text_desc_add:function(){
                this.productdetails.img_text_desc.push({img:'',img_desc:'',sort:this.productdetails.img_text_desc.length});
            },
            img_text_desc_delete:function(index){
                this.productdetails.img_text_desc.del(index);
                for(let i=0;i<this.productdetails.img_text_desc.length;i++){
                    this.$set('productdetails.img_text_desc['+i+'].sort',i);
                }
            },
            sort_push:function(index,sort){
                if (index==0) {
                    return;
                }
                let indexS=index-1;
                this.$set('productdetails.img_text_desc['+index+'].sort',sort-1);
                this.$set('productdetails.img_text_desc['+indexS+'].sort',sort);
                this.productdetails.img_text_desc.sort(function(a1, a2) {
                    return a1.sort - a2.sort;
                });
            },
            sort_minus:function(index,sort){
                if (index+1==this.productdetails.img_text_desc.length) {
                    return;
                }
                let indexS=index+1;
                this.$set('productdetails.img_text_desc['+index+'].sort',sort+1);
                this.$set('productdetails.img_text_desc['+indexS+'].sort',sort);
                this.productdetails.img_text_desc.sort(function(a1, a2) {
                    return a1.sort - a2.sort;
                });
            }
        },
        ready(){
            /**
             * 商品主图上传实例
             * start
             */
            let _this=this;
            let primary_button=['primary0','primary1','primary2','primary3','primary4']
            let primaryImg = {
                runtimes: 'html5,flash,html4', //上传模式,依次退化
                browse_button: primary_button, //上传选择的点选按钮，**必需**
                uptoken_url: 'http://apidev.dev.wowdsgn.com:8400/apiv1/qiniu/token', //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                uptoken: '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                domain: 'http://o7s1lyy5h.bkt.clouddn.com', //bucket 域名，下载资源时用到，**必需**
                get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
                container: 'primary-pic-box', //上传区域DOM ID，默认是browser_button的父元素，
                max_file_size: '1mb', //最大文件体积限制
                flash_swf_url: 'http://cdn.bootcss.com/plupload/2.1.8/Moxie.swf', //引入flash,相对路径
                max_retries: 3, //上传失败最大重试次数
                dragdrop: false, //开启可拖曳上传
                drop_element: 'primary-pic-box', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '4mb', //分块上传时，每片的体积
                auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                init: {
                    'FilesAdded': function(up, files) {
                        plupload.each(files, function(file) {
                            // 文件添加进队列后,处理相关的事情
                            _this.productdetails.primary_img[imgIndex.img_index].img='loading.gif';
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
                        _this.productdetails.primary_img[imgIndex.img_index].img=encodeURI(res.key);
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
            var uploader = Qiniu.uploader(primaryImg);
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
                 uptoken_url: 'http://apidev.dev.wowdsgn.com:8400/apiv1/qiniu/token', //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                 uptoken: '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                 unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                 // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                 domain: 'http://o7s1lyy5h.bkt.clouddn.com', //bucket 域名，下载资源时用到，**必需**
                 get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
                 container: 'img-text-upload', //上传区域DOM ID，默认是browser_button的父元素，
                 max_file_size: '1mb', //最大文件体积限制
                 flash_swf_url: 'http://cdn.bootcss.com/plupload/2.1.8/Moxie.swf', //引入flash,相对路径
                 max_retries: 3, //上传失败最大重试次数
                 dragdrop: false, //开启可拖曳上传
                 drop_element: 'img-text-upload', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                 chunk_size: '4mb', //分块上传时，每片的体积
                 auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                 init: {
                     'FilesAdded': function(up, files) {
                         plupload.each(files, function(file) {
                             // 文件添加进队列后,处理相关的事情
                             _this.productdetails.img_text_desc[imgIndex.img_index].img='loading.gif';
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
                         _this.productdetails.img_text_desc[imgIndex.img_index].img=encodeURI(res.key);
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
             var uploader2 = Qiniu.uploader(ImgTextDesc);
             /**
              * 图文详情上传
              * end
              */
        }
    }
</script>
