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
                <label for="firstname" class="col-sm-3 control-label"><span class="text-danger">*</span>字数限制</label>
                <div class="col-sm-4">
                    <div class="input-group">
                        <span class="input-group-addon">最少</span>
                        <input v-model="inputattrobj.minLength" type="text" class="form-control" placeholder="字数">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="input-group">
                        <span class="input-group-addon">最多</span>
                        <input v-model="inputattrobj.maxLength" type="text" class="form-control" placeholder="字数">
                    </div>
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
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        props:['inputattrobj']
    }
</script>
