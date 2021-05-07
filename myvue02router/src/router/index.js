import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main'
import Content01 from '../components/content01'
//安装路由
Vue.use(VueRouter);
//配置导出路由
export default  new VueRouter({
  routes:[
    {
      path: '/content01',   //路由路径
      name: 'content01',
      component: Content01    //跳转的组件
      },
    {
      path: '/main',   //路由路径
      name: 'main',
      component: Main    //跳转的组件
    }
    ]
});
