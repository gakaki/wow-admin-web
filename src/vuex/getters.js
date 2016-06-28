// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count

//订单列表
export function getOrderlist (state) {
    return state.orderlist
}

//订单列表
export function getOrderdetails (state) {
    return state.orderdetails
}

//发货商品列表
export function getExpressobj (state) {
    return state.expressobj
}

//获取访问菜单
export function getPermissions(state){
    return state.permissions
}
