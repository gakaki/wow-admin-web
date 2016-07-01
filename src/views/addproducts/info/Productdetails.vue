<template>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">商品详情</div>
        <div class="form-group">
            <label class="col-sm-2 control-label"><span class="text-danger">*</span>商品主图</label>
            <div class="col-sm-10">
                <p class="control-label text-muted">
                    5张商品图片，图片尺寸为800*800px以上，无品牌LOGO和其他网站水印，建议图片为白底
                </p>
            </div>
        </div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"></label>
            <div class="col-sm-10 control-label">
                <ul class="main-img-group text-left">
                    <li>
                        <p>
                            <img src="../../../assets/img/file_242_2.jpg" alt="" />
                        </p>
                        正面图
                    </li>
                    <li>
                        <p>
                            <img src="../../../assets/img/file_242_2.jpg" alt="" />
                        </p>
                        侧面图
                    </li>
                    <li>
                        <p>
                            <img src="../../../assets/img/file_242_2.jpg" alt="" />
                        </p>
                        细节图
                    </li>
                    <li>
                        <p>
                            <img src="../../../assets/img/file_242_2.jpg" alt="" />
                        </p>
                        细节图
                    </li>
                    <li>
                        <p class="main-img-group-nopic">
                            添加图片
                        </p>
                        细节图
                    </li>
                </ul>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">商品描述</label>
            <div class="col-sm-7">
                <p class="control-label text-muted">
                    <textarea placeholder="商品描述" class="form-control" rows="5"></textarea>
                </p>
            </div>
            <span class="col-sm-3 control-label">
                <div class="text-left text-muted">0/200</div>
            </span>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">
                <span class="text-danger">*</span>
                商品详情
            </label>
            <div class="col-sm-7">
                <ul class="details-img-group bg-muted">
                    <li>
                        <p>
                            <img src="../../../assets/img/file_242_2.jpg" alt="" />
                        </p>
                        <textarea placeholder="商品详情" class="form-control" rows="7"></textarea>
                    </li>
                    <li>
                        <p class="details-img-group-nopic">
                            添加图片
                        </p>
                        <textarea placeholder="商品详情" class="form-control" rows="7"></textarea>
                    </li>
                </ul>
            </div>
            <span class="col-sm-3 control-label text-left">
                <div class="text-left text-muted">0/200</div>
            </span>
        </div>
    </div>
</template>
