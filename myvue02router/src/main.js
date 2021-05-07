import Vue from 'vue'
import App from './App'
//import VueRouter from 'vue-router'    //router/index.js   中有 import VueRouter from 'vue-router' ，所以此处注释
import router from './router'    //自动扫描文件夹下的路由配置,默认找router/index.js 文件

Vue.config.productionTip = false

//显示声明使用VueRouter
//Vue.use(VueRouter)    //router/index.js   中有 Vue.use(VueRouter); ，所以此处注释

new Vue({
  el: '#app',
  router,      //配置路由
  components: { App },
  template: '<App/>'
})
