/**
 * 新增商品模型
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

//定义属性对应的值
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

//定义规格预设值
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

export const productSalesAttribute={
    color               :  [
        {
            color:'#ffffff',
            name:'白色',
            img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',
            selected: true,
            specList:specTbodyList,
            specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),
        },
        {
            color:'#d5d5d5',
            name:'银色',
            img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',
            selected: true,
            specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),
        },
        {
            color:'#919191',
            name:'灰色',
            img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',
            selected: false,
            specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),
        },
        {color:'#000000',name:'黑色',img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#ff0000',name:'红色',img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#fed533',name:'黄色',img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#1790c8',name:'蓝色',img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#7bba3c',name:'绿色',img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#8d429f',name:'紫色',img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#cb8b44',name:'原木色',img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {color:'#941100',name:'棕色',img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),},
        {multi:true, color:['#f00','#fed533','#1790c8','#7bba3c'],name:'花色',img:'http://localhost:8080/static/img/file_242_2.45181cb.jpg',selected: false,specList:specTbodyList,specListVal:JSON.parse(JSON.stringify(specTbodyListVal)),}
    ],
    colorSelect         :   [],
    specSelect          :   [],
}
