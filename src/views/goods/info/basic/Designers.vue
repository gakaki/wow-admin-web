<template>
    <div class="form-group">
        <label for="firstname" class="col-sm-2 control-label">设计师(可多选)</label>
        <div class="col-sm-4 add-product-hide-input">
            <input v-model="designersid" type="text" class="form-control" placeholder="设计师数组">
            <v-select multiple :value.sync="selected" :on-change="setSelect" label="designerName" :debounce="500" placeholder="设计师" :options="designerslist"></v-select>
            <pre>
                {{designersid|json}}
            </pre>
        </div>
    </div>
    <div class="form-group">
        <label for="firstname" class="col-sm-2 control-label">主设计师</label>
        <div class="col-sm-4 add-product-hide-input">
            <input v-model="primaryTag" type="text" class="form-control" placeholder="主设计师">
            <select @change="isPrimary($event)" class="form-control">
                <option value="" selected>请选择主设计师</option>
                <option v-for="item in designersid" v-bind:value="$index">{{$index}}{{item.designerName}}</option>
             </select>
        </div>
    </div>
</template>
<script type="text/javascript">
    import vSelect      from    '../../../../components/common/vue-select/src/index.js'
    import {API_ROOT}   from    '../../../../config'

    export default{
        props:['designersid'],
        components:{
            vSelect
        },
        data(){
            return{
                selected:[],
                designersIdTag:'',
                primaryTag:'',
                designerslist:[],
            }
        },
        methods:{
            //用户选择设计师之后，给设计师数组设置对应的值
            setSelect:function(val){
                this.$set('designersid',val)
            },

            //设置主设计师
            isPrimary:function(event){
                this.$set('primaryTag',event.target.value)
                if (event.target.value=="") {
                    for(let i=0;i<this.designersid.length;i++){
                        this.$set('designersid['+i+'].primary',false)
                    }
                }else {
                    for(let i=0;i<this.designersid.length;i++){
                        this.$set('designersid['+i+'].primary',false)
                    }
                    this.$set('designersid['+event.target.value+'].primary',true)
                }
                console.log(this.designersid);
            },
        },
        events: {
            'designerslist': function (msg) {
                //获取设计师列表
                this.$http.get(API_ROOT+'admin-api-dev/v1/designer/queryAllDesigner',{}).then((response) => {
                    if (response.data.resCode==0) {
                        for (let i = 0; i < response.data.data.length; i++) {
                            response.data.data[i].primary=false;
                        }
                        this.$set('designerslist',response.data.data);
                    }else {
                    }
                },
                (response) => {
                });
            },
        },
        watch:{
            // 设置主设计师默认值
            'primaryTag':function(val,oldval){
                if (val=='') {
                    return
                }
                for(let i=0;i<this.designersid.length;i++){
                    this.$set('designersid['+i+'].primary',false);
                }
                this.$set('designersid['+val+'].primary',true)
            },

            //如果设计师对数组为空，设置主设计师的值为空
            'designersid':function(val,oldval){
                this.$set('primaryTag','')
            }

            // /**
            //  * 设置默认设计师值
            //  */
            // 'designerslist':function(val, oldvalu){
            //     console.log(111111111111111);
            //     // let findDesigners = (value,index,array) => {
            //     //     if (value.designerId==this.designersIdTag) {
            //     //         this.selected.push(value)
            //     //     }
            //     // };
            //     // //遍历设计师id数组，设置默认值
            //     // for(let a=0; a<this.designersid.length;a++){
            //     //    this.$set('designersIdTag',this.designersid[a].designerId);
            //     //    this.designerslist.find(findDesigners)
            //     // }
            // },
            // 'defaultdesigners':function(val, oldvalu){
            //     let findDesigners = (value,index,array) => {
            //         if (value.designerId==this.designersIdTag) {
            //             this.selected.push(value)
            //         }
            //     };
            //     //遍历设计师id数组，设置默认值
            //     for(let a=0; a<this.defaultdesigners.length;a++){
            //         this.$set('designersIdTag',this.defaultdesigners[a].designerId);
            //         this.designerslist.find(findDesigners)
            //     }
            //     //设置默认主设计师
            //     for(let a=0; a<this.defaultdesigners.length;a++){
            //         if (this.defaultdesigners[a].primary==true) {
            //             this.$set('primaryTag',a);
            //         }
            //     }
            // },
            //

        }
    }
</script>
