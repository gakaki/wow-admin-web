<template>
    <div class="form-group">
        <p>
            省份id：{{originProvinceId}}
        </p>
        <p>
            城市ID：{{originCity}}
        </p>
        <p>
            {{provinceList}}
        </p>
        <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>产地/国家</label>
        <div class="col-sm-4">
            <input name="originCountryId" v-bind:value="originCountryId" type="text" class="form-control" placeholder="国家">
            <div class="input-group add-product-hide-input">
                <span style="border-top-left-radius:4px; border-bottom-left-radius:4px;" class="input-group-addon">国家</span>
                <v-select :on-change="setOriginCountryId" :value.sync="defaultCountry" class="origin_country" label="name" :debounce="500" placeholder="搜索国家" :options="countryList"></v-select>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label for="firstname" class="col-sm-2 control-label">产地/省-市</label>
        <div class="col-sm-4">
            <input name="originProvinceId" v-bind:value="originProvinceId" type="text" class="form-control" placeholder="省份">
            <div class="input-group add-product-hide-input">
                <span style="border-top-left-radius:4px; border-bottom-left-radius:4px;" class="input-group-addon">省份</span>
                <v-select :value.sync="defaultProvince" class="origin_country" :on-change="setOriginProvinceId" label="areaName" :debounce="500" placeholder="搜索省份" :options="provinceList" ></v-select>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import vSelect      from    '../../../../components/common/vue-select/src/index.js'
    import {API_ROOT}   from    '../../../../config'

    export default{
        props:['originCountryId','originProvinceId','originCity'],
        components:{
            vSelect
        },
        data(){
            return{
                countryList:[],
                defaultCountry:{},
                defaultProvince:{},
                provinceList:[],
                cityList:[]
            }
        },
        watch:{
            'originCountryId':function(val,oldval){

            }
        },
        events: {
            'countrylist': function (msg) {
                //获取国家数据
                this.httpGet('v1/country/queryAllCountries',{},'获取国家数据错误',(data) =>{
                    this.$set('countryList',data.data);
                    let defaultCountry = (element) => {
                        if (element.id==this.originCountryId) {
                            this.$set('defaultCountry',element)
                        }
                    }
                    data.data.filter(defaultCountry);
                });
            }
        },
        methods:{
            /**
             * http请求，组件内请求数据调用该方法
             * callback是回调方法，可以在回调里面进行对应的数据绑定
             * url是要请求的url，data是要给传给服务器的参数，errText是错误提示文字
             */
            httpGet:function(url,data,errText,callback){
                let jsontext=JSON.stringify(data);
                this.$http.get(API_ROOT+url,{paramJson:jsontext}).then((response) => {
                    if (response.data.resCode==0) {
                        callback(response.data);
                    }else {
                    }
                }, (response) => {
                });
            },
            /**
             * 设置国家id的值
             * 非中国的国家，不用设置省份城市
             */
            setOriginCountryId(val) {
                if (!val) {
                    this.$set('originCountryId','')
                    return;
                }
                if(val.id!=107){
                    this.$set('originProvinceId','');
                    this.$set('originCity','')
                }
                if(val.id==107){
                    //如果是中国，获取省份
                    this.httpGet('v1/area/subarea',{"areaId":0},'获取省份数据错误',(data)=>{
                        this.$set('provinceList',data.data.areaList);
                    });
                }
                this.$set('originCountryId',val.id);
            },
        }
    }
</script>
