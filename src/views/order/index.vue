

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
            this.SetpermissionsObj({tag: 'order'});
            if (transition.to.breadcrumb==='订单管理') {
                setTimeout(function(){
                    transition.redirect('/order/list')
                },0)
            }
        }
    }
}

</script>
