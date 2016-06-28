<template>
    <div class="row">
        <div class="col-md-12">
            <ul class="nav nav-tabs">
                <li v-bind:class="{ 'active': cur == $index}" v-for="item in name">
                    <a @click="btnClick({index:$index,status:item.key})"  href="javascript:;">{{item.tab}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        props:['name'],
        data(){
            return{
                cur:0
            }
        },
        methods: {
            btnClick: function(data) {
                this.cur=data.index;
                this.$dispatch('btn-click', data);
            }
        },
    }
</script>
