<template>
    <a @click="imgIndex.set_img_index(id)" id="Apickfiles{{id}}" href="javascript:;">
        <img v-if="imgsrc!=''" style="max-width:70px; max-height:70px;" v-bind:src="imgIndex.qiniuurl+imgsrc" alt="" />
        <button v-if="imgsrc==''" class="btn btn-success">
            <span>选择图片</span>
        </button>
    </a>
</template>

<script type="text/javascript">
    import {productSalesAttribute,imgIndex} from '../../model'
    export default{
        props:['id','imgsrc'],
        data(){
            return{
                imgIndex:imgIndex
            }
        }
    }
</script>
