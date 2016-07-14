

<template>

<div>
    <select style="width:100%;" v-select="selected">
        <option value="">请选择</option>
        <option v-for="o in options" :value="o.id">{{ o.text }}</option>
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
