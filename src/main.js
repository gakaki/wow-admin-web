import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router'
import VueBreadcrumbs from 'vue-breadcrumbs'
import './assets/css/style.css'
import './assets/css/validator.css'

//Vue面包屑Breadcrumbs
Vue.use(VueBreadcrumbs)

//引入过滤器
Vue.filter('byteFormat', require('components/common/filter/ZeroFill.js'));


//使用VueResource
Vue.use(VueResource)
// Vue.http.options.crossOrigin = true;
// Vue.http.options.credentials = true;
// Vue.http.options.emulateJSON = true;
Vue.http.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
Vue.http.options.emulateJSON = true

Vue.use(VueRouter)
const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
routerConfig(router)

// Resource
Vue.use(VueResource)

router.start(App, '#app')
window.router = router
