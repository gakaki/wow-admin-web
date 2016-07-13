<style media="screen">
    .CategoryAttrSet-left{
        width: 200px;
        margin-bottom: -10000px;
        padding-bottom: 10000px;
        border-right:1px solid #ccc;
        padding-right: 10px;
    }
    .CategoryAttrSet-right{
        left: 230px;
        top: 0px;
        position:absolute;
    }
</style>
<template>
    <div class="row">
        <div class="col-md-12" style="position:relative">
            <div class="pull-left CategoryAttrSet-left">
                <p>
                    <input v-model="searchKey" type="text" class="form-control" placeholder="搜索分类">
                </p>
                <ul class="nav nav-pills nav-stacked text-center">
                    <li v-for="item in list | filterBy searchKey" v-bind:class="{'active':listActive==$index}">
                        <a @click="CategoryAttrSet($index,item.id)" href="javascript:;">{{item.name}}</a>
                    </li>
            </div>
            <div class="CategoryAttrSet-right">
                <p>
                    {{categoryAttrSetId}}
                </p>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
                listActive:0,
                searchKey:'',
                categoryAttrSetId:null,
                list:[
                    {name:'座椅',id:'1'},
                    {name:'沙发',id:'2'},
                    {name:'桌几',id:'3'},
                    {name:'橱柜',id:'4'},
                    {name:'床',id:'5'},
                    {name:'衣帽架',id:'6'},
                    {name:'台灯',id:'7'},
                    {name:'吊灯',id:'8'},
                    {name:'落地灯',id:'9'},
                    {name:'壁灯',id:'10'},
                    {name:'户外灯具',id:'11'}
                ]
            }
        },
        watch:{
            'searchKey':function(val,oldval){
                if (val.length==0) {
                    this.$set('listActive',0);
                    this.firstSelect(this.list[0].id);
                }else {
                    this.$set('listActive',null);
                }
            }
        },
        methods:{
            CategoryAttrSet:function(index,id){
                this.$set('listActive',index);
                this.$set('categoryAttrSetId',id)
                window.scrollTo(0,0);
            },
            firstSelect:function(id){
                this.$set('categoryAttrSetId',id);
                console.log(this.categoryAttrSetId);
            }
        },
        ready(){
            this.firstSelect(this.list[0].id);
        }
    }
</script>
