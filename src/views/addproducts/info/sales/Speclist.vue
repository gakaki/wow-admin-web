<style media="screen">
    .spec-disabled td+td+td{
        background: #f9f9f9;
    }
    .spec-disabled:nth-child(n+2) td{
        background: #f9f9f9;
    }
</style>
<template>
    <tr v-if="list.selected==true" v-bind:class="{'spec-disabled':lists.disabled==true}">
        <td v-if="index==0" v-bind:rowspan="speclength">
            <Color-img :id="tbody_index" :imgsrc="img"></Color-mg>
        </td>
        <td v-if="index==0" v-bind:rowspan="speclength">
            {{name}}
        </td>
        <td>
            {{list.spec}}
        </td>
        <td>
            <input @keyup="setVal(tbody_index,index,sell_price,'sell_price') | debounce 500" v-bind:disabled="lists.disabled==true" v-model="sell_price" type="text" class="form-control sales-attribute-table-text" placeholder="0" >
        </td>
        <td>
            <input @keyup="setVal(tbody_index,index,activity_price,'activity_price') | debounce 500" v-bind:disabled="lists.disabled==true" v-model="activity_price" type="text" class="form-control sales-attribute-table-text" placeholder="0">
        </td>
        <td>
            <input @keyup="setVal(tbody_index,index,cost_price,'cost_price') | debounce 500" v-bind:disabled="lists.disabled==true" v-model="cost_price" type="text" class="form-control sales-attribute-table-text" placeholder="0">
        </td>
        <td>
            <input @keyup="setVal(tbody_index,index,arrivalPeriod,'arrivalPeriod') | debounce 500" v-bind:disabled="lists.disabled==true" v-model="arrivalPeriod" type="text" class="form-control sales-attribute-table-text" placeholder="0">
        </td>
        <td>
            <input @keyup="setVal(tbody_index,index,weight,'weight') | debounce 500" v-bind:disabled="lists.disabled==true" v-model="weight" type="text" class="form-control sales-attribute-table-text" placeholder="0">
        </td>
        <td>
            <button @click="specDisable()" v-if="lists.disabled==false" type="button" class="btn btn-danger btn-sm">禁用</button>
            <button @click="specEnable()" v-if="lists.disabled==true" type="button" class="btn btn-success btn-sm">启用</button>
        </td>
    </tr>
</template>
<script type="text/javascript">
    import {productSalesAttribute} from '../../model'
    import ColorImg from './Color_img'
    export default{
        props:['list','index','speclength','name','img','tbody_index','spec_index','lists','spec_select_length'],
        components:{
            ColorImg
        },
        data(){
            return{
                sell_price:'',
                activity_price:'',
                cost_price:'',
                weight:'',
                arrivalPeriod:'',
            }
        },
        methods:{
            specEnable:function(){
                this.$set('lists.disabled',false);
            },
            specDisable:function(){
                this.$set('lists.disabled',true);
            },
            setVal:function(tbody_index,spec_index,val,name){
                productSalesAttribute.color[tbody_index].specListVal[spec_index][name]=val;
            }
        }
    }
</script>
