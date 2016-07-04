<style>
    .attribute_head_left{
        position: absolute;
        left: 240px;
        top: 0px;
    }
    .attribute_head_right{
        position: absolute;
        right: 15px;
        top: 0px;
    }
    .attribute_box table td a{
        margin: 5px 10px;
        padding: 0px;
        display: inline;
    }
</style>
<template>
    <div class="attribute_box">
        <div class="row">
            <div class="col-md-12">
                <ul class="nav nav-tabs">
                   <li v-bind:class={'active':$index==tablisttag} v-for="item in tablist">
                       <a @click="tabcall($index,item.value)" href="javascript:;">{{item.name}}</a>
                   </li>
                </ul>
                <div class="btn-group attribute_head_left">
                    <button type="button" class="btn btn-default">新增分类</button>
                </div>
                <div class="attribute_head_right">
                    <form class="form-inline">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="代码或属性名称">
                        </div>
                        <button type="submit" class="btn btn-primary">搜索</button>
                    </form>
                </div>
            </div>
        </div>
        <table class="table order-list table-thead-center table-tbody-center">
            <thead>
                <tr>
                    <td>
                        代码
                    </td>
                    <td>
                        属性名称
                    </td>
                    <td>
                        字段类型
                    </td>
                    <td>
                        是否必填
                    </td>
                    <td>
                        状态
                    </td>
                    <td>
                        操作
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        attribute_code
                    </td>
                    <td>
                        属性名称
                    </td>
                    <td>
                        文本
                    </td>
                    <td>
                        是
                    </td>
                    <td>
                        <span class="text-success">启用</span>
                    </td>
                    <td>
                        <a href="javascript:;">
                            <span class="glyphicon glyphicon-edit"></span>编辑
                        </a>
                        <a href="javascript:;">
                            <span class="glyphicon glyphicon-minus"></span>删除
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        attribute_code
                    </td>
                    <td>
                        属性名称
                    </td>
                    <td>
                        文本
                    </td>
                    <td>
                        是
                    </td>
                    <td>
                        <span class="text-danger">禁用</span>
                    </td>
                    <td>
                        <a href="javascript:;">
                            <span class="glyphicon glyphicon-edit"></span>编辑
                        </a>
                        <a href="javascript:;">
                            <span class="glyphicon glyphicon-minus"></span>删除
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return{
                tablist:[
                    {name:'自定义属性',value:'http://baidu.com'},
                    {name:'通用属性',value:'http://www.163.com'}
                ],
                tablisttag:0,
            }
        },
        methods:{
            tabcall:function(index,url){
                this.$set('tablisttag',index);
                console.log(index);
                console.log(url);
            }
        }
    }
</script>
