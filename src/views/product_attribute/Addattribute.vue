<style media="screen">
    .addshowmodal .modal-body{
        padding: 0px 15px;
    }
    .addshowmodal .row{
        margin: 0px;
    }
    .addshowmodal .col-md-4, .addshowmodal .col-md-8{
        padding: 15px 0px;
    }
    .addshowmodal .list-unstyled{
        border:1px solid #ccc;
        margin-right: 15px;
        margin-bottom: 15px;
    }
    .addshowmodal .list-unstyled li{
        line-height: 20px;
        padding: 3px;
        cursor:pointer;
    }
    .addshowmodal .list-unstyled li:hover{
        background: #ddd;
    }
    .addshowmodal-select{
        background: #ddd;
    }
</style>
<template>
    <Modal class="addshowmodal" :show.sync="addshowmodal">
        <h4 slot="header" class="modal-title">新增属性</h4>
        <button slot="close" type="button" class="close" @click="addshowmodal=false">&times;</button>
        <div slot="body" id="attributeBody">
            <div class="row">
                <div class="col-md-4">
                    <h5>字段类型</h5>
                    <ul class="list-unstyled">
                        <li @click="chuangeobj($index,item.obj)" v-bind:class="{'addshowmodal-select':attrSelect==$index}" v-for="item in attrType">
                            {{item.name}}
                        </li>
                    </ul>
                    <h5>
                        示例
                    </h5>
                    <hr style="margin-right:15px;">
                    <div style="margin-right:15px; margin-bottom:25px;">
                        <div v-if="attrSelect==0" >
                            <input type="text" class="form-control" placeholder="{{commonattrObj.name||'单行文本'}}">
                        </div>
                        <div v-if="attrSelect==1">
                            <textarea class="form-control" placeholder="{{commonattrObj.name||'多行文本'}}"></textarea>
                        </div>
                        <div v-if="attrSelect==2">
                            <select  class="form-control">
                                <option v-for="item in attrObj.option | orderBy 'value' 1" v-bind:selected="item.selected==1||item.selected==true">
                                    {{item.value}}
                                </option>
                             </select>
                        </div>
                        <div v-if="attrSelect==3">
                            <label style="margin:5px;" class="checkbox-inline" v-for="item in attrObj.option">
                                <input type="checkbox" value="0"> {{item.value}}
                            </label>
                        </div>
                        <div v-if="attrSelect==4">
                            <div class="input-group">
                                <input type="text" class="form-control" v-model="textCurrency" type="text" class="form-control" placeholder="{{commonattrObj.name||'示例'}}">
                                <span class="input-group-addon">{{attrObj.Unit}}</span>
                            </div>
                            <p class=" center-block label label-info" style="margin-top:5px; text-align:left; padding:10px;">
                                展示：{{textCurrency | byteFormat attrObj.decimalPoint}} {{attrObj.Unit}}
                            </p>
                        </div>
                        <div v-if="attrSelect==5">
                            <div v-if="attrObj.dateType==0">
                                <input class="form-control" type="text" v-model="value" placeholder="日期">
                            </div>
                            <div v-if="attrObj.dateType==1">
                                <input type="text" class="form-control" placeholder="日期+时间">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8" style="min-height:400px; max-height: 500px; overflow-x: hidden; overflow-y: scroll; border-left:1px solid #ccc;">
                    <Input-attr :inputattrobj.sync="attrObj" :commonattr.sync="commonattrObj" v-if="attrSelect==0"></Input-attr>
                    <Textarea-attr :textareaattrobj.sync="attrObj" :commonattr.sync="commonattrObj" v-if="attrSelect==1"></Textarea-attr>
                    <Select-attr :selectattrobj.sync="attrObj" :commonattr.sync="commonattrObj" v-if="attrSelect==2"></Select-attr>
                    <Checkbox-attr :checkboxattrobj.sync="attrObj" :commonattr.sync="commonattrObj" v-if="attrSelect==3"></Checkbox-attr>
                    <Numerical-attr :numericalattrobj.sync="attrObj" :commonattr.sync="commonattrObj" v-if="attrSelect==4"></Numerical-attr>
                    <Date-attr :dateattrobj.sync="attrObj" :commonattr.sync="commonattrObj" v-if="attrSelect==5"></Date-attr>
                </div>
            </div>
        </div>
        <div slot="footer">
            <button @click="attributeSave" type="button" class="btn btn-primary expressButton">保存</button>
        </div>
    </Modal>
</template>

<script type="text/javascript">
    import Modal from '../../components/common/Modal'
    import InputAttr from './add_attribute_tab/Input'
    import TextareaAttr from './add_attribute_tab/Textarea'
    import SelectAttr from './add_attribute_tab/Select'
    import CheckboxAttr from './add_attribute_tab/Checkbox'
    import NumericalAttr from './add_attribute_tab/Numerical'
    import DateAttr from './add_attribute_tab/Date'

    export default{
        props:['attributeobj','addshowmodal'],
        components:{
            Modal,
            InputAttr,
            TextareaAttr,
            SelectAttr,
            CheckboxAttr,
            NumericalAttr,
            DateAttr,
        },
        data(){
            return{
                attrObj:this.attributeobj.input,
                commonattrObj:this.attributeobj.common,
                attrSelect:0,
                textCurrency:100,
                maxLength:null,
                attrType:[
                    {
                        name:'单行文本',
                        obj :'input'
                    },
                    {
                        name:'多行文本',
                        obj :'textarea'
                    },
                    {
                        name:'下拉列表',
                        obj :'select'
                    },
                    {
                        name:'多选框',
                        obj :'checkbox'
                    },
                    {
                        name:'数值',
                        obj :'numerical'
                    },
                    {
                        name:'日期',
                        obj :'date'
                    }
                ]
            }
        },
        watch:{
            'attrObj.decimalPoint':function(val){
                if (val==0) {
                    this.$set('textCurrency',100)
                }else {
                    this.$set('textCurrency',100+'.'+val*6)
                }
            }
        },
        methods:{
            attributeSave:function(){
                console.log(this.attrObj);
                console.log(this.commonattrObj);
            },
            chuangeobj:function(index,obj){
                this.$set('attrSelect',index);
                this.$set('attrObj',this.attributeobj[obj]);
                this.$set('commonattrObj',{code:'',name:'',required:1,disabled:1})
            }
        }
    }
</script>
