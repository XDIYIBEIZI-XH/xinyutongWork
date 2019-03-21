import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const indexPage = resolve => require(['../page/index/index.vue'], resolve)
// const indexPage = resolve => require(['../components/MainPage/MainPage.vue'], resolve)

// const TopBanner = resolve => require(['../components/TopBanner/TopBanner.vue'], resolve)
// const MainLunbo = resolve => require(['../components/MainLunbo/MainLunbo.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    }
  ]
})
