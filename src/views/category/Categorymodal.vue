<template>
    <Modal :show.sync="categorymodalshow">
        <h4 slot="header" class="modal-title">{{modaltitle}}</h4>
        <button slot="close" type="button" class="close" @click="categorymodalshow=false">&times;</button>
        <div slot="body">
            <form class="form-horizontal" role="form">
                <div class="form-group">
                    <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>分类名称</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" placeholder="数字、英文和汉字，1-20个字">
                    </div>
                    <span class="col-sm-4 control-label">
                        <div class="text-left text-muted">数字、英文和汉字，1-20个字</div>
                    </span>
                </div>
                <div class="form-group">
                    <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>父分类</label>
                    <div class="col-sm-5" style="position:relative;">
                        <Categorytree></Categorytree>
                    </div>
                    <span class="col-sm-5 control-label">
                        <div class="text-left text-muted">顶级分类请选择 - 无 -</div>
                    </span>
                </div>
                <div v-for="item in CategorytreecloneNum" v-if="categoryFather!=null">
                    <Categorytreeclone></Categorytreeclone>
                </div>
                <div class="form-group">
                    <label for="lastname" class="col-sm-2 control-label"><span class="text-danger">*</span>LOGO</label>
                    <div class="col-sm-2">
                        <div id="brand-pic-button">
                            <a style="margin-bottom:5px" class="btn btn-success" id="pickfiles" href="#">
                                <span>选择图片</span>
                            </a>
                        </div>
                        <div>
                            <img style="max-width:150px; border: 1px solid #e0e0e0; padding:5px;" v-show="brandpic!=null" v-bind:src="brandpic" alt="" />
                        </div>
                    </div>
                    <span class="col-sm-8 control-label">
                        <div class="text-left text-muted">请上传 png 格式图片，图片尺寸 ××××××</div>
                    </span>
                </div>
                <div class="form-group">
                    <label for="lastname" class="col-sm-2 control-label">是否显示</label>
                    <div class="col-sm-3">
                        <label class="checkbox-inline">
                            <input type="radio" name="optionsRadiosinline" value="option1" checked> 显示
                        </label>
                        <label class="checkbox-inline">
                            <input type="radio" name="optionsRadiosinline" value="option2"> 隐藏
                        </label>
                    </div>
                    <span class="col-sm-4 control-label">
                        <div class="text-left text-muted">有商品关联时不能隐藏分类</div>
                    </span>
                </div>
            </form>
        </div>
        <div slot="footer">
            <button @click="categorySave" type="button" class="btn btn-primary expressButton">保存</button>
        </div>
    </Modal>
</template>
<script type="text/javascript">
    import Modal                from    '../../components/common/Modal'
    import Categorytree         from    './Categorytree'
    import Categorytreeclone    from    './Categorytreeclone'
    export default{
        props:['categorymodalshow','modaltitle','categoryid'],
        data(){
            return{
                categoryFather          :   null,
                categoryCloneArr        :   [],
                CategorytreecloneNum    :   1,
            }
        },
        components:{
            Modal,
            Categorytree,
            Categorytreeclone,
        },
        methods:{
            categorySave:function(){
                this.$set('categorymodalshow',false);
                if(!this.categoryid){
                    console.log('新增')
                }else{
                    console.log('编辑分类id：'+this.categoryid)
                }
            }
        },
        events: {
            'categoryCollect': function (msg) {
                if (msg.father==true) {
                    /**
                     * [$set 收集已选的父分类id]
                     * @param {[type]} 'categoryFather' [广播名]
                     * @param  {[type]} msg.msg.id [父组件传过来的已选分类信息]
                     */
                    this.$set('categoryFather',msg.msg.id);
                    console.log(this.categoryFather);
                }else if(msg.father==false){
                    /**
                     * [categoryCloneArr 收集已选的虚拟父分类id]
                     * @param {[type]} 'categoryCloneArr' [广播名]
                     * @param  {[type]} msg.msg.id [父组件传过来的已选分类信息]
                     */
                    this.categoryCloneArr.push(msg.msg.id)
                    let set = new Set(this.categoryCloneArr);
                    let array = Array.from(set);
                    this.$set('categoryCloneArr',array)
                    console.log(this.categoryCloneArr);
                }
            },
            'addCloneCategory': function (msg) {
                this.$set('CategorytreecloneNum',this.CategorytreecloneNum+1);
            },
            'deleteCloneCategory':function(msg){
                console.log(msg);
                let set = new Set(this.categoryCloneArr);
                set.delete(msg.deleteid);
                let array = Array.from(set);
                this.$set('categoryCloneArr',array)
                console.log(this.categoryCloneArr);
                if (this.CategorytreecloneNum==1) {
                    return false;
                }
                this.$set('CategorytreecloneNum',this.CategorytreecloneNum-1);
            }
        }
    }
</script>
