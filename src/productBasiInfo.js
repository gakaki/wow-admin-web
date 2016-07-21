/**
 * productBasiInfo 新增商品－基本信息
 * @type {Object}
 */
export const productBasiInfo = {
    {
        /**
         * 分类文字 三级分类
         * Object
         * 不用提交
         */
        "SelectcategoryName": {
            "one": "家什",
            "two": "桌几",
            "three": "茶几"
        },
        /**
         * 分类id 三级分类
         * Object
         * 提交的时候，只要第三级的分类id
         */
        "Selectcategory": {
            "one": 18,
            "two": 36,
            "three": 10001
        },
        /**
         * 商品名字
         * string
         */
        "productName": "小伙伴系列︱不锈钢随身杯",
        /**
         * 商品卖点
         * string
         */
        "sellingPoin": "还不错的随身杯子",
        /**
         * 商品型号
         * string
         */
        "productId": "A001",
        /**
         * 商品品牌
         * Object
         * 这里只要一个id就够了
         */
        "brandid": 62,
        /**
         * designersid 商品设计师 可以多选
         * Array
         * 需要加个字段标示是否主设计师
         */
        "designersid": [{
            "id": 11,
        }, {
            "id": 22,
        }],
        /**
         * 产地
         * string
         */
        "producer": "福建厦门",
        /**
         * 风格
         * string
         */
        "style": "怀旧风格",
        /**
         * spec 尺寸,单位cm
         * string
         * long-长度，width-宽度，height-高度
         * 这里拆分为3个单独的字段
         */
        "long": "100",
        "width": "120",
        "height": "130"
        /**
         * intendedFor 适用人群
         * string
         * 0-通用，1-成人，2-男性，3-女性，4-儿童，5-老人
         */
        "intendedFor": 4,
        /**
         * customized 是否可定制
         * string
         * true-可以，false-不可以
         */
        "customized": true,
        /**
         * scenarios 适用场景 可多选
         * Array
         * 0-客厅，1-卧室，2-厨房，3-办公室，4-儿童房
         */
        "scenarios": [
            "0",
            "2"
        ],
        /**
         * 材质 material 可多选
         * Array
         * 选项文案还未定案
         */
        "material": [
            "0",
            "1",
            "2",
            "3",
            "4"
        ]
    },

    //修改销售属性数据结构
    productSpecList:[
        {
            color_name:'白色',
            color_url:1111,
            spec:xl,
        },
        {
            color_name:'白色',
            color_url:1111,
            spec:l,
        },
        {
            color_name:'红色',
            color_url:1111,
            spec:xl,
        },
        {
            color_name:'白色',
            color_url:1111,
            spec:l,
        }
    ],

    //销售属性

    //商品详情
    //primary_img数组去掉is_primary字段
    productArr:[
        {name:'不锈钢随身杯',sellingPoin:'卖点1',productModel:'型号1',colorName:'白色',spec:L},
        {name:'不锈钢随身杯',sellingPoin:'卖点1',productModel:'型号1',colorName:'银色',spec:L}
    ]
}
