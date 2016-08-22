<style media="screen">
    .spec-disabled td+td+td{
        background: #f9f9f9;
    }
    .spec-disabled:nth-child(n+2) td{
        background: #f9f9f9;
    }
</style>
<template>
    <div class="form-group" style="margin-top:40px">
        <label for="firstname" class="col-sm-2 control-label"> </label>
        <div class="col-sm-7 control-label">
            <div class="text-left"> 批量设置：
                <div class="btn-group">
                    <button type="button" class="btn btn-primary btn-sm">售价</button>
                    <button type="button" class="btn btn-primary btn-sm">重量</button>
                </div>
            </div>
        </div>
    </div>
    <div id="edit-clor-pic-box">
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
            <tbody v-for="item in listView">
                <tr v-for="items in item.specList" v-bind:class="{'spec-disabled':items.disabled==true}">
                   <td v-if="$index==0" v-bind:rowspan="specSelected.length">
                       <button class="btn btn-success"> <span>选择图片</span> </button>
                   </td>
                   <td v-if="$index==0" v-bind:rowspan="specSelected.length">
                       {{item.colorName}}
                   </td>
                   <td>
                       {{items.specName}}
                   </td>
                   <td>
                       <input v-bind:disabled="items.disabled==true" @input="specSellPrice($index,$event)" type="number" class="form-control sales-attribute-table-text" placeholder="售价" name="sellPrice00" aria-required="true" v-bind:value="items.sellPrice">
                   </td>
                   <td>
                       <input v-bind:disabled="items.disabled==true" @input="specWeight($index,$event)" type="number" class="form-control sales-attribute-table-text" placeholder="重量" name="weight00" aria-required="true" v-bind:value="items.weight">
                   </td>
                   <td>
                       <button v-if="items.disabled==false" type="button" class="btn btn-danger btn-sm">禁用</button>
                       <button v-if="items.disabled==true" type="button" class="btn btn-success btn-sm">启用</button>
                   </td>
               </tr>
            </tbody>
        </table>
    </div>
    <div class="row">
        <div class="col-sm-6">
            <h3>已选颜色</h3>
            <pre>
                {{colorSelected|json}}
            </pre>
        </div>
        <div class="col-sm-6">
            <h3>已选规格</h3>
            <pre>
                {{specSelected|json}}
            </pre>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
            <h3>视图渲染sku</h3>
            <pre>
                {{listView|json}}
            </pre>
        </div>
        <div class="col-sm-6">
            <h3>需要提交的sku数据</h3>
            <pre>
                {{listTotal|json}}
            </pre>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default{
        props:['colorList','specList'],
        data(){
            return{
                colorSelected:[],
                specSelected:[],
                listTotal:[],
                listView:[],
            }
        },
        compiled(){
            this.colorFilter()
            this.specFilter()
            this.TotalFilter()
            this.viewSku();
        },
        methods:{
            //筛选已选颜色
            colorFilter:function(){
                this.$set('colorSelected',[])
                for (let i = 0; i < this.colorList.length; i++) {
                    if (this.colorList[i].selected==true) {
                        this.colorSelected.push(this.colorList[i])
                    }
                }
            },

            //筛选已选尺寸
            specFilter:function(){
                this.$set('specSelected',[])
                for (let i = 0; i < this.specList.length; i++) {
                    if (this.specList[i].selected==true) {
                        this.specSelected.push(this.specList[i])
                    }
                }
            },

            //计算总的需要渲染的sku数据
            viewSku:function(){
                this.$set('listView',[]);
                for (let a = 0; a < this.colorSelected.length; a++) {
                    this.listView.push(
                        {
                            colorId:this.colorSelected[a].colorId,
                            colorName:this.colorSelected[a].colorName,
                            colorImg:this.colorSelected[a].colorImg,
                            specList:[],
                        }
                    )
                    for (let b = 0; b < this.specSelected.length; b++) {
                        this.listView[a].specList.push(
                            this.specSelected[b]
                        )
                    }
                }
            },

            //计算总的需要提交的sku数据
            TotalFilter:function(){
                this.$set('listTotal',[]);
                for (let a = 0; a < this.colorList.length; a++) {
                    if (this.colorList[a].selected==true) {
                        for (let b = 0; b < this.specList.length; b++) {
                            if (this.specList[b].selected==true) {
                                this.listTotal.push({
                                    colorId:this.colorList[a].colorId,
                                    colorImg:this.colorList[a].colorImg,
                                    colorName:this.colorList[a].colorName,
                                    specName:this.specList[b].specName,
                                    weight:this.specList[b].weight,
                                    sellPrice:this.specList[b].sellPrice,
                                })
                            }
                        }
                    }
                }
            },

            //更改价格
            specSellPrice:function(index,e){
                console.log(index)
                console.log(e.target.value)
            },

            // 更改重量
            specWeight:function(index,e){
                console.log(index)
                console.log(e.target.value)
            }
        },
        watch:{
            'colorList': {
                handler: function (val, oldVal) {
                    this.colorFilter()
                    this.TotalFilter()
                    this.viewSku();
                },
                deep: true
            },
            'specList': {
                handler: function (val, oldVal) {
                    this.specFilter()
                    this.TotalFilter()
                    this.viewSku();
                },
                deep: true
            }
        }
    }
</script>
