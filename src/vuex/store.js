import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个 object 存储应用启动时的状态
const state = {
    permissions:{},
    orderlist:{
        data:{
            orderLists:[]
        }
    },
    expressobj:{
        tag:false,
        orderid:null,
        name:null,
        phone:null,
        address:null,
        itemlist:[]
    },
    orderdetails:{
        data:{
            deliveryOrders:[],
            unShipOutOrderItems:[]
        }
    }
}

// 创建一个 object 存储 mutation 函数
const mutations = {
    /*
    mutation 的第一个参数是当前的 state
    你可以在函数里修改 state
     */

    //订单列表数据
    ORDERLIST(state,res){
        state.orderlist=res;
    },
    //订单详情
    ORDERDETAILS(state,res){
        state.orderdetails=res;
    },
    //发货商品列表
    EXPRESSOBJ(state,res){
        state.expressobj=res;
    },
    //获取访问菜单
    PERMISSIONS(state,res){
        //console.log(res);
        state.permissions=res;
    }
}

// 通过 new Vuex.Store 结合初始 state 和 mutations，创建 store
// 这个 store 将和我们的 vue 应用链接起来
export default new Vuex.Store({
    state,
    mutations
})
