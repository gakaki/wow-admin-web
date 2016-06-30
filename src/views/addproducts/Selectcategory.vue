<style media="screen">
    .addproduct-category{
        font-size: 0px;
    }
    .addproduct-category-box{
        width: 33%;
        display: inline-block;
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
                <div class="form-inline" style="margin:40px 0px 30px 0px;">
                   <div class="form-group">
                       <label for="exampleInputName2">常用分类：</label>
                        <select style="min-width:250px;" class="form-control">
                            <option>住宅家具>沙发类>沙发</option>
                            <option>住宅家具>床/床垫类>床</option>
                            <option>住宅家具>几类>茶几</option>
                        </select>
                   </div>
                   <button type="submit" class="btn btn-default">应用分类</button>
               </div>
                <div class="addproduct-category">
                    <div class="addproduct-category-box">
                        <h5>一级分类</h5>
                        <ul>
                            <li>
                                家纺
                            </li>
                            <li>
                                生活电器
                            </li>
                            <li>
                                户外运动
                            </li>
                            <li class="addproduct-category-box-current">
                                母婴
                            </li>
                            <li>
                                生活日用家庭清洁
                            </li>
                            <li>
                                家装建材以及五金
                            </li>
                            <li>
                                邮费
                            </li>
                        </ul>
                    </div>
                    <div class="addproduct-category-box">
                        <h5>二级分类</h5>
                        <ul>
                            <li>
                                家纺
                            </li>
                            <li>
                                生活电器
                            </li>
                            <li>
                                户外运动
                            </li>
                            <li>
                                母婴
                            </li>
                            <li class="addproduct-category-box-current">
                                生活日用家庭清洁
                            </li>
                            <li>
                                家装建材以及五金
                            </li>
                            <li>
                                邮费
                            </li>
                        </ul>
                    </div>
                    <div class="addproduct-category-box">
                        <h5>三级分类</h5>
                        <ul>
                            <li>
                                家纺
                            </li>
                            <li>
                                生活电器
                            </li>
                            <li class="addproduct-category-box-current">
                                户外运动
                            </li>
                            <li>
                                母婴
                            </li>
                            <li>
                                生活日用家庭清洁
                            </li>
                            <li>
                                家装建材以及五金
                            </li>
                            <li>
                                邮费
                            </li>
                            <li>
                                家纺
                            </li>
                            <li>
                                生活电器
                            </li>
                            <li>
                                户外运动
                            </li>
                            <li>
                                母婴
                            </li>
                            <li>
                                生活日用家庭清洁
                            </li>
                            <li>
                                家装建材以及五金
                            </li>
                            <li>
                                邮费
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
