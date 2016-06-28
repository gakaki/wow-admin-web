

<template>

<router-view keep-alive>
</router-view>

</template>

<script type="text/javascript">

import {
    permissionsObj
}
from '../../vuex/actions'
export default {
    vuex: {
        actions: {
            SetpermissionsObj: permissionsObj
        }
    },
    route: {
        data: function(transition) {
            this.SetpermissionsObj({
                tag: 'goods'
            });
            if (transition.to.breadcrumb==='商品管理') {
                setTimeout(function(){
                    transition.redirect('/goods/list')
                },0)
            }
        }
    }
}

</script>
