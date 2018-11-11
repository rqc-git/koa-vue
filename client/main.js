// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入element-ui样式
import Axios from 'axios'
// 图片预览插件
// import 'viewerjs/dist/viewer.css'
// import Viewer from 'v-viewer'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(Viewer)
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
