

<template>

<div class="row">
    <div class="col-md-12">
        <div class="btn-group pull-left">
            <button type="button" class="btn btn-default">新增设计师</button>
            <button type="button" class="btn btn-default">导出Excel</button>
        </div>
        <div class="pull-right">
            <form class="form-inline">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="设计师姓名">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="国籍">
                </div>
                <button type="submit" class="btn btn-primary">搜索</button>
            </form>
        </div>
    </div>
</div>

<table class="table order-list table-thead-center table-tbody-center">
    <thead>
        <tr>
            <th>设计师姓名</th>
            <th>照片</th>
            <th>国籍</th>
            <th>商品数量</th>
            <th>商品总销量</th>
            <th>喜欢</th>
            <th>排序</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in list">
            <td>
                <a href="#">Richard Brendon</a>
            </td>
            <td>
                <img src="../../assets/img/logo__1.jpg" style="width:50px;" alt="" />
            </td>
            <td>
                英国
            </td>
            <td>
                126
            </td>
            <td>
                57
            </td>
            <td>
                219
            </td>
            <td>
                90
            </td>
            <td class="linst-link-group">
                <a href="#">编辑</a>
                <a class="link-delete" href="#">删除</a>
            </td>
        </tr>
    </tbody>
</table>
<Pager :cur.sync="1" :all.sync='15'></Pager>

</template>

<script type="text/javascript">
    import Pager from '../../components/common/Pager'
    export default{
        data(){
            return{
                list:10
            }
        },
        components:{
            Pager
        }
    }
</script>
