<template>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">销售属性</div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>颜色</label>
            <div class="col-sm-7 bg-muted">
                <label class="checkbox-inline">
                    <input type="checkbox" id="inlineCheckbox1" value="option1">
                    <i class="addproduct-box-html-color-box"></i>
                    白色
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="inlineCheckbox1" value="option1">
                    <i style="background:#d5d5d5;" class="addproduct-box-html-color-box"></i>
                    银色
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="inlineCheckbox1" value="option1">
                    <i style="background:#919191;" class="addproduct-box-html-color-box"></i>
                    灰色
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="inlineCheckbox1" value="option1">
                    <i style="background:#000;" class="addproduct-box-html-color-box"></i>
                    黑色
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="inlineCheckbox1" value="option1">
                    <i style="background:#ff0000;" class="addproduct-box-html-color-box"></i>
                    红色
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="inlineCheckbox1" value="option1">
                    <i style="background:#fed533;" class="addproduct-box-html-color-box"></i>
                    黄色
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="inlineCheckbox1" value="option1">
                    <i style="background:#1790c8;" class="addproduct-box-html-color-box"></i>
                    蓝色
                </label>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>颜色</label>
            <div class="col-sm-7 bg-muted">
                <label class="checkbox-inline" v-for="item in labeltest">
                    <input type="checkbox" id="inlineCheckbox1" value="option1">
                    <input type="text" class="sales-attribute-table-text" placeholder="规格" value="">
                </label>
            </div>
        </div>
        <div class="form-group" style="margin-top:40px;">
            <label for="firstname" class="col-sm-2 control-label"></label>
            <div class="col-sm-7 control-label">
                <div class="text-left">
                    批量设置：
                    <div class="btn-group">
                        <button type="button" class="btn btn-default btn-sm">售价</button>
                        <button type="button" class="btn btn-default btn-sm">活动价</button>
                        <button type="button" class="btn btn-default btn-sm">进货价</button>
                        <button type="button" class="btn btn-default btn-sm">初始库存</button>
                        <button type="button" class="btn btn-default btn-sm">库存预警值</button>
                        <button type="button" class="btn btn-default btn-sm">重量</button>
                    </div>
                </div>
            </div>
        </div>
        <table class="table order-list sales-attribute-table">
            <thead>
                <tr>
                    <th>图片</th>
                    <th>颜色</th>
                    <th>规格</th>
                    <th><span class="text-danger">*</span>售价</th>
                    <th>活动价</th>
                    <th><span class="text-danger">*</span>进货价</th>
                    <th>到货周期</th>
                    <th><span class="text-danger">*</span>重量(KG)</th>
                    <th>SKU编码</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">
                        <img style="widht:70px; height:70px;" src="../../../assets/img/file_242_2.jpg" alt="" />
                    </td>
                    <td rowspan="2">
                        白色
                    </td>
                    <td>
                        L
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0" >
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        p21233244
                    </td>
                    <td>
                        <button type="button" class="btn btn-warning btn-sm">禁用</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        XL
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        p21233502
                    </td>
                    <td>
                        <button type="button" class="btn btn-warning btn-sm">禁用</button>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="2">
                        <img style="widht:70px; height:70px;" src="../../../assets/img/file_242_2.jpg" alt="" />
                    </td>
                    <td rowspan="2">
                        黑色
                    </td>
                    <td>
                        L
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0" >
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0">
                    </td>
                    <td>
                        p21233244
                    </td>
                    <td>
                        <button type="button" class="btn btn-warning btn-sm">禁用</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        XL
                    </td>
                    <td class="sales-attribute-disabled">
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0" disabled="disabled">
                    </td>
                    <td class="sales-attribute-disabled">
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0" disabled="disabled">
                    </td>
                    <td class="sales-attribute-disabled">
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0" disabled="disabled">
                    </td>
                    <td class="sales-attribute-disabled">
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0" disabled="disabled">
                    </td>
                    <td class="sales-attribute-disabled">
                        <input type="text" class="form-control sales-attribute-table-text" placeholder="0" disabled="disabled">
                    </td>
                    <td class="sales-attribute-disabled">
                        p21233502
                    </td>
                    <td class="sales-attribute-disabled">
                        <button type="button" class="btn btn-default btn-sm">启用</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
                labeltest:14
            }
        }
    }
</script>
