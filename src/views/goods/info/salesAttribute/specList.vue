<template>
    <div class="form-group" id="edit-specSelected">
        <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>规格</label>
        <div class="col-sm-7 bg-muted">
            <div v-for="item in specList" style="display:inline-block; min-width:140px; margin:5px 0px;">
                <label style="margin: 0px; position: relative;top: -11px;" class="checkbox-inline">
                    <input type="checkbox" value="{{item.specName}}" v-model='item.selected'>
                </label>
                <div v-if="item.selected==true" style="display:inline-block;">
                    <input data-rule="required" name="{{'specSelected'+$index}}" type="text" class="sales-attribute-table-text" placeholder="规格" value="{{item.specName}}" v-model='item.specName'>
                </div>
                <div v-if="item.selected!=true" style="display:inline-block;">
                    <input type="text" class="sales-attribute-table-text" placeholder="规格" value="{{item.specName}}" v-model='item.specName'>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default{
        props:['specList']
    }
</script>
