<template>
  <div id="app">
    <!-- 顶部 banner -->
    <top-banner></top-banner>
    <!-- 侧边框按钮 -->
    <slide-btn></slide-btn>

    <router-view/>
    <!-- 底部 -->
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import TopBanner from 'components/TopBanner/TopBanner.vue';
import footerBar from 'components/footerBar/footerBar.vue';
import SlideBtn from 'components/SlideBtn/SlideBtn.vue'

export default {

  components: {
    'top-banner': TopBanner,
    "footer-bar": footerBar,
    'slide-btn': SlideBtn
  }
}
</script>

<style>
  @import './assets/css/base.css';
  @import './assets/css/animate.min.css';
  @import './assets/css/owl.carousel.css';
  @import './assets/css/style.css';
  @import './assets/css/responsive.css';
  #app {
    width: 100%;
    height: 100%;
  }
</style>
