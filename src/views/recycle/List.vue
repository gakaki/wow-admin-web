<template>
    <div class="row">
        <div class="col-md-12">
            <div class="btn-group pull-left">
                <button @click="modalShow('add')" type="button" class="btn btn-default">批量恢复</button>
                <button type="button" class="btn btn-default">批量删除</button>
            </div>
            <div class="pull-right">
                <form class="form-inline">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="商品名称">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="SPU编码">
                    </div>

                    <button type="submit" class="btn btn-primary">查询</button>
                </form>
            </div>
        </div>
    </div>
    {{checkedNames|json}}
    <table class="table order-list table-thead-center table-tbody-center table-hover">
        <thead>
            <tr>
                <th>
                    <input v-model="checkAll" type="checkbox" >
                </th>
                <th>图片</th>
                <th>商品名称</th>
                <th>品牌</th>
                <th>SPU编码</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in list">
                <td>
                    <input v-devchecked="checkAll" type="checkbox" v-bind:value="$index" v-model="checkedNames">
                </td>
                <td>
                    <img src="../../assets/img/file_242_2.jpg" style="width:50px;" alt="" />
                </td>
                <td>
                    <p>
                        <a href="javascript:void(0);">GRASSY小草收纳座</a>
                    </p>
                    <p class="text-muted">
                        SPU：C02356652
                    </p>
                </td>
                <td>
                    Umbra
                </td>
                <td>
                    {{3389*$index+5}}
                </td>
                <td  class="linst-link-group">
                    <a href="#">恢复</a>
                    <a class="link-delete" href="#">删除</a>
                </td>
            </tr>
        </tbody>
    </table>
    <Pager :cur.sync="1" :all.sync='15'></Pager>
</template>
<script type="text/javascript">
    import Pager from '../../components/common/Pager'
    import Vue from 'vue'

    Vue.directive( 'devchecked', function( val ){
        this.el.checked = val;
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            this.el.dispatchEvent(evt);
        }
        else {
            this.el.fireEvent("onchange");
        }
    });

    export default{
        components: {
            Pager
        },
        data(){
            return{
                list:10,
                checkAll : false,
                checkedNames:[],
            }
        }
    }
</script>
