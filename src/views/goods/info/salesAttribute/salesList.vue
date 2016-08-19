<template>
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
            <tbody v-if="item.selected==true" v-for="item in colorList">
                <tr v-if="items.selected==true" v-for="items in specList">
                    <td v-if="$index==0" v-bind:rowspan="specList.length">
                        <button class="btn btn-success"> <span>选择图片</span> </button>
                    </td>
                    <td v-if="$index==0" v-bind:rowspan="specList.length">
                        {{item.colorName}}
                    </td>
                    <td>
                        {{items.specName}}
                    </td>
                    <td>
                        <input type="number" class="form-control sales-attribute-table-text" placeholder="售价" name="sellPrice00" aria-required="true">
                    </td>
                    <td>
                        <input type="number" class="form-control sales-attribute-table-text" placeholder="重量" name="weight00" aria-required="true">
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger btn-sm">禁用</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript">
    export default{
        props:['colorList','specList'],
        watch:{
            'specList': {
                handler: function (val, oldVal) {
                    console.log(val);
                },
                deep: true
            }
        }
    }
</script>
