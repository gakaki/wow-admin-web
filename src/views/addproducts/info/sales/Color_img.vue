<style media="screen">
    .productColorImg span.n-right{
        position: absolute;
        top: -5px !important;
    }
</style>
<template>
    <span class="productColorImg" @click="imgIndex.set_img_index(id)" id="Apickfiles{{id}}">
        <input v-if="listobjselecteds==true" data-rule="required" v-bind:value="imgsrc" class="form-control hidden" type="text" name="{{'productColorImg'+id}}" placeholder="颜色图片">
        <img v-if="imgsrc!=''" style="max-width:70px; max-height:70px;" v-bind:src="imgsrc" alt="" />
        <button v-if="imgsrc==''" class="btn btn-success">
            <span>选择图片</span>
        </button>
    </span>
</template>

<script type="text/javascript">
    import {productSalesAttribute,imgIndex} from '../../model'
    export default{
        props:['id','imgsrc','listobjselecteds'],
        data(){
            return{
                imgIndex:imgIndex
            }
        }
    }
</script>
