<template>
    <div class="col-md-12 addproduct-box-html form-horizontal">
        <div class="well well-sm">其他信息</div>
        <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>运费模板</label>
            <div class="col-sm-2">
                <select class="form-control">
                    <option>请选择</option>
                    <option>通用</option>
                    <option>成人</option>
                    <option>男性</option>
                    <option>女性</option>
                    <option>儿童</option>
                    <option>老人</option>
                 </select>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">
                <span class="text-danger">*</span>
                温馨提示
            </label>
            <div class="col-sm-7">
                <div>
                    <div style="width:100%;height:200px;" id="editor" v-ueditor="content"></div>
                    <hr>
                    <textarea readonly="readonly" placeholder="商品描述" class="form-control" rows="5" v-model="content"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'vue'
    Vue.directive('ueditor', {
        params: ['config'],
        twoWay: true,
        bind: function () {
            var self = this;
            this.el.id = 'ueditor' + new Date().getTime().toString()
            this.editor = UE.getEditor(this.el.id, this.params.config)
            this.editor.ready(function () {
                self.editorReady = true
                self.editor.addListener("contentChange", function () {
                    self.set(self.editor.getContent())
                })
                self.update(self.vm.$get(self.expression))
            })
        },
        update: function (newValue, oldValue) {
            if (this.editorReady) {
                this.editor.setContent(newValue)
            }
        },
        unbind: function () {
            this.editor.destroy()
        }
    })
    export default{
        data(){
            return{
                content: '',
            }
        }
    }
</script>
