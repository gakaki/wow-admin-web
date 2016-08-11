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
    <div v-if="designersid.length>0" class="form-group">
        <label for="firstname" class="col-sm-2 control-label">主设计师</label>
        <div class="col-sm-4 add-product-hide-input">
            <input v-model="primaryTag" type="text" class="form-control" placeholder="主设计师">
            <select v-model="primaryTag" id="primaryTag" @change="isPrimary($event)" class="form-control">
                <option value="" selected>请选择主设计师</option>
                <option v-for="item in designersid" v-bind:value="item.designerId">{{item.designerName}}</option>
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

            //选择主设计师的时候，从已选的数组里面找到对应的设置设计师设置primary=true
            isPrimary:function(event){
                if (event.target.value=="") {
                    for(let i=0;i<this.designersid.length;i++){
                        this.$set('designersid['+i+'].primary',false)
                    }
                }else {
                    let findDesignersTrue = (value,index,array) => {
                        this.designersid[index].primary=false;
                       if(value.designerId==Number(event.target.value)){
                           this.designersid[index].primary=true;
                       }
                    };
                    this.designersid.find(findDesignersTrue)
                }
            },
        },
        events: {
            'designerslist': function (msg) {
                //获取设计师列表
                this.$http.get(API_ROOT+'v1/designer/queryAllDesigner',{}).then((response) => {
                    if (response.data.resCode==0) {
                        //取到设计师数据，全部加上属性primary:false
                        for (let i = 0; i < response.data.data.length; i++) {
                            response.data.data[i].primary=false;
                        }
                        this.$set('designerslist',response.data.data);

                        //遍历已有的设计师，把某个默认主设计师的值改成true
                        for(let a=0; a<this.designersid.length;a++){
                           if (this.designersid[a].primary==true) {
                               let findDesignersTrue = (value,index,array) => {
                                  if(value.designerId==this.designersid[a].designerId){
                                      this.$set('primaryTag',value.designerId);
                                      this.designerslist[index].primary=true;
                                  }
                               };
                               this.designerslist.find(findDesignersTrue)
                           }
                        }

                        // 设置默认设计师列表
                        let findDesigners = (value,index,array) => {
                            if (value.designerId==this.designersIdTag) {
                                this.selected.push(value)
                            }
                        };
                        for(let a=0; a<this.designersid.length;a++){
                           this.$set('designersIdTag',this.designersid[a].designerId);
                           this.designerslist.find(findDesigners)
                        }

                    }else {
                    }
                },
                (response) => {
                });
            },
        },
        detached(){
            this.$set('designersid',[]);
            this.$set('selected',[]);
            this.$set('designersIdTag','');
            this.$set('primaryTag','');
            this.$set('designerslist',[]);
        },
        watch:{
            //设计师的数组变更的时候，把主设计师设置成空
            'designersid.length':function(val,oldval){
                $("#primaryTag").val('')
                this.$set('primaryTag','')
            }
        }
    }
</script>
