<style media="screen">
    .addproduct-category{
        font-size: 0px;
    }
    .addproduct-category-box{
        width: 33%;
        float: left;
        font-size: 14px;
    }
    .addproduct-category-box ul{
        border:1px solid #ddd;
        height: 350px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .addproduct-category-box h5{
        background: #4485b5;
        color: #fff;
        text-align: center;
        padding: 10px 0px;
        font-weight: normal;
        margin: 0px;
    }
    .addproduct-category .addproduct-category-box+.addproduct-category-box h5{
        background: #4f98ce;
    }
    .addproduct-category .addproduct-category-box+.addproduct-category-box+.addproduct-category-box h5{
        background: #69abdb;
    }
    .addproduct-category-box li{
        padding: 7px 10px;
        position: relative;
        cursor:pointer;
    }
    .addproduct-category-box li:hover{
        background: #f9f9f9;
    }
    .addproduct-category-box li::before{
        content: "\e080";
        position: absolute;;
        top: 9px;
        right: 10px;
        display: inline-block;
        font-family: 'Glyphicons Halflings';
        font-style: normal;
        font-weight: 0;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    li.addproduct-category-box-current, li.addproduct-category-box-current:hover{
        background: #00a3e9;
        color: #fff;
    }
</style>
<template>
    <div class="row">
        <div class="col-md-12">
            <div style="width:740px; margin:0 auto;">
                <div v-show="" class="form-inline" style="margin:40px 0px 30px 0px;">
                   <div class="form-group">
                       <label for="exampleInputName2">常用分类：</label>
                        <select style="min-width:250px;" class="form-control">
                            <option>住宅家具>沙发类>沙发</option>
                            <option>住宅家具>床/床垫类>床</option>
                            <option>住宅家具>几类>茶几</option>
                        </select>
                   </div>
                   <button @click="phrase()" type="submit" class="btn btn-default">应用分类</button>
               </div>
                <div class="addproduct-category" style="margin-top:40px;">
                    <div class="addproduct-category-box">
                        <h5>一级分类</h5>
                        <ul>
                            <li v-bind:class="{'addproduct-category-box-current':currentTag==$index}" @click="listOne(item.id,$index)" v-for="item in one">
                                {{item.text}}
                            </li>
                        </ul>
                    </div>
                    <div class="addproduct-category-box">
                        <h5>二级分类</h5>
                        <ul>
                             <p v-if="two.length==0" class="text-center text-danger" style="margin-top:20px;">
                                 请先选择一级分类
                                 <span class="glyphicon glyphicon-info-sign"></span>
                             </p>
                            <li v-bind:class="{'addproduct-category-box-current':currentTags==$index}" @click="listTwo(item.id,$index)" v-for="item in two">
                                {{item.text}}
                            </li>
                        </ul>
                    </div>
                    <div class="addproduct-category-box">
                        <h5>三级分类</h5>
                        <ul>
                            <p v-if="three.length==0" class="text-center text-danger" style="margin-top:20px;">
                                请先选择二级分类
                                <span class="glyphicon glyphicon-info-sign"></span>
                            </p>
                            <li v-bind:class="{'addproduct-category-box-current':currentTagss==$index}" @click="listThree(item.id,$index)" v-for="item in three">
                                {{item.text}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import {productBasiInfo} from './model'
    export default{
        data(){
            return{
                productBasiInfo:productBasiInfo,
                currentTag:null,
                currentTags:null,
                currentTagss:null,
                twoTest:[
                    {text:'二级分类1',id:111},
                    {text:'二级分类2',id:12},
                    {text:'二级分类3',id:332},
                    {text:'二级分类4',id:314},
                    {text:'二级分类5',id:11},
                    {text:'二级分类6',id:22},
                    {text:'二级分类7',id:3123}
                ],
                threeTest:[
                    {text:'三级分类1',id:87},
                    {text:'三级分类2',id:92},
                    {text:'三级分类3',id:209},
                    {text:'三级分类4',id:762},
                    {text:'三级分类5',id:980},
                    {text:'三级分类6',id:928},
                    {text:'三级分类7',id:291},
                    {text:'三级分类8',id:787},
                    {text:'三级分类9',id:692},
                    {text:'三级分类10',id:509},
                    {text:'三级分类11',id:7162},
                    {text:'三级分类12',id:2980},
                    {text:'三级分类13',id:3928},
                    {text:'三级分类14',id:4291},
                    {text:'三级分类15',id:2387},
                    {text:'三级分类16',id:3892},
                    {text:'三级分类17',id:3209},
                    {text:'三级分类18',id:1762},
                    {text:'三级分类19',id:3980},
                    {text:'三级分类20',id:1928},
                    {text:'三级分类21',id:3291},
                ],
                one:[
                    {text:'家纺',id:41},
                    {text:'生活电器',id:22},
                    {text:'户外运动',id:13},
                    {text:'母婴',id:34},
                    {text:'生活日用家庭清洁',id:25},
                    {text:'家装建材以及五金',id:16},
                    {text:'邮费',id:27}
                ],
                two:[],
                three:[]
            }
        },
        methods:{
            listOne:function(id,index){
                this.$set('currentTag',index);
                this.$set('currentTags',null);
                this.$set('currentTagss',null);
                this.$set('two',this.twoTest)
                this.$set('productBasiInfo.Selectcategory.one',id);
                this.$set('productBasiInfo.Selectcategory.two',null);
                this.$set('productBasiInfo.Selectcategory.three',null);
            },
            listTwo:function(id,index){
                this.$set('currentTags',index);
                this.$set('currentTagss',null);
                this.$set('three',this.threeTest);
                this.$set('productBasiInfo.Selectcategory.two',id);
                this.$set('productBasiInfo.Selectcategory.three',null);
            },
            listThree:function(id,index){
                this.$set('currentTagss',index);
                this.$set('productBasiInfo.Selectcategory.three',id);
            }
        }
    }
</script>
