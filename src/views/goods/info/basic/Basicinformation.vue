<style media="screen">
    .origin_country .dropdown-toggle{
        border-top-left-radius:0px !important;
        border-bottom-left-radius:0px !important;
    }
    .add-product-hide-input span.msg-box{
        position: absolute;
        z-index: 999;
    }
    #add-product-from span.n-right{
        top: 3px;
        right: 0px;
    }
</style>
<template>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">基本信息</div>
        <div class="form-group">
            <label class="col-sm-2 control-label">所属分类</label>
            <div class="col-sm-10">
                <p class="control-label text-muted">
                    分类1 > 分类2 > 分类3
                </p>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>商品名称</label>
            <div class="col-sm-4">
                <input name="productName" maxlength="30" type="text" class="form-control" placeholder="商品名称">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">0/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>卖点</label>
            <div class="col-sm-4">
                <input name="sellingPoint" type="text" class="form-control" placeholder="商店卖点">
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">0/30</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label">商品型号</label>
            <div class="col-sm-3">
                <input name="productModel" type="text" class="form-control" placeholder="商品型号">
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>品牌</label>
            <div class="col-sm-3 add-product-hide-input">

            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label">设计师(可多选)</label>
            <div class="col-sm-4 add-product-hide-input">

            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label">主设计师</label>
            <div class="col-sm-4 add-product-hide-input">

            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>产地/国家</label>
            <div class="col-sm-4">
                <div class="input-group add-product-hide-input">

                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>产地/省-市</label>
            <div class="col-sm-4">
                <div class="input-group add-product-hide-input">

                </div>
            </div>
            <div class="col-sm-4">
                <div class="input-group add-product-hide-input">

                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>风格</label>
            <div class="col-sm-2 add-product-hide-input">

            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>尺寸</label>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">长</span>
                    <input name="length" type="number" class="form-control" placeholder="长">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">宽</span>
                    <input name="width" type="number" class="form-control" placeholder="宽">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon">高</span>
                    <input name="height" type="number" class="form-control" placeholder="高">
                    <span class="input-group-addon">cm</span>
                </div>
            </div>
            <span class="col-sm-4 control-label">
                <div class="text-left text-muted">若为系列商品，按尺寸最大的填写</div>
            </span>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>适用人群</label>
            <div class="col-sm-2 add-product-hide-input">

            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>是否可定制</label>
            <div class="col-sm-2 add-product-hide-input">

            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>适用场景
            </label>
            <div class="col-sm-7 bg-muted">
                <label v-for="item in applicable_scene" class="checkbox-inline">
                    <input data-rule="checked[1~]" type="checkbox" name="applicableScene[]" v-bind:value="item.keyName"> {{item.keyValue}}
                </label>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>材质</label>
            <div class="col-sm-7 bg-muted">

            </div>
        </div>
    </div>
</template>
<script type="text/javascript">

</script>
