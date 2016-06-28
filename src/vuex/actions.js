// action 会收到 store 作为它的第一个参数
// 在 store 里我们只需要 dispatch （在有些情况下需要 state）
// 我们可以利用 ES6 的解构（destructuring）语法来简化参数的使用

import Vue from 'vue'
import {API_ROOT} from '../config'

//订单列表
export const orderList=function({dispatch, state},orderlist){
    Vue.http({url: API_ROOT+'adminapi/order/list', data:{page: orderlist.page,status:orderlist.status},method: 'post'})
    .then(res =>
        [dispatch('ORDERLIST',res.data.data)]
    )
    .catch(function(ex) {
        console.log('parsing failed', ex)
    })
}

//订单详情
export const orderDetails=function({dispatch, state},data){
    Vue.http({url: API_ROOT+'/adminapi/order/detail', data:{order_id:data.orderid},method: 'post'})
    .then(res =>
        [dispatch('ORDERDETAILS',res.data.data)]
    )
    .catch(function(ex) {
        console.log('parsing failed', ex)
    })
}

//发货商品列表
export const expressObj=function({dispatch, state},data){
    [dispatch('EXPRESSOBJ',data)]
}

//获取访问菜单
export const permissionsObj=function({dispatch, state},data){
    [dispatch('PERMISSIONS',data)]
}
