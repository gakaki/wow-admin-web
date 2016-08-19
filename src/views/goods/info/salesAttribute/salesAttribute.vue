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
        <div class="form-group" id="colorSelected">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>颜色</label>
            <div class="col-sm-7 bg-muted">
                <div v-for="item in color" style="display:inline-block; min-width:140px;">
                    <label class="checkbox-inline" style="margin-right:0px;">
                        <input data-rule="checked[1~]" name="colorList[]" name="{{'colorSelected'+$index}}" type="checkbox" value="{{item.colorName}}" v-model='item.selected'>
                        <i v-bind:class="item.color" v-bind:style="{ background: item.color}" class="addproduct-box-html-color-box"></i>
                        <span v-if="item.selected==false">{{item.colorName}}</span>
                    </label>
                    <div class="color-label" v-if="item.selected==true" style="display:inline-block">
                        <input data-rule="required" name="{{'colorSelected'+$index}}" v-bind:disabled="item.selected==false" v-if="item.selected==true" type="text" value="{{item.colorName}}" v-model='item.colorName' placeholder="颜色">
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script type="text/javascript">
    import{uploadImgLoad}   from    '../../../../config'
    export default{
        data(){
            return{
                color:[
                    {colorId: 1,color: 'colorId1',colorName: '白色',colorImg:'',selected:true},
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
                spec:[
                    {specName:'默认',sellPrice:'',weight:'',selected:true},
                ],
            }
        }
    }
</script>
