<style media="screen">
    .colorId1{
        /*白色*/
        background: #fff;
    }
    .colorId2{
        /*银色*/
        background: #d5d5d5;
    }
    .colorId3{
        /*灰色*/
        background: #919191;
    }
    .colorId4{
        /*黑色*/
        background: #000000;
    }
    .colorId5{
        /*红色*/
        background: #ff0000;
    }
    .colorId6{
        /*黄色*/
        background: #fed533;
    }
    .colorId7{
        /*蓝色*/
        background: #1790c8;
    }
    .colorId8{
        /*绿色*/
        background: #7bba3c;
    }
    .colorId9{
        /*紫色*/
        background: #8d429f;
    }
    .colorId10{
        /*原木色*/
        background: #cb8b44;
    }
    .colorId11{
        /*棕色*/
        background: #941100;
    }
    .colorId12{
        /*花色*/
        background:-webkit-linear-gradient(left,#f00 50%,#fed533 50%), -webkit-linear-gradient(left,#1790c8 50%,#7bba3c 50%);
        background:-moz-linear-gradient(left,#f00 50%,#fed533 50%), -moz-linear-gradient(left,#1790c8 50%,#7bba3c 50%);
        background-repeat:no-repeat;
        background-position:left top,left bottom;
        background-size:100% 50%;
        border: 0px;
        width: 12px;
        height: 12px;
    }
    .colorId13{
        /*橙色*/
        background: #FF9C00;
    }
    .color-label{
        width: 80px;
        min-height: 24px;
    }
    .color-label input[type=checkbox]{
        position: relative;
        display: inline-block;
        top: -1px;
    }
    .color-label input[type=text]{
        display: inline;
        width: 80px;
    }
    .spec-border-danger{
        border:1px solid #ff0000;
    }
    #specSelected span.n-right, #colorSelected span.n-right{
        top: -3px;
    }
    .spec-disabled td+td+td{
        background: #f9f9f9;
    }
    .spec-disabled:nth-child(n+2) td{
        background: #f9f9f9;
    }
</style>
<template>
    <div class="col-md-12 addproduct-box-html form-horizontal" id="edit-product-img">
        <div class="well well-sm">
            <ul class="edit-product-title list-inline">
                <li>销售属性<span class="text-danger">［颜色／规格 *必选］</span></li>
                <li class="text-right">
                    <button @click="TotalFilter" type="button" class="btn btn-danger">确认修改</button>
                </li>
            </ul>
        </div>

        <!-- 颜色 -->
        <div class="form-group" id="edit-colorSelected">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>颜色</label>
            <div class="col-sm-7 bg-muted">
                <div v-for="item in colorList" style="display:inline-block; min-width:140px;">
                    <label class="checkbox-inline" style="margin-right:0px;">
                        <input v-bind:disabled="item.disabled==true" type="checkbox" value="{{item.colorName}}" v-model='item.selected'>
                        <i v-bind:class="'colorId'+item.colorId" v-bind:style="{ background: item.color}" class="addproduct-box-html-color-box"></i>
                        <span v-if="item.selected==false">{{item.colorName}}</span>
                    </label>
                    <div class="color-label" v-if="item.selected==true" style="display:inline-block">
                        <input v-bind:disabled="item.selected==false" v-if="item.selected==true" type="text" value="{{item.colorName}}" v-model='item.colorName' placeholder="颜色">
                    </div>
                </div>
            </div>
        </div>

        <!-- 规格 -->
        <div class="form-group" id="edit-specSelected">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>规格</label>
            <div class="col-sm-7 bg-muted">
                <div v-for="item in specList" style="display:inline-block; min-width:140px; margin:5px 0px;">
                    <label style="margin: 0px; position: relative;top: -11px;" class="checkbox-inline">
                        <input v-bind:disabled="item.disabled==true" type="checkbox" value="{{item.specName}}" v-model='item.selected'>
                    </label>
                    <div style="display:inline-block;">
                        <input v-bind:disabled="item.selected==false" type="text" class="sales-attribute-table-text" placeholder="规格" value="{{item.specName}}" v-model='item.specName'>
                    </div>
                </div>
            </div>
        </div>

        <!-- 属性展示列表 -->
        <div class="form-group" style="margin-top:40px">
            <label for="firstname" class="col-sm-2 control-label"> </label>
            <div class="col-sm-7 control-label">
                <div class="text-left"> 批量设置：
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary btn-sm">售价</button>
                        <button type="button" class="btn btn-primary btn-sm">重量</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="edit-clor-pic-box">
            <table class="table order-list sales-attribute-table">
                <thead>
                    <tr>
                        <th>图片<span class="text-danger">(比例1:1)</span></th>
                        <th>颜色</th>
                        <th>规格</th>
                        <th><span class="text-danger">*</span>售价</th>
                        <th><span class="text-danger">*</span>重量(KG)</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody v-if="item.selected==true" v-for="(index, item) in colorList">
                    <tr v-if="items.selected==true" v-for="items in item.specList" v-bind:class="{'spec-disabled':items.disabled==true}">
                       <td v-if="$index==0" v-bind:rowspan="specSelected.length">
                           <div class="set-color-src" @click="setColorSrc(index)">
                               <img v-if="item.colorImg!=''" style="max-width:70px; max-height:70px;" v-bind:src="item.colorImg+'?imageView2/1/w/70/h/70'" alt="" />
                               <button v-if="item.colorImg==''" class="btn btn-success"> <span>选择图片</span> </button>
                           </div>
                       </td>
                       <td v-if="$index==0" v-bind:rowspan="specSelected.length">
                           {{item.colorName}}
                       </td>
                       <td>
                           {{items.specName}}
                       </td>
                       <td>
                           <input @input="setVal(index,$index,$event,'sellPrice') | debounce 500" v-bind:disabled="items.disabled==true" type="number" class="form-control sales-attribute-table-text" placeholder="售价" name="sellPrice00" aria-required="true" v-bind:value="items.sellPrice">
                       </td>
                       <td>
                           <input @input="setVal(index,$index,$event,'weight') | debounce 500" v-bind:disabled="items.disabled==true" type="number" class="form-control sales-attribute-table-text" placeholder="重量" name="weight00" aria-required="true" v-bind:value="items.weight">
                       </td>
                       <td>
                           <button @click="specDisable(index,$index,items.productId)" v-if="items.disabled==false" type="button" class="btn btn-danger btn-sm">禁用</button>
                           <button @click="specEnable(index,$index,items.productId)" v-if="items.disabled==true" type="button" class="btn btn-success btn-sm">启用</button>
                       </td>
                   </tr>
                </tbody>
            </table>
        </div>

        <!-- 隐藏域，用于触发图片上传按钮 -->
        <img class="testImg" alt="" style="display:none;">
        <div id="edit-img-text-upload" style="display:none;">
            <button id="edit-img-text-upload-btn" type="button" name="button">图文上传按钮</button>
        </div>
    </div>
</template>
<script type="text/javascript">
    import colorList                            from    './colorList'
    import specList                             from    './specList'
    import salesList                            from    './salesList'
    import {uploadImgLoad}                      from    '../../../../config'
    import Promise                              from    'thenfail'
    import lodash                               from    'lodash'

    export default{
        props:['alertobj','productid','serials'],
        components:{
            colorList,
            specList,
            salesList,
        },
        data(){
            return{
                colorList:[
                    {colorId: 1,colorName: '白色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 2,colorName: '银色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 3,colorName: '灰色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 4,colorName: '黑色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 5,colorName: '红色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 6,colorName: '黄色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 7,colorName: '蓝色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 8,colorName: '绿色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 9,colorName: '紫色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 10,colorName: '原木色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 11,colorName: '棕色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 12,colorName: '花色',colorImg:'',selected:false,specList: [],disabled:false},
                    {colorId: 13,colorName: '橙色',colorImg:'',selected:false,specList: [],disabled:false},
                ],
                specList:[],
                specSelected:[],
            }
        },
        methods:{
            // 提交数据
            TotalFilter:function(){
            },

            //售价与重量的赋值
            setVal:function(colro,spec,e,name){
                // this.listView[colro].specList[spec][name]=e.target.value;
            },
        },
        watch:{
            //拿到服务端返回的sku数据
            'serials':function(val,oldval){
                Promise.then(() => {
                    // 初始化本地的规格
                    for (let a = 0; a < 15; a++) {
                        this.specList.push(JSON.parse(JSON.stringify({specName:'',sellPrice:'',weight:'',selected:false,disabled:false})))
                    }
                })
                .then(value => {
                    // 初始化本地的颜色数据
                    for (let a = 0; a < this.colorList.length; a++) {
                        this.$set('colorList['+a+'].specList',JSON.parse(JSON.stringify(this.specList)));
                    }
                })
                .then(value => {
                    if (val) {
                        /**
                         *筛选出已有的颜色数据
                         */
                        let filterColor =val;
                        let color = _.uniqBy(filterColor, 'colorId'),
                        dataMap = {
                            colorId: 'colorId',
                            colorName: 'colorName',
                            colorImg:'colorImg'
                        };
                        let colorList = color.map(function (colorId) {
                            let color = {};
                            for (let key in dataMap) {
                                color[dataMap[key]] = colorId[key];
                            };
                            return color;
                        });
                        return Promise.resolve(colorList);
                    } else {
                        throw new Error();
                    }
                })
                .then(value => {
                    /**
                     * 根据筛选出的颜色数据，勾选并且改变颜色图片跟颜色名字
                     */
                    let selected = (value) => {
                        let color=this.colorList.findIndex(function(val, index, arr) {
                            return val.colorId == value.colorId;
                        })
                        this.colorList[color].colorName=value.colorName;
                        this.colorList[color].colorImg=value.colorImg;
                        this.colorList[color].selected=true;
                        this.colorList[color].disabled=true;
                    }
                    value.filter(selected);
                })
                .then(value => {
                    /**
                     *筛选出已有的规格数据
                     */
                    let filterSpec=val;
                    let spec = _.uniqBy(filterSpec,'specName'),
                    dataMap = {
                        specName: 'specName',
                    };
                    let specList = spec.map(function (specName) {
                        let spec = {};
                        for (let key in dataMap) {
                            spec[dataMap[key]] = specName[key];
                        };
                        return spec;
                    });
                    return Promise.resolve(specList);
                })
                .then(value => {
                    /**
                     * 根据筛选出已有的规格数据，勾选并且改变规格的名字
                     */
                    let selected = (value,index) => {
                        this.specList[index].specName=value.specName;
                        this.specList[index].disabled=true;
                        this.specList[index].selected=true;
                    }
                    value.filter(selected);
                })
                .label('sign', () => {
                    console.log('跳过来')
                })
            },
            'specList': {
                handler: function (val, oldVal) {
                    Promise.then(() => {
                        // 筛选出已经勾选的规格
                        let specSelect=(value,index)=>{
                            return value.selected==true;
                        }
                        this.$set('specSelected',val.filter(specSelect));
                    })
                    .then(value => {
                        // 设置各个颜色对应的值
                        let specVal=(value,index)=>{
                            return value.selected==true;
                        }
                        val.filter(specVal);
                        for (let a = 0; a < this.colorList.length; a++) {
                            for (var b = 0; b < val.filter(specVal).length; b++) {
                                this.colorList[a].specList[b].specName=val.filter(specVal)[b].specName;
                                this.colorList[a].specList[b].selected=true;
                            }
                        }
                    })
                    .label('sign', () => {
                        // console.log('跳过来222')
                    })
                },
                deep: true,
            }
        }
    }
</script>
