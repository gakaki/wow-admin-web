<template>
    <div class="row">
        <div class="col-md-12 form-horizontal">
            <common-attr :commonattr.sync="commonattr"></common-attr>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"><span class="text-danger">*</span>字数限制</label>
                <div class="col-sm-4">
                    <div class="input-group">
                        <span class="input-group-addon">最少</span>
                        <input v-model="textareaattrobj.minLength" type="text" class="form-control" placeholder="字数">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="input-group">
                        <span class="input-group-addon">最多</span>
                        <input v-model="textareaattrobj.maxLength" type="text" class="form-control" placeholder="字数">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import commonAttr from './commonAttr'
    export default{
        components:{
            commonAttr
        },
        props:['textareaattrobj','commonattr'],
    }
</script>
