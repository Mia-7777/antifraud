import uView from '@/uni_modules/uview-ui'

// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 使用uview组件库
Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif