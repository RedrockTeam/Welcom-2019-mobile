import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 在 webpack 环境下指向 components/ECharts.vue
// 需要npm install --save vue-echarts

import ECharts from 'vue-echarts' 
import Axios from 'axios'
import './assets/css/common.css'

/* 引入图片预览插件 */

import VuePreview from 'vue-preview'




import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/pie'


// 注册组件后即可使用
Vue.component('v-chart', ECharts)


// 引入注册全局通用框架组件
import frame from '@/components/base/frame.vue'
Vue.component('frame', frame)

import mainCard from '@/components/base/maincard.vue'
Vue.component('mainCard',mainCard)

import btnH from '@/components/cardheader/btnH.vue'
Vue.component('btnH',btnH)

import convery from '@/components/animation/convery.vue'
Vue.component('convery-vue' , convery)

import bubble from '@/components/animation/bubble.vue'
Vue.component('bubble-vue' , bubble)

import converyB from './components/cardheader/BeltH.vue'
Vue.component('converyB-vue' , converyB)





import axios from 'axios'
// import Qs from 'qs'
Vue.prototype.axios = axios;
// Vue.prototype.qs = Qs



/* //引入vue中移动端屏幕触发事件 */
import VueTouch from 'vue-touch'




import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css' 
Vue.use(VideoPlayer) 

Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 100 /* //手指左右滑动距离 */
}

Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: true,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: true
})
Vue.prototype.$axios = Axios
// Vue.component('detail-vue', details)



Vue.use(router)

// 产品要发布时构建信息的提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
