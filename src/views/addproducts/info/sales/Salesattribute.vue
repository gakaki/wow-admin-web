<style media="screen">
    .multi-color{
        background:-webkit-linear-gradient(left,#f00 50%,#fed533 50%), -webkit-linear-gradient(left,#1790c8 50%,#7bba3c 50%);
        background:-moz-linear-gradient(left,#f00 50%,#fed533 50%), -moz-linear-gradient(left,#1790c8 50%,#7bba3c 50%);
        background-repeat:no-repeat;
        background-position:left top,left bottom;
        background-size:100% 50%;
        border: 0px;
        width: 12px;
        height: 12px;
    }
    .color-label{
        width: 80px;
        min-height: 24px;
    }
    .color-label input[type=checkbox]{
        position: relative;
        display: inline-block;
        top: -1px;
    }
    .color-label input[type=text]{
        display: inline;
        width: 80px;
    }
    .spec-border-danger{
        border:1px solid #ff0000;
    }
    #specSelected span.n-right, #colorSelected span.n-right{
        top: -3px;
    }
</style>
<template>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">销售属性<span class="text-danger">［颜色／规格 *必选］</span></div>
        <div class="form-group" id="colorSelected">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>颜色</label>
            <div class="col-sm-7 bg-muted">
                <div v-for="item in productsalesattribute.color" style="display:inline-block; min-width:140px;">
                    <label class="checkbox-inline" style="margin-right:0px;">
                        <input type="checkbox" value="{{item.name}}" v-model='item.selected'>
                        <i v-if="item.multi!=true" v-bind:style="{ background: item.color}" class="addproduct-box-html-color-box"></i>
                        <i v-if="item.multi==true" class="multi-color addproduct-box-html-color-box"></i>
                        <span v-if="item.selected==false">{{item.name}}</span>
                    </label>
                    <div class="color-label" v-if="item.selected==true" style="display:inline-block">
                        <input data-rule="required" name="{{'colorSelected'+$index}}" v-bind:disabled="item.selected==false" v-if="item.selected==true" type="text" value="{{item.name}}" v-model='item.name' placeholder="颜色">
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group" id="specSelected">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>规格</label>
            <div class="col-sm-7 bg-muted">
                <label class="checkbox-inline" v-for="item in spectbodylist">
                    <input v-bind:disabled="$index==0"  type="checkbox" value="{{item.spec}}" v-model='item.selected'>

                    <div v-if="item.selected==true" >
                        <input data-rule="required" name="{{'specSelected'+$index}}" v-bind:class="{'spec-border-danger':item.selected==true}" type="text" class="sales-attribute-table-text" placeholder="规格" value="{{item.spec}}" v-model='item.spec'>
                    </div>

                    <div v-if="item.selected!=true" >
                        <input v-bind:class="{'spec-border-danger':item.selected==true}" type="text" class="sales-attribute-table-text" placeholder="规格" value="{{item.spec}}" v-model='item.spec'>
                    </div>
                </label>
            </div>
        </div>
        <div class="form-group" style="margin-top:40px;">
            <label for="firstname" class="col-sm-2 control-label">
            </label>
            <div class="col-sm-7 control-label">
                <div class="text-left">
                    批量设置：
                    <div class="btn-group">
                        <button @click="batchSellPrice=!batchSellPrice" v-if="batchWeight==false" type="button" class="btn btn-primary btn-sm">售价</button>
                        <div v-if="batchSellPrice==true" class="input-group input-group-sm" style="max-width:200px;">
                           <input v-focus="batchSellPrice" @keyup.enter="batch_sellPrice" v-model="SellPrice" style="border-left:0px; border-radius:0px;" placeholder="售价" type="number" class="form-control">
                           <span class="input-group-btn">
                              <button @click="batch_sellPrice" class="btn btn-success" type="button">
                                 确定
                              </button>
                              <button @click="batchSellPrice=!batchSellPrice" class="btn btn-danger" type="button">
                                 取消
                              </button>
                           </span>
                        </div>

                        <button @click="batchWeight=!batchWeight" v-if="batchSellPrice==false" type="button" class="btn btn-primary btn-sm">重量</button>
                        <div v-if="batchWeight==true" class="input-group input-group-sm" style="max-width:200px;">
                           <input v-focus="batchWeight" @keyup.enter="batch_weight" v-model="weight" style="border-left:0px; border-radius:0px;" placeholder="重量" type="number" class="form-control">
                           <span class="input-group-btn">
                              <button @click="batch_weight" class="btn btn-success" type="button">
                                 确定
                              </button>
                              <button @click="batchWeight=!batchWeight"  class="btn btn-danger" type="button">
                                 取消
                              </button>
                           </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="clor-pic-box">
            <table class="table order-list sales-attribute-table">
                <thead>
                    <tr>
                        <th>图片<span class="text-danger">(比例1:1)</span></th>
                        <th>颜色</th>
                        <th>规格</th>
                        <th><span class="text-danger">*</span>售价</th>
                        <th><span class="text-danger">*</span>重量(KG)</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody :speclists="specListS" :tbody_index="$index" :listobj="item" v-for="item in productsalesattribute.color" is="Spectbody" :spec_select="productsalesattribute.specSelect">
                </tbody>
            </table>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Spectbody from './Spectbody'
    export default{
        props:['productsalesattribute','spectbodylist'],
        data(){
            return{
                labeltest:14,
                a:1,
                testimg:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',
                batchSellPrice:false,
                batchWeight:false,
                SellPrice:'',
                weight:'',
            }
        },
        components:{
            Spectbody
        },
        computed: {
            colorSelect: function () {
                return this.productsalesattribute.color.filter(function (l) {
                    return l.selected
                }).map(function (l) {
                    return l.name
                })
            },
            specListS: function () {
                return this.spectbodylist.filter(function (l) {
                    return l.selected
                }).map(function (l) {
                    return l.spec
                })
            }
        },
        created(){
            this.$set('productsalesattribute.colorSelect',this.colorSelect);
            this.$set('productsalesattribute.specSelect',this.specListS);
        },
        watch:{
            'colorSelect':function(val,oldval){
                this.$set('productsalesattribute.colorSelect',this.colorSelect);
            },
            'specListS':function(val,oldval){
                console.log(val.length);
                this.$set('productsalesattribute.specSelect',this.specListS);
            }
        },
        directives: {
			focus(value) {
				if (!value) {
					return
				}
				this.vm.$nextTick(() => {
					this.el.focus()
				})
			}
		},
        methods:{
            batch_sellPrice:function(){
                if (this.SellPrice=='') {

                }else {
                    this.$broadcast('batchSellPrice', {sellPrice:Number(this.SellPrice)});
                }
                this.$set('batchSellPrice',!this.batchSellPrice)
            },
            batch_weight:function(){
                if (this.weight=='') {

                }else {
                    this.$broadcast('batchWeight', {weight:Number(this.weight)})
                }
                this.$set('batchWeight',!this.batchWeight)
            }
        }
    }
</script>
