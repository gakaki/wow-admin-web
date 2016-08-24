<style media="screen">
    .spec-disabled td+td+td{
        background: #f9f9f9;
    }
    .spec-disabled:nth-child(n+2) td{
        background: #f9f9f9;
    }
</style>
<template>
    <div class="form-group" style="margin-top:40px">
        <label for="firstname" class="col-sm-2 control-label"> </label>
        <div class="col-sm-7 control-label">
            <div class="text-left"> 批量设置：
                <div class="btn-group">
                    <button type="button" class="btn btn-primary btn-sm">售价</button>
                    <button type="button" class="btn btn-primary btn-sm">重量</button>
                </div>
            </div>
        </div>
    </div>
    <div id="edit-clor-pic-box">
        <table class="table order-list sales-attribute-table">
            <thead>
                <tr>
                    <th>图片<span class="text-danger">(比例1:1)</span></th>
                    <th>颜色</th>
                    <th>规格</th>
                    <th><span class="text-danger">*</span>售价</th>
                    <th><span class="text-danger">*</span>重量(KG)</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody v-for="(index, item) in listView">
                <tr v-for="items in item.specList" v-bind:class="{'spec-disabled':items.disabled==true}">
                   <td v-if="$index==0" v-bind:rowspan="specSelected.length">
                       <div class="set-color-src" @click="setColorSrc(index)">
                           <img v-if="item.colorImg!=''" style="max-width:70px; max-height:70px;" v-bind:src="item.colorImg+'?imageView2/1/w/70/h/70'" alt="" />
                           <button v-if="item.colorImg==''" class="btn btn-success"> <span>选择图片</span> </button>
                       </div>
                   </td>
                   <td v-if="$index==0" v-bind:rowspan="specSelected.length">
                       {{item.colorName}}
                   </td>
                   <td>
                       {{items.specName}}
                   </td>
                   <td>
                       <input @input="setVal(index,$index,$event,'sellPrice') | debounce 500" v-bind:disabled="items.disabled==true" type="number" class="form-control sales-attribute-table-text" placeholder="售价" name="sellPrice00" aria-required="true" v-bind:value="items.sellPrice">
                   </td>
                   <td>
                       <input @input="setVal(index,$index,$event,'weight') | debounce 500" v-bind:disabled="items.disabled==true" type="number" class="form-control sales-attribute-table-text" placeholder="重量" name="weight00" aria-required="true" v-bind:value="items.weight">
                   </td>
                   <td>
                       <button @click="specDisable(index,$index,items.productId)" v-if="items.disabled==false" type="button" class="btn btn-danger btn-sm">禁用</button>
                       <button @click="specEnable(index,$index,items.productId)" v-if="items.disabled==true" type="button" class="btn btn-success btn-sm">启用</button>
                   </td>
               </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript">
    import lodash           from    'lodash'
    import {imgNameSplit,qiNiu,qiniuimgsrc,uploadImgLoad,httpPost} from    '../../../../config'
    import md5          from    'md5'

    export default{
        props:['colorList','specList','serials','alertobj','productid'],
        data(){
            return{
                colorSelected:[],
                specSelected:[],
                listView:[],
                addeds:[],
                updateds:[],
                deleteds:[],
                colorSrcIndex:'',
            }
        },
        compiled(){
            this.colorFilter()
            this.specFilter()
            this.viewSku()
        },
        methods:{
            //上传图片
            setColorSrc:function(index){
                this.$set('colorSrcIndex',index)
            },

            //设置默认的规格值
            defaultSpec:function(){
                this.$set('listView',JSON.parse(JSON.stringify(this.listView)))
                for (let a = 0; a < this.listView.length; a++) {
                    for (let b = 0; b < this.listView[a].specList.length; b++) {
                        if (this.listView[a].colorId!=this.listView[a].specList[b].colorId) {
                            this.listView[a].specList[b].disabled=true
                            this.listView[a].specList[b].sellPrice=''
                            this.listView[a].specList[b].weight=''
                        }else {
                            this.listView[a].specList[b].productId=this.serials[b].productId
                        }
                    }
                }
            },

            //筛选已选颜色
            colorFilter:function(){
                this.$set('colorSelected',[])
                for (let i = 0; i < this.colorList.length; i++) {
                    if (this.colorList[i].selected==true) {
                        this.colorSelected.push(this.colorList[i])
                    }
                }
            },

            //筛选已选尺寸
            specFilter:function(){
                this.$set('specSelected',[])
                for (let i = 0; i < this.specList.length; i++) {
                    if (this.specList[i].selected==true) {
                        this.specSelected.push(this.specList[i])
                    }
                }
            },

            //计算总的需要渲染的sku数据
            viewSku:function(){
                this.$set('listView',[]);
                for (let a = 0; a < this.colorSelected.length; a++) {
                    this.listView.push(
                        {
                            colorId:this.colorSelected[a].colorId,
                            colorName:this.colorSelected[a].colorName,
                            colorImg:this.colorSelected[a].colorImg,
                            specList:[],
                        }
                    )
                    for (let b = 0; b < this.specSelected.length; b++) {
                        this.listView[a].specList.push(
                            this.specSelected[b]
                        )
                        if (b+1==this.specSelected.length) {
                            this.defaultSpec();
                        }
                    }
                }
            },

            //计算总的需要提交的sku数据
            TotalFilter:function(){
                this.$set('updateds',[]);
                this.$set('addeds',[]);
                for (let a = 0; a < this.listView.length; a++) {
                    for (let b = 0; b < this.listView[a].specList.length; b++) {
                        if (this.listView[a].specList[b].disabled==false) {
                            if (this.listView[a].specList[b].productId) {
                                this.updateds.push({
                                    colorId:this.listView[a].colorId,
                                    colorImg:this.listView[a].colorImg,
                                    colorName:this.listView[a].colorName,
                                    specName:this.listView[a].specList[b].specName,
                                    weight:this.listView[a].specList[b].weight,
                                    sellPrice:this.listView[a].specList[b].sellPrice,
                                    productId:this.listView[a].specList[b].productId,
                                })
                            }else {
                                this.addeds.push({
                                    colorId:this.listView[a].colorId,
                                    colorImg:this.listView[a].colorImg,
                                    colorName:this.listView[a].colorName,
                                    specName:this.listView[a].specList[b].specName,
                                    weight:this.listView[a].specList[b].weight,
                                    sellPrice:this.listView[a].specList[b].sellPrice,
                                })
                            }
                        }
                    }
                    if (a+1==this.listView.length) {
                        //过滤完需要提交的sku数据，提交到服务器
                        console.log('商品id'+this.productid);
                        console.log(this.addeds);
                        console.log(this.updateds);
                        console.log(this.deleteds);
                        let skuInfo={
                            productId:this.productid,
                            deleteds:this.deleteds,
                            addeds:this.addeds,
                            updateds:this.updateds
                        }
                        this.$dispatch('loadingStart', 'msg');
                        httpPost('/v1/product/serials',skuInfo,'修改失败',(data)=> {
                            this.$dispatch('loadingEnd', 'msg');
                            if (data.resCode==0) {
                                this.$set('alertobj',{alertType:'alert-success',alertInfo:'修改成功',alertShow:true})
                            }else {
                                this.$set('alertobj',{alertType:'alert-danger',alertInfo:'修改失败',alertShow:true})
                            }
                            setTimeout(function(){
                                window.location.href=""
                            },500)
                        });
                    }
                }
            },

            //禁用
            specDisable:function(color,spec,productId){
                this.listView[color].specList[spec].disabled=true;
                // 如果有id，表示是服务器返回的数据
                if (typeof(productId)=='number') {
                    this.deleteds.push(productId)
                }
            },

            //启用
            specEnable:function(color,spec,productId){
                this.listView[color].specList[spec].disabled=false;
                // 如果有id，表示是服务器返回的数据
                if (typeof(productId)=='number') {
                    this.deleteds.find((value, index, arr)=> {
                        if (value==productId) {
                            this.deleteds.splice(index,1);
                        }
                    });
                }
            },

            //售价与重量的赋值
            setVal:function(colro,spec,e,name){
                this.listView[colro].specList[spec][name]=e.target.value;
            },
        },
        watch:{
            'colorList': {
                handler: function (val, oldVal) {
                    this.colorFilter()
                    this.viewSku();
                },
                deep: true,
            },
            'specList': {
                handler: function (val, oldVal) {
                    this.specFilter()
                    this.viewSku();
                },
                deep: true
            }
        },
        events:{
            //提交数据
            'TotalFilterList':function(){
                this.TotalFilter();
            },
            'colorImgList':function(msg){
                var _this=this;
                setTimeout(function(){
                    var Qiniu3 = new QiniuJsSDK();
                    $(document).on("click",".set-color-src",function(){
                        $("#edit-img-text-upload-btn").trigger("click");
                    })
                    let editColorImg = {
                        runtimes: 'html5,flash,html4', //上传模式,依次退化
                        browse_button: 'edit-img-text-upload-btn', //上传选择的点选按钮，**必需**
                        uptoken_url: qiNiu.uptokenUrl, //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                        uptoken: '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                       //  unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                        // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                        domain: qiniuimgsrc, //bucket 域名，下载资源时用到，**必需**
                        get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
                        container: 'edit-img-text-upload', //上传区域DOM ID，默认是browser_button的父元素，
                        max_file_size: '1000kb', //最大文件体积限制
                        flash_swf_url: 'http://cdn.bootcss.com/plupload/2.1.8/Moxie.swf', //引入flash,相对路径
                        max_retries: 3, //上传失败最大重试次数
                        dragdrop: false, //开启可拖曳上传
                        drop_element: 'edit-img-text-upload', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                        chunk_size: '1000kb', //分块上传时，每片的体积
                        auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                        init: {
                            'FilesAdded': function(up, files) {
                                plupload.each(files, function(file) {
                                    // 文件添加进队列后,处理相关的事情
                                    $('#add-product-from').validator('cleanUp');
                                    _this.listView[_this.colorSrcIndex].colorImg=uploadImgLoad;
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
                                _this.listView[_this.colorSrcIndex].colorImg=domain+encodeURI(res.key);
                            },
                            'Error': function(up, err, errTip) {
                                //上传出错时,处理相关的事情
                                if (err.status==614) {
                                    _this.$set('alertobj',{alertType:'alert-danger',alertInfo:'文件已存在，请更改文件名',alertShow:true})
                                }else {
                                    _this.$set('alertobj',{alertType:'alert-danger',alertInfo:errTip,alertShow:true})
                                }
                                _this.listView[_this.colorSrcIndex].colorImg='';
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
                    var uploader3 = Qiniu3.uploader(editColorImg);
                },100)
            }
        }
    }
</script>
