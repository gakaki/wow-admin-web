<template>
    <div class="row">
        <Alert :duration="2000" :alertshow.sync="alertObj.alertShow" :type="alertObj.alertType" :info="alertObj.alertInfo"></Alert>
        <div class="col-md-12 addproduct-box-html form-horizontal">
            <common-attr :commonattr.sync="commonattr"></common-attr>
            <div class="form-group">
                <label for="firstname" class="col-sm-3 control-label"><span class="text-danger">*</span>添加选项</label>
                <div class="col-sm-5">
                    <input v-model="optionText" type="text" class="form-control" placeholder="选项内容">
                </div>
                <div class="col-sm-4 control-label">
                    <label class="checkbox-inline pull-left" style="padding-top:0px;">
                        <input v-model="selected" type="checkbox"> 默认
                    </label>
                    <button @click="addOption(optionText,selected,optionDisabled)" type="button" class="btn btn-xs btn-default">
                        <span class="glyphicon glyphicon-plus-sign"></span> 添加
                    </button>
                </div>
            </div>
            <div class="form-group" v-for="item in selectattrobj.option" style="background:#f9f9f9;">
                <label for="firstname" class="col-sm-3 control-label"></label>
                <div class="col-sm-5">
                    <input v-focus="item.disabled" v-model="item.value" v-bind:disabled="item.disabled" type="text" class="form-control" placeholder="选项内容">
                </div>
                <div class="col-sm-4 control-label">
                    <label @click="defaultOption($index)" class="checkbox-inline pull-left" style="padding-top:0px; margin-right:25px">
                        <input v-model="item.selected" type="checkbox"> 默认
                    </label>
                    <a v-if="item.disabled!=false" @click="editOption($index)" title="编辑" class="pull-left" href="javascript:;">
                        <span class="glyphicon glyphicon-edit"></span>
                    </a>
                    <a v-if="item.disabled==false" @click="chuangeOk($index)" title="确认" class="pull-left" href="javascript:;">
                        <span class="glyphicon glyphicon-ok-circle"></span>
                    </a>
                    <a @click="deleteOption($index)" title="删除" href="javascript:;">
                        <span class="glyphicon glyphicon-remove-sign"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import commonAttr from './commonAttr'
    import Alert from '../../../components/common/alert/Alert'
    export default{
        props:['selectattrobj','commonattr'],
        components:{
            commonAttr,
            Alert
        },
        data(){
            return{
                optionText:null,
                selected:false,
                optionDisabled:true,
                token:true,
                alertObj:{
                    alertType:null,
                    alertInfo:null,
                    alertShow:false
                }
            }
        },
        directives: {
			focus(value) {
                console.log(value);
				if (value) {
					return
				}
				this.vm.$nextTick(() => {
					this.el.focus()
				})
			}
		},
        methods:{
            setDefaultOption:function(array){
                let _this=this;
                array.forEach(function(v, i, a) {
                    _this.$set('selectattrobj.option['+i+'].selected',0)
                });
            },
            addOption:function(optionText,selected,optionDisabled){
                //提示填写选项内容
                if (optionText==null||optionText=='') {
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'请填写选项内容',alertShow:true})
                    return false;
                }
                //如果新的选项设置了默认选中，则取消其他默认选中项
                if(Number(selected)==1){
                    if (this.selectattrobj.option.length>0) {
                        this.setDefaultOption(this.selectattrobj.option);
                    }
                }
                //追加的新的选项内容
                this.selectattrobj.option.push({value:optionText,selected:Number(selected),disabled:optionDisabled});
                this.$set('optionText',null);
                this.$set('selected',false);
                console.log(this.selectattrobj.option);
            },
            defaultOption:function(index){
                this.setDefaultOption(this.selectattrobj.option);
            },
            deleteOption:function(index){
                if (index==0) {
                    this.selectattrobj.option.splice(0,1);
                }else {
                    this.selectattrobj.option.splice(index,index);
                }
                console.log(this.selectattrobj.option);
            },
            editOption:function(index){
                let _this=this;
                this.selectattrobj.option.forEach(function(v, i, a) {
                    _this.$set('selectattrobj.option['+i+'].disabled',true);
                });
                this.$set('selectattrobj.option['+index+'].disabled',false)
            },
            chuangeOk:function(index){
                this.$set('selectattrobj.option['+index+'].disabled',true)
            }
        }
    }
</script>
