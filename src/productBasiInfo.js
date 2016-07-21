/**
 * productBasiInfo 新增商品－基本信息
 * @type {Object}
 */
export const productBasiInfo = {
    {
        /**
         * 分类文字 三级分类
         * Object
         */
        "SelectcategoryName": {
            "one": "家什",
            "two": "桌几",
            "three": "茶几"
        },
        /**
         * 分类id 三级分类
         * Object
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
         */
        "brandid": {
            "_id": "62",
            "cid": "62",
            "parent_id": "7",
            "level": 2,
            "path": "1/2/7/62",
            "name": "自然家",
            "pinyin": "ziranjia",
            "letter": "Z",
            "image": "/media/catalog/category/_1.jpg",
            "thumbnail": null,
            "is_active": "1",
            "is_anchor": "0",
            "url": "brand/-1967.html",
            "products": [{
                "id": "974",
                "name": "UFO吊灯",
                "sku": "zir02020001"
            }, {
                "id": "1009",
                "name": "同心台灯",
                "sku": "zir02010019"
            }, {
                "id": "1027",
                "name": "烤茶|竹节杯",
                "sku": "zir04010003"
            }],
            "sum": 3,
            "position": 111,
            "is_in_menu": 1,
            "desc": "自然家成立于2006年9月，由设计师易春友（BBKen）和谭雪娇（Corri）创办， 主要从事以天然素材为主的产品设计和室内软装工作。\r\n致力于发掘环保的天然素材与传统手工艺，以新的思考和设计表现，创作出适合现代生活的自 然家品。让自然环保的材料和传统手工艺融入现代生活方式，一直是其工作重点。其产品得到 大自然启发并手工制作，充满人性温暖，同时通过设计品生产和设计创新寻求传统手工艺可持 续发展的可能性。",
            "page_title": "",
            "meta_desc": "",
            "meta_keyword": "",
            "sort_method": ""
        },
        /**
         * designersid 商品设计师 可以多选
         * Array
         */
        "designersid": [{
            "id": 11,
            "name": "设计师名字1",
        }, {
            "id": 22,
            "name": "设计是名字2",
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
         */
        "spec": {
            "long": "100",
            "width": "120",
            "height": "130"
        },
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
    }

}
