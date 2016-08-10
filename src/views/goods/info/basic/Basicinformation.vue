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
                <li class="text-right"><button @click="modification" type="button" class="btn btn-danger">确认修改</button></li>
            </ul>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">所属分类</label>
            <div class="col-sm-10">
                <p class="control-label text-muted">
                    分类1 > 分类2 > 分类3
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

        <!-- 设计师 -->
        <designers :designersid.sync="info.designerVoList"></designers>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>产地/国家</label>
            <div class="col-sm-4">
                <div class="input-group add-product-hide-input">

                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>产地/省-市</label>
            <div class="col-sm-4">
                <div class="input-group add-product-hide-input">

                </div>
            </div>
            <div class="col-sm-4">
                <div class="input-group add-product-hide-input">

                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>风格</label>
            <div class="col-sm-2 add-product-hide-input">
                <input data-rule="required" name="styleId" v-bind:value="info.styleId"  type="text" class="form-control" placeholder="风格">
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
                    <input v-model="info.length" name="length" type="number" class="form-control" placeholder="长">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">宽</span>
                    <input v-model="info.width" name="width" type="number" class="form-control" placeholder="宽">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">高</span>
                    <input v-model="info.height" name="height" type="number" class="form-control" placeholder="高">
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
                <input data-rule="required" name="applicablePeople" v-bind:value="info.applicablePeople" type="text" class="form-control" placeholder="适用人群">
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
                <input data-rule="required" name="canCustomized" v-bind:value="info.canCustomized" type="text" class="form-control" placeholder="是否可以定制">
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
                {{info.applicableSceneList}}
                <label v-for="item in applicable_scene" class="checkbox-inline">
                    <input data-rule="checked[1~]" type="checkbox" name="applicableScene[]" v-model="info.applicableSceneList" v-bind:value="item.keyId"> {{item.keyValue}}
                </label>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>材质</label>
            <div class="col-sm-7 bg-muted">
                {{info.materialList}}
                <label v-for="item in materialList" class="checkbox-inline">
                    <input data-rule="checked[1~]" type="checkbox" name="applicableScene[]" v-model="info.materialList" v-bind:value="item.id"> {{item.name}}
                </label>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">商品描述</label>
            <div class="col-sm-7">
                <p class="control-label text-muted">
                    <textarea name="detailDescription" placeholder="商品描述" class="form-control" rows="5">{{info.detailDescription}}</textarea>
                </p>
            </div>
            <span class="col-sm-3 control-label">
                <div class="text-left text-muted">{{info.detailDescription.length}}/200</div>
            </span>
        </div>
    </div>
</template>
<script type="text/javascript">
    import brand                from    './brand'
    import designers            from    './Designers.vue'
    import {API_ROOT}           from    '../../../../config'

    export default{
        props:['info'],
        components:{
            brand,
            designers
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
            }
        },
        watch:{
            'info':function(val,oldval){
                let _this=this;

                //获取分类材质属性
                this.httpGet('v1/material/queryCategoryMaterial',{"categoryId":val.categoryId},'获取分类属性失败',function(data){
                    _this.$set('materialList',data.materialList)
                });

                //获取品牌数据
                this.httpGet('v1/brand/queryAll',{},'获取品牌数据失败',function(data) {
                    _this.$set('brandList',data.data.brandList)
                });

                //广播通知设计师组件获取设计师数据
                this.$broadcast('designerslist', 'test');
            }
        },
        compiled(){
            let _this=this;

            //获取风格／适用人群／适用场景
            this.httpGet('v1/dictionarys',{"keyGroups":["style","applicable_people","applicable_scene"]},'获取字典属性失败',function(data) {
                _this.$set('style',data.data.style)
                _this.$set('applicable_people',data.data.applicable_people)
                _this.$set('applicable_scene',data.data.applicable_scene)
            });

        },
        methods:{
            /**
             * 确认修改按钮
             * 1：提交数据的时候，需要把数组里面的designersid这个数组里面的designerName属性过滤掉
             */
            modification:function(){
                console.log(this.info.brandId);
                console.log(this.info.width);
                console.log(this.info.designerVoList);
            },

            /**
             * http请求，组件内请求数据调用该方法
             * callback是回调方法，可以在回调里面进行对应的数据绑定
             * url是要请求的url，data是要给传给服务器的参数，errText是错误提示文字
             */
            httpGet:function(url,data,errText,callback){
                let jsontext=JSON.stringify(data);
                this.$http.get(API_ROOT+url,{paramJson:jsontext}).then((response) => {
                    if (response.data.resCode==0) {
                        callback(response.data);
                    }else {
                    }
                }, (response) => {
                });
            }
        },
        ready(){

        }
    }
</script>
