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
    product_designer        :   [], //设计师，需要设置一个is_primary字段标示是否主设计师
    origin_country          :   '', //产地国家
    origin_province         :   '', //产地省份
    origin_city             :   '', //产地城市
    style                   :   '', //风格
    long                    :   '', //长度
    width                   :   '', //宽度
    height                  :   '', //高度
    applicable_people       :   '', //适用人群
    can_customize           :   '', //是否可定制
    applicable_scene_text   :   [], //适用场景
    material_text           :   [], //材质
    material_list           :   [], //获取材质的内容数组
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
    {spec:'默认2',selected: true},
    {spec:'',selected: false},
    {spec:'',selected: false},
    {spec:'',selected: false},
    {spec:'',selected: false},
    {spec:'',selected: false},
    {spec:'',selected: false},
    {spec:'',selected: false},
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
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false},
    {spec:'',sell_price:'',weight:'',disabled:false}
]

/**
 * [productSalesAttribute 商品销售属性简单模型，关联specTbodyList跟specTbodyListVal]
 * @type {Object}
 */
export const productSalesAttribute={
    color               :  [
        {
            colorId:1,
            color:'#ffffff',
            name:'白色',
            img:'',
            selected: true,
            specList:specTbodyList,
            specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),
        },
        {
            colorId:2,
            color:'#d5d5d5',
            name:'银色',
            img:'',
            selected: true,
            specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),
        },
        {
            colorId:3,
            color:'#919191',
            name:'灰色',
            img:'',
            selected: false,
            specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),
        },
        {colorId:4,color:'#000000',name:'黑色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {colorId:5,color:'#ff0000',name:'红色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {colorId:6,color:'#fed533',name:'黄色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {colorId:7,color:'#1790c8',name:'蓝色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {colorId:8,color:'#7bba3c',name:'绿色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {colorId:9,color:'#8d429f',name:'紫色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {colorId:10,color:'#cb8b44',name:'原木色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {colorId:11,color:'#941100',name:'棕色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {colorId:12,multi:true,color:['#f00','#fed533','#1790c8','#7bba3c'],name:'花色',img:'',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {
            colorId:13,
            color:'#FF9C00',
            name:'橙色',
            img:'',
            selected: false,
            specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),
        },
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
        {imgDesc:'正面图',imgUrl:'',sortOrder:1,primary:true},
        {imgDesc:'侧面图',imgUrl:'',sortOrder:2,primary:true},
        {imgDesc:'细节图',imgUrl:'',sortOrder:3,primary:true},
        {imgDesc:'细节图',imgUrl:'',sortOrder:4,primary:true},
        {imgDesc:'细节图',imgUrl:'',sortOrder:5,primary:true}
    ],
    detail_description:'',
    img_text_desc:[
        {imgUrl:'',imgDesc:'',primary:false,sortOrder:1},
    ]
}
