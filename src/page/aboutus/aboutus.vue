
<template>
  <div class="page">
    <div class="rowFluid">
      <div class="span12">
        <div class="main">

          <other-carousel :content="allText">
          </other-carousel>

          <div class="introduce wow fadeInUp">
            <div class="rowFluid">
              <div class="span12">
                <div class="container">
                  <div class="all_title1">
                    <h3 class="title">xxxx工作室简介</h3>
                    <div class="text">DEDE58WANGLUO PLATFORM PROFILE</div>
                  </div>
                  <div class="rowFluid">
                    <div class="introduce_content">
                      <div class="span6 col-xm-12">
                        <div class="introduce_list">
                          <div class="introduce_list_brief" v-for="(items,index) in introduceList" :key="index">
                            <div class="introduce_list_title">{{items.factoryName}}</div>
                            <div class="introduce_list_text">{{items.factoryType}}</div>
                          </div>
                        </div>
                      </div>
                      <div class="span6 col-xm-12">
                        <div class="introduce_list">
                          <div class="introduce_list_img">
                            <img :src="growUpBg" alt="响应式建站加盟">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cloud_platform wow fadeInUp">
            <div class="rowFluid">
              <div class="span12">
                <div class="container">
                  <div class="all_title2">
                    <h3 class="title">xxxx2016云平台</h3>
                    <div class="text">DEDE58 2016 CLOUD PLATFORM</div>
                  </div>
                  <div class="cloud_platform_content">
                    <div class="span4 col-xs-12">
                      <div class="cloud_platform_list">
                        <div class="cloud_platform_list_title">快速建站</div>
                        <div
                          class="cloud_platform_list_text"
                        >业内领先的智能模块建站方案，能帮助企业低成本快速建站，为企业提供了多元、高效建站服务</div>
                      </div>
                    </div>
                    <div class="span4 col-xs-12">
                      <div class="cloud_platform_list">
                        <div class="cloud_platform_list_title">营销平台</div>
                        <div
                          class="cloud_platform_list_text"
                        >融合当今主流的各种的互联网营销工具，结合响应式网站窗口优势，达到高效引流、精准转化的效果</div>
                      </div>
                    </div>
                    <div class="span4 col-xs-12">
                      <div class="cloud_platform_list">
                        <div class="cloud_platform_list_title">开放平台</div>
                        <div
                          class="cloud_platform_list_text"
                        >整合优质企业服务商，引入和开发更多切实解决企业需求的应用，满足企业各个阶段不同的功能需求</div>
                      </div>
                    </div>
                  </div>
                  <div class="all_title2">
                    <h3 class="title">生态级"互联网+"解决方案</h3>
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
          <div class="advantage_project wow fadeInUp">
            <div class="rowFluid">
              <div class="span12">
                <div class="container">
                  <div class="all_title2">
                    <h3 class="title">xxxx优势</h3>
                    <div class="text">DEDE58WANGLUO THE ADVANTAGE OF PROJECT</div>
                  </div>

                  <div class="advantage_project_content">
                    <div class="span3 col-xm-6 col-xs-12" v-for="(items,index) in advanceCase" :key="index">
                      <div class="advantage_project_list">
                        <div class="span3">
                          <div class="advantage_project_list_img">
                            <img :src="items.imgUrl" alt="免费响应式建站平台">
                          </div>
                        </div>
                        <div class="span9">
                          <div class="advantage_project_list_brief">
                            <div class="title">{{items.advanceTitle}}</div>
                            <div class="text">{{items.advanceText}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="all_title2">
                    <h3 class="title">xxxx市场优势</h3>
                    <div class="text">DEDE58.COM MARKET ADVANTAGE</div>
                  </div>

                  <div class="advantage_project_content">
                    <div class="span3 col-xm-6 col-xs-12" v-for="(items,index) in marketAdvance" :key="index">
                      <div class="advantage_project_list">
                        <div class="span3">
                          <div class="advantage_project_list_img">
                            <img :src="items.imgUrl" alt="金猪云建站平台">
                          </div>
                        </div>
                        <div class="span9">
                          <div class="advantage_project_list_brief">
                            <div class="title">{{items.advanceTitle}}</div>
                            <div class="text">{{items.advanceText}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                   
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
          <div class="proxy_process">
            <div class="rowFluid">
              <div class="span12">
                <div class="container">

                  <div class="all_title2">
                    <h3 class="title">建站流程</h3>
                    <div class="text">WEB PROCESS</div>
                  </div>

                  <div class="rowFluid">
                    <div class="proxy_process_line"></div>
                    <div class="proxy_process_content">
                      <div class="span2 col-sm-4 col-xs-6" v-for="(items,index) in processList" :key="index">
                        <div class="proxy_process_list">
                          <div class="proxy_process_list_top">{{index + 1}}</div>
                          <div class="proxy_process_list_middle"></div>
                          <div class="proxy_process_list_bottom">
                            <div class="title">{{items.processTitle}}</div>
                            <div class="text">
                              <p>{{items.processText1}}</p>
                              <p>{{items.processText2}}</p>
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
        growUpBg: require('../../assets/images/075.png'),
        introduceList: [
          {'factoryName': '鑫宇桐','factoryType': '拥有10年互联网行业的专研和沉淀'},
          {'factoryName': '鑫宇桐','factoryType': '积累了雄厚的自主研发实力和丰富的互联网整合营销案例，为企业打造更完善的企业互联网解决方案'},
          {'factoryName': '鑫宇桐','factoryType': '以DEDECMS架构为基础，开发业内领先的智能响应式技术和网站建设方案为企业提供多元、高效、快速的网站建设方案'},
          {'factoryName': '鑫宇桐','factoryType': '倾力打互联网行业建站主力军，让企业告别高额的网站制作费，为企业成本价快速制作企业官方网站，打造企业互联网品牌'},
          {'factoryName': '鑫宇桐','factoryType': '整合优质企业服务商，为企业建设开放式的企业'}
        ],
        advanceCase: [
          {'imgUrl': require('../../assets/images/081.png'),'advanceTitle': '市场优势','advanceText': '解决网建市场刚需，顺应时代发展走势'},
          {'imgUrl': require('../../assets/images/082.png'),'advanceTitle': '界面优势','advanceText': '多界面前沿设计版本持续更新'},
          {'imgUrl': require('../../assets/images/083.png'),'advanceTitle': '产品优势','advanceText': '高大上的完美用户体验'},
          {'imgUrl': require('../../assets/images/084.png'),'advanceTitle': '客户优势','advanceText': '品牌提升、企业转型升级提供最佳推广环境'},
          {'imgUrl': require('../../assets/images/085.png'),'advanceTitle': '运营优势','advanceText': '形成一个完整的产业链，为客户提供一站式服务'},
          {'imgUrl': require('../../assets/images/086.png'),'advanceTitle': '配套优势','advanceText': '设备自主研发，配套自成体系满足用户各种需求'},
          {'imgUrl': require('../../assets/images/087.png'),'advanceTitle': '文化优势','advanceText': '有10年网建管理经验，广纳贤才项目立志高远'},
          {'imgUrl': require('../../assets/images/088.png'),'advanceTitle': '科技优势','advanceText': '产业聚焦、集约经营、全国独有，为项目的运作提供强大的技术支撑'}
        ],
        marketAdvance: [
          {'imgUrl': require('../../assets/images/089.png'),'advanceTitle': '市场前景','advanceText': '拥有核心响应式技术，破解碎片化市场局势坐拥千亿市场'},
          {'imgUrl': require('../../assets/images/090.png'),'advanceTitle': '竞争优势','advanceText': '智能响应式建站+全网整合营销+开放生态圈+行业解决方案'},
          {'imgUrl': require('../../assets/images/091.png'),'advanceTitle': '团队优势','advanceText': '十年砺剑展锋芒，专注互联网资深研发团队，敏锐的行业嗅觉'},
          {'imgUrl': require('../../assets/images/092.png'),'advanceTitle': '战略优势','advanceText': '整合优质企业服务商，引入和开发更多切实解决企业需求的应用'}
        ],
        processList: [
          {'processTitle': '联系在线客服','processText1': '提交你的需求','processText2': '初步了解要求'},
          {'processTitle': '确认建站方案','processText1': '确定建站方案','processText2': '签订建站协议'},
          {'processTitle': '提交建站资料','processText1': '提交建站所需资料','processText2': '企业产品资料等'},
          {'processTitle': '制作网站','processText1': '开始制作网站','processText2': '约7个工作日'},
          {'processTitle': '客户确认','processText1': '制作完成','processText2': '提交给客户确认'},
          {'processTitle': '正式上线','processText1': '网站上线','processText2': '完成建站'}
        ],
        allText: {
            bannerTitle: '手持尚方宝剑 横扫千亿市场',
            bannerText: '技术有我们有，专业建站团队助你迈向互联网+！'
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