/*
* 项目的启动入口
*/

// 加载以下模块组件
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载全局样式文件
import './styles/index.less'

Vue.config.productionTip = false

// 创建 vue 根实例
// 把 router 配置到根实例中
// 通过 render 方法 把APP 根组件渲染到 #app 入口节点
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
