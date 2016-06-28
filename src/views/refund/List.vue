<template>

<ul>
    <item class="item" :model="treeData"></item>
</ul>
<p>
    退款列表
    <a v-link='{ path: "/order/refund/details/201"}'>详情</a>
</p>

</template>

<script type="text/javascript">

import Vue from 'vue'
import item from '../category/Tree'
export default {
    components: {
        item
    },
    data() {
        return {
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
                    }
                ]
            }
        }
    },
    events: {'child-msg': function (msg) {
        console.log(msg);
    }
  }
}

</script>
