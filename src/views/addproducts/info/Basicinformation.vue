<template>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <button type="button" @click="testbtn()"; name="button">测试按钮</button>
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
                <input v-model="basiInfo.productName" type="text" class="form-control" placeholder="商品名称">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">0/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>卖点</label>
            <div class="col-sm-4">
                <input v-model="basiInfo.sellingPoin" type="text" class="form-control" placeholder="商店卖点">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">0/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>商品型号</label>
            <div class="col-sm-2">
                <input v-model="basiInfo.productId" type="text" class="form-control" placeholder="商品型号">
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>品牌</label>
            <div class="col-sm-2">
                <input type="text" class="form-control" placeholder="品牌">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">
                    <button type="button" class="btn btn-xs btn-info">+新增品牌</button>
                    <button type="button" class="btn btn-xs btn-default">
                        <span class="glyphicon glyphicon-refresh"></span> 刷新
                    </button>
                </div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>设计师</label>
            <div class="col-sm-2">
                <input type="text" class="form-control" placeholder="设计师">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">
                    <button type="button" class="btn btn-xs btn-info">+新增设计师</button>
                    <button type="button" class="btn btn-xs btn-default">
                        <span class="glyphicon glyphicon-refresh"></span> 刷新
                    </button>
                    <button type="button" class="btn btn-warning btn-xs">
                        <span class="glyphicon glyphicon-plus"></span>
                    </button>
                </div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>产地</label>
            <div class="col-sm-2">
                <input v-model="basiInfo.producer" type="text" class="form-control" placeholder="产地">
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>风格</label>
            <div class="col-sm-2">
                <input v-model="basiInfo.style" type="text" class="form-control" placeholder="风格">
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>尺寸</label>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">长</span>
                    <input v-model="basiInfo.size.long" type="text" class="form-control" placeholder="长">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">宽</span>
                    <input v-model="basiInfo.size.width" type="text" class="form-control" placeholder="宽">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">高</span>
                    <input v-model="basiInfo.size.height" type="text" class="form-control" placeholder="高">
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
                <select v-model="basiInfo.intendedFor" class="form-control">
                    <option v-bind:value="null" selected>请选择</option>
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
                <select v-model="basiInfo.customized" class="form-control">
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
                    <input type="checkbox" v-model="basiInfo.scenarios" value="option1"> 客厅
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="basiInfo.scenarios" value="option2"> 卧室
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="basiInfo.scenarios" value="option3"> 厨房
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="basiInfo.scenarios" value="option4"> 卫生间
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="basiInfo.scenarios" value="option5"> 办公室
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" v-model="basiInfo.scenarios" value="option6"> 儿童房
                </label>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>材质</label>
            <div class="col-sm-7 bg-muted">
                <label class="checkbox-inline" v-for="item in labeltest">
                    <input v-model="basiInfo.material" type="checkbox" value="{{$index}}"> 选项 1
                </label>
            </div>
        </div>
        <hr>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>是否可拆洗</label>
            <div class="col-sm-2">
                <select class="form-control">
                    <option>请选择</option>
                    <option>可拆洗</option>
                    <option>不可拆洗</option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>沙发座位数</label>
            <div class="col-sm-2">
                <select class="form-control">
                    <option>请选择</option>
                    <option>单人</option>
                    <option>双人</option>
                    <option>三人</option>
                    <option>多人</option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>沙发类别</label>
            <div class="col-sm-2">
                <select class="form-control">
                    <option>请选择</option>
                    <option>布艺沙发</option>
                    <option>皮艺沙发</option>
                    <option>充气沙发</option>
                    <option>实木沙发</option>
                 </select>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import {basiInfo} from '../model'
    export default{
        data(){
            return{
                basiInfo:basiInfo,
                labeltest:14
            }
        },
        methods:{
            testbtn:function(){
                console.log(this.basiInfo);
            },
            callStepsChange:function(){
                this.$dispatch('callStepsChangeFater','1');
            }
        }
    }
</script>
