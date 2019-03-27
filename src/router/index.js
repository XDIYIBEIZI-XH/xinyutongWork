import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const indexPage = resolve => require(['../page/index/index.vue'], resolve);
const soultion = resolve => require(['../page/soultion/soultion.vue'], resolve);
const aboutus = resolve => require(['../page/aboutus/aboutus.vue'], resolve);
const buildPlan = resolve => require(['../page/buildPlan/buildPlan.vue'], resolve);
const customCase = resolve => require(['../page/customCase/customCase.vue'], resolve);
const contactUs = resolve => require(['../page/contactUs/contactUs.vue'], resolve);


export default new Router({
  routes: [
    //首页
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    //解决方案
    {
      path: '/soultion',
      name: 'soultion',
      component: soultion
    },
    //关于我们
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    //建站方案
    {
      path: '/buildPlan',
      name: 'buildPlan',
      component: buildPlan
    },
    //客户案例
    {
      path: '/customCase',
      name: 'customCase',
      component: customCase
    },
    //联系我们
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    }
  ]
})
