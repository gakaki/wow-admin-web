<style media="screen">
    .spec-disabled td+td+td{
        background: #f9f9f9;
    }
    .spec-disabled:nth-child(n+2) td{
        background: #f9f9f9;
    }
</style>
<template>
    <button type="button" name="button" @click="TotalFilter">测试按钮2</button>
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
            <tbody v-for="(index, item) in listView">
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
                       <input @input="setVal(index,$index,$event,'sellPrice') | debounce 500" v-bind:disabled="items.disabled==true" type="number" class="form-control sales-attribute-table-text" placeholder="售价" name="sellPrice00" aria-required="true" v-bind:value="items.sellPrice">
                   </td>
                   <td>
                       <input @input="setVal(index,$index,$event,'weight') | debounce 500" v-bind:disabled="items.disabled==true" type="number" class="form-control sales-attribute-table-text" placeholder="重量" name="weight00" aria-required="true" v-bind:value="items.weight">
                   </td>
                   <td>
                       <button @click="specDisable(index,$index,items.productId)" v-if="items.disabled==false" type="button" class="btn btn-danger btn-sm">禁用</button>
                       <button @click="specEnable(index,$index,items.productId)" v-if="items.disabled==true" type="button" class="btn btn-success btn-sm">启用</button>
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
            <h3>删除的sku</h3>
            <pre>
                {{deleteds|json}}
            </pre>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
            <h2>{{addeds.length}}</h2>
            <h3>新增的sku数据</h3>
            <pre>
                {{addeds|json}}
            </pre>
        </div>
        <div class="col-sm-6">
                <h2>{{updateds.length}}</h2>
            <h3>更新的sku数据</h3>
            <pre>
                {{updateds|json}}
            </pre>
        </div>
    </div>
</template>

<script type="text/javascript">
    import lodash           from    'lodash'

    export default{
        props:['colorList','specList','serials'],
        data(){
            return{
                colorSelected:[],
                specSelected:[],
                listView:[],
                addeds:[],
                updateds:[],
                deleteds:[],
            }
        },
        compiled(){
            this.colorFilter()
            this.specFilter()
            this.viewSku()
        },
        methods:{
            //设置默认的规格值
            defaultSpec:function(){
                this.$set('listView',JSON.parse(JSON.stringify(this.listView)))
                for (let a = 0; a < this.listView.length; a++) {
                    for (let b = 0; b < this.listView[a].specList.length; b++) {
                        if (this.listView[a].colorId!=this.listView[a].specList[b].colorId) {
                            this.listView[a].specList[b].disabled=true
                            this.listView[a].specList[b].sellPrice=''
                            this.listView[a].specList[b].weight=''
                        }else {
                            this.listView[a].specList[b].productId=this.serials[b].productId
                        }
                    }
                }
            },

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
                        if (b+1==this.specSelected.length) {
                            this.defaultSpec();
                        }
                    }
                }
            },

            //计算总的需要提交的sku数据
            TotalFilter:function(){
                this.$set('updateds',[]);
                this.$set('addeds',[]);
                for (let a = 0; a < this.listView.length; a++) {
                    for (let b = 0; b < this.listView[a].specList.length; b++) {
                        if (this.listView[a].specList[b].disabled==false) {
                            if (this.listView[a].specList[b].productId) {
                                this.updateds.push({
                                    colorId:this.listView[a].colorId,
                                    colorImg:this.listView[a].colorImg,
                                    colorName:this.listView[a].colorName,
                                    specName:this.listView[a].specList[b].specName,
                                    weight:this.listView[a].specList[b].weight,
                                    sellPrice:this.listView[a].specList[b].sellPrice,
                                    productId:this.listView[a].specList[b].productId,
                                })
                            }else {
                                this.addeds.push({
                                    colorId:this.listView[a].colorId,
                                    colorImg:this.listView[a].colorImg,
                                    colorName:this.listView[a].colorName,
                                    specName:this.listView[a].specList[b].specName,
                                    weight:this.listView[a].specList[b].weight,
                                    sellPrice:this.listView[a].specList[b].sellPrice,
                                })
                            }
                        }
                    }
                    if (a+1==this.listView.length) {
                        //过滤完需要提交的sku数据，提交到服务器
                        console.log(this.addeds);
                        console.log(this.updateds);
                        console.log(this.deleteds);
                    }
                }
            },

            //禁用
            specDisable:function(color,spec,productId){
                this.listView[color].specList[spec].disabled=true;
                // 如果有id，表示是服务器返回的数据
                if (typeof(productId)=='number') {
                    this.deleteds.push(productId)
                }
            },

            //启用
            specEnable:function(color,spec,productId){
                this.listView[color].specList[spec].disabled=false;
                // 如果有id，表示是服务器返回的数据
                if (typeof(productId)=='number') {
                    this.deleteds.find((value, index, arr)=> {
                        if (value==productId) {
                            this.deleteds.splice(index,1);
                        }
                    });
                }
            },

            //售价与重量的赋值
            setVal:function(colro,spec,e,name){
                console.log(colro);
                console.log(spec);
                console.log(e.target.value);
                console.log(name);
                this.listView[colro].specList[spec][name]=e.target.value;
            },
        },
        watch:{
            'colorList': {
                handler: function (val, oldVal) {
                    this.colorFilter()
                    this.viewSku();
                },
                deep: true,
            },
            'specList': {
                handler: function (val, oldVal) {
                    this.specFilter()
                    this.viewSku();
                },
                deep: true
            }
        },
        ready(){
        }
    }
</script>
