<template>
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
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
                labeltest:14
            }
        }
    }
</script>
