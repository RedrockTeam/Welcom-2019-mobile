import Vue from 'vue'
import Router from 'vue-router'



/* 首页六大板块引入组件 */

import home from './components/home.vue'
import notFind from './components/notFound.vue'
import gongLueinit from './components/gonglueinit.vue'
import gongLue from './components/gonglue.vue'
import junXun from './components/junxun.vue'
import huoDong from './components/huodong.vue'
import jieMi from './components/jiemi.vue'
import fengCai from './components/fengcai.vue'


/* 风采四大板块引入 */
import fengZu from './components/fengCai/zuZhi.vue'
import fengVideo from './components/fengCai/video.vue'
import fengYou from './components/fengCai/you.vue'
import fengDai from './components/fengCai/daiBiao.vue'

/* 引入军训四大模块 */
import junJi from './components/junX/jiLV.vue'
import junNei from './components/junX/neiRong.vue'
import junTie from './components/junX/tieShi.vue'
import junVideo from './components/junX/video.vue'

Vue.use(Router)

export default new Router({
  // 改为history模式
  mode: 'hash',
  // 修改active的类名
  linkActiveClass: "active",
  routes: [
    // 首页
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: home
    },

    {
      name: 'junxun',
      path: '/junxun',
      component: junXun
    },
    {
      name: 'huodong',
      path: '/huodong',
      component: huoDong
    },
    {
      name: 'jiemi',
      path: '/jiemi',
      component: jieMi
    },

    {
      name: 'fengcai',
      path: '/fengcai',
      component: fengCai
    },

    // 通用
    {
      path: '*',
      component: notFind
    },
    {
      path: '/gonglue',
      component: gongLueinit,
      children: [{
          name: 'gonglue',
          path: '',
          component: gongLue
        },
        {
          name: 'xinsheng',
          path: 'xinsheng',
          component: () => import('./components/gonglue/xinsheng.vue')
        },
        {
          name: 'jiaotong',
          path: 'jiaotong',
          component: () => import('./components/gonglue/jiaotong.vue')
        },
        {
          name: 'shitang',
          path: 'shitang',
          component: () => import('./components/gonglue/shitang.vue')
        },
        {
          name: 'sushe',
          path: 'sushe',
          component: () => import('./components/gonglue/sushe.vue')
        },
        {
          name: 'gongzhonghao',
          path: 'gongzhonghao',
          component: () => import('./components/gonglue/gongzhonghao.vue')
        },
        {
          name: 'zhoubian',
          path: 'zhoubian',
          component: () => import('./components/gonglue/zhoubian.vue')
        },
      ]
    },

    // 军训
    {
      path: '/junxun',
      component: junXun,
      children: [{
          name: 'jiLv',
          path: '/',
          component: junJi
        },
        {
          name: 'nei',
          path: 'nei',
          component: junNei
        },
        {
          name: 'tie',
          path: 'tie',
          component: junTie
        },
        {
          name: 'junVideo',
          path: 'junVideo',
          component: junVideo
        }
      ]
    },

    // 风采
    {
      path: '/fengcai',
      component: fengCai,
      children: [{
          name: 'zuZhi',
          path: 'zhu',
          component: fengZu
        },
        {
          name: 'You',
          path: 'you',
          component: fengYou
        },
        {
          name: 'Video',
          path: 'video',
          component: fengVideo
        },
        {
          name: 'daiBiao',
          path: 'daiBiao',
          component: fengDai
        }
      ]
    },
    // 活动
    // {
    //   path: '/huodong',
    //   name: 'huodong',
    //   component: huoDong,
    //   children: [
    //       {
    //         path:'help',
    //         name: 'help',
    //         component: () => import('./components/huodong/help/qlist.vue'),
    //       }
    //   ]
    // }   //为啥这样不得行
    {
      path: '/huodong/help',
      name: "help",
      component: () => import('./components/huodong/help/qlist.vue')
    },
    {
      path: '/huodong/help/xiangqing',
      name: 'xiangqing',
      component: () =>  import('./components/huodong/help/xiangqing.vue')
    },
    {
      path: '/huodong/hua',
      name: "hua",
      component: () => import('./components/huodong/huaxiang.vue')
    },

  ]
})