<style>
    .category-box-head, .category-box-head *{
        display: inline-block;
    }
    .category-box-head p{
        margin: 0px;
    }
    .category-img{
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        padding: 5px;
        border-radius: 5px;
    }
    .category-box-head img{
        margin: 0px 5px;
    }
    .category-box-name{
        cursor:pointer;
    }
    .category-box-head a{
        margin-left: 20px;
    }
    .category-box{
        border: 0px;
        border-left: 1px solid #e9e9e9;
    }
    .category-main{
        margin-top: 10px;
    }
    .category-main-head{
        background: #f7f7f7;
        border: 1px solid #e9e9e9;
    }
    .category-main-head ul, .category-main-box ul{
        width: 100%;
        font-size: 0px;
        vertical-align:middle;
        display: inline-block;
    }
    .category-main-box ul{
        border-bottom: 1px solid #e9e9e9;
        border-left: 1px solid #e9e9e9;
    }
    .category-list li{
        display: inline-block;
        vertical-align:middle;
        width: 15%;
        font-size: 14px;
        padding: 10px;
        text-align: center;
        border-right:1px solid #e9e9e9;
    }
    .category-list:hover{
        background: #f9f9f9;
    }
    .category-main-head li{
        border: 0px;
    }
    .category-list li:first-child{
        width: 30%;
        text-align: left;
    }
    .category-list li:last-child{
        width: 25%;
    }
    .category-list li:last-child a{
        margin: 5px;
        padding: 0px;
        display: inline;
    }
    .category-main-box-son ul+ul li:first-child{
        text-align: center;
    }
    .category-list-one li+li{
        padding:25px 10px;
    }
    .category-select-box{
        position: absolute;
        background: #fff;
        z-index: 5;
        border: 1px solid #ddd;
        width: 90%;
        height: 200px;
        overflow: scroll;
        padding: 5px;
    }
</style>
<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="btn-group pull-left">
                    <button @click="modalShow('add')" type="button" class="btn btn-default">新增分类</button>
                    <button type="button" class="btn btn-default">导出Excel</button>
                </div>
                <div class="pull-right">
                    <form class="form-inline">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="分类名称">
                        </div>
                        <button type="submit" class="btn btn-primary">搜索</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="category-main">
            <div class="category-main-head">
                <ul class="category-list">
                    <li>
                        分类名称
                    </li>
                    <li>
                        商品数量
                    </li>
                    <li>
                        商品总销量
                    </li>
                    <li>
                        喜欢
                    </li>
                    <li>
                        操作
                    </li>
                </ul>
            </div>
            <Categorypanel v-for="item in list | orderBy 'sort' 1" :list="list[$index]" :isopen="false"></Categorypanel>
        </div>
        <Categorymodal :categoryid="" :categorymodalshow.sync="showmodal" :modaltitle="modaltitle"></Categorymodal>
    </div>
</template>

<script type="text/javascript">
    import Categorypanel        from    './Categorypanel'
    import Categorymodal        from    './Categorymodal'
    export default{
        data(){
            return{
                showmodal               :   false,
                modaltitle              :   '新增分类',
                list:[
                    {
                        icon:'http://o7s1lyy5h.bkt.clouddn.com/2016_06_23_newuser/index/icon-suning.png',
                        name:'客厅卧室',
                        number:200,
                        totalSales:100,
                        like:500,
                        sort:'0',
                        id:'0',
                        son:[
                            {
                                name:'沙发和扶手椅',
                                number:100,
                                totalSales:50,
                                like:120,
                                sort:'0',
                                id:'1',
                                son:[
                                    {
                                        name:'沙发',
                                        number:50,
                                        totalSales:50,
                                        like:120,
                                        sort:'3',
                                        id:'2',
                                        clone:false,
                                        relationArr:['90'],
                                    },
                                    {
                                        name:'沙发椅',
                                        number:23,
                                        totalSales:122,
                                        like:200,
                                        sort:'1',
                                        id:'3',
                                        clone:false,
                                        relationArr:[],
                                    },
                                    {
                                        name:'躺椅',
                                        number:23,
                                        totalSales:123,
                                        like:90,
                                        sort:'2',
                                        id:'4',
                                        clone:false,
                                        relationArr:[],
                                    }
                                ]
                            },
                            {
                                name:'桌椅',
                                number:300,
                                totalSales:270,
                                like:320,
                                sort:'1',
                                id:'5',
                                relation:false,
                                relationArr:[],
                                son:[
                                    {
                                        name:'凳子',
                                        number:150,
                                        totalSales:350,
                                        like:1220,
                                        sort:'0',
                                        id:'25',
                                        clone:false,
                                        relationArr:[],
                                    },
                                    {
                                        name:'沙发',
                                        number:50,
                                        totalSales:50,
                                        like:120,
                                        sort:'1',
                                        id:'2',
                                        clone:true,
                                        relationArr:['90'],
                                    }
                                ]
                            },{
                                name:'测试标题',
                                number:100,
                                totalSales:50,
                                like:120,
                                sort:'2',
                                id:'2',
                                son:[
                                    {
                                        name:'凳子',
                                        number:150,
                                        totalSales:350,
                                        like:1220,
                                        sort:'0',
                                        id:'25',
                                        clone:false,
                                        relationArr:[],
                                    },
                                    {
                                        name:'沙发',
                                        number:50,
                                        totalSales:50,
                                        like:120,
                                        sort:'1',
                                        id:'2',
                                        clone:true,
                                        relationArr:['90'],
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        icon:'http://o7s1lyy5h.bkt.clouddn.com/logo.png',
                        name:'厨房用品',
                        number:200,
                        totalSales:100,
                        like:500,
                        sort:'1',
                        id:'1',
                        son:[
                            {
                                name:'沙发和扶手椅',
                                number:100,
                                totalSales:50,
                                like:120,
                                sort:'1',
                                id:'1',
                                son:[
                                    {
                                        name:'沙发',
                                        number:50,
                                        totalSales:50,
                                        like:120,
                                        sort:'0',
                                        id:'2',
                                        clone:false,
                                        relationArr:['90'],
                                    },
                                    {
                                        name:'沙发椅',
                                        number:23,
                                        totalSales:122,
                                        like:200,
                                        sort:'1',
                                        id:'3',
                                        clone:false,
                                        relationArr:[],
                                    },
                                    {
                                        name:'躺椅',
                                        number:23,
                                        totalSales:123,
                                        like:90,
                                        sort:'2',
                                        id:'4',
                                        clone:false,
                                        relationArr:[],
                                    }
                                ]
                            },
                            {
                                name:'桌椅',
                                number:300,
                                totalSales:270,
                                like:320,
                                sort:'0',
                                id:'5',
                                relation:false,
                                relationArr:[],
                                son:[
                                    {
                                        name:'凳子',
                                        number:150,
                                        totalSales:350,
                                        like:1220,
                                        sort:'0',
                                        id:'25',
                                        clone:false,
                                        relationArr:[],
                                    },
                                    {
                                        name:'沙发',
                                        number:50,
                                        totalSales:50,
                                        like:120,
                                        sort:'1',
                                        id:'2',
                                        clone:true,
                                        relationArr:['90'],
                                    }
                                ]
                            }
                        ]
                    },{
                        icon:'http://o7s1lyy5h.bkt.clouddn.com/p1-11.png',
                        name:'儿童玩具',
                        number:200,
                        totalSales:100,
                        like:500,
                        sort:'2',
                        id:'1',
                    }
                ]
            }
        },
        components:{
            Categorypanel,
            Categorymodal
        },
        methods:{
            modalShow:function(data){
                this.$set('showmodal',true);
            }
        },
        ready(){
        }
    }
</script>
