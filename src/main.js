import Vue from 'vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import app from './app.vue'

import './css/common.css'

/* 引入图片预览插件 */

import VuePreview from 'vue-preview'

/* 首页六大板块引入组件 */

import home from './components/home.vue'
import notFind from './components/notFound.vue'
import gongLue from './components/gonglue.vue'
import junXun from './components/junxun.vue'
import huoDong from './components/hongdong.vue'
import jieMi from './components/jiemi.vue'
import fengCai from './components/fengcai.vue'
import We from './components/we.vue'
/* //揭秘引入三大板块组件 */
import Gender from './components/jiemi/Gender.vue'
import Subject from './components/jiemi/Subject.vue'
import Students from './components/jiemi/students.vue'
/* //引入揭秘中公用组件展示详情 */
import details from './components/jiemi/details.vue'

/* //引入vue中移动端屏幕触发事件 */
import VueTouch from 'vue-touch'
/* //引入图片 */
/* import './components/img/3.jpg'
import './components/img/雏田.jpg'
import './components/img/yy.jpg' */
/* //引入视频插件 */
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

Vue.use(VideoPlayer)
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 100 /* //手指左右滑动距离 */
}
Vue.use(VueRouter)
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})
Vue.prototype.$axios = Axios
Vue.component('detail-vue', details)
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    {
      name: 'home', path: '/home', component: home 
    },
    {
      name: 'gonglue', path: '/gonglue', component: gongLue
    },
    {
      name: 'junxun', path: '/junxun', component: junXun
    },
    {
      name: 'huodong', path: '/huodong', component: huoDong
    },
    {
      path: '/jiemi',  component: jieMi,
      children:[
        {path: '/', component: Gender},
        {name: 'Gender', path: 'Gender', component: Gender},
        {name: 'subject ', path: 'subject', component: Subject},
        {name: 'students', path: 'students', component: Students}
      ]
    },
    {
      name: 'fengcai', path: '/fengcai', component: fengCai
    },
    {
      name: 'we', path: '/we', component: We
    },
    {
      path: '*', component : notFind
    }
  ]
})

new Vue({
    el:'#app',
    render(c){
        return c(app)
    },
    router : router,
})