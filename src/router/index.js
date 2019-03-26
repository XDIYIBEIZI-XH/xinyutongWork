import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const indexPage = resolve => require(['../page/index/index.vue'], resolve);
const soultion = resolve => require(['../page/soultion/soultion.vue'], resolve);
const aboutus = resolve => require(['../page/aboutus/aboutus.vue'], resolve);
const buildPlan = resolve => require(['../page/buildPlan/buildPlan.vue'], resolve);
const customCase = resolve => require(['../page/customCase/customCase.vue'], resolve);
const contactUs = resolve => require(['../page/contactUs/contactUs.vue'], resolve);

// const TopBanner = resolve => require(['../components/TopBanner/TopBanner.vue'], resolve)
// const MainLunbo = resolve => require(['../components/MainLunbo/MainLunbo.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/soultion',
      name: 'soultion',
      component: soultion
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/buildPlan',
      name: 'buildPlan',
      component: buildPlan
    },
    {
      path: '/customCase',
      name: 'customCase',
      component: customCase
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    }
  ]
})
