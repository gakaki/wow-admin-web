<template>
    <div class="row">
        <div class="col-md-12 addproduct-box-html form-horizontal">
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"><span class="text-danger">*</span>代码</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" placeholder="唯一识别代码">
                </div>
                <div class="col-sm-2 control-label">
                    <div class="text-left text-muted">0/30</div>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"><span class="text-danger">*</span>属性名称</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" placeholder="唯一属性名称">
                </div>
                <div class="col-sm-2 control-label">
                    <div class="text-left text-muted">0/30</div>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label">必填项</label>
                <div class="col-sm-4">
                    <select class="form-control">
                        <option value="0" selected="">否</option>
                        <option value="1">是</option>
                     </select>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label">状态</label>
                <div class="col-sm-4">
                    <select class="form-control">
                        <option value="0" selected="">启用</option>
                        <option value="1">禁用</option>
                     </select>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"><span class="text-danger">*</span>添加选项</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" placeholder="选项内容">
                </div>
                <div class="col-sm-4 control-label">
                    <label class="checkbox-inline" style="padding-top:0px;">
                        <input type="checkbox" value="option1"> 默认
                    </label>
                    <button type="button" class="btn btn-xs btn-default">
                        <span class="glyphicon glyphicon-plus-sign"></span> 添加
                    </button>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"></label>
                <div class="col-sm-7">
                    <input value="选项1" disabled="disabled" type="text" class="form-control" placeholder="选项内容">
                </div>
                <div class="col-sm-2 control-label">
                    <a title="编辑" class="pull-left" href="javascript:;">
                        <span class="glyphicon glyphicon-edit"></span>
                    </a>
                    <a title="修改" href="javascript:;">
                        <span class="glyphicon glyphicon-remove-sign"></span>
                    </a>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"></label>
                <div class="col-sm-7">
                    <input value="选项2" disabled="disabled" type="text" class="form-control" placeholder="选项内容">
                </div>
                <div class="col-sm-2 control-label">
                    <a title="编辑" class="pull-left" href="javascript:;">
                        <span class="glyphicon glyphicon-edit"></span>
                    </a>
                    <a title="修改" href="javascript:;">
                        <span class="glyphicon glyphicon-remove-sign"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
