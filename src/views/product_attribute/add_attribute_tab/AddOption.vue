<template>
    <Alert :duration="2000" :alertshow.sync="alertObj.alertShow" :type="alertObj.alertType" :info="alertObj.alertInfo"></Alert>
    <div class="form-group">
        <label for="firstname" class="col-sm-3 control-label"><span class="text-danger">*</span>添加选项</label>
        <div v-bind:class="{ 'col-sm-7': optiontype!='select','col-sm-5': optiontype=='select' }">
            <input v-model="optionText" type="text" class="form-control" placeholder="选项内容">
        </div>
        <div v-bind:class="{ 'col-sm-2': optiontype!='select','col-sm-4': optiontype=='select' }" class="control-label">
            <label v-if="optiontype=='select'" class="checkbox-inline pull-left" style="padding-top:0px;">
                <input v-model="selected" type="checkbox"> 默认
            </label>
            <button @click="addOption(optionText,selected,optionDisabled)" type="button" class="btn btn-xs btn-default">
                <span class="glyphicon glyphicon-plus-sign"></span> 添加
            </button>
        </div>
    </div>
    <div class="form-group" v-for="item in optionattrobj.option" style="background:#f9f9f9;">
        <label for="firstname" class="col-sm-3 control-label"></label>
        <div v-bind:class="{ 'col-sm-7': optiontype!='select','col-sm-5': optiontype=='select' }">
            <input v-focus="item.disabled" v-model="item.value" v-bind:disabled="item.disabled" type="text" class="form-control" placeholder="选项内容">
        </div>
        <div v-bind:class="{ 'col-sm-2': optiontype!='select','col-sm-4': optiontype=='select' }" class="control-label">
            <label v-if="optiontype=='select'" @click="defaultOption($index)" class="checkbox-inline pull-left" style="padding-top:0px; margin-right:25px">
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
</template>
<script type="text/javascript">
    import Alert from '../../../components/common/alert/Alert'
    export default{
        props:['optionattrobj','optiontype'],
        components:{
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
                    _this.$set('optionattrobj.option['+i+'].selected',0)
                });
            },
            addOption:function(optionText,selected,optionDisabled){
                //提示填写选项内容
                if (optionText==null||optionText=='') {
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'请填写选项内容',alertShow:true})
                    return false;
                }

                //判断列表追加选项
                if(this.optiontype=='select'){
                    //如果新的选项设置了默认选中，则取消其他默认选中项
                    if(Number(selected)==1){
                        if (this.optionattrobj.option.length>0) {
                            this.setDefaultOption(this.optionattrobj.option);
                        }
                    }
                    //追加的新的下拉选项内容
                    this.optionattrobj.option.push({value:optionText,selected:Number(selected),disabled:optionDisabled});
                }else {
                    //追加的新的多选框选项内容
                    this.optionattrobj.option.push({value:optionText,disabled:optionDisabled});
                }

                //设置完选项，把输入框以及勾选框恢复原始状态
                this.$set('optionText',null);
                this.$set('selected',false);
                setTimeout(function(){
                    $('#attributeBody .col-md-8').scrollTop($('#attributeBody .col-md-8').height()+20);
                },10)
            },
            defaultOption:function(index){
                this.setDefaultOption(this.optionattrobj.option);
            },
            deleteOption:function(index){
                this.optionattrobj.option.splice(index,1);
                console.log(this.optionattrobj.option);
            },
            editOption:function(index){
                let _this=this;
                this.optionattrobj.option.forEach(function(v, i, a) {
                    _this.$set('optionattrobj.option['+i+'].disabled',true);
                });
                this.$set('optionattrobj.option['+index+'].disabled',false)
            },
            chuangeOk:function(index){
                this.$set('optionattrobj.option['+index+'].disabled',true)
            }
        }
    }
</script>
