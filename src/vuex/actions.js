// action 会收到 store 作为它的第一个参数
// 在 store 里我们只需要 dispatch （在有些情况下需要 state）
// 我们可以利用 ES6 的解构（destructuring）语法来简化参数的使用

import Vue from 'vue'
import {API_ROOT} from '../config'
import WebStorageCache from 'web-storage-cache'

/**
 * 简单包装数据请求方式，get/post
 * 这里只负责dispatch数据的变更，不负责逻辑
 */
export const httpRes={
    get:function({dispatch, state},url,event,data){
        let jsontext=JSON.stringify(data);
        Vue.http({url: API_ROOT+url, data:{paramJson:jsontext},method: 'get'})
        .then(res =>
            [dispatch(event,res.data)]
        )
        .catch(function(ex) {
        })
    },
    post:function({dispatch, state},url,event,data){
        let jsontext=JSON.stringify(data);
        Vue.http({url: API_ROOT+url, data:{paramJson:jsontext},method: 'post'})
        .then(res =>
            [dispatch(event,res.data)]
        )
        .catch(function(ex) {
        })
    }
}

//订单列表
export const orderList=function({dispatch, state},data){
    httpRes.post({dispatch,state},'admin-api-dev/v1/order/getList','ORDERLIST',data);
}

//订单详情
export const orderDetails=function({dispatch, state},data){
    httpRes.get({dispatch,state},'admin-api-dev/v1/order/orderDetail','ORDERDETAILS',data);
}

//发货商品列表
export const expressObj=function({dispatch, state},data){
    [dispatch('EXPRESSOBJ',data)]
}

//获取访问菜单
export const permissionsObj=function({dispatch, state},data){
    [dispatch('PERMISSIONS',data)]
}

//商品列表
export const setProductList=function({dispatch, state},data){
    httpRes.get({dispatch,state},'admin-api-dev/v1/product/pageList','PRODUCTLIST',data);
}
