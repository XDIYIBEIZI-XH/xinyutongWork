<template>
  <div class="index_product">
    <div class="rowFluid">
      <div class="span12">
        <div class="container">
          <div class="all_title1 wow fadeInDown">
            <h3 class="title">我们的产品</h3>
            <div class="text">OUR PRODUCT</div>
          </div>
          <div class="rowFluid">
            <div class="index_product_content">
              <div class="span4 col-md-6 col-xs-12 wow fadeInDown">
                <a class="index_product_list" title="响应式企业网站建设">
                  <div class="list_backimg list_backimg1">
                    <div class="list_img">
                      <img :src="picData[0]" alt="响应式企业网站建设">
                    </div>
                    <div class="list_txt">
                      <div class="list_title">企业官网</div>
                      <div class="list_text">CORPORATE WEBSITES</div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="span4 col-md-6 col-xs-12 wow flipInX">
                <a class="index_product_list" title="响应式商城网站建设">
                  <div class="list_backimg list_backimg2">
                    <div class="list_img">
                      <img :src="picData[1]" alt="响应式商城网站建设">
                    </div>
                    <div class="list_txt">
                      <div class="list_title">购物商城</div>
                      <div class="list_text">SHOPPING MALL</div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="span4 col-md-6 col-xs-12 wow fadeInRight">
                <a class="index_product_list" title="空间域名">
                  <div class="list_backimg list_backimg3">
                    <div class="list_img">
                      <img :src="picData[2]" alt="空间域名">
                    </div>
                    <div class="list_txt">
                      <div class="list_title">空间域名</div>
                      <div class="list_text">SPACE SERVICE</div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="span4 col-md-6 col-xs-12 wow fadeInDown">
                <a class="index_product_list" title="生态级行业门户">
                  <div class="list_backimg list_backimg4">
                    <div class="list_img">
                      <img :src="picData[3]" alt="生态级行业门户">
                    </div>
                    <div class="list_txt">
                      <div class="list_title">行业门户</div>
                      <div class="list_text">INDUSTRY PORTAL</div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="span4 col-md-6 col-xs-12 wow flipInX">
                <a class="index_product_list" title="H5三合一网站">
                  <div class="list_backimg list_backimg5">
                    <div class="list_img">
                      <img :src="picData[4]" alt="H5三合一网站">
                    </div>
                    <div class="list_txt">
                      <div class="list_title">三合一网站</div>
                      <div class="list_text">TRIAD WEBSITE</div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="span4 col-md-6 col-xs-12 wow fadeInRight">
                <a class="index_product_list" title="生态级响应式全网营销平台">
                  <div class="list_backimg list_backimg6">
                    <div class="list_img">
                      <img :src="picData[5]" alt="生态级响应式全网营销平台">
                    </div>
                    <div class="list_txt">
                      <div class="list_title">全网营销</div>
                      <div class="list_text">NETWORK MARKETING</div>
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
</template>
<script>
export default {
  data() {
    return {
      picData: [
        require("../../assets/images/045.png"),
        require("../../assets/images/046.png"),
        require("../../assets/images/047.png"),
        require("../../assets/images/048.png"),
        require("../../assets/images/049.png"),
        require("../../assets/images/050.png")
      ]
    };
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>