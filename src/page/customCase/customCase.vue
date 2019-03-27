
<template>
  <div class="page">
    <div class="rowFluid">
      <div class="span12">
        <div class="main">

          <other-carousel :content="allText">
          </other-carousel>

          <div class="support_type">
            <div class="rowFluid">
              <div class="span12">
                <div class="container">
                  <div class="support_type_content">
                    <div class="span2 col-xs-4">
                      <a class="support_type_list normal"
                        title="PC网站案例"
                        @click.prevent="diffCase('pc')"
                        :class="{'active': diffType == 'pc'}"
                      >PC网站案例</a>
                    </div>

                    <div class="span2 col-xs-4">
                      <a class="support_type_list normal"
                        title="三合一网站案例"
                        @click.prevent="diffCase('boot')"
                        :class="{'active': diffType == 'boot'}"
                      >三合一网站案例</a>
                    </div>

                    <div class="span2 col-xs-4">
                      <a class="support_type_list normal"
                        title="政府机构案例"
                        @click.prevent="diffCase('gov')"
                        :class="{'active': diffType == 'gov'}"
                      >政府机构案例</a>
                    </div>

                    <div class="span2 col-xs-4">
                      <a class="support_type_list normal"
                        title="行业门户案例"
                        @click.prevent="diffCase('industry')"
                        :class="{'active': diffType == 'industry'}"
                      >行业门户案例</a>
                    </div>

                    <div class="span2 col-xs-4">
                      <a class="support_type_list normal"
                        title="购物商城案例"
                        @click.prevent="diffCase('shop')"
                        :class="{'active': diffType == 'shop'}"
                      >购物商城案例</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="case_show">
                <div class="rowFluid">
                  <div class="span12">
                    <div class="container">
                      <div class="case_show_content">
                        <div class="case_show_list wow fadeInUp" v-for="(items,index) in customCaseList" :key="index">
                          <div class="span7 col-xm-6 col-sm-12">
                            <div class="case_show_pic">
                              <img :src="items.imgUrl" :alt="items.caseName">
                            </div>
                          </div>
                          <div class="span5 col-xm-6 col-sm-12">
                            <div class="case_show_brief">
                              <h3 class="case_show_brief_title">
                                <span></span>{{items.caseName}}
                              </h3>
                              <div class="case_show_brief_text">
                                <p>{{items.caseText}}</p>
                              </div>
                              <div class="case_show_brief_button">
                                <a href="#" :title="items.caseTitle" class="all_button" target="_blank">查看站点</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="know_more wow fadeInUp">
                        <div class="know_more_text">了解更多建站服务或加盟事宜，敬请联系</div>
                        <a
                          target="_blank"
                          class="all_button"
                          href="http://wpa.qq.com/msgrd?v=3&uin=3294345656&site=qq&menu=yes"
                          title="响应式建站咨询"
                        >建站咨询</a>
                        <a
                          target="_blank"
                          class="all_button"
                          href="http://wpa.qq.com/msgrd?v=3&uin=3294345656&site=qq&menu=yes"
                          title="建站平台加盟咨询"
                        >加盟咨询</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OtherCarousel from '../../components/OtherCarousel/OtherCarousel.vue'

export default {
  data() {
    return {
        // customList: [],
        pcCaseList: [
          {'imgUrl': require('../../assets/images/1-1610011632240-L.png'), 'caseName': '厦门国际动漫节官网', 'caseText': '厦门国际动漫节金海豚动画作品大赛是一项由政府、业界、学界支持的中国动画界最权威、影响面最广的赛事之一。通过中外动画作品交流评比，挖掘国内优秀动画作品和人才，促进中...','caseTitle': '厦门国际动漫节官网','caseBtn': '查看站点'},
          {'imgUrl': require('../../assets/images/1-1610011631540-L.png'), 'caseName': '益才猎头ECHR-官方网站', 'caseText': '益才猎头（ECHR）是一家专业的招聘整体解决方案供应商。致力于研究和提供定制性人力资本解决方案，在高端人才寻聘、招聘流程外包及行业调查服务等方面，为客户提供优质服务...','caseTitle': '益才猎头ECHR-官方网站','caseBtn': '查看站点'},
          {'imgUrl': require('../../assets/images/1-1610011631240-L.png'), 'caseName': '非凡品位网站', 'caseText': 'We have been committed to the development of high-end watches, when a product is repeatedly to overturn to overthrow again, keep the design of the polishing until (till) the final finished product shipments it is no longer a simple product,...','caseTitle': '非凡品位网站','caseBtn': '查看站点'},
          {'imgUrl': require('../../assets/images/1-1610011632240-L.png'), 'caseName': '世界之钻官网', 'caseText': '世界之钻品牌一直坚持不懈，为成为全球认知的品牌所奋斗。作为知名奢侈品牌，集团致力为全球顾客提供优秀饰品，以进一步确立其国际市场上声望。源自「真挚  品质」历久不变...','caseTitle': '世界之钻官网','caseBtn': '查看站点'},
          
          {'imgUrl': require('../../assets/images/1-161001153Z50-L.png'), 'caseName': '潮连旅游网', 'caseText': '潮连旅游网----江门地区首个乡村旅游特色网站门户。主要介绍了潮连旅游文化、餐饮美食、特色祠堂、潮连景点、交通线路、新闻资讯、商家推广等。...','caseTitle': '潮连旅游网','caseBtn': '查看站点'},
        ],
        bootCaseList: [
          {'imgUrl': require('../../assets/images/1-1610011631020-L.png'), 'caseName': '印象摄影', 'caseText': '印象摄影有限公司属于中国高端旅游婚纱摄影，专注于新人婚纱摄影服务，成立于2010年。自成立以来，一直秉承品质优先 服务至上的品牌理念及一切以人为本，以客为尊的服务理念，不...','caseTitle': '印象摄影','caseBtn': '查看站点'}
        ],
        govCaseList: [
          {'imgUrl': require('../../assets/images/1-1610011631240-L.png'), 'caseName': '非凡品位网站', 'caseText': 'We have been committed to the development of high-end watches, when a product is repeatedly to overturn to overthrow again, keep the design of the polishing until (till) the final finished product shipments it is no longer a simple product,...','caseTitle': '非凡品位网站','caseBtn': '查看站点'},
          {'imgUrl': require('../../assets/images/1-1610011632240-L.png'), 'caseName': '世界之钻官网', 'caseText': '世界之钻品牌一直坚持不懈，为成为全球认知的品牌所奋斗。作为知名奢侈品牌，集团致力为全球顾客提供优秀饰品，以进一步确立其国际市场上声望。源自「真挚  品质」历久不变...','caseTitle': '世界之钻官网','caseBtn': '查看站点'}
        ],
        allText: {
            bannerTitle: '互联网+时代 你还没准备?',
            bannerText: '高逼格，你也可以拥有，织梦58引领网站新风尚'
        },
        diffType: 'pc'
    }
  },
  computed: {
    customCaseList: function(){
      switch(this.diffType){
        case 'pc': 
        // console.log('------------'+JSON.stringify(this.pcCaseList));
        // return this.customList.push(this.pcCaseList); push()方法向数组末尾添加元素，并返回新长度
        return this.pcCaseList;
        break;

        case 'boot': 
        return this.bootCaseList;
        break;

        case 'gov': 
        return this.govCaseList;
        break;
      }
    } 
  },
  components: {
    'other-carousel': OtherCarousel
  },
  methods: {
    diffCase: function(item){
      this.diffType = item;
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>

</style>