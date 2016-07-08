<template>
    <div class="form-group">
        <label for="firstname" class="col-sm-3 control-label"><span class="text-danger">*</span>代码</label>
        <div class="col-sm-7">
            <input maxlength="30" v-model="commonattr.code" value="" type="text" class="form-control" placeholder="唯一识别代码">
        </div>
        <div class="col-sm-2 control-label">
            <div class="text-left text-muted">{{commonattr.code.length}}/30</div>
        </div>
    </div>
    <div class="form-group">
        <label for="firstname" class="col-sm-3 control-label"><span class="text-danger">*</span>属性名称</label>
        <div class="col-sm-7">
            <input maxlength="30" v-model="commonattr.name" value="" type="text" class="form-control" placeholder="唯一属性名称">
        </div>
        <div class="col-sm-2 control-label">
            <div class="text-left text-muted">{{commonattr.name.length}}/30</div>
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
</template>
<script type="text/javascript">
    export default{
        props:['commonattr']
    }
</script>
