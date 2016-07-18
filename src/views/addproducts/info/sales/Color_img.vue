<template>
    <a @click="color_img(id)" id="Apickfiles{{id}}" href="javascript:;">
        <img v-if="imgsrc!=''" style="max-width:70px; max-height:70px;" v-bind:src="imgIndex.qiniuurl+imgsrc" alt="" />

        <button v-if="imgsrc==''" class="btn btn-success">
            <span>选择图片</span>
        </button>
        <!-- <img v-if="imgsrc==''" style="width:70px; height:70px;" src="http://localhost:8080/static/img/file_242_2.45181cb.jpg" alt="" /> -->
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
        },
        methods:{
            color_img:function(tbody_index){
                this.$set('imgIndex.color_img',tbody_index);
            }
        }
    }
</script>
