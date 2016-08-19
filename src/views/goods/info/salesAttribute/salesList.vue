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
            <tbody v-if="item.selected==true" v-for="item in colorSelected">
                <tr v-if="items.selected==true" v-for="items in specList">
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
                        <input @input="specSellPrice($index,$event)" type="number" class="form-control sales-attribute-table-text" placeholder="售价" name="sellPrice00" aria-required="true">
                    </td>
                    <td>
                        <input @input="specWeight($index,$event)" type="number" class="form-control sales-attribute-table-text" placeholder="重量" name="weight00" aria-required="true">
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger btn-sm">禁用</button>
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
            <h3>总共条数</h3>
            <pre>
                {{listTotal|json}}
            </pre>
        </div>
        <div class="col-sm-6">
            
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
                listTotal:[]
            }
        },
        compiled(){
            this.colorFilter()
            this.specFilter()
        },
        methods:{
            //筛选已选颜色
            colorFilter:function(){
                this.$set('colorSelected',[])
                for (let i = 0; i < this.colorList.length; i++) {
                    if (this.colorList[i].selected==true) {
                        this.colorSelected.push(this.colorList[i])
                    }
                    if (i+1==this.colorList.length) {
                        console.log(this.colorSelected)
                        console.log(this.specSelected);
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
                },
                deep: true
            },
            'specList': {
                handler: function (val, oldVal) {
                    this.specFilter()
                },
                deep: true
            }
        }
    }
</script>
