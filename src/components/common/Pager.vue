
<template>
<div class="text-right">
    <ul class="pagination">
        <li v-if="cur!=1"><a @click="cur--">上一页</a></li>
        <li v-for="index in indexs" v-bind:class="{ 'active': cur == index}"><a @click="btnClick(index)" href="javascript:;">{{ index }}</a></li>
        <li v-if="cur!=all"><a @click="cur++">下一页</a></li>
        <li><a>共<i>{{all}}</i>页</a></li>
    </ul>
</div>

</template>

<script>

export default {
    props: ['cur', 'all'],
    computed: {
        indexs: function() {
            var left = 1
            var right = this.all
            var ar = []
            if (this.all >= 11) {
                if (this.cur > 5 && this.cur < this.all - 4) {
                    left = this.cur - 5
                    right = this.cur + 4
                } else {
                    if (this.cur <= 5) {
                        left = 1
                        right = 10
                    } else {
                        right = this.all
                        left = this.all - 9
                    }
                }
            }
            while (left <= right) {
                ar.push(left)
                left++
            }
            return ar
        }
    },
    methods: {
        btnClick: function(data) {
            if (data != this.cur) {
                this.cur = data
            }
        }
    },
    watch: {
        cur: function(oldValue, newValue) {
            //监听组件回调事件
            this.$dispatch('btn-click', oldValue);
            window.scrollTo(0,0);
            //console.log(arguments)
        }
    }
}

</script>
