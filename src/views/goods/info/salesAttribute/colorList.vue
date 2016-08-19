<template>
    <div class="form-group" id="edit-colorSelected">
        <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>颜色</label>
        <div class="col-sm-7 bg-muted">
            <div v-for="item in colorList" style="display:inline-block; min-width:140px;">
                <label class="checkbox-inline" style="margin-right:0px;">
                    <input data-rule="checked[1~]" name="colorList[]" name="{{'colorSelected'+$index}}" type="checkbox" value="{{item.colorName}}" v-model='item.selected'>
                    <i v-bind:class="item.color" v-bind:style="{ background: item.color}" class="addproduct-box-html-color-box"></i>
                    <span v-if="item.selected==false">{{item.colorName}}</span>
                </label>
                <div class="color-label" v-if="item.selected==true" style="display:inline-block">
                    <input data-rule="required" name="{{'colorSelected'+$index}}" v-bind:disabled="item.selected==false" v-if="item.selected==true" type="text" value="{{item.colorName}}" v-model='item.colorName' placeholder="颜色">
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        props:['colorList'],
        computed:{
        }
    }
</script>
