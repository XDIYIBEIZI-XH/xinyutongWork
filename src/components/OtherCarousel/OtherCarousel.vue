<template>
  <div class="z_banner">
    <div class="rowFluid">
      <div class="span12">
        <div class="container">
          <h3 class="z_banner_title">{{content.bannerTitle}}</h3>
          <div class="z_banner_text">{{content.bannerText}}</div>
        </div>
        <ul class="platform_advantage_bg_z">
          <li v-for="(items,index) in 10" :key="index"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
      content: {
        default() {
            return {}
        }
      }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>