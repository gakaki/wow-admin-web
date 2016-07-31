<style media="screen">
    .origin_country .dropdown-toggle{
        border-top-left-radius:0px !important;
        border-bottom-left-radius:0px !important;
    }
    .add-product-hide-input span.msg-box{
        position: absolute;
        z-index: 999;
    }
    #add-product-from span.n-right{
        top: 3px;
        right: 0px;
    }
</style>
<template>
    <Alert :duration="2000" :alertshow.sync="alertObj.alertShow" :type="alertObj.alertType" :info="alertObj.alertInfo"></Alert>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">基本信息</div>
        <div class="form-group">
            <label class="col-sm-2 control-label">所属分类</label>
            <div class="col-sm-10">
                <p class="control-label text-muted">
                    {{productbasiinfo.SelectcategoryName.one}} > {{productbasiinfo.SelectcategoryName.two}} > {{productbasiinfo.SelectcategoryName.three}} <a @click="callStepsChange" href="javascript:;">重新选择</a>
                </p>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>商品名称</label>
            <div class="col-sm-4">
                <input data-rule="required" name="productName" maxlength="30" v-model="productbasiinfo.product_name" type="text" class="form-control" placeholder="商品名称">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">{{productbasiinfo.product_name.length}}/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>卖点</label>
            <div class="col-sm-4">
                <input data-rule="required" name="sellingPoint" v-model="productbasiinfo.selling_point" type="text" class="form-control" placeholder="商店卖点">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">{{productbasiinfo.selling_point.length}}/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>商品型号</label>
            <div class="col-sm-3">
                <input data-rule="required" name="productModel" v-model="productbasiinfo.product_model" type="text" class="form-control" placeholder="商品型号">
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>品牌</label>
            <div class="col-sm-3 add-product-hide-input">
                <input data-rule="required" name="brandId" v-bind:value="productbasiinfo.brand_id" type="text" class="form-control hidden" placeholder="品牌">
                <v-select :on-change="setBrandId" label="brandCname" :debounce="500" :on-search="setBrandListCache" placeholder="搜索品牌" :options="brandlist"></v-select>
            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>设计师(可多选)</label>
            <div class="col-sm-4 add-product-hide-input">
                <input data-rule="required" name="designerVoList" v-bind:value="productbasiinfo.product_designer" type="text" class="form-control hidden" placeholder="设计师">
                <v-select multiple label="designerName" :debounce="500" :on-search="setDesignersCache" :value.sync="productbasiinfo.product_designer" placeholder="搜索设计师" :options="designers"></v-select>
            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>主设计师</label>
            <div class="col-sm-4 add-product-hide-input">
                <input data-rule="required" name="PrimaryDesigner" v-bind:value="isPrimaryDesigner" type="text" class="form-control hidden" placeholder="主设计师">
                <select @change="isPrimary($event)" class="form-control">
                    <option value="" selected>请选择主设计师</option>
                    <option v-for="item in productbasiinfo.product_designer" v-bind:value="$index">{{item.designerName}}</option>
                 </select>
            </div>
        </div>

        <!-- <Designers :index="$index" :itemlength="productbasiinfo.product_designer.length" v-for="item in productbasiinfo.product_designer" :designersid.sync="item.id" :designers="designers"></Designers> -->

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>产地/国家</label>
            <div class="col-sm-4">
                <div class="input-group add-product-hide-input">
                    <input data-rule="required" name="originCountryId" v-bind:value="productbasiinfo.origin_country" type="text" class="form-control hidden" placeholder="国家">
                    <span style="border-top-left-radius:4px; border-bottom-left-radius:4px;" class="input-group-addon">国家</span>
                    <v-select class="origin_country" :on-change="setOriginCountryId" label="keyValue" :debounce="500" :on-search="setOriginCountryCache" placeholder="搜索国家" :options="originCountry"></v-select>
                </div>
            </div>
        </div>

        <div v-if="productbasiinfo.origin_country=='China'" class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>产地/省-市</label>
            <div class="col-sm-4">
                <div class="input-group add-product-hide-input">
                    <input data-rule="required" name="originProvinceId" v-bind:value="productbasiinfo.origin_province" type="text" class="form-control hidden" placeholder="省份">
                    <span style="border-top-left-radius:4px; border-bottom-left-radius:4px;" class="input-group-addon">省份</span>
                    <v-select class="origin_country" :on-change="setOriginProvinceId" label="areaName" :debounce="500" placeholder="搜索省份" :options="originProvince"  :on-search="searchProvince"></v-select>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="input-group add-product-hide-input">
                    <input data-rule="required" name="originCityId" v-bind:value="productbasiinfo.origin_city" type="text" class="form-control hidden" placeholder="城市">
                    <span style="border-top-left-radius:4px; border-bottom-left-radius:4px;" class="input-group-addon">城市</span>
                    <v-select v-if="cityTag==0" class="origin_country" :on-change="setOriginCityId" label="areaName" :debounce="500" placeholder="搜索城市" :options="originCity" :on-search="searchCity"></v-select>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>风格</label>
            <div class="col-sm-2 add-product-hide-input">
                <input data-rule="required" name="styleId" v-bind:value="productbasiinfo.style" type="text" class="form-control hidden" placeholder="风格">
                <select v-model="productbasiinfo.style" class="form-control">
                    <option value="" selected>请选择</option>
                    <option v-bind:value="1">风格1</option>
                    <option v-bind:value="2">风格2</option>
                    <option v-bind:value="3">风格3</option>
                    <option v-bind:value="4">风格4</option>
                    <option v-bind:value="5">风格5</option>
                    <option v-bind:value="6">风格6</option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>尺寸</label>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">长</span>
                    <input data-rule="required" name="length" v-model="productbasiinfo.long" type="number" class="form-control" placeholder="长">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">宽</span>
                    <input data-rule="required" name="width" v-model="productbasiinfo.width" v-model="productbasiinfo.width" type="number" class="form-control" placeholder="宽">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">高</span>
                    <input data-rule="required" name="height" v-model="productbasiinfo.height" v-model="productbasiinfo.height" type="number" class="form-control" placeholder="高">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">若为系列商品，按尺寸最大的填写</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>适用人群</label>
            <div class="col-sm-2 add-product-hide-input">
                <input data-rule="required" name="applicablePeople" v-bind:value="productbasiinfo.applicable_people" type="text" class="form-control hidden" placeholder="适用人群">
                <select v-model="productbasiinfo.applicable_people" class="form-control">
                    <option value="" selected>请选择</option>
                    <option v-bind:value="1">通用</option>
                    <option v-bind:value="2">成人</option>
                    <option v-bind:value="3">男性</option>
                    <option v-bind:value="4">女性</option>
                    <option v-bind:value="5">儿童</option>
                    <option v-bind:value="6">老人</option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>是否可定制</label>
            <div class="col-sm-2 add-product-hide-input">
                <input data-rule="required" name="canCustomized" v-bind:value="productbasiinfo.can_customize" type="text" class="form-control hidden" placeholder="是否可以定制">
                <select v-model="productbasiinfo.can_customize" class="form-control">
                    <option selected value="">请选择</option>
                    <option v-bind:value=true>可以定制</option>
                    <option v-bind:value=false>不可以定制</option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>适用场景
            </label>
            <div class="col-sm-7 bg-muted">
                <label class="checkbox-inline">
                    <input data-rule="checked[1~]" type="checkbox" name="applicableScene[]" v-model="productbasiinfo.applicable_scene_text" value="1"> 客厅
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" name="applicableScene[]" v-model="productbasiinfo.applicable_scene_text" value="2"> 卧室
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" name="applicableScene[]" v-model="productbasiinfo.applicable_scene_text" value="3"> 厨房
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" name="applicableScene[]" v-model="productbasiinfo.applicable_scene_text" value="4"> 卫生间
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" name="applicableScene[]" v-model="productbasiinfo.applicable_scene_text" value="5"> 办公室
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" name="applicableScene[]" v-model="productbasiinfo.applicable_scene_text" value="6"> 儿童房
                </label>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>材质</label>
            <div class="col-sm-7 bg-muted">
                <label class="checkbox-inline" v-for="item in labeltest">
                    <input data-rule="checked[1~]" name="materialList[]" v-model="productbasiinfo.material_text" type="checkbox" value="{{$index+1}}"> 选项{{$index+1}}
                </label>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Select2 from '../../../../components/common/selecte2/Selecte2'
    import Designers from './Designers'
    import vSelect from '../../../../components/common/vue-select/src/index.js'
    import {DesignersData,Country} from '../../../../test.js'
    import WebStorageCache from 'web-storage-cache'
    import Alert from '../../../../components/common/alert/Alert'
    import {API_ROOT} from '../../../../config'

    export default{
        props:['productbasiinfo'],
        components:{
            Select2,
            Designers,
            vSelect,
            Alert
        },
        data(){
            return{
                labeltest:14,
                brandlist:null,
                designers:null,
                originCountry:null,
                originProvince:[],
                originCity:[],
                isPrimaryDesigner:'',
                alertObj:{
                    alertType:null,
                    alertInfo:null,
                    alertShow:false,
                },
                cityTag:0,
            }
        },
        methods:{
            //重新选择分类
            callStepsChange:function(){
                this.$dispatch('callStepsChangeFater','1');
            },

            /**
             * 品牌操作
             */
            //品牌数据，设置本地缓存数据
            setBrandListCache:function(){
                let wsCache = new WebStorageCache();
                this.$http.get(API_ROOT+'/admin-api-dev/v1/brand/queryAll',{}).then((response) => {
                    if (response.data.resCode==0) {
                        this.$set('brandlist',response.data.data.brandList);
                    }else {
                    }
                }, (response) => {
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'获取品牌数据错误',alertShow:true})
                });
            },
            //设置品牌id的值
            setBrandId(val) {
                if (!val) {
                    this.$set('productbasiinfo.brand_id','')
                    return;
                }
                this.$set('productbasiinfo.brand_id',val.id);
                $('#add-product-from').data('validator').hideMsg('input[name="brandId"]');
            },

            /**
             * 设计师操作
             */
             //设计师，设置本地缓存数据
             setDesignersCache:function(){
                 let wsCache = new WebStorageCache();
                 this.$http.get(API_ROOT+'admin-api-dev/v1/designer/queryAllDesigner',{}).then((response) => {
                     if (response.data.resCode==0) {
                         this.$set('designers',response.data.data.designerList);
                     }else {
                     }
                 }, (response) => {
                     this.$set('alertObj',{alertType:'alert-danger',alertInfo:'获取设计师数据错误',alertShow:true})
                 });
             },
            //设置主设计师
            isPrimary:function(event){
                if (event.target.value=='') {
                    this.$set('isPrimaryDesigner','');
                    for(let i=0;i<this.productbasiinfo.product_designer.length;i++){
                        this.$set('productbasiinfo.product_designer['+i+'].primary',false);
                    }
                }else {
                    for(let i=0;i<this.productbasiinfo.product_designer.length;i++){
                        this.$set('productbasiinfo.product_designer['+i+'].primary',false);
                    }
                    this.$set('productbasiinfo.product_designer['+event.target.value+'].primary',true);
                    this.$set('isPrimaryDesigner',event.target.value);
                    $('#add-product-from').data('validator').hideMsg('input[name="PrimaryDesigner"]');
                }
            },

            /**
             * 国家操作
             */
            //国家数据，设置本地缓存数据
            setOriginCountryCache:function(){
                // let wsCache = new WebStorageCache();
                this.$http.get(API_ROOT+'admin-api-dev/v1/dictionary/country',{}).then((response) => {
                    if (response.data.resCode==0) {
                        this.$set('originCountry',response.data.data.dictionaryList);
                    }else {
                    }
                }, (response) => {
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'获取国家数据错误',alertShow:true})
                });
            },
            //设置国家id的值
            setOriginCountryId(val) {
                if (!val) {
                    this.$set('productbasiinfo.origin_country','')
                    return;
                }
                if(val.keyName!='China'){
                    this.$set('productbasiinfo.origin_province','');
                    this.$set('productbasiinfo.origin_city','')
                }
                if (val.keyName=='China') {
                    this.searchProvince();
                }
                this.$set('productbasiinfo.origin_country',val.keyName);
                $('#add-product-from').data('validator').hideMsg('input[name="originCountryId"]');
            },
            //搜索省份
 			searchProvince(){
                let jsontext=JSON.stringify({"areaId":0});
                this.$http.get(API_ROOT+'admin-api-dev/v1/area/subarea',{paramJson:jsontext}).then((response) => {
                    // success callback
                    if (response.data.resCode==0) {
                        this.$set('originProvince',response.data.data.areaList);
                    }else {
                    }
                }, (response) => {
                    // error callback
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'获取省份数据错误',alertShow:true})
                });
            },
            //设置省份的值
            setOriginProvinceId(val){
                if (!val) {
                    this.$set('productbasiinfo.origin_province','')
                    return;
                }
                this.$set('productbasiinfo.origin_province',val.id)
                this.$set('productbasiinfo.origin_city','')
                this.searchCity(val.id)
                this.$set('cityTag',1);
                setTimeout(() => {
                    this.$set('cityTag',0);
                }, 10);
                $('#add-product-from').data('validator').hideMsg('input[name="originProvinceId"]');
            },
            //搜索城市
 			searchCity(id){
                let jsontext=JSON.stringify({"areaId":id});
                this.$http.get(API_ROOT+'admin-api-dev/v1/area/subarea',{paramJson:jsontext}).then((response) => {
                    // success callback
                    if (response.data.resCode==0) {
                        this.$set('originCity',response.data.data.areaList);
                    }else {
                    }
                }, (response) => {
                    // error callback
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'获取城市数据错误',alertShow:true})
                });
            },
            //设置城市的值
            setOriginCityId(val){
                if (!val) {
                    this.$set('productbasiinfo.origin_city','')
                    return;
                }
                this.$set('productbasiinfo.origin_city',val.id)
                $('#add-product-from').data('validator').hideMsg('input[name="originCityId"]');
            },
        },
        ready(){

            /**
             * 组件加载，获取对应对数据接口，就请求数据
             */
            let wsCache = new WebStorageCache();

            // 品牌
            this.setBrandListCache();

            // 设计师
            this.setDesignersCache();

            // 国家
            this.setOriginCountryCache();

        }
    }
</script>
