<template>
    <div class="form-group">
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
        <div class="col-sm-4">
            <input name="originCity" v-bind:value="originCity" type="text" class="form-control" placeholder="城市">
            <div class="input-group add-product-hide-input">
                <span style="border-top-left-radius:4px; border-bottom-left-radius:4px;" class="input-group-addon">城市</span>
                <v-select :on-change="setOriginCityId" :value.sync="defaultCity" class="origin_country" label="areaName" :debounce="500" placeholder="搜索城市" :options="cityList" ></v-select>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import vSelect              from    '../../../../components/common/vue-select/src/index.js'
    import {API_ROOT,httpGet}   from    '../../../../config'

    export default{
        props:['originCountryId','originProvinceId','originCity'],
        components:{
            vSelect
        },
        data(){
            return{
                countryList:[],
                provinceList:[],
                cityList:[],
                defaultCountry:{},
                defaultProvince:{},
                defaultCity:{},
            }
        },
        watch:{
            'originCountryId':function(val,oldval){

            }
        },
        events: {
            'countrylist': function (msg) {
                //获取国家数据并设置默认值
                httpGet('v1/country/queryAllCountries',{},'获取国家数据错误',(data) =>{
                    this.$set('countryList',data.data);
                    this.filterObj(data.data,this.originCountryId,'defaultCountry');
                });
            }
        },
        detached(){
            this.$set('countryList',[]);
            this.$set('provinceList',[]);
            this.$set('cityList',[]);
            this.$set('defaultCountry',{});
            this.$set('defaultProvince',{});
            this.$set('defaultCity',{});
        },
        methods:{
            /**
             * 根据国家／省份／城市／三者的id查询列表里面对应的数据
             * id用来筛选data里面哪一条数据的id是匹配的
             * data是从服务器获取的list数据
             * setName指定你想要set数据的变量
             */
            filterObj:function(data,id,setName){
                let defaultCountry = (data) => {
                    if (data.id==id) {
                        this.$set(setName,data)
                    }
                }
                data.filter(defaultCountry);
            },

            /**
             * 设置国家id的值并设置默认值
             * 非中国的国家，不用设置省份城市
             */
            setOriginCountryId:function(val) {
                if (!val) {
                    this.$set('originCountryId','')
                    return;
                }
                if(val.id!=107){
                    console.log(132322);
                    this.$set('originProvinceId',0);
                    this.$set('originCity','');
                    this.$set('defaultProvince',{});
                    this.$set('defaultCity',{});
                }
                if(val.id==107){
                    //如果是中国，获取省份
                    httpGet('v1/area/subarea',{"areaId":0},'获取省份数据错误',(data)=>{
                        this.$set('provinceList',data.data.areaList);
                        this.filterObj(data.data.areaList,this.originProvinceId,'defaultProvince');
                    });
                }
                this.$set('originCountryId',val.id);
            },

            /**
             * 设置省份id的值并设置默认值
             */
            setOriginProvinceId:function(val){
                if (!val) {
                    this.$set('originProvinceId',0)
                    return;
                }
                this.$set('originProvinceId',val.id)
                if (!val.id||val.id=='') {

                }else {
                    //根据省份查询对应的城市
                    httpGet('v1/area/subarea',{"areaId":val.id},'获取城市数据错误',(data)=>{
                        this.$set('defaultCity','')
                        this.$set('cityList',data.data.areaList);
                        this.filterObj(data.data.areaList,this.originCity,'defaultCity');
                    });
                }
            },

            /**
             * 设置城市id的值并设置默认值
             */
            setOriginCityId:function(val){
                if (!val) {
                    this.$set('originCity','')
                    return;
                }
                this.$set('originCity',val.id)
            }
        }
    }
</script>
