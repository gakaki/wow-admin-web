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
</style>
<template>

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
        <div class="category-main-box" v-for="item in list | orderBy 'sort' 1">
            <ul class="category-list category-list-one">
                <li>
                    <div class="category-box-head">
                        {{item.sort}}
                        <p class="category-box-name">
                            <span class="glyphicon glyphicon-chevron-down"></span>
                            <img class="category-img" v-bind:src=item.icon alt="" />
                            {{item.name}}
                        </p>
                        <a href="javascript:;">新增子分类+</a>
                    </div>
                </li>
                <li>{{item.number}} </li>
                <li>{{item.totalSales}}</li>
                <li>{{item.like}}</li>
                <li>
                    <a v-bind:class="{'btn disabled':$index==0}" href="javascript:;" @click="listUp([item.sort])">
                        <span class="glyphicon glyphicon-chevron-up"></span>上移
                    </a>
                    <a v-bind:class="{'btn disabled':$index==list.length-1}" href="javascript:;" @click="listDown([item.sort])">
                        <span class="glyphicon glyphicon-chevron-down"></span>下移
                    </a>
                    <a @click="modalShow()" href="javascript:;">
                        <span class="glyphicon glyphicon-edit"></span>编辑
                    </a>
                    <a href="javascript:;">
                        <span class="glyphicon glyphicon-minus"></span>删除
                    </a>
                </li>
            </ul>
            <div class="category-main-box-son" v-for="items in item.son | orderBy 'sort' 1">
                <ul class="category-list">
                    <li>
                        <div class="category-box-head" style="margin-left:30px;">
                            {{items.sort}}
                            <p class="category-box-name">
                                <span class="glyphicon glyphicon-chevron-down"></span>
                                {{items.name}}
                            </p>
                            <a href="javascript:;">新增子分类+</a>
                        </div>
                    </li>
                    <li>{{items.number}}</li>
                    <li>{{items.totalSales}}</li>
                    <li>{{items.like}}</li>
                    <li>
                        <a v-bind:class="{'btn disabled':$index==0}" href="javascript:;" @click="listUp([item.sort])">
                            <span class="glyphicon glyphicon-chevron-up"></span>上移
                        </a>
                        <a v-bind:class="{'btn disabled':$index==item.son.length-1}" href="javascript:;" @click="listDown([item.sort])">
                            <span class="glyphicon glyphicon-chevron-down"></span>下移
                        </a>
                        <a @click="modalShow()" href="javascript:;">
                            <span class="glyphicon glyphicon-edit"></span>编辑
                        </a>
                        <a href="javascript:;">
                            <span class="glyphicon glyphicon-minus"></span>删除
                        </a>
                    </li>
                </ul>
                <ul class="category-list" v-for="itemss in items.son | orderBy 'sort' 1">
                    <li v-bind:class="{ 'text-danger': itemss.clone == true}">{{itemss.sort}}{{itemss.name}}</li>
                    <li v-bind:class="{ 'text-danger': itemss.clone == true}">{{itemss.number}}</li>
                    <li v-bind:class="{ 'text-danger': itemss.clone == true}">{{itemss.totalSales}}</li>
                    <li v-bind:class="{ 'text-danger': itemss.clone == true}">{{itemss.like}}</li>
                    <li>
                        <span v-if="itemss.clone==false">
                            <a v-bind:class="{'btn disabled':$index==0}" href="javascript:;" @click="listUp([item.sort])">
                                <span class="glyphicon glyphicon-chevron-up"></span>上移
                            </a>
                            <a v-bind:class="{'btn disabled':$index==items.son.length-1}" href="javascript:;" @click="listDown([item.sort])">
                                <span class="glyphicon glyphicon-chevron-down"></span>下移
                            </a>
                            <a @click="modalShow()" href="javascript:;">
                                <span class="glyphicon glyphicon-edit"></span>编辑
                            </a>
                            <a href="javascript:;">
                                <span class="glyphicon glyphicon-minus"></span>删除
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <modal :show.sync="showmodal">
        <h4 slot="header" class="modal-title">{{modaltitle}}</h4>
        <button slot="close" type="button" class="close" @click="showmodal=false">&times;</button>
        <div slot="body">
            <form class="form-horizontal" role="form">
                <div class="form-group">
                    <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>分类名称</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" placeholder="数字、英文和汉字，1-20个字">
                    </div>
                    <span class="col-sm-4 control-label">
                        <div class="text-left text-muted">数字、英文和汉字，1-20个字</div>
                    </span>
                </div>
                <div class="form-group">
                    <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>父分类</label>
                    <div class="col-sm-5">
                        <input type="text" class="form-control" placeholder="数字、英文和汉字，1-20个字">
                    </div>
                    <span class="col-sm-5 control-label">
                        <div class="text-left text-muted">顶级分类请选择 - 无 -</div>
                    </span>
                </div>
                <div class="form-group">
                    <label for="firstname" class="col-sm-2 control-label"><span class="text-danger"></span>虚拟父分类</label>
                    <div class="col-sm-5">
                        <input type="text" class="form-control" placeholder="数字、英文和汉字，1-20个字">
                    </div>
                    <span class="col-sm-5 control-label" style="text-align:left;">
                        <em class="icon-box-sm">
                            <i class="glyphicon glyphicon-plus"></i>
                        </em>
                        <em class="icon-box-sm text-danger">
                            <i class="glyphicon glyphicon-remove"></i>
                        </em>
                    </span>
                </div>
                <div class="form-group">
                    <label for="lastname" class="col-sm-2 control-label"><span class="text-danger">*</span>LOGO</label>
                    <div class="col-sm-2">
                        <div id="brand-pic-button">
                            <a style="margin-bottom:5px" class="btn btn-success" id="pickfiles" href="#">
                                <span>选择图片</span>
                            </a>
                        </div>
                        <div>
                            <img style="max-width:150px; border: 1px solid #e0e0e0; padding:5px;" v-show="brandpic!=null" v-bind:src="brandpic" alt="" />
                        </div>
                    </div>
                    <span class="col-sm-8 control-label">
                        <div class="text-left text-muted">请上传 png 格式图片，图片尺寸 ××××××</div>
                    </span>
                </div>
                <div class="form-group">
                    <label for="lastname" class="col-sm-2 control-label">是否显示</label>
                    <div class="col-sm-3">
                        <label class="checkbox-inline">
                            <input type="radio" name="optionsRadiosinline" value="option1" checked> 显示
                        </label>
                        <label class="checkbox-inline">
                            <input type="radio" name="optionsRadiosinline" value="option2"> 隐藏
                        </label>
                    </div>
                    <span class="col-sm-4 control-label">
                        <div class="text-left text-muted">有商品关联时不能隐藏分类</div>
                    </span>
                </div>
            </form>
        </div>
        <div slot="footer">
            <button @click="categorySave" type="button" class="btn btn-primary expressButton">保存</button>
        </div>
    </modal>
</template>

<script type="text/javascript">
    import Modal from '../../components/common/Modal'
    export default{
        data(){
            return{
                showmodal:false,
                modaltitle:'新增分类',
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
                        icon:'http://o7s1lyy5h.bkt.clouddn.com/2016_06_23_newuser/index/icon-suning.png',
                        name:'客厅卧室1111',
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
                        icon:'http://o7s1lyy5h.bkt.clouddn.com/2016_06_23_newuser/index/icon-suning.png',
                        name:'客厅卧室1111',
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
            Modal
        },
        methods:{
            listUp:function(data){
                console.log('上移');
                console.log(data);
                //this.list[0].sort=2;
            },
            listDown:function(data){
                console.log('下移')
            },
            modalShow:function(data){
                this.showmodal=true;
                if (data=='add') {
                    console.log('新增');
                    this.modaltitle='新增分类'
                }else {
                    console.log('编辑');
                    this.modaltitle='编辑分类'
                }
            },
            categorySave:function(){
                this.showmodal=false;
            }
        },
        ready(){
            console.log(this.list);
        }
    }
</script>
