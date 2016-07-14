/**
 * 新增商品模型
 */
export const productBasiInfo = {
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
    // customAttributes    :   [
    //     {
    //         'input':[
    //             {code:'test1',name:'自定义文本1',value:null,min:2,max:10,required:true},
    //             {code:'test2',name:'自定义文本2',value:null,min:2,max:20,required:false}
    //         ],
    //         'textarea':[
    //             {code:'test3',name:'自定义文本区1',value:null,min:20,max:50,required:true},
    //             {code:'test4',name:'自定义文本区2',value:null,min:10,max:30,required:false}
    //         ],
    //         'select':[
    //             {code:'test5',name:'自定义下拉菜单1',value:'111',selected:true},
    //             {code:'test6',name:'自定义下拉菜单2',value:'222',selected:false}
    //         ],
    //         'checkbox':[
    //             {code:'test7',name:'多选项卡1',value:'444',selected:true},
    //             {code:'test8',name:'多选项卡2',value:'555',selected:false}
    //         ]
    //     }
    // ],
}
