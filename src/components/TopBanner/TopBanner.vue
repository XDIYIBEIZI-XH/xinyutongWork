<template>
  <div class="header">
    <div class="rowFluid">
      <div class="span2 col-md-12">
        <div class="logo">
          <a href="/" title="返回首页">
            <img :src="logoPic" alt="响应式模板(自适应移动设备)">
          </a>
        </div>
      </div>
      <div class="span8">
        <div class="mobileMenuBtn">
          <span class="span1"></span>
          <span class="span2"></span>
          <span class="span3"></span>
        </div>
        <div class="mobileMenuBtn_shad"></div>
        <div class="header_menu">
          <ul id="menu">

            <li v-for="(items,index) in bannerList" :key="index">
              <a :class="{active : type == items.bannerUrl}" @click="goHere(items.bannerUrl)" :title='items.bannerName'>{{items.bannerName}}</a>
            </li>
            
          </ul>
        </div>
      </div>
      <div class="span2"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoPic: require("../../assets/images/mylogo.png"),
      type: "/",
      bannerList: [
        {'bannerName': '首页', 'bannerUrl': '/'},
        {'bannerName': '解决方案', 'bannerUrl': '/soultion'},
        {'bannerName': '关于我们', 'bannerUrl': '/aboutus'},
        {'bannerName': '客户案例', 'bannerUrl': '/buildPlan'},
        {'bannerName': '建站方案', 'bannerUrl': '/customCase'},
        {'bannerName': '联系我们', 'bannerUrl': '/contactUs'},
      ]
    };
  },
  methods: {
    goHere(item) {
      this.type = item;
      switch (item) {
        case "/":
          this.$router.push({ path: "/" });
          break;

        case "/soultion":
          this.$router.push({ path: "/soultion" });
          break;

        case "/aboutus":
          this.$router.push({ path: "/aboutus" });
          break;

        case "/buildPlan":
          this.$router.push({ path: "/buildPlan" });
          break;

        case "/customCase":
          this.$router.push({ path: "/customCase" });
          break;

        case "/contactUs":
          this.$router.push({ path: "/contactUs" });
          break;
      }
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/mixin.less";

</style>

 