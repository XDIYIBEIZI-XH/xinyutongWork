
<template>
  <div class="platform_advantage">
    <div class="rowFluid">
      <div class="span12">
        <div class="container">
          <div class="all_title2 wow fadeInUp">
            <h3 class="title">xxxx优势</h3>
            <div class="text">PLATFORM ADVANTAGE</div>
          </div>
          <div class="rowFluid">
            <div class="platform_advantage_content">
              <div class="span4 col-xm-6 col-xs-12 wow bounceInLeft">
                <div class="platform_advantage_list">
                  <div class="platform_advantage_img">
                    <img :src="picData.advanceList[0]" alt="响应式建站平台">
                  </div>
                  <div class="platform_advantage_brief">
                    <div class="brief_title">免网站制作费</div>
                    <div class="brief_text">只收空间域名取成本价</div>
                  </div>
                </div>
              </div>
              <div class="span4 col-xm-6 col-xs-12 wow bounceIn">
                <div class="platform_advantage_list">
                  <div class="platform_advantage_img">
                    <img :src="picData.advanceList[1]" alt="响应式网站建设">
                  </div>
                  <div class="platform_advantage_brief">
                    <div class="brief_title">快速建站</div>
                    <div class="brief_text">
                      打破传统网站制作工时
                      <br>网站制作最快只需1天
                    </div>
                  </div>
                </div>
              </div>
              <div class="span4 col-xm-6 col-xs-12 wow bounceInRight">
                <div class="platform_advantage_list">
                  <div class="platform_advantage_img">
                    <img :src="picData.advanceList[2]" alt="响应式自助建站">
                  </div>
                  <div class="platform_advantage_brief">
                    <div class="brief_title">多合一终端使用</div>
                    <div class="brief_text">
                      一个网站能够在CP+平板+手机
                      <br>完美响应展示。
                    </div>
                  </div>
                </div>
              </div>
              <div class="span4 col-xm-6 col-xs-12 wow bounceInLeft">
                <div class="platform_advantage_list">
                  <div class="platform_advantage_img">
                    <img :src="picData.advanceList[3]" alt="响应式网站定制">
                  </div>
                  <div class="platform_advantage_brief">
                    <div class="brief_title">大数据</div>
                    <div class="brief_text">
                      升级更新数据保留，企业数据沉淀
                      <br>实现数据分析。
                    </div>
                  </div>
                </div>
              </div>
              <div class="span4 col-xm-6 col-xs-12 wow bounceIn">
                <div class="platform_advantage_list">
                  <div class="platform_advantage_img">
                    <img :src="picData.advanceList[4]" alt="html5建站平台">
                  </div>
                  <div class="platform_advantage_brief">
                    <div class="brief_title">高端设计</div>
                    <div class="brief_text">
                      主流设计风格，极致交互体验，
                      <br>提升品牌价值
                    </div>
                  </div>
                </div>
              </div>
              <div class="span4 col-xm-6 col-xs-12 wow bounceInRight">
                <div class="platform_advantage_list">
                  <div class="platform_advantage_img">
                    <img :src="picData.advanceList[5]" alt="H5响应式网站建设">
                  </div>
                  <div class="platform_advantage_brief">
                    <div class="brief_title">安全稳定</div>
                    <div class="brief_text">
                      平台运行于阿里云计算中心
                      <br>多备份容灾保障，安全稳定
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rowFluid">
          <div class="waves_box">
            <canvas id="waves" class="waves"></canvas>
          </div>
        </div>
        <div class="container">
          <div class="rowFluid">
            <div class="response_shows">
              <div class="response_shows_box wow bounceIn">
                <div class="response_shows_width">
                  <div class="pc">
                    <img :src="picData.showList[0]" alt="建站神器">
                    <div class="pic">
                      <div class="item">
                        <img :src="picData.detailList[0]" alt="快速响应式网站制作">
                      </div>
                      <div class="item">
                        <img :src="picData.detailList[1]" alt="网站建设">
                      </div>
                      <div class="item">
                        <img :src="picData.detailList[2]" alt="响应式自助建站">
                      </div>
                    </div>
                  </div>
                  <div class="pad">
                    <img :src="picData.showList[2]" alt="H5响应式网站建设">
                    <div class="pic">
                      <div class="item">
                        <img :src="picData.detailList[3]" alt="建站">
                      </div>
                      <div class="item">
                        <img :src="picData.detailList[4]" alt="生态级响应式2.0建站平台">
                      </div>
                      <div class="item">
                        <img :src="picData.detailList[5]" alt="H5响应式网站建设">
                      </div>
                    </div>
                  </div>
                  <div class="phone">
                    <img :src="picData.showList[1]" alt="响应式网站模板">
                    <div class="pic">
                      <div class="item">
                        <img :src="picData.detailList[6]" alt="响应式网站设计案例">
                      </div>
                      <div class="item">
                        <img :src="picData.detailList[7]" alt="响应式网站案例">
                      </div>
                      <div class="item">
                        <img :src="picData.detailList[8]" alt="html5建站平台">
                      </div>
                    </div>
                  </div>
                  <div class="thumb"></div>
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
      picData: {
        advanceList: [
          require("../../assets/images/008.png"),
          require("../../assets/images/009.png"),
          require("../../assets/images/010.png"),
          require("../../assets/images/011.png"),
          require("../../assets/images/012.png"),
          require("../../assets/images/013.png")
        ],
        showList: [
          require("../../assets/images/015.png"),
          require("../../assets/images/016.png"),
          require("../../assets/images/017.png")
        ],
        detailList: [
          require("../../assets/images/0511.jpg"),
          require("../../assets/images/0512.jpg"),
          require("../../assets/images/0513.jpg"),
          require("../../assets/images/0521.jpg"),
          require("../../assets/images/0522.jpg"),
          require("../../assets/images/0523.jpg"),
          require("../../assets/images/0531.jpg"),
          require("../../assets/images/0532.jpg"),
          require("../../assets/images/0533.jpg")
        ]
      }
    };
  },
  mounted() {
    this.gundong();
  },
  methods: {
    gundong() {
      if ($(".response_shows_box .item").length > 1) {
        var _caseTime = 4000,
          _casePc = $(".response_shows_box .pc .pic .item"),
          _casePad = $(".response_shows_box .pad .pic .item"),
          _casePhone = $(".response_shows_box .phone .pic .item"),
          _caseLength = _casePc.length,
          _casePage = -1,
          _casePlay;
        _casePc.each(function(index, element) {
          $(".response_shows_box .thumb").append("<span></span>");
        });
        var _caseSpan = $(".response_shows_box .thumb span");
        _caseSpan.mouseover(function() {
          _casePage = $(this).index() - 1;
          caseLoop();
        });

        function caseLoop() {
          clearInterval(_casePlay);
          _casePage++;
          _casePage = _casePage < _caseLength && _casePage > 0 ? _casePage : 0;
          var _pcH = -_casePc.height() * _casePage + "px",
            _padH = -_casePad.height() * _casePage + "px",
            _phoneH = -_casePhone.height() * _casePage + "px";
          _caseSpan
            .removeClass("active")
            .eq(_casePage)
            .addClass("active");
          _casePc.css({
            transform: "translateY(" + _pcH + ")",
            "-ms-transform": "translateY(" + _pcH + ")",
            "-moz-transform": "translateY(" + _pcH + ")",
            "-webkit-transform": "translateY(" + _pcH + ")",
            "-o-transform": "translateY(" + _pcH + ")"
          });
          _casePad.css({
            transform: "translateY(" + _padH + ")",
            "-ms-transform": "translateY(" + _padH + ")",
            "-moz-transform": "translateY(" + _padH + ")",
            "-webkit-transform": "translateY(" + _padH + ")",
            "-o-transform": "translateY(" + _padH + ")"
          });
          _casePhone.css({
            transform: "translateY(" + _phoneH + ")",
            "-ms-transform": "translateY(" + _phoneH + ")",
            "-moz-transform": "translateY(" + _phoneH + ")",
            "-webkit-transform": "translateY(" + _phoneH + ")",
            "-o-transform": "translateY(" + _phoneH + ")"
          });
          _casePlay = setTimeout("caseLoop()", _caseTime);
        }
        // caseLoop()
      }
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>