<template>
    <div class="containerPadding">
        暂无内容
    </div>
</template>
<script type="text/javascript">

import {
    permissionsObj
}
from '../vuex/actions'
export default {
    vuex: {
        actions: {
            SetpermissionsObj: permissionsObj
        }
    },
    route: {
        data: function(transition) {
            this.SetpermissionsObj({
                tag: 'index'
            });
        }
    }
}

</script>
