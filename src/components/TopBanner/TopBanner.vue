<template>
    <div class="header">
  <div class="rowFluid">
    <div class="span2 col-md-12">
      <div class="logo"> <a href="/" title="返回首页"> <img :src='logoPic' alt="响应式模板(自适应移动设备)" /> </a> </div>
    </div>
    <div class="span8">
      <div class="mobileMenuBtn"><span class="span1"></span><span class="span2"></span><span class="span3"></span></div>
      <div class="mobileMenuBtn_shad"></div>
      <div class="header_menu">
        <ul id="menu">
          <li>
              <a :class="{active : type == '/'}"  @click="goHere('/')" title="首页">首页
                <!-- <router-link class='active' @click="goHere()" to="/">首页</router-link> -->
              </a>
          </li>
          
          <li>
            <a :class="{active : type == '/soultion'}" @click="goHere('/soultion')" title="解决方案">解决方案
              <!-- <router-link to="/soultion">解决方案</router-link> -->
            </a>
          </li>
          
          <li>
            <a :class="{active : type == '/aboutus'}" @click="goHere('/aboutus')" title="关于我们">关于我们
              <!-- <router-link to="/aboutus"></router-link> -->
            </a>
          </li>
          
          <li>
            <!-- <a href="客户案例.html" title="客户案例"> -->
            <router-link to="/cooperative">客户案例</router-link>
            <!-- </a> -->
          </li>
          
          <li>
            <!-- <a href="建站方案.html" title="建站方案"> -->
            <router-link to="/soultion">建站方案</router-link>
            <!-- </a> -->
          </li>
          
          <li>
            <!-- <a href="新闻资讯.html" title="新闻资讯"> -->
            <router-link to="/newslist">新闻资讯</router-link>
            <!-- </a> -->
          </li>
          
          <li>
            <!-- <a href="技术支持.html" title="技术支持"> -->
              <router-link to="/soultion">技术支持</router-link>
            <!-- </a> -->
          </li>
          
          <li>
            <!-- <a href="联系我们.html" title="联系我们"> -->
              <router-link to="/soultion">联系我们</router-link>
            <!-- </a> -->
          </li>
          
        </ul>
      </div>
    </div>
    <div class="span2"> </div>
  </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            logoPic: require('../../assets/images/logo.png'),
            type: '/'
        }
    },
    methods: {
      goHere (e,item){
        this.type = item;
        switch (item)
        {
          case '/' :
          this.$router.push({path : '/'});
          break;

          case '/soultion':
          this.$router.push({path : '/soultion'});
          break;

          case '/aboutus':
          this.$router.push({path : '/aboutus'});
          break;
        }
        
      }
    }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
    @import '../../assets/css/mixin.less';

    
</style>

 