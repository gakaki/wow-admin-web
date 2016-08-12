<template>
    <div class="form-group">
        <label for="firstname" class="col-sm-2 control-label">设计师(可多选)</label>
        <div class="col-sm-4 add-product-hide-input">
            <input v-model="designersid" type="text" class="form-control" placeholder="设计师数组">
            <v-select multiple :value.sync="selected" :on-change="setSelect" label="designerName" :debounce="500" placeholder="设计师" :options="designerslist"></v-select>
            <pre>
                {{designersid|json}}
            </pre>
        </div>
    </div>


    <div class="form-group">
        <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>产地/国家</label>
        <div class="col-sm-4">
            <div class="input-group add-product-hide-input">
                <input name="originCountryId" v-bind:value="productbasiinfo.origin_country" type="text" class="form-control" placeholder="国家">
                <span style="border-top-left-radius:4px; border-bottom-left-radius:4px;" class="input-group-addon">国家</span>
                <v-select class="origin_country" :on-change="setOriginCountryId" label="name" :debounce="500" :on-search="setOriginCountryCache" placeholder="搜索国家" :options="originCountry"></v-select>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{

            }
        }
    }
</script>
