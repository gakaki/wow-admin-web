/**
 * 公用方法以及公用常量
 */
//export const API_ROOT = 'http://apidev.dev.wowdsgn.com/';
// export const API_ROOT = 'http://10.0.60.166:9090/';
export const API_ROOT = 'http://10.0.60.121:9090/';
// export const MOBILE_API_ROOT = 'http://10.0.60.121:8080/';

export const uploadImgLoad= 'data:image/gif;base64,R0lGODlhFAAUAOMIAAAAABoaGjMzM0xMTGZmZoCAgJmZmbKysv///////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQBCgAIACwAAAAAFAAUAAAEUxDJSau9CADMteZTEEjehhzHJYqkiaLWOlZvGs8WDO6UIPAGw8TnAwWDEuKPcxQml0YnjzcYYAqFS7VqwWItWyuCQJB4s2AxmWxGg9bl6YQtl0cAACH5BAEKAA8ALAAAAAAUABQAAART8MlJq70vBMy15pMgSN72AMAliqSJotY6Vm8azxYM7tQw8IfDxOcDBYMS4o9zFCaXRiePRyBgDIZLtWrBYi1b66NQkHizYDGZbEaD1uXphC2XRwAAIfkEAQoADwAsAAAAABQAFAAABFPwyUmrvU8IzLXm0zBI3vYEwSWKpImi1jpWbxrPFgzuFEHwAMDE5wMFgxLij3MUJpdGJ49XKGAOh0u1asFiLVvrw2CQeLNgMZlsRoPW5emELZdHAAAh+QQBCgAPACwAAAAAFAAUAAAEU/DJSau9bwzMteYTQUje9gjCJYqkiaLWOlZvGs8WDO5UUfCBwMTnAwWDEuKPcxQml0Ynj2cwYACAS7VqwWItW+vjcJB4s2AxmWxGg9bl6YQtl0cAACH5BAEKAA8ALAAAAAAUABQAAART8MlJq72PEMy15lNRSN72DMMliqSJotY6Vm8azxYM7pRh8ALBxOcDBYMS4o9zFCaXRiePdzhgAoFLtWrBYi1b6wMAkHizYDGZbEaD1uXphC2XRwAAIfkEAQoADwAsAAAAABQAFAAABFPwyUmrva8UzLXmk2FI3vYQxCWKpImi1jpWbxrPFgzu1HHwg8HE5wMFgxLij3MUJpdGJ48HAGAEgku1asFiLVvrIxCQeLNgMZlsRoPW5emELZdHAAAh+QQBCgAPACwAAAAAFAAUAAAEU/DJSau9zxjMtebTcUje9hTFJYqkiaLWOlZvGs8WDO4UAPAEwsTnAwWDEuKPcxQml0YnjxcIYAaDS7VqwWItW+tDIJB4s2AxmWxGg9bl6YQtl0cAACH5BAEKAA8ALAAAAAAUABQAAART8MlJq73vHMy15hMASN72GMYliqSJotY6Vm8azxYM7lQQ8IXCxOcDBYMS4o9zFCaXRiePJxBgCIRLtWrBYi1b62MwkHizYDGZbEaD1uXphC2XRwAAOw==';

export const qiNiu={
    uptokenUrl:'http://apidev.dev.wowdsgn.com:8400/apiv1/qiniu/token'
}

export const qiniuimgsrc="http://o7s1lyy5h.bkt.clouddn.com/"

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

//判断登录
export function islogin(response) {
    return{
        judge:function(key,value){
            console.log(123232);
        }
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
        // {
        //     path:'/goods/list',
        //     name:'商品管理'
        // },
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
