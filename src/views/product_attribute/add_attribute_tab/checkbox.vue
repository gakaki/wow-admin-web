<template>
    <div class="row">
        <div class="col-md-12 form-horizontal">
            <common-attr :commonattr.sync="commonattr"></common-attr>
            <Add-option :optionattrobj.sync="checkboxattrobj"></Add-option>
        </div>
    </div>
</template>
<script type="text/javascript">
    import commonAttr from './commonAttr'
    import AddOption from  './AddOption'
    export default{
        props:['checkboxattrobj','commonattr'],
        components:{
            commonAttr,
            AddOption
        }
    }
</script>
