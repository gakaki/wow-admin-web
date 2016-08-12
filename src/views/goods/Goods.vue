<template>
<spinner id="spinner-box" :size="spinnerSize" :fixed="spinnerFixed" :text="spinnerText" ></spinner>
<div class="well well-sm" style="position:relative;">
    <div style="position:absolute; right:0px; left:0px; top:0px; bottom:0px; background:#fff; opacity:.5; z-index:9;">

    </div>
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
<pre class="bg-danger" style="font-weight:bold;">
    搜索条件暂不可用<br />
    商品的库存／销量 现在是假的数据<br />
    商品编辑功能，正在开发
</pre>
<div class="row">
    <div class="col-md-12">
        <div class="btn-group pull-left">
            <button disabled="disabled" type="button" class="btn btn-default">上架</button>
            <button disabled="disabled" type="button" class="btn btn-default">下架</button>
            <button disabled="disabled" type="button" class="btn btn-default">导出Excel</button>
            <button disabled="disabled" type="button" class="btn btn-default">删除</button>
        </div>
        <div class="btn-group pull-right">
            <button disabled="disabled" @click="listView='spu'" v-bind:class="{'btn-primary':listView=='spu'}" class="btn btn-default">SPU视图</button>
            <button disabled="disabled" @click="listView='sku'" v-bind:class="{'btn-primary':listView=='sku'}" class="btn btn-default">SKU视图</button>
        </div>
    </div>
</div>
<!-- <table class="table order-list table-thead-center table-tbody-center table-hover" v-if="listView=='spu'">
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
            <td  class="linst-link-group">
                <a href="#">编辑</a>
                <a class="link-delete" href="#">删除</a>
            </td>
        </tr>
    </tbody>
</table> -->
<table class="table order-list table-thead-center table-tbody-center table-tbody-hover" v-if="listView=='sku'">
    <thead>
        <tr>
            <th>图片</th>
            <th>商品名称</th>
            <th>品牌</th>
            <th>规格</th>
            <th>SKU</th>
            <th>售价</th>
            <th>库存</th>
            <th>销量</th>
            <th>商品状态</th>
            <th>发布时间</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody v-for="item in vuex_getProductList.data.productListPageVo">
        <tr v-for="items in item.productListVo">
            <td v-if="$index==0" v-bind:rowspan="item.productListVo.length">
                <img v-bind:src="item.productPageVo.productImg" style="width:50px;" alt="" />
            </td>
            <td v-if="$index==0" v-bind:rowspan="item.productListVo.length">
                <p>
                    id：{{item.productPageVo.productId}}
                </p>
                <p>
                    <a href="#">{{item.productPageVo.productName}}</a>
                </p>
            </td>
            <td v-if="$index==0" v-bind:rowspan="item.productListVo.length">
                {{item.productPageVo.brandName}}
            </td>
            <td>
                {{items.specName}}
            </td>
            <td>
                {{items.productCode}}
            </td>
            <td>
                {{items.sellPrice}}
            </td>
            <td>
                <span v-bind:class="{ 'text-danger': $index <= 3}">{{$index}}</span>
            </td>
            <td>
                220
            </td>
            <td>
                <span v-if="items.productStatus==1" class="text-success">已上架</span>
                <span v-if="items.productStatus==2" class="text-danger">待上架</span>
            </td>
            <td v-if="$index==0" v-bind:rowspan="item.productListVo.length">
                2016-05-03 06:12:35
            </td>
            <td  class="linst-link-group" v-if="$index==0" v-bind:rowspan="item.productListVo.length">
                <a class="btn" v-link='{ path: "/goods/list/details/"+item.productPageVo.productId}'>编辑</a>
                <vs-popover position="top">
                    <a @click="popoverHide" class=" link-delete" href="javascript:void(0);">删除</a>
                    <div slot="content" class="text-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-warning" @click='deleteData(item.productPageVo.productId)'>确认</button>
                            <button @click="popoverHide" type="button" class="btn btn-sm btn-default">取消</button>
                        </div>
                    </div>
                </vs-popover>
            </td>
        </tr>
    </tbody>
</table>
<Pager :totalresult="totalResult" :cur.sync="1" :all.sync='totalPage' @btn-click="listen"></Pager>

</template>

<script type="text/javascript">
    import Pager                from    '../../components/common/Pager'
    import {getProductList}     from    '../../vuex/getters.js'
    import {setProductList}     from    '../../vuex/actions.js'
    import spinner              from    '../../components/common/spinner/Spinner';
    import WebStorageCache      from    'web-storage-cache'
    import vsPopover            from    '../../components/common/popover/Popover'
    import {API_ROOT}           from    '../../config'

    export default{
        data(){
            return{
                list:10,
                pageSize:10,
                listView:'sku',
                totalPage:'',
                totalResult:'',
                search:{
                },
                spinnerFixed:false,
                spinnerText:'数据加载中...'
            }
        },
        components:{
            Pager,
            spinner,
            vsPopover
        },
        vuex:{
            getters:{
                vuex_getProductList:getProductList
            },
            actions:{
                vuex_setProductList:setProductList
            }
        },
        methods:{
            // 删除商品
            deleteData: function(id) {
                this.$broadcast('show::spinner');
                this.$set('spinnerFixed',true);
                this.$set('spinnerText','正在删除商品');
                let jsontext=JSON.stringify({productId:id});
                this.$http.post(API_ROOT+'v1/product/delete',{paramJson:jsontext}).then((response) => {
                    if (response.data.resCode==0) {
                        this.popoverHide();
                        this.$broadcast('hide::spinner');
                    }else {
                        alert('删除失败')
                    }
                }, (response) => {
                    alert('网络错误')
                });
            },
            popoverHide: function() {
                this.$broadcast('hide::popover');
            },

            showloading:function(){
                this.$broadcast('show::spinner');
            },
            listen: function(data) {
                //商品列表分页点击后的回调
                this.vuex_setProductList(this.getSearchObj(data));
            },
            getSearchObj: function(page){
                this.showloading();
                /**
                 * 根据用户选择或者输入的搜索条件，然后return出去
                 * 需要根据接口的搜索条件做一些字段过滤，比如为空或者不选的，return出去的obj过滤掉对应的属性
                 * 参数data是传进来的页码，如果是第一次刚进入页面的时候，传1
                 * 通过listen监听点击的分页按钮，传回对应的值，达到分页效果
                 */
                var seacrObj=JSON.parse(JSON.stringify(this.search));
                seacrObj.currentPage=page;
                seacrObj.pageSize=this.pageSize;
                return seacrObj;
            }
        },
        ready: function() {
            this.vuex_setProductList(this.getSearchObj(1));
        },
        watch:{
            /**
             * vuex_getProductList是从vuex里面取的值
             * 服务端为了减轻压力，返回的分页总条数，只会在第一页返回
             * 所以需要监听vuex_getProductList数据的变化，判断返回的总页数是否为0
             * 如果为0不做操作，如果不为0，则把总页数设置到本地存储数据里面
             * 取的时候，通过WebStorageCache（封装好的HTML5 LocalStorage）去取
             */
            'vuex_getProductList':function(val,oldval){
                let wsCache = new WebStorageCache();
                if (this.vuex_getProductList.data.totalPage!=0) {
                    let wsCache = new WebStorageCache();
                    wsCache.set('productListTotalPage', this.vuex_getProductList.data.totalPage);
                    wsCache.set('productListTotalResult', this.vuex_getProductList.data.totalResult);
                }
                this.$set('totalResult',wsCache.get('productListTotalResult'));
                this.$set('totalPage',wsCache.get('productListTotalPage'));
                this.$broadcast('hide::spinner');
            }
        }
    }
</script>
