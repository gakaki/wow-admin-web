/**
 * 新增商品模型
 */

 import {qiniuimgsrc} from '../../config'

/**
 * [productBasiInfo 商品公用字段]
 * @type {Object}
 */
export const productBasiInfo = {
    SelectcategoryName      :   {one:null,two:null,three:null}, //分类显示文字
    Selectcategory          :   {one:null,two:null,three:null}, //分类id
    product_name            :   '', //产品名字
    selling_point           :   '', //产品卖点
    product_model           :   '', //商品型号
    brand_id                :   '', //品牌ID
    product_designer        :   [], //需要设置一个is_primary字段标示是否主设计师
    origin_city             :   '', //产地
    style                   :   '', //风格
    long                    :   '', //长度
    width                   :   '', //宽度
    height                  :   '', //高度
    applicable_people       :   '', //适用人群
    can_customize           :   '', //是否可定制
    applicable_scene_text   :   [], //适用场景
    material_text           :   [], //材质
}

/**
 * [imgIndex 七牛展示图片地址超链接]
 * @type {Object}
 */
export const imgIndex={
    qiniuurl:qiniuimgsrc,
    img_index:'',
    set_img_index:function(index){
        return this.img_index=index;
    }
}

/**
 * [specTbodyList 定义规格预设值：是否选中]
 * @type {Array}
 */
export const specTbodyList=[
    {spec:'默认',selected: true},
    {spec:'默认2',selected: false},
    {spec:'',selected: false},
    {spec:'',selected: false},
    {spec:'',selected: false},
    {spec:'',selected: false},
    {spec:'',selected: false},
    {spec:'',selected: false}
]

/**
 * [specTbodyListVal 定义规格预留值：售价－活动价－进货价－到货周期－重量]
 * @type {Array}
 */
export const  specTbodyListVal=[
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',disabled:false}
]

/**
 * [productSalesAttribute 商品销售属性简单模型，关联specTbodyList跟specTbodyListVal]
 * @type {Object}
 */
export const productSalesAttribute={
    color               :  [
        {
            color:'#ffffff',
            name:'白色',
            img:'',
            selected: true,
            specList:specTbodyList,
            specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),
        },
        {
            color:'#d5d5d5',
            name:'银色',
            img:'',
            selected: false,
            specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),
        },
        {
            color:'#919191',
            name:'灰色',
            img:'',
            selected: false,
            specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),
        },
        {color:'#000000',name:'黑色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#ff0000',name:'红色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#fed533',name:'黄色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#1790c8',name:'蓝色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#7bba3c',name:'绿色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#8d429f',name:'紫色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#cb8b44',name:'原木色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#941100',name:'棕色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {multi:true, color:['#f00','#fed533','#1790c8','#7bba3c'],name:'花色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),}
    ],
    colorSelect         :   [],
    specSelect          :   [],
}

/**
 * [Productdetails 商品详情]
 * @type {Object}
 */
export const productDetails={
    primary_img:[
        {img_desc:'正面图',img_url:'',sort_order:0},
        {img_desc:'侧面图',img_url:'',sort_order:1},
        {img_desc:'细节图',img_url:'',sort_order:2},
        {img_desc:'细节图',img_url:'',sort_order:3},
        {img_desc:'细节图',img_url:'',sort_order:4}
    ],
    detail_description:'',
    img_text_desc:[
        {img:'',img_desc:'',sort:0},
    ]
}
