<style media="screen">
    .products-primary-img li{
        position:relative;
    }
    .products-primary-img li:hover .primary-img-remove{
        display: block;
    }
    .primary-img-remove{
        position: absolute;
        right: 5px;
        top: 5px;
        cursor:pointer;
        background: #fff;
        font-size: 16px;
        line-height: 16px;
        border-radius: 100%;
        display: none;
    }
    .details-img-group-right{
        position: absolute;
        right: -64px;
        top: -10px;
        background: #f9f9f9;
        height: 165px;
        padding: 20px;
    }
    .img-text-desc-arrow-up{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #333333 transparent;
        cursor: pointer;
    }
    .img-text-desc-arrow-down{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 10px 0 10px;
        border-color: #333333 transparent transparent transparent;
        cursor: pointer;
    }
    .details-img-group-right>.glyphicon{
        font-size: 22px;
        display: block;
        cursor:pointer;
    }
</style>
<template>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">
            <ul class="edit-product-title list-inline">
                <li>商品详情</li>
                <li class="text-right">
                    <button type="button" class="btn btn-danger">确认修改</button>
                </li>
            </ul>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label"><span class="text-danger">*</span>商品主图</label>
            <div class="col-sm-10">
                <p class="control-label text-muted">
                    5张商品图片，图片尺寸为<span class="text-danger">(800*800px)</span>以上，无品牌LOGO和其他网站水印，建议图片为白底
                </p>
            </div>
        </div>
    </div>
</template>
