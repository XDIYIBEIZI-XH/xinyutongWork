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
                        <h1 class="kzf-mod-product-title">产品与服务</h1>
                        <p class="kzf-mod-product-brief">我们提供数字平台建设与数字产品设计运营的全产业链服务，从设计制作到开发运营，一站式帮您搞定。</p>
                    </div>
                    <div class="kzf-mod-product-content">

                        <div class="span3 col-sm-6" v-for="(items,index) in 4" :key="index">
                            <div class="kzf-mod-product-list wow" :class="addclass(index)"> <img :src="picData.productList[0]" alt="高端响应式网站定制" />
                                <div class="kzf-mod-product-list-title">高端响应式网站定制</div>
                                <p>完美响应各种设备</p>
                                <p>高端网站视觉设计</p>
                                <p>精湛交互动画体验</p>
                                <p>运行稳定安全可靠</p>
                                <p>实力定制功能研发</p>
                            </div>
                        </div>
            
                    </div>
                    </div>
                </div>
                </div>
                <div class="kzf-mod-custom">
                <div class="rowFluid">
                    <div class="container">
                        <div class="kzf-mod-custom-header wow fadeInUp">
                            <h1 class="kzf-mod-custom-title">高端定制流程</h1>
                            <p class="kzf-mod-custom-brief">用前沿的思维制作交互式用户体验的高端网站，正是我们的优势所在。</p>
                        </div>
                        <div class="kzf-mod-custom-content">
                            <div class="col-xs-12">
                                <div class="kzf-mod-custom-list wow fadeInUp"> <img :src="picData.customList[0]" alt="厦门网站建设-需求沟通" />
                                    <div class="kzf-mod-custom-list-title">需求沟通</div>
                                    <p>倾听客户需求，了解用户使用环境和操作流程</p>
                                </div>
                                <div class="kzf-mod-custom-list wow fadeInUp" style="animation-delay: 0.1s;"> <img :src="picData.customList[1]" alt="厦门网站建设-项目策划" />
                                    <div class="kzf-mod-custom-list-title">项目策划</div>
                                    <p>头脑风景交互情景模拟原型设计</p>
                                </div>
                                <div class="kzf-mod-custom-list wow fadeInUp" style="animation-delay: 0.2s;"> <img :src="picData.customList[2]" alt="厦门网站建设-交互设计" />
                                    <div class="kzf-mod-custom-list-title">交互设计</div>
                                    <p>从用户的角度思考，模拟用户行为</p>
                                </div>
                            </div>
                            <div class="col-xs-12">
                                <div class="kzf-mod-custom-list wow fadeInUp" style="animation-delay: 0.3s;"> <img :src="picData.customList[3]" alt="响应式网站建设-视觉创意" />
                                    <div class="kzf-mod-custom-list-title">视觉创意</div>
                                    <p>色彩及平面元素设定，结构和布局规范确认</p>
                                </div>
                                <div class="kzf-mod-custom-list wow fadeInUp" style="animation-delay: 0.4s;"> <img :src="picData.customList[4]" alt="响应式网站建设-前端制作" />
                                    <div class="kzf-mod-custom-list-title">前端制作</div>
                                    <p>HTML5、CSS3、JS实现页面的动态展示</p>
                                </div>
                                <div class="kzf-mod-custom-list wow fadeInUp" style="animation-delay: 0.5s;"> <img :src="picData.customList[5]" alt="响应式网站建设-技术开发" />
                                    <div class="kzf-mod-custom-list-title">技术开发</div>
                                    <p>移动应用数据对接与开发</p>
                                </div>
                            </div>
                            <div class="kzf-mod-custom-list kzf-mod-custom-list-last wow fadeInUp " style="animation-delay: 0.6s;"> <img :src="picData.customList[6]" alt="响应式网站建设-测试反馈" />
                            <div class="kzf-mod-custom-list-title">测试反馈</div>
                                <p>修改调整，规范完善</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="kzf-mod-case-container">
                    <div class="rowFluid">
                        <div class="container">
                        <div class="span12">
                            <div class="kzf-mod-case-out">
                                <div class="kzf-mod-so-title-box wow fadeInDown animated" style="visibility: visible; animation-name: fadeInDown;">
                                    <h3 class="kzf-so-title">经典案例</h3>
                                    <div class="kzf-so-text">精选特殊网站案例，分享创意与智慧</div>
                                </div>
                                <div class="kzf-mod-case-box">
                                    <div class="span6 col-sm-12" v-for="(items,index) in demoCaseList" :key="index"> 
                                        <a >
                                            <div class="kzf-mod-wrap wow fadeInUp">
                                                <div class="kzf-mod-pic"> <img :src="items.demoPng" :alt="items.demoIntro" /> </div>
                                                <div class="kzf-mod-title">
                                                <p>{{items.demoIntro}}</p>
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
                productList: [
                    require('../../assets/images/mod-product01.png'),
                    require('../../assets/images/mod-product02.png'),
                    require('../../assets/images/mod-product03.png'),
                    require('../../assets/images/mod-product04.png')
                ],
                customList: [
                    require('../../assets/images/mod-custom01.png'),
                    require('../../assets/images/mod-custom02.png'),
                    require('../../assets/images/mod-custom03.png'),
                    require('../../assets/images/mod-custom04.png'),
                    require('../../assets/images/mod-custom05.png'),
                    require('../../assets/images/mod-custom06.png'),
                    require('../../assets/images/mod-custom07.png')
                ],
                demoList: [
                    require('../../assets/images/1-1610011600310-L.png'),
                    require('../../assets/images/1-1610011600310-L.png'),
                    require('../../assets/images/1-1610011600310-L.png'),
                    require('../../assets/images/1-1610011600310-L.png')
                ]
            },
            demoCaseList: [
                {'demoPng': require('../../assets/images/1-1610011600310-L.png'),'demoIntro': 'xxxx建站网站案例：xxxxx'},
                {'demoPng': require('../../assets/images/1-1610011600310-L.png'),'demoIntro': 'xxxx建站网站案例：xxxxx'},
                {'demoPng': require('../../assets/images/1-1610011600310-L.png'),'demoIntro': 'xxxx建站网站案例：xxxxx'},
                {'demoPng': require('../../assets/images/1-1610011600310-L.png'),'demoIntro': 'xxxx建站网站案例：xxxxx'},
            ],
            allText: {
                bannerTitle: '解决方案',
                bannerText: ' 帮助您快速响应市场变化拓展，布局全渠道，构建生态互联网 '
            }
        }
    },
    methods: {
        addclass: function(i){
            switch (i) {
                case 0:
                    return 'fadeInLeft';
                    break;
                case 1:
                case 2:
                    return 'fadeInUp';
                    break;
                case 3:
                    return 'fadeInRight';
                    break;
                }
        }
    },
    components: {
        'other-carousel': OtherCarousel
    }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
    
</style>