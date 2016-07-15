<template>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">其他信息</div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>运费模板</label>
            <div class="col-sm-2">
                <select class="form-control">
                    <option>请选择</option>
                    <option>通用</option>
                    <option>成人</option>
                    <option>男性</option>
                    <option>女性</option>
                    <option>儿童</option>
                    <option>老人</option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">
                <span class="text-danger">*</span>
                温馨提示
            </label>
            <div class="col-sm-7">
                <div id="brand-pic-button">
                    <a style="margin-bottom:5px" class="btn btn-success" id="pickfiles" href="#">
                        <span>插入图片</span>
                    </a>
                </div>
                <hr>
                <script id="editor" type="text/plain" style="width:100%;height:500px;"></script>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">
            </label>
            <div class="col-sm-7">
                <button @click="getContent()" type="button" name="button">获取编辑器内容</button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
                content: '',
                loadingimg:'data:image/gif;base64,R0lGODlhFAAUAOMIAAAAABoaGjMzM0xMTGZmZoCAgJmZmbKysv///////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQBCgAIACwAAAAAFAAUAAAEUxDJSau9CADMteZTEEjehhzHJYqkiaLWOlZvGs8WDO6UIPAGw8TnAwWDEuKPcxQml0YnjzcYYAqFS7VqwWItWyuCQJB4s2AxmWxGg9bl6YQtl0cAACH5BAEKAA8ALAAAAAAUABQAAART8MlJq70vBMy15pMgSN72AMAliqSJotY6Vm8azxYM7tQw8IfDxOcDBYMS4o9zFCaXRiePRyBgDIZLtWrBYi1b66NQkHizYDGZbEaD1uXphC2XRwAAIfkEAQoADwAsAAAAABQAFAAABFPwyUmrvU8IzLXm0zBI3vYEwSWKpImi1jpWbxrPFgzuFEHwAMDE5wMFgxLij3MUJpdGJ49XKGAOh0u1asFiLVvrw2CQeLNgMZlsRoPW5emELZdHAAAh+QQBCgAPACwAAAAAFAAUAAAEU/DJSau9bwzMteYTQUje9gjCJYqkiaLWOlZvGs8WDO5UUfCBwMTnAwWDEuKPcxQml0Ynj2cwYACAS7VqwWItW+vjcJB4s2AxmWxGg9bl6YQtl0cAACH5BAEKAA8ALAAAAAAUABQAAART8MlJq72PEMy15lNRSN72DMMliqSJotY6Vm8azxYM7pRh8ALBxOcDBYMS4o9zFCaXRiePdzhgAoFLtWrBYi1b6wMAkHizYDGZbEaD1uXphC2XRwAAIfkEAQoADwAsAAAAABQAFAAABFPwyUmrva8UzLXmk2FI3vYQxCWKpImi1jpWbxrPFgzu1HHwg8HE5wMFgxLij3MUJpdGJ48HAGAEgku1asFiLVvrIxCQeLNgMZlsRoPW5emELZdHAAAh+QQBCgAPACwAAAAAFAAUAAAEU/DJSau9zxjMtebTcUje9hTFJYqkiaLWOlZvGs8WDO4UAPAEwsTnAwWDEuKPcxQml0YnjxcIYAaDS7VqwWItW+tDIJB4s2AxmWxGg9bl6YQtl0cAACH5BAEKAA8ALAAAAAAUABQAAART8MlJq73vHMy15hMASN72GMYliqSJotY6Vm8azxYM7lQQ8IXCxOcDBYMS4o9zFCaXRiePJxBgCIRLtWrBYi1b62MwkHizYDGZbEaD1uXphC2XRwAAOw==',
            }
        },
        methods:{
            setContent:function(isAppendTo,imglink){
                console.log('回调链接'+imglink);
                UE.getEditor('editor').setContent('<img style="max-width:640px;" src='+imglink+'>', isAppendTo);
            },
            getContent:function(){
                var arr = [];
                arr.push("使用editor.getContent()方法可以获得编辑器的内容");
                arr.push("内容为：");
                arr.push(UE.getEditor('editor').getContent());
                alert(arr.join("\n"));
                console.log(arr.join("\n"));
            }
        },
        ready(){
            //实例化编辑器
            //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
            var ue = UE.getEditor('editor');

            let _this=this;
            let brandPic = {
                runtimes: 'html5,flash,html4', //上传模式,依次退化
                browse_button: 'pickfiles', //上传选择的点选按钮，**必需**
                uptoken_url: 'http://apidev.dev.wowdsgn.com:8400/apiv1/qiniu/token', //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                uptoken: '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                // unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                domain: 'http://o7s1lyy5h.bkt.clouddn.com', //bucket 域名，下载资源时用到，**必需**
                get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
                container: 'brand-pic-button', //上传区域DOM ID，默认是browser_button的父元素，
                max_file_size: '1mb', //最大文件体积限制
                flash_swf_url: 'http://cdn.bootcss.com/plupload/2.1.8/Moxie.swf', //引入flash,相对路径
                max_retries: 3, //上传失败最大重试次数
                dragdrop: false, //开启可拖曳上传
                drop_element: 'brand-pic-button', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '4mb', //分块上传时，每片的体积
                auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                init: {
                    'FilesAdded': function(up, files) {
                        plupload.each(files, function(file) {
                            // 文件添加进队列后,处理相关的事情
                            console.log('#####################进入队列#######################');
                            _this.brandpic=_this.loadingimg;
                        });
                    },
                    'BeforeUpload': function(up, file) {
                        // 每个文件上传前,处理相关的事情
                        console.log('#####################上传之前#######################');
                    },
                    'UploadProgress': function(up, file) {
                        // 每个文件上传时,处理相关的事情
                        console.log('#####################上传进行时#######################');
                    },
                    'FileUploaded': function(up, file, info) {
                        console.log(file);
                        console.log(info);
                        // 每个文件上传成功后,处理相关的事情
                        console.log('#####################上传成功#######################');
                        let domain = up.getOption('domain');
                        let res=$.parseJSON(info);
                        let brandpicsrc=domain+'/'+encodeURI(res.key);
                        _this.setContent(true,brandpicsrc);
                    },
                    'Error': function(up, err, errTip) {
                        console.log(up);
                        console.log(err);
                        console.log(errTip);
                        console.log('#####################上传出错#######################');
                        //上传出错时,处理相关的事情
                    },
                    'UploadComplete': function() {
                        console.log('#####################队列处理完毕#######################');
                        //队列文件处理完毕后,处理相关的事情
                    },
                    // 'Key': function(up, file) {
                    //     // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                    //     // 该配置必须要在 unique_names: false , save_key: false 时才生效
                    //
                    //     var key = "";
                    //     // do something with key here
                    //     return key
                    // }
                }
            };
            var uploader = Qiniu.uploader(brandPic);
        }
    }
</script>
