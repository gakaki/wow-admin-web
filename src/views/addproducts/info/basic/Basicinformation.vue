<style media="screen">
    .origin_country .dropdown-toggle{
        border-top-left-radius:0px !important;
        border-bottom-left-radius:0px !important;
    }
</style>
<template>
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
                <input maxlength="30" v-model="productbasiinfo.product_name" type="text" class="form-control" placeholder="商品名称">
                {{productbasiinfo.product_name}}
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">{{productbasiinfo.product_name.length}}/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>卖点</label>
            <div class="col-sm-4">
                <input v-model="productbasiinfo.selling_point" type="text" class="form-control" placeholder="商店卖点">
                {{productbasiinfo.selling_point}}
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">{{productbasiinfo.selling_point.length}}/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>商品型号</label>
            <div class="col-sm-3">
                <input v-model="productbasiinfo.product_model" type="text" class="form-control" placeholder="商品型号">
                {{productbasiinfo.product_model}}
            </div>
        </div>
        <!-- <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>品牌</label>
            <div class="col-sm-2">
                <Select2 :selected.sync="productbasiinfo.brand_id" :options="brandlist"></Select2>
            </div>
            <div class="col-sm-4 control-label" style="padding-top:4px;" >
                <div class="text-left text-muted">
                    {{productbasiinfo.brand_id}}
                    <button type="button" class="btn btn-xs btn-default">
                        <span class="glyphicon glyphicon-refresh"></span> 刷新
                    </button>
                </div>
            </div>
        </div> -->

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>品牌</label>
            <div class="col-sm-3">
                <v-select :on-change="setBrandId" label="name" :debounce="500" :on-search="getBrandList" placeholder="搜索品牌" :options="brandlist"></v-select>
            </div>
            <div class="col-sm-4 control-label" style="padding-top:4px;" >
                <div class="text-left text-muted">
                    {{productbasiinfo.brand_id}}
                    <button @click="setBrandListCache()"  type="button" class="btn btn-xs btn-default">
                        <span class="glyphicon glyphicon-refresh"></span> 刷新
                    </button>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>设计师(可多选)</label>
            <div class="col-sm-4">
                <v-select multiple label="name" :debounce="500" :on-search="getDesigners" :value.sync="productbasiinfo.product_designer" placeholder="搜索设计师" :options="designers"></v-select>
            </div>
            <div class="col-sm-4 control-label" style="padding-top:4px;" >
                <div class="text-left text-muted">
                    {{productbasiinfo.product_designer | json}}
                    <button @click="setDesignersCache()" type="button" class="btn btn-xs btn-default">
                        <span class="glyphicon glyphicon-refresh"></span> 刷新
                    </button>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>主设计师</label>
            <div class="col-sm-4">
                <select @change="isPrimary($event)" class="form-control">
                    <option value="" selected>请选择主设计师</option>
                    <option v-for="item in productbasiinfo.product_designer" v-bind:value="$index">{{item.name}}</option>
                 </select>
            </div>
        </div>

        <!-- <Designers :index="$index" :itemlength="productbasiinfo.product_designer.length" v-for="item in productbasiinfo.product_designer" :designersid.sync="item.id" :designers="designers"></Designers> -->

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>产地</label>
            <div class="col-sm-4">
                <div class="input-group">
                    <span class="input-group-addon">国家</span>
                    <v-select class="origin_country" :on-change="setOriginCountryId" label="name" :debounce="500" :on-search="getOriginCountry" placeholder="搜索国家" :options="originCountry"></v-select>
                </div>
                {{productbasiinfo.origin_country}}
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">城市</span>
                    <input v-model="productbasiinfo.origin_city" type="text" class="form-control" placeholder="城市">
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>风格</label>
            <div class="col-sm-2">
                <select v-model="productbasiinfo.style" class="form-control">
                    <option value="" selected>请选择</option>
                    <option v-bind:value="1">风格1</option>
                    <option v-bind:value="2">风格2</option>
                    <option v-bind:value="3">风格3</option>
                    <option v-bind:value="4">风格4</option>
                    <option v-bind:value="5">风格5</option>
                    <option v-bind:value="6">风格6</option>
                 </select>
                {{productbasiinfo.style}}
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>尺寸</label>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">长</span>
                    <input v-model="productbasiinfo.long" type="number" class="form-control" placeholder="长">
                    <span class="input-group-addon">cm</span>
                </div>
                {{productbasiinfo.long}}
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">宽</span>
                    <input v-model="productbasiinfo.width" type="number" class="form-control" placeholder="宽">
                    <span class="input-group-addon">cm</span>
                </div>
                {{productbasiinfo.width}}
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">高</span>
                    <input v-model="productbasiinfo.height" type="number" class="form-control" placeholder="高">
                    <span class="input-group-addon">cm</span>
                </div>
                {{productbasiinfo.height}}
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">若为系列商品，按尺寸最大的填写</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>适用人群</label>
            <div class="col-sm-2">
                <select v-model="productbasiinfo.applicable_people" class="form-control">
                    <option value="" selected>请选择</option>
                    <option v-bind:value="1">通用</option>
                    <option v-bind:value="2">成人</option>
                    <option v-bind:value="3">男性</option>
                    <option v-bind:value="4">女性</option>
                    <option v-bind:value="5">儿童</option>
                    <option v-bind:value="6">老人</option>
                 </select>
                 {{productbasiinfo.applicable_people}}
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>是否可定制</label>
            <div class="col-sm-2">
                <select v-model="productbasiinfo.can_customize" class="form-control">
                    <option selected value="">请选择</option>
                    <option v-bind:value=true>可以定制</option>
                    <option v-bind:value=false>不可以定制</option>
                 </select>
                 {{productbasiinfo.can_customize}}
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>适用场景
            </label>
            <div class="col-sm-7 bg-muted">
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.applicable_scene_text" value="1"> 客厅
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.applicable_scene_text" value="2"> 卧室
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.applicable_scene_text" value="3"> 厨房
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.applicable_scene_text" value="4"> 卫生间
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.applicable_scene_text" value="5"> 办公室
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.applicable_scene_text" value="6"> 儿童房
                </label>
                {{productbasiinfo.applicable_scene_text | json}}
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>材质</label>
            <div class="col-sm-7 bg-muted">
                <label class="checkbox-inline" v-for="item in labeltest">
                    <input v-model="productbasiinfo.material_text" type="checkbox" value="{{$index+1}}"> 选项{{$index+1}}
                </label>
                {{productbasiinfo.material_text | json }}
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Select2 from '../../../../components/common/selecte2/Selecte2'
    import Designers from './Designers'
    import vSelect from '../../../../components/common/vue-select/src/index.js'
    import {brandListData} from '../../../../brand_list_data.js'
    import {DesignersData,Country} from '../../../../test.js'
    import WebStorageCache from 'web-storage-cache'

    export default{
        props:['productbasiinfo'],
        components:{
            Select2,
            Designers,
            vSelect
        },
        data(){
            return{
                labeltest:14,
                brandlist:null,
                designers:null,
                originCountry:null,
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
                wsCache.set('brandListData', brandListData.data);
            },
            //品牌数据，读取本地缓存数据
            getBrandListCache:function(){
                let wsCache = new WebStorageCache();
                this.brandlist = wsCache.get('brandListData');
            },
            //搜索品牌
            getBrandList:function(search, loading) {
                this.getBrandListCache();
			},
            //设置品牌id的值
            setBrandId(val) {
                if (!val) {
                    this.$set('productbasiinfo.brand_id','')
                    return;
                }
                this.$set('productbasiinfo.brand_id',val.id)
            },

            /**
             * 设计师操作
             */
             //设计师，设置本地缓存数据
             setDesignersCache:function(){
                 let wsCache = new WebStorageCache();
                 wsCache.set('DesignersData', DesignersData.data);
             },
             //设计师，读取本地缓存数据
             getDesignersCache:function(){
                 let wsCache = new WebStorageCache();
                 this.designers = wsCache.get('DesignersData');
             },
            //搜索设计师
            getDesigners:function(search, loading) {
                this.getDesignersCache();
 			// 	loading(true)
 			// 	this.$http.get('https://api.github.com/search/repositories', {q: search})
 			// 	.then(resp => {
 			// 		this.designers = resp.data.items
 			// 		loading(false)
 			// 	})
 			// 	.catch(err => {
 			// 		this.error = err.data
 			// 		loading(false)
 			// 	})
 			},
            //设置主设计师
            isPrimary:function(event){
                if (event.target.value=='') {
                    for(let i=0;i<this.productbasiinfo.product_designer.length;i++){
                        this.$set('productbasiinfo.product_designer['+i+'].primary',false);
                    }
                }else {
                    for(let i=0;i<this.productbasiinfo.product_designer.length;i++){
                        this.$set('productbasiinfo.product_designer['+i+'].primary',false);
                    }
                    this.$set('productbasiinfo.product_designer['+event.target.value+'].primary',true);
                }
            },

            /**
             * 国家操作
             */
            //国家数据，设置本地缓存数据
            setOriginCountryCache:function(){
                let wsCache = new WebStorageCache();
                wsCache.set('Country', Country.data);
            },
            //国家数据，读取本地缓存数据
            getOriginCountryCache:function(){
                let wsCache = new WebStorageCache();
                this.originCountry = wsCache.get('Country');
            },
            //搜索国家
            getOriginCountry:function(search, loading) {
                this.getOriginCountryCache();
			},
            //设置国家id的值
            setOriginCountryId(val) {
                if (!val) {
                    this.$set('productbasiinfo.origin_country','')
                    return;
                }
                this.$set('productbasiinfo.origin_country',val.id)
            },
        },
        ready(){
            this.setBrandListCache();
            this.setDesignersCache();
            this.setOriginCountryCache();
        }
    }
</script>
