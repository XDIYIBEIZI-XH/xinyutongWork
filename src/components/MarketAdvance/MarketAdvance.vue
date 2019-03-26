<template>
  <div class="marketing_advantage">
    <div class="rowFluid">
      <div class="span12">
        <div class="container">
          <div class="all_title2 wow fadeInUp">
            <h3 class="title">营销优势</h3>
            <div class="text">MARKETING ADVANTAGE</div>
          </div>
          <div class="rowFluid">
            <div class="marketing_advantage_content">

              <div class="span3 col-sm-6 wow flipInY">
                <div class="marketing_advantage_list">
                  <img :src="picData[1]" alt="响应式跨屏营销网站">
                </div>
              </div>

              <div class="span3 col-sm-6" v-for="(items,index) in briefList" :key="index">
                <div class="span12 wow flipInY">
                  <div class="marketing_advantage_list">
                    <img :src="picData[0]">
                    <div class="marketing_advantage_brief">
                      <div class="brief_title">
                        {{items.briefTitle}}
                        <span>
                          <img :src="items.briefImg" :alt="items.briefAlt">
                        </span>
                      </div>
                      <div class="brief_text">{{items.briefText}}</div>
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
export default {
  data() {
    return {
      picData: [
        require("../../assets/images/054.jpg"),
        require("../../assets/images/019.jpg"),
        require("../../assets/images/020.png"),
        require("../../assets/images/021.png"),
        require("../../assets/images/022.png"),
        require("../../assets/images/023.png"),
        require("../../assets/images/024.png"),
        require("../../assets/images/025.png")
      ],
      briefList: [
          {'briefImg': require("../../assets/images/020.png"),'briefTitle':'全网营销','briefText': '响应式全屏幕营销网站，无需重复投资无需重复维护，无需重复运营','briefAlt': '响应式网站营销'},
          {'briefImg': require("../../assets/images/021.png"),'briefTitle':'优化搜索','briefText': 'SEO轻松提高百度谷歌等搜索引擎的关键词自然排名。','briefAlt': '响应式网站SEO'},
          {'briefImg': require("../../assets/images/022.png"),'briefTitle':'微信无缝对接','briefText': '全面整合微信营销，数据对接微信互动与分享','briefAlt': '平台微信营销'},
          {'briefImg': require("../../assets/images/023.png"),'briefTitle':'二维码','briefText': '生成页面二维码，任意分享','briefAlt': '二维码分享'},
          {'briefImg': require("../../assets/images/024.png"),'briefTitle':'社交分享','briefText': '一键分享到微博、QQ空间朋友圈等社交网络','briefAlt': '跨屏网站社交分享'},
          {'briefImg': require("../../assets/images/025.png"),'briefTitle':'分销体系','briefText': '系统化整合客户快速营销','briefAlt': '响应式分销商城网站'}
      ]
    }
  },
  computed: {
        // filterBrief: function(){
        //     let filterCon = [];
        //     let num = Math.ceil(this.briefList.length / 2);
        //     for(let i= 0 ;i<num;i++){
        //         filterCon.push(this.briefList.slice(i * 2, i*2 + 2))
        //     }
        //     console.log('------------------------------------------'+JSON.stringify(filterCon));
        //     return filterCon;
        // }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>