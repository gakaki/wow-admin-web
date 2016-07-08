<template>
    <div class="row">
        <div class="col-md-12 form-horizontal">
            <common-attr :commonattr.sync="commonattr"></common-attr>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label">日期类型</label>
                <div class="col-sm-4">
                    <select v-model="dateattrobj.dateType" class="form-control">
                        <option v-bind:value="0" selected="">日期</option>
                        <option v-bind:value="1">日期+时间</option>
                     </select>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import commonAttr from './commonAttr'
    export default{
        props:['commonattr','dateattrobj'],
        components:{
            commonAttr
        }
    }
</script>
