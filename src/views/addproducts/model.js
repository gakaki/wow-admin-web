/**
 * 新增商品模型
 */

 import {qiniuimgsrc} from '../../config'

/**
 * [productBasiInfo 商品公用字段]
 * @type {Object}
 */
export const productBasiInfo = {
    SelectcategoryName  :   {one:null,two:null,three:null},
    Selectcategory      :   {one:null,two:null,three:null},
    productName         :   '',
    sellingPoin         :   '',
    productId           :   '',
    brandid             :   '',
    designersid         :   [
                                { id: ''},
                            ],
    producer            :   '',
    style               :   '',
    spec                :   {long:'',width:'',height:''},
    intendedFor         :   '',
    customized          :   '',
    scenarios           :   [],
    material            :   [],
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
    {spec:'',selected: false}
]

/**
 * [specTbodyListVal 定义规格预留值：售价－活动价－进货价－到货周期－重量]
 * @type {Array}
 */
export const  specTbodyListVal=[
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',sku:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',sku:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',sku:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',sku:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',sku:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',sku:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',sku:'',disabled:false},
    {spec:'',sell_price:'',activity_price:'',cost_price:'',weight:'',arrivalPeriod:'',sku:'',disabled:false}
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
            selected: true,
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
        {tag:'正面图',img:'',is_primary:1,sort:0},
        {tag:'侧面图',img:'',is_primary:1,sort:1},
        {tag:'细节图',img:'',is_primary:1,sort:2},
        {tag:'细节图',img:'',is_primary:1,sort:3},
        {tag:'细节图',img:'',is_primary:1,sort:4}
    ],
    text_desc:'',
    img_text_desc:[
        {img:'',img_desc:'',sort:0},
    ]
}
