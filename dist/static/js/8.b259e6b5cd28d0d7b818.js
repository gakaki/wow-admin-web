webpackJsonp([8,20],{34:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:["cur","all"],computed:{indexs:function(){var t=1,o=this.all,e=[];for(this.all>=11&&(this.cur>5&&this.cur<this.all-4?(t=this.cur-5,o=this.cur+4):this.cur<=5?(t=1,o=10):(o=this.all,t=this.all-9));o>=t;)e.push(t),t++;return e}},methods:{btnClick:function(t){t!=this.cur&&(this.cur=t)}},watch:{cur:function(t,o){this.$dispatch("btn-click",t),window.scrollTo(0,0)}}}},40:function(t,o){t.exports='<div class=text-right> <ul class=pagination> <li v-if="cur!=1"><a @click=cur-->上一页</a></li> <li v-for="index in indexs" v-bind:class="{ \'active\': cur == index}"><a @click=btnClick(index) href=javascript:;>{{ index }}</a></li> <li v-if="cur!=all"><a @click=cur++>下一页</a></li> <li><a>共<i>{{all}}</i>页</a></li> </ul> </div>'},41:function(t,o,e){var i,l;i=e(34),l=e(40),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),l&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=l)},84:function(t,o,e){t.exports=e.p+"static/img/file_242_2.45181cb.jpg"},262:function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var l=e(41),s=i(l);o["default"]={data:function(){return{list:10,listView:"sku",skuArrView:[{name:"名字1",list:[1,2,3]},{name:"名字2",list:[1,2]},{name:"名字3",list:[1,2,3,4,5]},{name:"名字4",list:[1,2,3,4,5,6,7]},{name:"名字5",list:[1]},{name:"名字6",list:[1,2,3]},{name:"名字7",list:[1,2,3,4]}]}},components:{Pager:s["default"]}}},405:function(t,o,e){t.exports='<div class="well well-sm" style=position:relative> <div style="position:absolute; right:0px; left:0px; top:0px; bottom:0px; background:#fff; opacity:.5; z-index:9"> </div> <div class=row> <div class="col-md-12 right-head-search"> <form class=form-inline> <div class=clearfix> <div class=form-group> <label for=exampleInputName2>商品名称</label> <input type=text class=form-control placeholder=商品名称> </div> <div class=form-group> <label for=exampleInputEmail2>分类</label> <select class=form-control> <option>一级分类</option> <option>一级分类</option> <option>一级分类</option> <option>一级分类</option> <option>一级分类</option> </select> <select class=form-control> <option>二级分类</option> <option>二级分类</option> <option>二级分类</option> <option>二级分类</option> <option>二级分类</option> </select> <select class=form-control> <option>三级分类</option> <option>三级分类</option> <option>三级分类</option> <option>三级分类</option> <option>三级分类</option> </select> </div> </div> <div class=clearfix> <div class=form-group> <label for=exampleInputName2>SPU/SKU</label> <input type=text class=form-control placeholder=SPU/SKU> </div> <div class=form-group> <label for=exampleInputName2>品牌</label> <input type=text class=form-control placeholder=品牌> </div> <div class=form-group> <label for=exampleInputName2>设计师</label> <input type=text class=form-control placeholder=设计师> </div> </div> <div class=clearfix> <div class=form-group> <label for=exampleInputName2>商品状态</label> <select class=form-control> <option>已上架</option> <option>待上架</option> </select> </div> <div class=form-group> <label for=exampleInputName2>库存状态</label> <select class=form-control> <option>库存充足</option> <option>库存预警</option> </select> </div> <div class=form-group> <label for=exampleInputName2>价格区间</label> <div class=input-group> <input type=text class=form-control placeholder=0> <span class=input-group-addon>.00</span> </div> － <div class=input-group> <input type=text class=form-control placeholder=0> <span class=input-group-addon>.00</span> </div> </div> <div class=form-group> <label for=exampleInputName2></label> <div class=btn-group> <button class="btn btn-primary">查询</button> <button class="btn btn-default">重置</button> </div> </div> </div> </form> </div> </div> </div> <div class=row> <div class=col-md-12> <div class="btn-group pull-left"> <button type=button class="btn btn-default disabled">上架</button> <button type=button class="btn btn-default disabled">下架</button> <button type=button class="btn btn-default disabled">导出Excel</button> <button type=button class="btn btn-default disabled">删除</button> </div> <div class="btn-group pull-right"> <button @click="listView=\'spu\'" v-bind:class="{\'btn-primary\':listView==\'spu\'}" class="btn btn-default disabled">SPU视图</button> <button @click="listView=\'sku\'" v-bind:class="{\'btn-primary\':listView==\'sku\'}" class="btn btn-default disabled">SKU视图</button> </div> </div> </div> <table class="table order-list table-thead-center table-tbody-center table-tbody-hover" v-if="listView==\'sku\'"> <thead> <tr> <th>图片</th> <th>商品名称</th> <th>品牌</th> <th>规格</th> <th>SKU</th> <th>售价</th> <th>库存</th> <th>销量</th> <th>商品状态</th> <th>发布时间</th> <th>操作</th> </tr> </thead> <tbody v-for="item in skuArrView"> <tr v-for="items in item.list"> <td v-if="$index==0" v-bind:rowspan=item.list.length> <img src='+e(84)+' style=width:50px alt=""/> </td> <td v-if="$index==0" v-bind:rowspan=item.list.length> <p> <a href=javascript:void(0);>{{item.name}}</a> </p> <p class=text-muted> SPU：C02356652 </p> </td> <td> {{$index}} Umbra </td> <td> L </td> <td> {{$index*12932+\'ab\'}} </td> <td> 40 </td> <td> <span v-bind:class="{ \'text-danger\': $index <= 3}">{{$index}}</span> </td> <td> 220 </td> <td> <span v-if="$index <=3" class=text-success>已上架</span> <span v-if="$index > 3" class=text-danger>待上架</span> </td> <td v-if="$index==0" v-bind:rowspan=item.list.length> 2016-05-03 06:12:35 </td> <td class=linst-link-group v-if="$index==0" v-bind:rowspan=item.list.length> <a href=#>编辑</a> <a class=link-delete href=#>删除</a> </td> </tr> </tbody> </table> <pager :cur.sync=1 :all.sync=5></pager>'},457:function(t,o,e){var i,l;i=e(262),l=e(405),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),l&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=l)}});
//# sourceMappingURL=8.b259e6b5cd28d0d7b818.js.map