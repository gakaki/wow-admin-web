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
    size                :   {long:'',width:'',height:''},
    intendedFor         :   '',
    customized          :   '',
    scenarios           :   [],
    material            :   [],
}
export const productSalesAttribute={
    color               :   [
        {color:'#ffffff',name:'白色',selected: false},
        {color:'#d5d5d5',name:'银色',selected: false},
        {color:'#919191',name:'灰色',selected: false},
        {color:'#000000',name:'黑色',selected: false},
        {color:'#ff0000',name:'红色',selected: false},
        {color:'#fed533',name:'黄色',selected: false},
        {color:'#1790c8',name:'蓝色',selected: false},
        {color:'#7bba3c',name:'绿色',selected: false},
        {color:'#8d429f',name:'紫色',selected: false},
        {color:'#cb8b44',name:'原木色',selected: false},
        {color:'#941100',name:'棕色',selected: false},
        {multi:true, color:['#f00','#fed533','#1790c8','#7bba3c'],name:'花色',selected: false}
    ],
    colorSelect         :   [],
}
