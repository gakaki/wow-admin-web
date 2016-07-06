<style media="screen">
    .addshowmodal .modal-body{
        padding: 0px 15px;
    }
    .addshowmodal .row{
        margin: 0px;
        overflow: hidden;
    }
    .addshowmodal .col-md-4, .addshowmodal .col-md-8{
        padding: 15px 0px;
    }
    .addshowmodal .col-md-4{
        padding-top: 0px;
        padding-bottom:9999px;
        margin-bottom:-9999px;
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
        <div slot="body">
            <div class="row">
                <div class="col-md-4" style="border-right:1px solid #ccc;">
                    <h5>字段类型</h5>
                    <ul class="list-unstyled">
                        <li @click="chuangeobj($index,item.obj)" v-bind:class="{'addshowmodal-select':attrSelect==$index}" v-for="item in attrType">
                            {{item.name}}
                        </li>
                    </ul>
                    <h5>
                        示例
                    </h5>
                    <p style="margin-right:15px;">
                        <input type="text" class="form-control" placeholder="示例">
                    </p>
                </div>
                <div class="col-md-8">
                    <input-attr :inputattrobj.sync="attrObj" v-if="attrSelect==0"></input-attr>
                    <textarea-attr v-if="attrSelect==1"></textarea-attr>
                    <select-attr v-if="attrSelect==2"></select-attr>
                    <checkbox-attr v-if="attrSelect==3"></checkbox-attr>
                    <numerical-attr v-if="attrSelect==4"></numerical-attr>
                    <date-attr v-if="attrSelect==5"></date-attr>
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
    import inputAttr from './add_attribute_tab/input'
    import textareaAttr from './add_attribute_tab/textarea'
    import selectAttr from './add_attribute_tab/select'
    import checkboxAttr from './add_attribute_tab/checkbox'
    import numericalAttr from './add_attribute_tab/numerical'
    import dateAttr from './add_attribute_tab/date'
    export default{
        props:['attributeobj','addshowmodal'],
        components:{
            Modal,
            inputAttr,
            textareaAttr,
            selectAttr,
            checkboxAttr,
            numericalAttr,
            dateAttr
        },
        data(){
            return{
                attrObj:{},
                attrSelect:0,
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
                        name:'多选',
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
        methods:{
            attributeSave:function(){
                console.log(this.attrObj);
            },
            chuangeobj:function(index,obj){
                this.$set('attrSelect',index);
                this.$set('attrObj',this.attributeobj[obj]);
            }
        }
    }
</script>
