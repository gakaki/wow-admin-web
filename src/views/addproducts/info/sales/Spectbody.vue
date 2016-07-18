<template>
    <tbody v-show="listobj.selected==true">
        <tr :tbody_index="tbody_index" :img.sync="listobj.img" :name="listobj.name" :index="$index" :speclength="listobj.specList.length" :list="items" v-for="items in listobj.specList" is="Speclist" :lists="listobj.specListVal[$index]" :spec_select_length="spec_select"></tr>
    </tbody>
</template>
<script type="text/javascript">
    import Speclist from './Speclist'
    import {specTbodyList} from '../../model'
    export default{
        props:['listobj','tbody_index','spec_select'],
        components:{
            Speclist
        }
    }
</script>
