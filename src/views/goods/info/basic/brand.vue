<template>
    {{brandid}}
    <v-select :value.sync="selected" :on-change="setSelect" label="brandCname" :debounce="500" placeholder="搜索品牌" :options="brandlist"></v-select>
</template>
<script type="text/javascript">
    import vSelect from '../../../../components/common/vue-select/src/index.js'
    export default{
        props:['brandlist','brandid'],
        components:{
            vSelect
        },
        data(){
            return{
                selected:{},
            }
        },
        methods:{
            setSelect:function(val){
                /**
                 * 用户选择品牌之后，给对应的品牌id赋值
                 */
                this.$set('brandid',val.id)
            }
        },
        watch:{
            'brandid':function(){
                /**
                 * 监控品牌id变化
                 * 如果品牌id有变化，就在品牌list数组里面查找对应的id并且赋值
                 * find()方法返回数组中满足某个条件的一个值
                 */
                let findBrand = (value,index,array) => {
                    if (value.id==this.brandid) {
                        return value;
                    }
                };
                this.$set('selected',this.brandlist.find(findBrand))
            }
        }
    }
</script>
