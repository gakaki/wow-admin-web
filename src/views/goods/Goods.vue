

<template>

<div class="well well-sm">
    <div class="row">
        <div class="col-md-12 right-head-search">
            <form class="form-inline">
                <div class="clearfix">
                    <div class="form-group">
                        <label for="exampleInputName2">商品名称</label>
                        <input type="text" class="form-control" placeholder="商品名称">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail2">分类</label>
                        <select class="form-control">
                            <option>一级分类</option>
                            <option>一级分类</option>
                            <option>一级分类</option>
                            <option>一级分类</option>
                            <option>一级分类</option>
                        </select>
                        <select class="form-control">
                            <option>二级分类</option>
                            <option>二级分类</option>
                            <option>二级分类</option>
                            <option>二级分类</option>
                            <option>二级分类</option>
                        </select>
                        <select class="form-control">
                            <option>三级分类</option>
                            <option>三级分类</option>
                            <option>三级分类</option>
                            <option>三级分类</option>
                            <option>三级分类</option>
                        </select>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="form-group">
                        <label for="exampleInputName2">SPU/SKU</label>
                        <input type="text" class="form-control" placeholder="SPU/SKU">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName2">品牌</label>
                        <input type="text" class="form-control" placeholder="品牌">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName2">设计师</label>
                        <input type="text" class="form-control" placeholder="设计师">
                    </div>
                </div>
                <div class="clearfix">
                    <div class="form-group">
                        <label for="exampleInputName2">商品状态</label>
                        <select class="form-control">
                            <option>已上架</option>
                            <option>待上架</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName2">库存状态</label>
                        <select class="form-control">
                            <option>库存充足</option>
                            <option>库存预警</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName2">价格区间</label>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="0">
                            <span class="input-group-addon">.00</span>
                        </div>
                        －
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="0">
                            <span class="input-group-addon">.00</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName2"></label>
                        <div class="btn-group">
                            <button class="btn btn-primary">查询</button>
                            <button class="btn btn-default">重置</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="btn-group pull-left">
            <button type="button" class="btn btn-default">上架</button>
            <button type="button" class="btn btn-default">下架</button>
            <button type="button" class="btn btn-default">导出Excel</button>
            <button type="button" class="btn btn-default">删除</button>
        </div>
        <div class="btn-group pull-right">
            <button class="btn btn-primary">商品视图</button>
            <button class="btn btn-default">SKU视图</button>
        </div>
    </div>
</div>
<table class="table order-list table-thead-center table-tbody-center">
    <thead>
        <tr>
            <th>
                <input type="checkbox" value="1077" name="1077name1">
            </th>
            <th>图片</th>
            <th>商品名称</th>
            <th>品牌</th>
            <th>售价</th>
            <th>库存</th>
            <th>销量</th>
            <th>访问量</th>
            <th>喜欢</th>
            <th>发布时间</th>
            <th>商品状态</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in list">
            <td>
                <input type="checkbox" value="1077" name="1077name1">
            </td>
            <td>
                <img src="http://admindemo.dev.wowdsgn.com/images/%E5%95%86%E5%93%81%E7%AE%A1%E7%90%86_%E5%95%86%E5%93%81%E8%A7%86%E5%9B%BE/u64.png" style="width:50px;" alt="" />
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
                {{2269*$index+5}}~{{3389*$index+5}}
            </td>
            <td>
                <span v-bind:class="{ 'text-danger': $index <= 3}">{{$index}}</span>
            </td>
            <td>
                40
            </td>
            <td>
                PV：2435<br />UV：876
            </td>
            <td>
                220
            </td>
            <td>
                2016-05-03 06:12:35
            </td>
            <td>
                <span v-if="$index <=3" class="text-success">已上架</span>
                <span v-if="$index > 3" class="text-danger">待上架</span>
            </td>
            <td>
                <a href="#">编辑</a>
                <a href="#">删除</a>
            </td>
        </tr>
    </tbody>
</table>
<Pager :cur.sync="1" :all.sync='5'></Pager>

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
