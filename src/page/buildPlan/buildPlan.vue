
<template>
  <div class="page">
    <div class="rowFluid">
      <div class="span12">
        <div class="main">
          <div class="page">
            <div class="rowFluid">
              <div class="span12">
                <div class="main">
                  
                  <other-carousel :content="allText">
                  </other-carousel>

                  <div class="template_show">
                    <div class="rowFluid">
                      <div class="span12">
                        <div class="container">
                          <div class="template_show_content" style="min-height: 0px;">
                            <div class="span6 col-xs-12 wow fadeInUp" v-for="(items,index) in planCaseList" :key="index">
                              <div class="template_show_list_box">
                                <div class="template_show_list">
                                  <div class="template_show-container">
                                    <div class="template_show_list_pic">
                                      <a class="front-model">
                                        <img :src="items.imgUrl" :alt="items.planName">
                                      </a>
                                    </div>
                                    <div class="template_show_list_text">
                                      <h3>{{items.planName}}</h3>
                                    </div>
                                    <div class="template_show_list_button">
                                      <a :href="items.planCaseUrl" class="all_button"
                                        :title="items.planName"
                                        target="_blank"
                                      >创建网站</a>
                                      <a :href="items.planShowUrl" class="all_button"
                                        target="_blank"
                                        :title="items.planName"
                                      >预览网站</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="rowFluid">
                            <div class="span12">
                              <div class="web_tip">
                                <h4>如果您想自己设计网站,戳这里</h4>
                                <div class="create_web">
                                  <a
                                    href="http://wpa.qq.com/msgrd?v=3&uin=3294345656&site=qq&menu=yes"
                                    title="快速响应式网站定制"
                                  >高级定制咨询</a>
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
        planCaseList: [
          {'imgUrl': require('../../assets/images/1-1610011634500-L.png'), 'planName': '女装网站', 'planCaseUrl': '#', 'planShowUrl': '#'},
          {'imgUrl': require('../../assets/images/1-1610011634200-L.png'), 'planName': '红木网站', 'planCaseUrl': '#', 'planShowUrl': '#'},
          {'imgUrl': require('../../assets/images/1-1610011634040-L.png'), 'planName': '集团网站', 'planCaseUrl': '#', 'planShowUrl': '#'},
          {'imgUrl': require('../../assets/images/1-1610011633480-L.png'), 'planName': '时尚家居网站', 'planCaseUrl': '#', 'planShowUrl': '#'},
          {'imgUrl': require('../../assets/images/1-1610011600310-L.png'), 'planName': '互联网模板', 'planCaseUrl': '#', 'planShowUrl': '#'},
          {'imgUrl': require('../../assets/images/1-1610011559280-L.png'), 'planName': '明星展示站', 'planCaseUrl': '#', 'planShowUrl': '#'},
        ],
        allText: {
            bannerTitle: '快速免费建站 免网站制作费',
            bannerText: '打破传统高额网站制作费-我们只有域名+空间成本费用'
        }
    }
  },
  components: {
      'other-carousel': OtherCarousel
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>

</style>