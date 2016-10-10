/**
 * 公用方法以及公用常量
 */

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

/**
 * http请求，组件内请求数据调用该方法
 * url是要请求的url，data是要给传给服务器的参数，errText是错误提示文字
 * callback是正确响应时的回调方法，可以在回调里面进行对应的数据绑定
 */
export function httpGet(url,data,errText,callback){
    let jsontext=JSON.stringify(data)
    Vue.http({url: API_ROOT+url, data:{paramJson:jsontext},method: 'get'})
    .then((response) => {
        callback(response.data)
    }, (response) => {
        callback(response)
    });
}
export function httpPost(url,data,errText,callback){
    let jsontext=JSON.stringify(data)
    Vue.http({url: API_ROOT+url, data:{paramJson:jsontext},method: 'post'})
    .then((response) => {
        callback(response.data)
    }, (response) => {
        callback(response)
    });
}

// 根据环境判断对应的数据接口
// export const API_ROOT = 'http://10.0.60.121:9090/';
let get_base_url = function( host="127.0.0.1" ){

    let res                                     = ""
    let default_url                             = "http://admin-api.wowdsgn.com/"

    let match = {
        "/127|local|10.0/":                      default_url,
        "/admin-web.stg.wowdsgn.com/":           "http://admin-api.stg.wowdsgn.com/",
        "/admin-web.wowdsgn.com/":               "http://admin-api.wowdsgn.com/"
    }

    for(let regex in match){
        let url = match[regex]
        if ( regex.match(host) ){
            res =  url
            break;
        }
    }

    if ( !res )   res = default_url
    return res
}
export const API_ROOT = get_base_url(window.location.host);

export const uploadImgLoad= 'http://img.wowdsgn.com/loading.gif';

export const qiNiu={
    uptokenUrl:'http://apidev.dev.wowdsgn.com:8400/apiv1/qiniu/token'
}

export const qiniuimgsrc="http://img.wowdsgn.com/"

//删除数组
Array.prototype.del = function(i) {
    return this.splice( i, 1 )
}

/**
 * [function getFileName]
 * 图片上传之前，使用该方法对图片名字分割，进行md5混淆
 */
export function imgNameSplit(fileName,tag){
    if(fileName){
        let fileNameArr=fileName.split('.');
        let nameLength=fileNameArr.length-1;
        return fileNameArr[nameLength];
    }
}

//左侧菜单配置项
export const leftSider={
    order:[
        {
            path:'/order/list',
            name:'订单管理'
        },
        // {
        //     path:'/order/refund',
        //     name:'退款处理'
        // }
    ],
    goods:[
        {
            path:'/goods/addproducts',
            name:'新增商品'
        },
        {
            path:'/goods/list',
            name:'商品管理'
        },
        // {
        //     path:'/goods/combination',
        //     name:'组合商品管理'
        // },
        // {
        //     path:'/goods/import',
        //     name:'批量导入商品'
        // },
        // {
        //     path:'/goods/recycle',
        //     name:'回收站'
        // },
        // {
        //     path:'/goods/brand',
        //     name:'品牌'
        // },
        // {
        //     path:'/goods/designers',
        //     name:'设计师'
        // },
        // {
        //     path:'/goods/category',
        //     name:'分类管理'
        // },
        // {
        //     path:'/goods/category-attr-set',
        //     name:'分类属性设置'
        // },
        // {
        //     path:'/goods/attribute',
        //     name:'商品属性'
        // }
    ]
}
//
//
//
//快递配置
// export const config_expressInfo =
// {

//     "shunfeng":"顺丰速运",
//     'debangwuliu':"德邦",
//     'xinbangwuliu':"新邦",
//     'shentong':"申通",
//     "zhongtong":"中通",
//     "yuantong":"圆通速递",
//     "rrs":"日日顺",
//     "quanfengkuaidi":"全峰",
//     "yunda":"韵达",
//     "tiantian":"天天",
//     "baishiwuliu":"百世汇通",
//     "zhaijisong":"宅急送",
//     "debangwuliu":"德邦",
//
// }
