<template>
    <div class="row">
        <div class="col-md-12 form-horizontal">
            <common-attr :commonattr.sync="commonattr"></common-attr>
            <Add-option :optionattrobj.sync="selectattrobj" :optiontype="'select'"></Add-option>
        </div>
    </div>
</template>
<script type="text/javascript">
    import commonAttr from './commonAttr'
    import AddOption from  './AddOption'
    export default{
        props:['selectattrobj','commonattr'],
        components:{
            commonAttr,
            AddOption
        }
    }
</script>
