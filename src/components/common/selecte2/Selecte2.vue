<!--
vue下拉框本地筛选
配合select2实现
如需ajax请求数据，请使用原生的select2插件实现
-->

<template>

<div>
    <select style="width:100%;" v-select="selected">
        <option value="">请选择</option>
        <option v-for="o in options" :value="o.value">{{ o.label }}</option>
    </select>
</div>

</template>

<script type="text/javascript">

import Vue from 'vue'

Vue.directive('select', {
    twoWay: true,
    priority: 1000,
    params: ['options'],
    bind: function() {
        var self = this
        $(this.el)
            .select2()
            .on('change', function() {
                self.set(this.value)
            })
    },
    update: function(value) {
        $(this.el).val(value).trigger('change')
    },
    unbind: function() {
        $(this.el).off().select2('destroy')
    }
})

export default{
    props:['options','selected']
}

</script>
