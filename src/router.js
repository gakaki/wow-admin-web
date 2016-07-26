export default function(router) {
    router.map({
        '*': {
            breadcrumb: '错误页面',
            component(resolve) {
                require(['./views/Nopage'], resolve)
            }
        },
        '/login': {
            breadcrumb: '登录',
            component(resolve) {
                require(['./views/Login'], resolve)
            }
        },
        '/index': {
            breadcrumb: '网站首页',
            component(resolve) {
                require(['./views/Home'], resolve)
            }
        },
        '/order': {
            breadcrumb: '订单管理',
            component(resolve) {
                require(['./views/order/index'], resolve)
            },
            subRoutes: {
                '/list': {
                    breadcrumb: '订单列表',
                    component(resolve) {
                        require(['./views/order/Orderlist'], resolve)
                    }
                },
                '/list/details/:orderid': {
                    breadcrumb: '订单详情',
                    component(resolve) {
                        require(['./views/order/Orderdetails'], resolve)
                    }
                },
                '/refund': {
                    breadcrumb: '退款列表',
                    component(resolve) {
                        require(['./views/refund/List'], resolve)
                    }
                },
                '/refund/details/:refundid': {
                    breadcrumb: '退款详情',
                    component(resolve) {
                        require(['./views/refund/Details'], resolve)
                    }
                }
            }
        },
        '/goods': {
            breadcrumb: '商品管理',
            component(resolve) {
                require(['./views/goods/index'], resolve)
            },
            subRoutes: {
                '/list': {
                    breadcrumb: '商品列表',
                    component(resolve) {
                        require(['./views/goods/Goods'], resolve)
                    }
                },
                '/addproducts': {
                    breadcrumb: '新增商品',
                    component(resolve) {
                        require(['./views/addproducts/Addproducts'], resolve)
                    }
                },
                '/list/details/:goodsid': {
                    breadcrumb: '商品详情',
                    component(resolve) {
                        require(['./views/goods/Goodsdetails'], resolve)
                    }
                },
                '/combination': {
                    breadcrumb: '组合商品管理',
                    component(resolve) {
                        require(['./views/combination/List'], resolve)
                    }
                },
                '/import': {
                    breadcrumb: '批量导入商品',
                    component(resolve) {
                        require(['./views/goods/Import'], resolve)
                    }
                },
                '/recycle': {
                    breadcrumb: '商品回收站',
                    component(resolve) {
                        require(['./views/recycle/List'], resolve)
                    }
                },
                '/category': {
                    breadcrumb: '分类列表',
                    component(resolve) {
                        require(['./views/category/Category'], resolve)
                    }
                },
                '/category-attr-set': {
                    breadcrumb: '分类属性',
                    component(resolve) {
                        require(['./views/category/CategoryAttrSet'], resolve)
                    }
                },
                '/brand': {
                    breadcrumb: '品牌',
                    component(resolve) {
                        require(['./views/brand/Brand'], resolve)
                    }
                },
                '/designers': {
                    breadcrumb: '设计师',
                    component(resolve) {
                        require(['./views/designers/Designers'], resolve)
                    }
                },
                '/attribute': {
                    breadcrumb: '商品属性',
                    component(resolve) {
                        require(['./views/product_attribute/List'], resolve)
                    }
                }
            }
        }
    })


    router.beforeEach(({
        to,
        from,
        next
    }) => {
        if($.cookie('token')==(''&&undefined)||$.cookie('userName')==(''&&undefined)) {
            router.go('/login')
            console.log(to.path);
            if (to.path=='/login') {
                next()
            }
            return
        }
        let toPath = to.path
        let fromPath = from.path
        //console.log('to: ' + toPath + ' from: ' + fromPath)
        if (toPath.replace(/[^/]/g, '').length > 1) {
            router.app.isIndex = false
        } else {
            let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
            router.app.isIndex = depath ? 0 : 1
        }
        next()
    })

    router.afterEach(function({
        to
    }) {
        //console.log(`成功浏览到: ${to.path}`)
    })
}
