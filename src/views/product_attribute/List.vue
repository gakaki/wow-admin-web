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
</style>
<template>
    <div class="attribute_box">
        <div class="row">
            <div class="col-md-12">
                <div>
                    <ul class="nav nav-tabs">
                       <li v-bind:class="{'active':$index==tablisttag}" v-for="item in tablist">
                           <a @click="tabcall($index,item.value)" href="javascript:;">{{item.name}}</a>
                       </li>
                    </ul>
                </div>
                <div class="btn-group attribute_head_left">
                    <button @click="addshowmodal=true" type="button" class="btn btn-default">新增属性</button>
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
        <table class="table order-list table-thead-center table-tbody-center table-hover">
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
                <tr v-for="item in list">
                    <td>
                        {{item.code}}
                    </td>
                    <td>
                        {{item.name}}
                    </td>
                    <td>
                        {{item.type}}
                    </td>
                    <td>
                        <span v-if="item.required==1">是</span>
                        <span v-if="item.required==0">否</span>
                    </td>
                    <td>
                        <span v-if="item.disabled==1" class="text-success">启用</span>
                        <span v-if="item.disabled==0" class="text-danger">禁用</span>
                    </td>
                    <td class="linst-link-group">
                        <a href="javascript:;">
                            编辑
                        </a>
                        <a class="link-delete" href="javascript:;">
                            删除
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
        <Pager :cur.sync="1" :all.sync='15'></Pager>
        <Addattribute :attributeObj="attributeObj" :addshowmodal.sync="addshowmodal"></Addattribute>
    </div>
</template>

<script type="text/javascript">
    import Pager        from '../../components/common/Pager'
    import Addattribute from './Addattribute'
    import {attribute} from './Model.js'
    export default{
        components:{
            Pager,
            Addattribute
        },
        data(){
            return{
                attributeObj:attribute,
                addshowmodal:false,
                tablist:[
                    {name:'自定义属性',value:'http://baidu.com'},
                    {name:'通用属性',value:'http://www.163.com'}
                ],
                tablisttag:0,
                list:[
                    {
                        id:'1',
                        code:'attribute_code',
                        name:'属性名称',
                        type:'文本',
                        required:0,
                        disabled:0
                    },
                    {
                        id:'2',
                        code:'attribute_code2',
                        name:'属性名称2',
                        type:'文本2',
                        required:0,
                        disabled:0
                    }
                ]
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
