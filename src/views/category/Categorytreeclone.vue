<template>
    <div class="form-group">
        <label for="firstname" class="col-sm-2 control-label"><span class="text-danger"></span>虚拟父分类</label>
        <div class="col-sm-5">
            <input v-model="categoryTitle" @click="categorySelect" type="text" readonly="readonly" class="form-control" placeholder="请选择分类">
            <ul class="category-select-box" v-show="categoryShow">
                <item class="item" :model="treeData"></item>
            </ul>
        </div>
        <span class="col-sm-5 control-label" style="text-align:left;">
            <em class="icon-box-sm" @click="categoryAdd()">
                <i class="glyphicon glyphicon-plus"></i>
            </em>
            <em class="icon-box-sm text-danger" @click="categoryDelete(deleteid)">
                <i class="glyphicon glyphicon-remove"></i>
            </em>
        </span>
    </div>
</template>
<script type="text/javascript">
    import item from './Tree'
    export default{
        data(){
            return{
                categoryShow    :   false,
                categoryTitle   :   null,
                deleteid        :   null,
                treeData: {
                    name: '无',
                    children: [
                        {
                            name: '儿童玩具',
                            id:'1'
                        },
                        {
                            name: '客厅与卧室',
                            id:'2',
                            children: [
                                {
                                    name: '沙发和扶手椅',
                                    id:'3'
                                },
                                {
                                    name: '桌椅',
                                    id:'4'
                                },
                                {
                                    name: '储物家具',
                                    id:'5'
                                },
                            ]
                        },
                        {
                            name: '厨房',
                            id:'7',
                            children: [
                                {
                                    name: '厨房家具',
                                    id:'8'
                                },
                                {
                                    name: '炊具和烤盘',
                                    id:'9'
                                }
                            ]
                        },
                        {
                            name: '厨房',
                            id:'7',
                            children: [
                                {
                                    name: '厨房家具',
                                    id:'8'
                                },
                                {
                                    name: '炊具和烤盘',
                                    id:'9'
                                }
                            ]
                        },
                        {
                            name: '厨房',
                            id:'7',
                            children: [
                                {
                                    name: '厨房家具',
                                    id:'8'
                                },
                                {
                                    name: '炊具和烤盘',
                                    id:'9'
                                }
                            ]
                        }
                    ]
                }
            }
        },
        components:{
            item
        },
        methods:{
            categorySelect:function(){
                this.categoryShow = !this.categoryShow
            },
            categoryAdd:function(){
                this.$dispatch('addCloneCategory', {})
            },
            categoryDelete:function(deleteid){
                this.categoryTitle='无'
                this.$dispatch('deleteCloneCategory',{deleteid:deleteid})
            }
        },
        events: {'child-msg': function (msg) {
            /**
             * [categoryShow 控制分类下拉列表是否显示]
             * [categoryTitle 显示已选择的分类名称]
             * [$dispatch 通知Category.vue接受选中的值]
             */
            this.categoryShow = !this.categoryShow;
            this.categoryTitle=msg.val;
            this.$set('deleteid',msg.id);
            this.$dispatch('categoryCollect', {msg,'father':false});
            console.log(msg);
        }},
    }
</script>
