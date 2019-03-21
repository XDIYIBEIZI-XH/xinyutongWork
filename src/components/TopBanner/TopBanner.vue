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
          <li><a href="首页.html"  class='active'  title="首页">首页</a></li>
          
          <li><a href="解决方案.html" title="解决方案">解决方案</a></li>
          
          <li><a href="关于我们.html" title="关于我们">关于我们</a></li>
          
          <li><a href="客户案例.html" title="客户案例">客户案例</a></li>
          
          <li><a href="建站方案.html" title="建站方案">建站方案</a></li>
          
          <li><a href="新闻资讯.html" title="新闻资讯">新闻资讯</a></li>
          
          <li><a href="技术支持.html" title="技术支持">技术支持</a></li>
          
          <li><a href="联系我们.html" title="联系我们">联系我们</a></li>
          
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
            logoPic: require('../../assets/images/logo.png')
        }
    }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
    @import '../../assets/css/mixin.less';
    // @import '../../assets/css/style.css';
    .header {
        height: 80px;
        line-height: 80px;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 11;
        transition: 0.4s all;
        -webkit-transition: 0.4s all;
    }
    .header .logo {
	    margin-left: 20px;
    }
    .header .header_menu {
        background: rgba(49, 152, 242, .8);
        position: fixed;
        overflow: auto;
        transition: 0.6s all;
        -webkit-transition: 0.6s all;
    }
    .header .header_menu ul {
        text-align: center;
    }
    .header .header_menu ul li {
        display: inline-block;
        padding-top: 2px\0;
    }
    .header .header_menu ul li a {
        display: block;
        padding: 0 25px;
        color: #fff;
        border-top: solid 2px rgba(0, 0, 0, 0);
        opacity: 0.7;
        filter: alpha(opacity=70);
    }
    .header .header_menu ul li a:hover, .header .header_menu ul li a.active {
        border-top: solid 2px #fff;
        opacity: 1;
        filter: alpha(opacity=100);
    }
</style>

 