<style media="screen">
.tree-box .item {
    cursor: pointer;
}

.tree-box .bold {
    font-weight: bold;
}

.tree-box ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
}

</style>

<template>

<li class="tree-box">
    <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">
        {{model.name}}
        <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
        <item @click.stop.prevent="select(model.name,model.id,model.id)" class="item" v-for="model in model.children" :model="model">
        </item>
    </ul>
</li>

</template>

<script type="text/javascript">

export default {
    name:'item',
    props: {
        model: Object
    },
    data: function() {
        return {
            open: true,
            activeName:null
        }
    },
    computed: {
        isFolder: function() {
            return this.model.children &&
                this.model.children.length
        }
    },
    methods: {
        toggle: function() {
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        select:function(val,id){
            this.$dispatch('child-msg', {val:val,id:id})
        },
        changeType: function() {
            if (!this.isFolder) {
                Vue.set(this.model, 'children', [])
                this.open = true
            }
        }
    }
}

</script>
