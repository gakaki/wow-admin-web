<style media="screen">
    .colorId1{
        /*白色*/
        background: #fff;
    }
    .colorId2{
        /*银色*/
        background: #d5d5d5;
    }
    .colorId3{
        /*灰色*/
        background: #919191;
    }
    .colorId4{
        /*黑色*/
        background: #000000;
    }
    .colorId5{
        /*红色*/
        background: #ff0000;
    }
    .colorId6{
        /*黄色*/
        background: #fed533;
    }
    .colorId7{
        /*蓝色*/
        background: #1790c8;
    }
    .colorId8{
        /*绿色*/
        background: #7bba3c;
    }
    .colorId9{
        /*紫色*/
        background: #8d429f;
    }
    .colorId10{
        /*原木色*/
        background: #cb8b44;
    }
    .colorId11{
        /*棕色*/
        background: #941100;
    }
    .colorId12{
        /*花色*/
        background:-webkit-linear-gradient(left,#f00 50%,#fed533 50%), -webkit-linear-gradient(left,#1790c8 50%,#7bba3c 50%);
        background:-moz-linear-gradient(left,#f00 50%,#fed533 50%), -moz-linear-gradient(left,#1790c8 50%,#7bba3c 50%);
        background-repeat:no-repeat;
        background-position:left top,left bottom;
        background-size:100% 50%;
        border: 0px;
        width: 12px;
        height: 12px;
    }
    .colorId13{
        /*橙色*/
        background: #FF9C00;
    }
    .color-label{
        width: 80px;
        min-height: 24px;
    }
    .color-label input[type=checkbox]{
        position: relative;
        display: inline-block;
        top: -1px;
    }
    .color-label input[type=text]{
        display: inline;
        width: 80px;
    }
    .spec-border-danger{
        border:1px solid #ff0000;
    }
    #specSelected span.n-right, #colorSelected span.n-right{
        top: -3px;
    }
    .spec-disabled td+td+td{
        background: #f9f9f9;
    }
    .spec-disabled:nth-child(n+2) td{
        background: #f9f9f9;
    }
    .color-img-disabled{
        position: absolute;
        left: 0px;
        right: 0px;
        top:0px;
        bottom: 0px;
        background-color:rgba(0,0,0,0.2);
        z-index: 9;
    }
</style>
<template>
    <div class="col-md-12 addproduct-box-html form-horizontal" id="edit-color-img">
        <div class="well well-sm">
            <ul class="edit-product-title list-inline">
                <li>销售属性<span class="text-danger">［颜色／规格 *必选］</span></li>
                <li class="text-right">
                    <button id="edit-color-button" type="button" class="btn btn-danger">确认修改</button>
                </li>
            </ul>
        </div>

        <!-- 颜色 -->
        <div class="form-group" id="edit-colorSelected">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>颜色</label>
            <div class="col-sm-7 bg-muted">
                <div v-for="item in colorList" style="display:inline-block; min-width:140px;">
                    <label class="checkbox-inline" style="margin-right:0px;">
                        <input v-bind:disabled="item.disabled==true" type="checkbox" value="{{item.colorName}}" v-model='item.selected'>
                        <i v-bind:class="'colorId'+item.colorId" v-bind:style="{ background: item.color}" class="addproduct-box-html-color-box"></i>
                        <span v-if="item.selected==false">{{item.colorName}}</span>
                    </label>
                    <div class="color-label" v-if="item.selected==true" style="display:inline-block">
                        <input data-rule="required" name="{{'colorSelected'+$index}}" v-bind:disabled="item.selected==false" v-if="item.selected==true" type="text" value="{{item.colorName}}" v-model='item.colorName' placeholder="颜色">
                    </div>
                </div>
            </div>
        </div>

        <!-- 规格 -->
        <div class="form-group" id="edit-specSelected">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>规格</label>
            <div class="col-sm-7 bg-muted">
                <div v-for="item in specList" style="display:inline-block; min-width:140px; margin:5px 0px;">
                    <label style="margin: 0px; position: relative;top: -11px;" class="checkbox-inline">
                        <input v-on:change="specChange($index, $event)" v-bind:disabled="item.disabled==true" type="checkbox" value="{{item.specName}}" v-model='item.selected'>
                    </label>
                    <div style="display:inline-block;">
                        <input data-rule="required" name="{{'specSelected'+$index}}" @input="setSpec($index,$event)" v-bind:disabled="item.selected==false" type="text" class="sales-attribute-table-text" placeholder="规格" value="{{item.specName}}" v-model='item.specName'>
                    </div>
                </div>
            </div>
        </div>

        <!-- 属性展示列表 -->
        <div id="edit-clor-pic-box" style="margin-top:40px;">
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
                <tbody v-if="item.selected==true" v-for="(index, item) in colorList">
                    <tr v-if="items.selected==true" v-for="items in item.specList" v-bind:class="{'spec-disabled':items.addeds==true}">
                       <td style="position:relative;" v-if="$index==0" v-bind:rowspan="specSelected.length">
                           <div v-if="colorImgTag==true" class="color-img-disabled text-danger"></div>
                           <div class="set-color-src" @click="setColorSrc(index)">
                               <img v-if="item.colorImg!=''" style="max-width:70px; max-height:70px;" v-bind:src="item.colorImg+'?imageView2/1/w/70/h/70'" alt="" />
                               <button v-if="item.colorImg==''" class="btn btn-success"> <span>选择图片</span> </button>
                               <input data-rule="required" v-bind:value="item.colorImg" class="form-control hidden" type="text" name="{{'productColorImg'+index}}" placeholder="颜色图片">
                           </div>
                       </td>
                       <td v-if="$index==0" v-bind:rowspan="specSelected.length">
                           {{item.colorName}}
                       </td>
                       <td>
                           {{items.specName}}
                       </td>
                       <td>
                           <input data-rule="required" name="{{'sellPrice'+index+$index}}" @input="setVal(index,$index,$event,'sellPrice') | debounce 500" v-bind:disabled="items.addeds==true" type="number" class="form-control sales-attribute-table-text" placeholder="售价" name="sellPrice00" aria-required="true" v-bind:value="items.sellPrice">
                       </td>
                       <td>
                           <input data-rule="required" name="{{'weight'+index+$index}}"  @input="setVal(index,$index,$event,'weight') | debounce 500" v-bind:disabled="items.addeds==true" type="number" class="form-control sales-attribute-table-text" placeholder="重量" name="weight00" aria-required="true" v-bind:value="items.weight">
                       </td>
                       <td>
                            <div class="text-muted" v-if="items.productId">
                                <span class="glyphicon glyphicon-ban-circle"></span>
                            </div>
                           <div v-if="!items.productId">
                               <button @click="specDisable(index,$index)" v-if="items.addeds==false" type="button" class="btn btn-danger btn-sm">取消</button>
                               <button @click="specEnable(index,$index)" v-if="items.addeds==true" type="button" class="btn btn-success btn-sm">新增</button>
                           </div>
                       </td>
                   </tr>
                </tbody>
            </table>
        </div>

        <!-- 隐藏域，用于触发图片上传按钮 -->
        <img class="testImg" alt="" style="display:none;">
        <div id="edit-img-text-upload" style="display:none;">
            <button id="edit-img-text-upload-btn" type="button" name="button">图文上传按钮</button>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Promise                              from    'thenfail'
    import lodash                               from    'lodash'
    import {imgNameSplit,qiNiu,qiniuimgsrc,uploadImgLoad,httpPost} from    '../../../../config'
    import md5                                  from    'md5'

    export default{
        props:['alertobj','productid','serials'],
        data(){
            return{
                colorList:[
                    {colorId: 1,colorName: '白色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 2,colorName: '银色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 3,colorName: '灰色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 4,colorName: '黑色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 5,colorName: '红色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 6,colorName: '黄色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 7,colorName: '蓝色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 8,colorName: '绿色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 9,colorName: '紫色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 10,colorName: '原木色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 11,colorName: '棕色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 12,colorName: '花色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 13,colorName: '橙色',colorImg:'',selected:false,specList: [],disabled:false},
                ],
                specList:[],
                specSelected:[],
                colorSrcIndex:'',
                colorImgTag:false,
                totalSkuList:[],
                addeds:[],
                updateds:[],
            }
        },
        methods:{
            /**
             * =====点击选中图片按钮，设置颜色图片的索引值=====
             */
            setColorSrc:function(index){
                this.$set('colorSrcIndex',index)
            },

            /**
             * =====售价与重量的赋值=====
             */
            setVal:function(colro,spec,e,name){
                this.colorList[colro].specList[spec][name]=e.target.value;
            },

            /**
             * =====如果规格的文字变动，修改对应规格的值=====
             */
            setSpec:function(index,e){
                for (let i = 0; i < this.colorList.length; i++) {
                    this.colorList[i].specList[index].specName=e.target.value;
                }
            },

            /**
             * =====取消单条sku=====
             */
            specDisable:function(color,spec){
                this.colorList[color].specList[spec].addeds=true;
            },

            /**
             * =====新增单条sku=====
             */
            specEnable:function(color,spec){
                this.colorList[color].specList[spec].addeds=false;
            },

            /**
             * =====规格取消选中=====
             */
            specChange:function(index,e){
                for (let i = 0; i < this.colorList.length; i++) {
                    this.colorList[i].specList[index].selected=e.target.checked;
                }
            },

            /**
             * =====筛选数据提交到服务器=====
             */
            totalFilter:function(){
                /**
                 * 判断是否有相同的规格名
                 */
                let selectSpec=[]
                let selectedSpecArr=(val)=>{
                    selectSpec.push(val.specName)
                }
                this.specSelected.filter(selectedSpecArr);
                if (this.specSelected.length!=_.uniq(selectSpec).length) {
                    this.$set('alertobj',{alertType:'alert-danger',alertInfo:'规格名字重复',alertShow:true});
                    this.$dispatch('loadingEnd', 'msg');
                    return false;
                }

                Promise.then(()=>{
                    /**
                     * 筛选已经勾选的颜色
                     * colorId的selected等于true符合条件
                     */
                    let totalColor=(value)=>{
                        return value.selected==true;
                    }
                    return Promise.resolve(this.colorList.filter(totalColor))
                })
                .then(value=>{
                    /**
                     * 从符合条件的colorId数据里面筛选全部需要提交的单条sku
                     * addeds等于false的符合条件
                     * 数据push到两个数组列表里面，addeds/updateds
                     * 根据有没有productId来区分是老数据还是新增的数据
                     */
                    this.$set('addeds',[]);
                    this.$set('updateds',[])
                    let totalSku=(val,valIndex)=>{
                        let totalSkuS=(sku,skuIndex)=>{
                            if (sku.addeds==false&&typeof(sku.productId)=='number') {
                                this.updateds.push({
                                    productId:sku.productId,
                                    colorId:val.colorId,
                                    colorImg:val.colorImg,
                                    colorName:val.colorName,
                                    specName:sku.specName,
                                    weight:sku.weight,
                                    sellPrice:sku.sellPrice
                                })
                            }else if(sku.addeds==false){
                                this.addeds.push({
                                    colorId:val.colorId,
                                    colorImg:val.colorImg,
                                    colorName:val.colorName,
                                    specName:sku.specName,
                                    weight:sku.weight,
                                    sellPrice:sku.sellPrice
                                })
                            }
                        }
                        val.specList.filter(totalSkuS)
                    }
                    value.filter(totalSku)
                })
                .then(value=>{
                    let skuInfo={
                        productId:this.productid,
                        addeds:this.addeds,
                        updateds:this.updateds
                    }
                    httpPost('/v1/product/serials',skuInfo,'修改失败',(data)=> {
                        this.$dispatch('loadingEnd', 'msg');
                        if (data.resCode==0) {
                            this.$set('alertobj',{alertType:'alert-success',alertInfo:'修改成功',alertShow:true})
                            setTimeout(function(){
                                window.location.href=""
                            },500)
                        }else {
                            this.$set('alertobj',{alertType:'alert-danger',alertInfo:'修改失败',alertShow:true})
                        }
                    });
                })
            },
        },
        watch:{
            /**
             * =====拿到服务端返回的sku数据,设置默认数据=====
             */
            'serials':function(val,oldval){
                /**
                 * 初始化本地的数据
                 * disabled用于控制默认值那些规格是要被锁定的
                 * addeds属性用于控制单条sku是否启用或者禁用
                 */
                Promise.then(() => {
                    /**
                     * 判断是否有相同名字的规格
                     */
                    for (let a = 0; a < 15; a++) {
                        this.specList.push(JSON.parse(JSON.stringify({specName:'',sellPrice:'',weight:'',selected:false,disabled:false,addeds:true})))
                    }
                })
                .then(value => {
                    // 初始化本地的颜色数据
                    for (let a = 0; a < this.colorList.length; a++) {
                        this.$set('colorList['+a+'].specList',JSON.parse(JSON.stringify(this.specList)));
                    }
                })
                .then(value => {
                    if (val) {
                        /**
                         *筛选出已有的颜色数据
                         */
                        let filterColor =val;
                        let color = _.uniqBy(filterColor, 'colorId'),
                        dataMap = {
                            colorId: 'colorId',
                            colorName: 'colorName',
                            colorImg:'colorImg'
                        };
                        let colorList = color.map(function (colorId) {
                            let color = {};
                            for (let key in dataMap) {
                                color[dataMap[key]] = colorId[key];
                            };
                            return color;
                        });
                        return Promise.resolve(colorList);
                    } else {
                        throw new Error();
                    }
                })
                .then(value => {
                    /**
                     * 根据筛选出的颜色数据，勾选并且改变颜色图片跟颜色名字
                     */
                    let selected = (value) => {
                        let color=this.colorList.findIndex(function(val, index, arr) {
                            return val.colorId == value.colorId;
                        })
                        this.colorList[color].colorName=value.colorName;
                        this.colorList[color].colorImg=value.colorImg;
                        this.colorList[color].selected=true;
                        this.colorList[color].disabled=true;
                    }
                    value.filter(selected);
                })
                .then(value => {
                    /**
                     *筛选出已有的规格数据
                     */
                    let filterSpec=val;
                    let spec = _.uniqBy(filterSpec,'specName'),
                    dataMap = {
                        specName: 'specName',
                    };
                    let specList = spec.map(function (specName) {
                        let spec = {};
                        for (let key in dataMap) {
                            spec[dataMap[key]] = specName[key];
                        };
                        return spec;
                    });
                    return Promise.resolve(specList);
                })
                .then(value => {
                    /**
                     * 根据筛选出已有的规格数据，勾选并且改变规格的名字
                     */
                    let selected = (value,index) => {
                        this.specList[index].specName=value.specName;
                        this.specList[index].disabled=true;
                        this.specList[index].selected=true;
                    }
                    value.filter(selected);
                })
                .then(value => {
                    // 设置各个规格默认值
                    let specVal=(value,index)=>{
                        return value.selected==true;
                    }
                    this.specList.filter(specVal);
                    for (let a = 0; a < this.colorList.length; a++) {
                        for (var b = 0; b < this.specList.filter(specVal).length; b++) {
                            this.colorList[a].specList[b].specName=this.specList.filter(specVal)[b].specName;
                            this.colorList[a].specList[b].selected=true;
                        }
                    }
                })
                .then(value=>{
                    /**
                     * 先从服务端返回的数据找出颜色id，然后用颜色id去匹配设置默认值
                     */
                    let filterColorId=val;
                    let colorId = _.uniqBy(filterColorId,'colorId'),
                    dataMap = {
                        colorId: 'colorId',
                    };
                    let colorIdArr=[]
                    let colorIdList = colorId.map(function (specName) {
                        for (let key in dataMap) {
                            colorIdArr.push(specName[key]);
                        };
                    });

                    /**
                     * 根据找出的颜色id，设置默认匹配对应的尺寸价格／重量
                     */
                    let colorIdFilter=(data)=>{
                        let index=this.colorList.findIndex(function(val, index ,arr){
                            return val.colorId==data;
                        })
                        for (let a = 0; a < this.colorList[index].specList.length; a++) {
                            for (let b = 0; b < val.length; b++) {
                                if (val[b].colorId==index+1&&val[b].specName==this.colorList[index].specList[a].specName) {
                                    this.colorList[index].specList[a].addeds=false;
                                    this.colorList[index].specList[a].productId=val[b].productId;
                                    this.colorList[index].specList[a].sellPrice=val[b].sellPrice;
                                    this.colorList[index].specList[a].weight=val[b].weight;
                                }

                            }
                        }
                    }
                    colorIdArr.filter(colorIdFilter)
                })
                .then(value=>{
                    /**
                     * 七牛上传颜色图片
                     */
                    let _this=this;
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
                                    $('#edit-color-img').validator('cleanUp');
                                    _this.colorList[_this.colorSrcIndex].colorImg=uploadImgLoad;
                                });
                            },
                            'BeforeUpload': function(up, file) {
                               // 每个文件上传前,处理相关的事情
                               _this.$set('colorImgTag',true);
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
                                setTimeout(()=>{
                                    _this.colorList[_this.colorSrcIndex].colorImg=domain+encodeURI(res.key);
                                    _this.$set('colorImgTag',false);
                                },100)
                            },
                            'Error': function(up, err, errTip) {
                                //上传出错时,处理相关的事情
                                if (err.status==614) {
                                    _this.$set('alertobj',{alertType:'alert-danger',alertInfo:'文件已存在，请更改文件名',alertShow:true})
                                }else {
                                    _this.$set('alertobj',{alertType:'alert-danger',alertInfo:errTip,alertShow:true})
                                }
                                _this.colorList[_this.colorSrcIndex].colorImg='';
                                _this.$set('colorImgTag',false);
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
                })
                .then(value=>{
                    /**
                     * 表单验证
                     */
                    let _this=this;
                    $('#edit-color-img').validator({
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
                            _this.$dispatch('loadingStart', 'msg');
                            _this.totalFilter();
                        }
                    })
                    .on("click", "#edit-color-button", function(e){
                        $(e.delegateTarget).trigger("validate");
                    });
                })
            },
            /**
             * =====监控单条specList数据是否发生变化=====
             */
            'specList': {
                handler: function (val, oldVal) {
                    /**
                     * 如果specList发生变化，筛选出已经勾选的规格，specSelect数组长度用于设置table显示的row数
                     */
                    Promise.then(() => {
                        let specSelect=(value,index)=>{
                            return value.selected==true;
                        }
                        this.$set('specSelected',val.filter(specSelect));
                    })
                },
                deep: true,
            },
            // 'colorList': {
            //     // 监测数据变动，控制按钮是否变亮
            //     handler: function (val, oldVal) {
            //         console.log(val);
            //     },
            //     deep: true,
            // },
        }
    }
</script>
