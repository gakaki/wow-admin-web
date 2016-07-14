<style media="screen">
    .expressSelected .v-select.searchable .dropdown-toggle{
        height: 34px;
    }
    .expressSelected .v-select .selected-tag{
        margin-top: 3px;
        padding: 0px 10px;
        line-height: 22px;
    }
    .hiddenInputBox .msg-box{
        position: absolute;
    }
    table.expressTable>tbody>tr>td{
        vertical-align:middle;
    }
    .expressTable{
        border-bottom: 1px solid #ddd;
    }
    .expressRadio{margin: 15px 0px;}
    .expressRadio input[type="radio"]{
        margin-top: -4px;
    }
</style>
<template>
    <modal :show.sync="showbox" id="expressBox{{orderid}}" class="expressBox">
        <button slot="close" type="button" class="close" @click="closeMoadl()">&times;</button>
        <h5 slot="header" class="modal-title">商品发货-订单ID：{{orderid}}</h5>
        <div slot="body">
            <div style="width:100%; max-height:300px; overflow-x: hidden; overflow-y: scroll;">
                <table class="table table-striped expressTable">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>商品</th>
                            <th class="text-center">物流公司</th>
                            <th class="text-center">快递单号</th>
                        </tr>
                    </thead>
                    <tbody class="checkboxdo">
                        <tr v-for="item in itemslistarr">
                            <td>
                                <input v-if="item.item.length==1" type="checkbox" v-bind:value="item.item[0].product_id" v-bind:name="item.item[0].product_id+'name'+$index" v-model="checkedItems" v-bind:checked="item.expressinstatus==false" />
                            </td>
                            <td style="width:45%;">
                                <table v-for="items in item.item">
                                    <tbody>
                                        <tr>
                                            <td style="width:60px;">
                                                <img style="width:60px; margin-bottom:5px; border:1px solid #ccc;" v-bind:src=items.image alt="" />
                                            </td>
                                            <td style="padding-left:15px; width:80%;">
                                                <a target="_blank" class="clearfix" href="#">{{items.name}}</a>
                                                <span class="text-muted clearfix">
                                                    {{items.sku_title}}
                                                </span>
                                                <span class="clearfix">
                                                    {{items.count}}件
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="text-center"><span class="label label-success">{{item.expressinfo.company}}</span></td>
                            <td class="text-center"><span class="label label-default">{{item.expressinfo.number}}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                <span>已选择的商品ID: {{ checkedItems | json }}</span>
            </p>
            <h5>
                收货信息：{{address}}，{{name}}，{{mobile}}
            </h5>
            <h5 class="expressRadio">
                发货方式：
               <label class="checkbox-inline">
                  <input type="radio" name="expressRadios" value="true" checked="checked" v-model="needExpress"> 需要物流
               </label>
               <label class="checkbox-inline" v-show=''>
                  <input type="radio" name="expressRadios" value="false" v-model="needExpress"> 不需要物流
               </label>
           </h5>
            <div class="row" v-show="needExpress=='true'">
                <div class="col-md-6 expressSelected hiddenInputBox">
                    <input v-bind:value="expressinfo.arr" name="expresscompany" class="form-control" type="text" placeholder="快递公司" style="display:none;" >
                    物流公司：<v-select :placeholder="'请选择一个物流公司'" :value.sync="expressinfo.arr" :options="fruitOptions" :search="true" :close-on-select="true">
                    </v-select>
                </div>
                <div class="col-md-6">
                   <input v-model="expressinfo.number" autocomplete="off" name="expresscode" class="form-control" type="text" placeholder="快递单号">
                </div>
            </div>

        </div>
        <div slot="footer">
            <div class="btn-group">
                <button @click="closeMoadl()" type="button" class="btn btn-danger">取消</button>
                <button v-bind:disabled="checkedItems==''" type="button" class="btn btn-success expressButton">确认</button>
            </div>
        </div>
    </modal>
</template>
<script type="text/javascript">
import Modal from '../../components/common/Modal'
import {expressObj} from '../../vuex/actions'
import vSelect from '../common/selecte/Select'
export default{
    components:{
        Modal,
        vSelect
    },
    props:['orderid','orderstatus','address','mobile','name','showbox','itemslistarr'],
    data() {
        return {
            fruitOptions: [
                {value:'{"name":"顺丰速运","code":"shunfengsuyun"}', label:'顺丰速运'},
                {value:'{"name":"日日顺","code":"ririshun"}', label:'日日顺'},
            ],
            checkedItems:[],
            expressinfo:{
                arr: [],
                number:null
            },
            needExpress:true,
            showModal: false,
        }
    },
    vuex: {
        actions: {
            Setexpressobj:expressObj
        }
    },
    methods:{
        setdata:function(){
            this.expressinfo.arr=[];
            this.expressinfo.number=null;
        },
        getdata:function(){
            console.log('订单号码：'+this.orderid);
            console.log('选中的商品ID：'+this.checkedItems);
            if (this.expressinfo.arr[0]==undefined||this.expressinfo.arr[0]=='undefined') {
            }else {
                let expressinfoArr=JSON.parse(this.expressinfo.arr[0]);
                console.log('快递公司：'+expressinfoArr.name);
                console.log('快递代码：'+expressinfoArr.code);
                console.log('快递号码：'+this.expressinfo.number);
            }
        },
        closeMoadl:function(){
            this.Setexpressobj({tag:false})
        }
    },
    ready(){
        /*
        ** 表单验证
         */
        var _this=this;
        $('#expressBox'+this.orderid).validator({
            theme: "yellow_top",
            stopOnError: true,
            focusCleanup: false,
            focusInvalid:false,
            timely: 2,
            // 获取display
            display: function(el) {
                return el.getAttribute('placeholder') || '';
            },
            fields: {
                'expresscompany': 'required;',
                'expresscode': 'required;'
            },
            valid: function(){
                //表单验证通过，提交表单到服务器
                _this.getdata();
                _this.setdata();
            }
        })
        .on("click", ".expressButton", function(e){
            /**
             * needExpress等于0表示需要物流
             */
            if (_this.needExpress=='true') {
                $(e.delegateTarget).trigger("validate");
            }else {
                _this.getdata();
                _this.setdata();
            }
        });
    }
}
</script>
