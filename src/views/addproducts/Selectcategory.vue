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
        <Alert :duration="3000" :alertshow.sync="alertObj.alertShow" :type="alertObj.alertType" :info="alertObj.alertInfo"></Alert>
        <spinner id="spinner-box" :size="spinnerSize" :fixed="spinnerFixed" text="正在加载数据">
        </spinner>
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
                            <li v-bind:class="{'addproduct-category-box-current':currentTag==$index}" @click="listOne(item.id,$index,item.categoryName)" v-for="item in one">
                                {{item.categoryName}}
                            </li>
                        </ul>
                    </div>
                    <div class="addproduct-category-box">
                        <h5>二级分类</h5>
                        <ul>
                             <p v-if="two.length==0" class="text-center text-danger" style="margin-top:20px;">
                                 {{tipText}}
                                 <img v-if="tipText=='正在获取分类'" v-bind:src="imgLoad" alt="" />
                                 <span v-if="tipText=='该类目无子分类'" class="glyphicon glyphicon-info-sign"></span>
                             </p>
                            <li v-bind:class="{'addproduct-category-box-current':currentTags==$index}" @click="listTwo(item.id,$index,item.categoryName)" v-for="item in two">
                                {{item.categoryName}}
                            </li>
                        </ul>
                    </div>
                    <div class="addproduct-category-box">
                        <h5>三级分类</h5>
                        <ul>
                            <p v-if="three.length==0" class="text-center text-danger" style="margin-top:20px;">
                                {{tipText}}
                                <img v-if="tipText=='正在获取分类'" v-bind:src="imgLoad" alt="" />
                                <span v-if="tipText=='该类目无子分类'" class="glyphicon glyphicon-info-sign"></span>
                            </p>
                            <li v-bind:class="{'addproduct-category-box-current':currentTagss==$index}" @click="listThree(item.id,$index,item.categoryName)" v-for="item in three">
                                {{item.categoryName}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import {productBasiInfo}    from    './model'
    import Alert                from    '../../components/common/alert/Alert'
    import {API_ROOT, uploadImgLoad}           from    '../../config'
    import spinner              from    '../../components/common/spinner/Spinner'

    export default{
        components:{
            Alert,
            spinner
        },
        data(){
            return{
                imgLoad:uploadImgLoad,
                spinnerSize: 'lg',
                productBasiInfo:productBasiInfo,
                currentTag:null,
                currentTags:null,
                currentTagss:null,
                tipText:'该类目无子分类',
                one:[],
                two:[],
                three:[],
                alertObj:{
                    alertType:null,
                    alertInfo:null,
                    alertShow:false
                },
            }
        },
        methods:{
            listOne:function(id,index,name){
                this.$set('currentTag',index);
                this.$set('currentTags',null);
                this.$set('currentTagss',null);
                this.$set('productBasiInfo.SelectcategoryName.one',name);
                this.$set('productBasiInfo.Selectcategory.one',id);
                this.$set('productBasiInfo.Selectcategory.two',null);
                this.$set('productBasiInfo.Selectcategory.three',null);
                this.$set('two',[]);
                this.$set('three',[]);
                this.setList(id,'two');
            },
            listTwo:function(id,index,name){
                this.$set('currentTags',index);
                this.$set('currentTagss',null);
                this.$set('productBasiInfo.SelectcategoryName.two',name);
                this.$set('productBasiInfo.Selectcategory.two',id);
                this.$set('productBasiInfo.Selectcategory.three',null);
                this.$set('three',[]);
                this.setList(id,'three');
            },
            listThree:function(id,index,name){
                this.$set('currentTagss',index);
                this.$set('productBasiInfo.SelectcategoryName.three',name);
                this.$set('productBasiInfo.Selectcategory.three',id);
            },
            setList:function(id,list){
                this.$set('tipText','正在获取分类')
                let jsontext=JSON.stringify({"categoryId":id});
                this.$http.get(API_ROOT+'admin-api-dev/v1/category/sub-category',{paramJson:jsontext}).then((response) => {
                    // success callback
                    if (response.data.resCode==0) {
                        this.$set(list,response.data.data);
                    }else {
                        this.$set(list,[]);
                        this.$set('tipText','该类目无子分类')
                    }
                }, (response) => {
                    // error callback
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'获取分类错误',alertShow:true})
                });
            }
        },
        ready(){
            this.$broadcast('show::spinner');
            this.$http.get(API_ROOT+'admin-api-dev/v1/category/first-level').then((response) => {
                this.$broadcast('hide::spinner');
                // success callback
                if (response.data.resCode==0) {
                    this.$set('one',response.data.data);
                }else {
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:response.data.resMsg,alertShow:true})
                }
            }, (response) => {
                this.$broadcast('hide::spinner');
                // error callback
                this.$set('alertObj',{alertType:'alert-danger',alertInfo:'获取分类错误',alertShow:true})
            });
        }
    }
</script>
