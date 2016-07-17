<template>
    <tbody v-if="listobj.selected==true">
        <tr :img.sync="listobj.img" :name="listobj.name" :index="$index" :speclength="listobj.specList.length" :list="items" v-for="items in listobj.specList" is="Speclist"></tr>
    </tbody>
</template>
<script type="text/javascript">
    import Speclist from './Speclist'
    import {specTbodyList} from '../../model'
    export default{
        props:['listobj'],
        components:{
            Speclist
        },
        created(){
            console.log('哈哈哈');
            //console.log(this.listobj.specList);
            //this.$set('listobj.specList',specTbodyList);
        },
    }
</script>
