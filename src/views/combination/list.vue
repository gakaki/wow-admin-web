<template>
    <div class="row">
        <div class="col-md-12">
            <div class="btn-group pull-left">
                <button @click="modalShow('add')" type="button" class="btn btn-default">新增组合商品</button>
            </div>
            <div class="pull-right">
                <form class="form-inline">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="组合名称">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="子商品名称">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="SPU/SKU">
                    </div>

                    <button type="submit" class="btn btn-primary">查询</button>
                </form>
            </div>
        </div>
    </div>

    <table class="table order-list table-thead-center table-tbody-center table-tbody-hover">
        <thead>
            <tr>
                <th style="text-align:left;">组合商品</th>
                <th style="text-align:left;">子商品</th>
                <th>发布时间</th>
                <th>商品状态</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody v-for="item in skuArrView">
            <tr v-for="items in item.list">
                <td v-if="$index==0" v-bind:rowspan="item.list.length">
                    <img class="pull-left" src="../../assets/img/file_242_2.jpg" style="margin-right:5px; width:60px; " alt="" />
                    <span class="pull-left text-left">
                        <p>
                            <a href="javascript:void(0);">钻石系列︱高杯酒具</a>
                        </p>
                        <p class="text-muted">SPU：C02356652</p>
                    </span>
                </td>
                <td>
                    <img class="pull-left" src="../../assets/img/file_242_2.jpg" style="margin-right:5px; width:50px;" alt="" />
                    <span class="pull-left text-left">
                        <p>
                            <a href="javascript:void(0);">钻石系列︱高杯酒具</a>
                        </p>
                        <p class="text-muted">SPU：C02356652</p>
                    </span>
                    <p class="pull-right" style="margin-top:20px;">
                        x{{$index}}
                    </p>
                </td>
                <td v-if="$index==0" v-bind:rowspan="item.list.length">
                    2016-05-03 06:12:35
                </td>
                <td v-if="$index==0" v-bind:rowspan="item.list.length">
                    <span v-if="$index <=3" class="text-success">已上架</span>
                    <span v-if="$index > 3" class="text-danger">待上架</span>
                </td>
                <td class="linst-link-group" v-if="$index==0" v-bind:rowspan="item.list.length">
                    <a href="#">下架</a>
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
        components:{
            Pager
        },
        data(){
            return{
                skuArrView:[
                    {
                        list:[1,2,3]
                    },
                    {
                        list:[1,2]
                    },
                    {
                        list:[1,2,3,4,5]
                    },
                    {
                        list:[1,2,3,4,5,6,7]
                    },
                    {
                        list:[1]
                    },
                    {
                        list:[1,2,3]
                    },
                    {
                        list:[1,2,3,4]
                    }
                ]
            }
        }
    }
</script>
