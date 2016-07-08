<template>
    <div class="row">
        <p>
            {{ 1232888 | byteFormat }}
        </p>
        <div class="col-md-12 form-horizontal">
            <common-attr :commonattr.sync="commonattr"></common-attr>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label">是否货币</label>
                <div class="col-sm-4">
                    <select v-model="numericalattrobj.currency" class="form-control">
                        <option v-bind:value="0" selected="">非货币</option>
                        <option v-bind:value="1">货币</option>
                     </select>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label">小数点位数</label>
                <div class="col-sm-4">
                    <select v-model:="numericalattrobj.decimalPoint" class="form-control">
                        <option v-bind:value="0" selected="">0</option>
                        <option v-bind:value="1">1</option>
                        <option v-bind:value="2">2</option>
                        <option v-bind:value="3">3</option>
                        <option v-bind:value="4">4</option>
                     </select>
                </div>
            </div>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label">单位</label>
                <div class="col-sm-4">
                    <input maxlength="5" v-if="numericalattrobj.currency=='0'" v-model="numericalattrobj.Unit" type="text" class="form-control" placeholder="单位" value="">
                    <input maxlength="5" v-if="numericalattrobj.currency=='1'" v-model="numericalattrobj.Unit" type="text" disabled="disabled" class="form-control" placeholder="元" value="元">
                </div>
                <div class="col-sm-2 control-label">
                    <div class="text-left text-muted">{{numericalattrobj.Unit.length}}/5</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import commonAttr from './commonAttr'
    import Vue from 'vue'
    Vue.filter('byteFormat', require('../../../components/common/filter/ZeroFill.js'));
    export default{
        props:['commonattr','numericalattrobj'],
        components:{
            commonAttr
        }
    }
</script>
