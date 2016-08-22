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
</style>
<template>
    <div class="col-md-12 addproduct-box-html form-horizontal" id="edit-product-img">
        <div class="well well-sm">
            <ul class="edit-product-title list-inline">
                <li>销售属性<span class="text-danger">［颜色／规格 *必选］</span></li>
                <li class="text-right">
                    <button type="button" class="btn btn-danger">确认修改</button>
                </li>
            </ul>
        </div>

        <!-- 颜色 -->
        <color-list :color-list.sync="colorList"></color-list>

        <!-- 规格 -->
        <spec-list :spec-list.sync="specList"></spec-list>

        <!-- 属性展示列表 -->
        <sales-list :color-list.sync="colorList" :spec-list.sync="specList"></sales-list>
        <pre>
            {{serials|json}}
        </pre>
    </div>
</template>
<script type="text/javascript">
    import {uploadImgLoad}                      from    '../../../../config'
    import colorList                            from    './colorList'
    import specList                             from    './specList'
    import salesList                            from    './salesList'

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
                    {colorId: 1,color: 'colorId1',colorName: '白色',colorImg:'',selected:false},
                    {colorId: 2,color: 'colorId2',colorName: '银色',colorImg:'',selected:false},
                    {colorId: 3,color: 'colorId3',colorName: '灰色',colorImg:'',selected:false},
                    {colorId: 4,color: 'colorId4',colorName: '黑色',colorImg:'',selected:false},
                    {colorId: 5,color: 'colorId5',colorName: '红色',colorImg:'',selected:false},
                    {colorId: 6,color: 'colorId6',colorName: '黄色',colorImg:'',selected:false},
                    {colorId: 7,color: 'colorId7',colorName: '蓝色',colorImg:'',selected:false},
                    {colorId: 8,color: 'colorId8',colorName: '绿色',colorImg:'',selected:false},
                    {colorId: 9,color: 'colorId9',colorName: '紫色',colorImg:'',selected:false},
                    {colorId: 10,color: 'colorId10',colorName: '原木色',colorImg:'',selected:false},
                    {colorId: 11,color: 'colorId11',colorName: '棕色',colorImg:'',selected:false},
                    {colorId: 12,color: 'colorId12',colorName: '花色',colorImg:'',selected:false},
                    {colorId: 13,color: 'colorId13',colorName: '橙色',colorImg:'',selected:false},
                ],
                specList:[
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                    {specName:'',sellPrice:'',weight:'',selected:false,disabled:true},
                ],
            }
        },
        methods:{
            //筛选已选颜色
            colorFilter:function(){
                for (let a = 0; a < this.colorList.length; a++) {
                    for (let b = 0; b < this.serials.length; b++) {
                        if (this.colorList[a].colorId==this.serials[b].colorId) {
                            this.colorList[a].selected=true
                            this.colorList[a].productId=this.serials[b].productId
                            this.colorList[a].colorImg=this.serials[b].colorImg
                        }
                    }
                }
            },
            //筛选已选尺寸
            specFilter:function(){
                for (let a = 0; a < this.serials.length; a++) {
                    this.specList[a].selected=true;
                    this.specList[a].specName=this.serials[a].specName;
                    this.specList[a].sellPrice=this.serials[a].sellPrice;
                    this.specList[a].weight=this.serials[a].weight;
                }
            },
        },
        watch:{
            'serials':function(val,oldval){
                // 从服务端拿到数据后，筛选成本地要渲染的数据颜色数据
                this.colorFilter()
                this.specFilter()
            }
        }
    }
</script>
