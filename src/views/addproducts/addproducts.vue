<style media="screen">
    .addproduct-box-html .well{
        margin-top: 20px;
    }
    .addproduct-box-html-left,.addproduct-box-html-right{
        display: inline-block;
    }
    .addproduct-box-html-left{
        width: 120px;
        text-align: right;
        padding-right: 5px;
    }
    .addproduct-box-html .form-group label.control-label{
        width: 150px;
    }
    .addproduct-box-html .form-group p.control-label{
        text-align:left;
    }
    .addproduct-box-html .btn{
        margin: 0px 5px;
    }
    .addproduct-box-html .btn-group .btn{
        margin: 0px;
    }
    .addproduct-box-html .btn-group .btn+.btn{
        margin-left: -1px;
    }
    .addproduct-box-html .checkbox-inline, .addproduct-box-html .radio-inline{
        margin: 5px 12px;
        padding-top: 0px;
    }
    .bg-muted{
        background: #f9f9f9;
    }
    .addproduct-box-html hr{
        border-top: 1px dashed #eee;
    }
    .addproduct-box-html-color-box{
        background: #fff;
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 1px solid #ddd;
        vertical-align: middle;
        margin-top: -3px;
    }
</style>
<template>
    <div class="row">
        <div class="col-md-12" style="margin-top:20px;">
            <div style="width:740px; margin:0 auto;">
                <Steps :stepsinfo="list" :stateinfo="state"></Steps>
            </div>
        </div>
    </div>
    <Selectcategory v-show="nowtag=='1'"></Selectcategory>
    <div class="row" v-show="nowtag=='1'">
        <div class="text-center col-md-12" style="margin-top:30px;">
            <button class="btn btn-primary">下一步</button>
        </div>
    </div>

    <div class="row" v-show="nowtag=='2'">
        <div class="col-md-12 addproduct-box-html form-horizontal">
            <div class="well well-sm">基本信息</div>
            <div class="form-group">
                <label class="col-sm-2 control-label">所属分类</label>
                <div class="col-sm-4">
                    <p class="control-label">
                        住宅家具>沙发类>沙发 <a href="#">重新选择</a>
                    </p>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>品牌名称</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" placeholder="商品名称">
                </div>
                <span class="col-sm-4 control-label">
                    <div class="text-left text-muted">0/30</div>
                </span>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>商店卖点</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" placeholder="商店卖点">
                </div>
                <span class="col-sm-4 control-label">
                    <div class="text-left text-muted">0/30</div>
                </span>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>商品型号</label>
                <div class="col-sm-2">
                    <input type="text" class="form-control" placeholder="商品型号">
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
                    <input type="text" class="form-control" placeholder="产地">
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>风格</label>
                <div class="col-sm-2">
                    <input type="text" class="form-control" placeholder="风格">
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>尺寸</label>
                <div class="col-sm-2">
                    <div class="input-group">
                        <span class="input-group-addon">长</span>
                        <input type="text" class="form-control" placeholder="长">
                        <span class="input-group-addon">cm</span>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="input-group">
                        <span class="input-group-addon">宽</span>
                        <input type="text" class="form-control" placeholder="宽">
                        <span class="input-group-addon">cm</span>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="input-group">
                        <span class="input-group-addon">高</span>
                        <input type="text" class="form-control" placeholder="高">
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
                <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>是否可定制</label>
                <div class="col-sm-2">
                    <select class="form-control">
                        <option>请选择</option>
                        <option>可以定制</option>
                        <option>不可以定制</option>
                     </select>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>适用场景</label>
                <div class="col-sm-7 bg-muted">
                    <label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" value="option1"> 选项 1
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox2" value="option2"> 选项 2
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox3" value="option3"> 选项 3
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>材质</label>
                <div class="col-sm-7 bg-muted">
                    <label class="checkbox-inline" v-for="item in labeltest">
                        <input type="checkbox" id="inlineCheckbox1" value="option1"> 选项 1
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

        <div class="col-md-12 addproduct-box-html form-horizontal">
            <div class="well well-sm">销售属性</div>
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>颜色</label>
                <div class="col-sm-7 bg-muted">
                    <label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" value="option1">
                        <i class="addproduct-box-html-color-box"></i>
                        白色
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" value="option1">
                        <i style="background:#d5d5d5;" class="addproduct-box-html-color-box"></i>
                        银色
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" value="option1">
                        <i style="background:#919191;" class="addproduct-box-html-color-box"></i>
                        灰色
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" value="option1">
                        <i style="background:#000;" class="addproduct-box-html-color-box"></i>
                        黑色
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" value="option1">
                        <i style="background:#ff0000;" class="addproduct-box-html-color-box"></i>
                        红色
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" value="option1">
                        <i style="background:#fed533;" class="addproduct-box-html-color-box"></i>
                        黄色
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" value="option1">
                        <i style="background:#1790c8;" class="addproduct-box-html-color-box"></i>
                        蓝色
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>颜色</label>
                <div class="col-sm-7 bg-muted">
                    <label class="checkbox-inline" v-for="item in labeltest">
                        <input type="checkbox" id="inlineCheckbox1" value="option1">
                        <input type="text" placeholder="规格" value="">
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label"></label>
                <span class="col-sm-7 control-label">
                    <div class="text-left">
                        批量设置：
                        <div class="btn-group">
                            <button type="button" class="btn btn-default btn-sm">售价</button>
                            <button type="button" class="btn btn-default btn-sm">活动价</button>
                            <button type="button" class="btn btn-default btn-sm">进货价</button>
                            <button type="button" class="btn btn-default btn-sm">初始库存</button>
                            <button type="button" class="btn btn-default btn-sm">库存预警值</button>
                            <button type="button" class="btn btn-default btn-sm">重量</button>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Steps from './Steps'
    import Selectcategory from './Selectcategory'
    export default{
        components:{
            Steps,
            Selectcategory
        },
        data(){
            return{
                labeltest:14,
                list:[
                    {
                        name:'选择分类',
                        state:'1'
                    },
                    {
                        name:'填写商品信息',
                        state:'2'
                    },
                    {
                        name:'完成',
                        state:'3'
                    }
                ],
                state:'2',
                nowtag:'2'
            }
        }
    }
</script>
