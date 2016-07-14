<template>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">基本信息</div>
        <div class="form-group">
            <label class="col-sm-2 control-label">所属分类</label>
            <div class="col-sm-10">
                <p class="control-label text-muted">
                    住宅家具>沙发类>沙发 <a @click="callStepsChange" href="javascript:;">重新选择</a>
                </p>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>商品名称</label>
            <div class="col-sm-4">
                <input v-model="productbasiinfo.productName" type="text" class="form-control" placeholder="商品名称">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">0/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>卖点</label>
            <div class="col-sm-4">
                <input v-model="productbasiinfo.sellingPoin" type="text" class="form-control" placeholder="商店卖点">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">0/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>商品型号</label>
            <div class="col-sm-2">
                <input v-model="productbasiinfo.productId" type="text" class="form-control" placeholder="商品型号">
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>品牌</label>
            <div class="col-sm-2">
                <Select2 :selected.sync="productbasiinfo.brandid" :options="brandlist"></Select2>
            </div>
            <div class="col-sm-4 control-label" style="padding-top:4px;" >
                <div class="text-left text-muted">
                    {{productbasiinfo.brandid}}
                    <button type="button" class="btn btn-xs btn-default">
                        <span class="glyphicon glyphicon-refresh"></span> 刷新
                    </button>
                </div>
            </div>
        </div>
        <Designers :index="$index" :itemlength="productbasiinfo.designersid.length" v-for="item in productbasiinfo.designersid" :designersid.sync="item.id" :designers="designers"></Designers>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>产地</label>
            <div class="col-sm-2">
                <input v-model="productbasiinfo.producer" type="text" class="form-control" placeholder="产地">
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>风格</label>
            <div class="col-sm-2">
                <input v-model="productbasiinfo.style" type="text" class="form-control" placeholder="风格">
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>尺寸</label>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">长</span>
                    <input v-model="productbasiinfo.size.long" type="text" class="form-control" placeholder="长">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">宽</span>
                    <input v-model="productbasiinfo.size.width" type="text" class="form-control" placeholder="宽">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">高</span>
                    <input v-model="productbasiinfo.size.height" type="text" class="form-control" placeholder="高">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">若为系列商品，按尺寸最大的填写</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>适用人群</label>
            <div class="col-sm-2">
                <select v-model="productbasiinfo.intendedFor" class="form-control">
                    <option v-bind:value="" selected>请选择</option>
                    <option v-bind:value="0">通用</option>
                    <option v-bind:value="1">成人</option>
                    <option v-bind:value="2">男性</option>
                    <option v-bind:value="3">女性</option>
                    <option v-bind:value="4">儿童</option>
                    <option v-bind:value="5">老人</option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>是否可定制</label>
            <div class="col-sm-2">
                <select v-model="productbasiinfo.customized" class="form-control">
                    <option selected v-bind:value="null">请选择</option>
                    <option v-bind:value="true">可以定制</option>
                    <option v-bind:value="false">不可以定制</option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>适用场景
            </label>
            <div class="col-sm-7 bg-muted">
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.scenarios" value="option1"> 客厅
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.scenarios" value="option2"> 卧室
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.scenarios" value="option3"> 厨房
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.scenarios" value="option4"> 卫生间
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.scenarios" value="option5"> 办公室
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="productbasiinfo.scenarios" value="option6"> 儿童房
                </label>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>材质</label>
            <div class="col-sm-7 bg-muted">
                <label class="checkbox-inline" v-for="item in labeltest">
                    <input v-model="productbasiinfo.material" type="checkbox" value="{{$index}}"> 选项 1
                </label>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Select2 from '../../../components/common/selecte2/Selecte2'
    import Designers from './Designers'
    export default{
        props:['productbasiinfo'],
        components:{
            Select2,
            Designers
        },
        data(){
            return{
                labeltest:14,
                brandlist: [
                    { id: 1, text: 'aida' },
                    { id: 2, text: 'aim' },
                    { id: 3, text: 'aless' },
                    { id: 4, text: 'artis' },
                    { id: 5, text: '匠物' },
                    { id: 6, text: '本来设计' },
                    { id: 7, text: '罗奇堡' },
                    { id: 8, text: '旁白' },
                    { id: 9, text: '木佰士' },
                    { id: 10, text: '唯诗' },
                    { id: 11, text: '有所' },
                    { id: 12, text: '意外设计' },
                    { id: 13, text: '晓器' },
                    { id: 14, text: '造物' },
                    { id: 15, text: '十八纸' },
                    { id: 16, text: '东术' },
                    { id: 17, text: '吾舍' },
                    { id: 18, text: '自然家' },
                    { id: 19, text: '本土创造' },
                    { id: 20, text: '素生' },
                    { id: 21, text: '玩物志' },
                    { id: 22, text: '物应' },
                    { id: 23, text: '明基' },
                    { id: 24, text: '爱瓦' },
                ],
                designers:[
                    { id: 1, text: '设计师1' },
                    { id: 2, text: '设计师2' },
                    { id: 3, text: '设计师3' },
                    { id: 4, text: '设计师4' },
                ]
            }
        },
        methods:{
            callStepsChange:function(){
                this.$dispatch('callStepsChangeFater','1');
            }
        }
    }
</script>
