<template>
    <div class="row">
        <div class="col-md-12 form-horizontal">
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
                <label for="firstname" class="col-sm-3 control-label">是否货币</label>
                <div class="col-sm-4">
                    <select class="form-control">
                        <option value="0" selected="">非货币</option>
                        <option value="1">货币</option>
                     </select>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label">小数点位数</label>
                <div class="col-sm-4">
                    <select class="form-control">
                        <option value="0" selected="">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                     </select>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label">单位</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" placeholder="单位">
                </div>
                <div class="col-sm-2 control-label">
                    <div class="text-left text-muted">0/5</div>
                </div>
            </div>
        </div>
    </div>
</template>
