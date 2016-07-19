<template>
    <a @click="color_img(id)" id="Apickfiles{{id}}" href="javascript:;">
        <img v-if="imgIndex.qiniuurl!=''&&imgsrc!=''" style="max-width:70px; max-height:70px;" v-bind:src="imgIndex.qiniuurl+imgsrc" alt="" />
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
        },
        methods:{
            color_img:function(tbody_index){
                this.$set('imgIndex.color_img',tbody_index);
            }
        }
    }
</script>
