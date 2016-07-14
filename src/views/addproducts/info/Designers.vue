<template>
    <div class="form-group">
        <label v-if="index==0" for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>设计师</label>
        <label v-if="index!=0" for="firstname" class="col-sm-2 control-label"></label>
        <div class="col-sm-2">
            <Select2 :selected.sync="designersid" :options="designers"></Select2>
        </div>
        <div class="col-sm-4 control-label" v-if="index==0" style="padding-top:4px;" >
            <div class="text-left text-muted">
                {{designersid}}
                <button type="button" class="btn btn-xs btn-default">
                    <span class="glyphicon glyphicon-refresh"></span> 刷新
                </button>
                <button @click="addDesigners()" type="button" class="btn btn-warning btn-xs">
                    <span class="glyphicon glyphicon-plus"></span>
                </button>
            </div>
        </div>
        <div class="col-sm-4 control-label" v-if="index>0" style="padding-top:4px;" >
            <div class="text-left text-muted">
                {{designersid}}
                <button @click="deleteDesigners(index)" type="button" class="btn btn-warning btn-xs">
                    <span class="glyphicon glyphicon-minus"></span>
                </button>
            </div>
        </div>
    </div>
    <hr v-if="itemlength>1&&itemlength==index+1">
</template>
<script type="text/javascript">
    import {productBasiInfo} from '../model'
    import Select2 from '../../../components/common/selecte2/Selecte2'
    export default{
        props:['designersid','designers','index','itemlength'],
        components:{
            Select2
        },
        methods:{
            addDesigners:function(){
                productBasiInfo.designersid.push({id:''});
                console.log(productBasiInfo);
            },
            deleteDesigners:function(index){
                productBasiInfo.designersid.del(index)
                console.log(productBasiInfo.designersid);
            }
        }
    }
</script>
