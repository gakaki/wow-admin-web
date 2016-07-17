<style media="screen">
    .spec-disabled td+td+td{
        background: #f9f9f9;
    }
    .spec-disabled:nth-child(n+2) td{
        background: #f9f9f9;
    }
</style>
<template>
    <tr v-if="list.selected==true" v-bind:class="{'spec-disabled':list.disabled==true}">
        <td v-if="index==0" v-bind:rowspan="speclength">
            <img style="widht:70px; height:70px;" v-bind:src="img" alt="" />
        </td>
        <td v-if="index==0" v-bind:rowspan="speclength">
            {{name}}
        </td>
        <td>
            {{list.spec}}
        </td>
        <td>
            <input v-bind:disabled="list.disabled==true" v-model="sell_price" type="text" class="form-control sales-attribute-table-text" placeholder="0" >
        </td>
        <td>
            <input v-bind:disabled="list.disabled==true" v-model="list.activity_price" type="text" class="form-control sales-attribute-table-text" placeholder="0">
        </td>
        <td>
            <input v-bind:disabled="list.disabled==true" v-model="list.cost_price" type="text" class="form-control sales-attribute-table-text" placeholder="0">
        </td>
        <td>
            <input v-bind:disabled="list.disabled==true" v-model="list.arrivalPeriod" type="text" class="form-control sales-attribute-table-text" placeholder="0">
        </td>
        <td>
            <input v-bind:disabled="list.disabled==true" v-model="list.weight" type="text" class="form-control sales-attribute-table-text" placeholder="0">
        </td>
        <td>
            <input v-model="list.sku" disabled="disabled" type="text" class="form-control sales-attribute-table-text" placeholder="系统">
        </td>
        <td>
            <button @click="specDisable()" v-if="list.disabled==false" type="button" class="btn btn-danger btn-sm">禁用</button>
            <button @click="specEnable()" v-if="list.disabled==true" type="button" class="btn btn-success btn-sm">启用</button>
        </td>
    </tr>
</template>
<script type="text/javascript">
    export default{
        props:['list','index','speclength','name','img'],
        methods:{
            specEnable:function(){
                console.log(this.aaalist);
                this.$set('list.disabled',false);
            },
            specDisable:function(){
                this.$set('list.disabled',true);
            }
        },
        data(){
            return{
                sell_price:''
            }
        },
        watch:{
            'sell_price':function(val,oldval){
                console.log(val);
                console.log(oldval);
            }
        },
        created(){
            console.log(this.list);
        },
    }
</script>
