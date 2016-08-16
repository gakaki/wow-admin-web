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
    .edit-product-title{
        font-size: 0px;
    }
    .edit-product-title li{
        font-size: 14px;
        width: 50%;
    }
</style>
<template>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">
            <ul class="edit-product-title list-inline">
                <li>基本信息</li>
                <li class="text-right">
                    <button v-bind:class="{'btn-danger':disabled==false}" v-bind:disabled="disabled==true" @click="modificationInfo" type="button" class="btn">确认修改</button>
                </li>
            </ul>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">所属分类</label>
            <div class="col-sm-10">
                <p class="control-label text-muted">
                    <span v-for="item in categoryName">
                        {{item.categoryName}} <i v-if="$index+1!=categoryName.length">></i>
                    </span>
                </p>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>商品名称</label>
            <div class="col-sm-4">
                <input v-model="info.productName" name="productName" maxlength="30" type="text" class="form-control" placeholder="商品名称">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">{{info.productName.length}}/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>卖点</label>
            <div class="col-sm-4">
                <input v-model="info.sellingPoint" name="sellingPoint" type="text" class="form-control" placeholder="商店卖点">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">{{info.sellingPoint.length}}/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label">商品型号</label>
            <div class="col-sm-3">
                <input v-model="info.productModel" name="productModel" type="text" class="form-control" placeholder="商品型号">
            </div>
        </div>

        <!-- 品牌 -->
        <brand :brandid.sync="info.brandId" :brandlist="brandList"></brand>

        <!-- 设计师 监控数据有问题，暂不启用-->
        <!-- <designers :designersid.sync="info.designerVoList"></designers> -->

        <!--国家省份城市 监控数据有问题，暂不启用-->
        <!-- <country :origin-country-id.sync="info.originCountryId" :origin-province-id.sync="info.originProvinceId" :origin-city.sync="info.originCity" ></country> -->

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>风格</label>
            <div class="col-sm-2 add-product-hide-input">
                <input data-rule="required" name="styleId" v-bind:value="info.styleId"  type="text" class="form-control hidden" placeholder="风格">
                <select v-model="info.styleId" class="form-control">
                    <option v-for="item in style" v-bind:value="item.keyId">
                        {{ item.keyValue }}
                    </option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>尺寸</label>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">长</span>
                    <input v-model="info.length" name="length" type="number" class="form-control" placeholder="长" number>
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">宽</span>
                    <input v-model="info.width" name="width" type="number" class="form-control" placeholder="宽" number>
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">高</span>
                    <input v-model="info.height" name="height" type="number" class="form-control" placeholder="高" number>
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
                <input data-rule="required" name="applicablePeople" v-bind:value="info.applicablePeople" type="text" class="form-control hidden" placeholder="适用人群">
                <select v-model="info.applicablePeople" class="form-control">
                    <option v-for="item in applicable_people" v-bind:value="item.keyId">
                        {{ item.keyValue }}
                    </option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>是否可定制</label>
            <div class="col-sm-2 add-product-hide-input">
                <input data-rule="required" name="canCustomized" v-bind:value="info.canCustomized" type="text" class="form-control hidden" placeholder="是否可以定制">
                <select v-model="info.canCustomized" class="form-control">
                    <option v-for="item in canCustomized" v-bind:value="item.value">
                        {{ item.text }}
                    </option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>适用场景
            </label>
            <div class="col-sm-7 bg-muted">
                <label v-for="item in applicable_scene | orderBy 'keyId'" class="checkbox-inline">
                    <input data-rule="checked[1~]" type="checkbox" name="applicableScene[]" v-model="info.applicableSceneList" v-bind:value="item.keyId"> {{item.keyValue}}
                </label>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>材质</label>
            <div class="col-sm-7 bg-muted">
                <label v-for="item in materialList | orderBy 'id'" class="checkbox-inline">
                    <input data-rule="checked[1~]" type="checkbox" name="applicableScene[]" v-model="info.materialList" v-bind:value="item.id"> {{item.name}}
                </label>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">商品描述</label>
            <div class="col-sm-7">
                <p class="control-label text-muted">
                    <textarea v-model="info.detailDescription" name="detailDescription" placeholder="商品描述" class="form-control" rows="5"></textarea>
                </p>
            </div>
            <span class="col-sm-3 control-label">
                <div class="text-left text-muted">{{info.detailDescription.length}}/200</div>
            </span>
        </div>
    </div>
</template>
<script type="text/javascript">
    import brand                            from    './brand'
    import designers                        from    './designers.vue'
    import country                          from    './country.vue'
    import {API_ROOT,httpGet,httpPost}      from    '../../../../config'
    import lodash                           from    'lodash'

    export default{
        props:['productid','info','alertobj'],
        components:{
            brand,
            designers,
            country,
        },
        data(){
            return{
                canCustomized:[
                    {text:'可以定制',value:true},{text:'不可以定制',value:false}
                ],
                style:[],
                applicable_people:[],
                applicable_scene:[],
                materialList:[],
                brandList:[],
                copyInfo:{},
                disabled:true,
                categoryName:[],
                editInfoObj:{
                    productId:'',
                    info:{}
                }
            }
        },
        watch:{
            'info': {
                handler: 'isEqual',
                deep: true
            }
        },
        events:{
            // 深度拷贝原始数据，在watch到数据变化后，做比较
            'deepCopyInfo':function(data){
                this.$set('copyInfo',JSON.parse(JSON.stringify(this.info)));
            },

            //获取一些列表数据
            'infoGetData':function(msg){

                //根据三级类目id查询级联类目id
                httpGet('v1/category/path-category',{"categoryId":this.info.categoryId},'级联类目信息失败',(data)=>{
                    this.$set('categoryName',data.data.categoryList)
                });

                //获取分类材质属性
                httpGet('v1/material/queryCategoryMaterial',{"categoryId":this.info.categoryId},'获取分类属性失败',(data)=>{
                    this.$set('materialList',data.materialList)
                });

                //获取品牌数据
                httpGet('v1/brand/queryAll',{},'获取品牌数据失败',(data)=> {
                    this.$set('brandList',data.data.brandList)
                });

                //广播通知设计师组件获取数据
                this.$broadcast('designerslist', 'msg');

                //广播通知国家组件获取数据
                this.$broadcast('countrylist', 'msg');

                //获取风格／适用人群／适用场景
                httpGet('v1/dictionarys',{"keyGroups":["style","applicable_people","applicable_scene"]},'获取字典属性失败',(data)=> {
                    this.$set('style',data.data.style)
                    this.$set('applicable_people',data.data.applicable_people)
                    this.$set('applicable_scene',data.data.applicable_scene)
                });
            }
        },
        methods:{
            /**
             * 对象深度比较
             * lodash提供的方式
             */
            isEqual:function(){
                if (_.isEqual(this.info, this.copyInfo)) {
                    this.$set('disabled',true)
                }else {
                    this.$set('disabled',false)
                }
            },

            /**
             * 确认修改按钮
             */
            modificationInfo:function(){
                this.$set('editInfoObj.productId',this.productid);
                this.$set('editInfoObj.info',this.info);
                httpPost('v1/product/info',this.editInfoObj,'修改失败',(data)=> {
                    if (data.resCode==0) {
                        this.$set('alertobj',{alertType:'alert-success',alertInfo:'修改成功',alertShow:true})
                        this.$set('copyInfo',JSON.parse(JSON.stringify(this.info)));
                        this.$set('disabled',true);
                    }else {
                        this.$set('alertobj',{alertType:'alert-danger',alertInfo:'修改失败',alertShow:true})
                    }
                });
            },
        }
    }
</script>
