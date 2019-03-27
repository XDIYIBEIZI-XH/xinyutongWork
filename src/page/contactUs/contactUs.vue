
<template>
  <div class="page">
    <div class="rowFluid">
      <div class="span12">
        <div class="main">
          
          <other-carousel :content="allText">
          </other-carousel>

          <div class="kzf-mod-product">
            <div class="rowFluid">
              <div class="container">
                <div class="kzf-mod-product-header wow fadeInUp">
                  <div
                    class="map-item"
                    style="padding: 0px; margin: 65px 0px 0px; width: 100%; height: 298px; border: 1px solid rgb(217, 217, 217); color: rgb(126, 126, 126); font-family: 微软雅黑; font-size: 14px; line-height: 24px;"
                  >
                    <a
                      href="#"
                      style="text-decoration: none; color: rgb(113, 113, 113);"
                      target="_blank"
                    >
                      <img
                        height="298"
                        src="skin/images/1-160921221054q1.jpg"
                        style="border-width: 0px 1px 0px 0px; border-right-style: solid; border-right-color: rgb(217, 217, 217); overflow: hidden; display: block; float: left;"
                        width="599"
                      >
                    </a>
                    <div
                      class="mapdec"
                      style="padding: 0px; margin: 0px; float: right; width: 570px;"
                    >
                      <div
                        class="text"
                        style="padding: 0px; margin: 38px 0px 0px; float: left; width: 285px;"
                      >
                        <h1
                          style="padding: 0px; margin: 0px; font-size: 18px; color: rgb(56, 55, 53); line-height: 35px;"
                        >青岛（总部）</h1>地址：李沧区经济开发区
                        <br>邮编：266000
                        <br>电话：(86) 1856132xxxx
                        <br>1856132xxxx 耿女士
                        <br>传真：(86) 21 xxxxxxxx
                        <br>邮箱：822870xxx@qq.com
                        <br>网址：www.xxxx01.com
                      </div>
                      <div
                        class="qr"
                        style="padding: 0px; margin: 68px 30px 0px 0px; float: right;"
                      >
                        <img
                          src="skin/images/1-160921221334541.jpg"
                          style="border-width: 0px 1px 0px 0px; border-right-style: solid; border-right-color: rgb(217, 217, 217); overflow: hidden; display: block; float: left; width: 200px; height: 200px;"
                        >
                        <br>扫描查看电子地图
                      </div>
                    </div>
                  </div>
                  <br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="kzf-mod-link-container">
          <div class="rowFluid">
            <div class="container">
              <div class="span12">
                <div class="kzf-mod-link-out">
                  <div
                    class="kzf-mod-so-title-box wow fadeInDown"
                    style="visibility: visible; animation-name: fadeInDown;"
                  >
                    <h3 class="kzf-so-title">联系我们</h3>
                    <div class="kzf-so-text">一切良好工作的开始，都需相互之间的沟通搭桥，欢迎咨询。</div>
                  </div>
                  <div class="rowFluid">
                    <div class="kzf-mod-link-inf-box">

                      <div class="span3 col-sm-6 col-xs-12" v-for="(items,index) in picData.contact" :key="index">
                        <a href="tel:18561329922">
                          <div class="kzf-mod-wrap wow fadeInLeft">
                            <div class="kzf-mod-pic">
                              <img :src="items.picUrl" alt="联系网站建设电话">
                            </div>
                            <div class="kzf-mod-txt">
                              <p>{{items.detail}}</p>
                            </div>
                          </div>
                        </a>
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
        picData: {
            contact: [
                {picUrl: require('../../assets/images/so-iphone.png'), detail: '1851632xxxx'},
                {picUrl: require('../../assets/images/so-qq.png'), detail: '822870xxx'},
                {picUrl: require('../../assets/images/so-mail.png'), detail: '822870xxx@qq.com'},
                {picUrl: require('../../assets/images/so-location.png'), detail: '青岛市李沧区李氏大厦4层'},
            ]
        },
        allText: {
            bannerTitle: '联系我们',
            bannerText: '快速联系我们及时沟通--获得更多互联网完美方案'
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