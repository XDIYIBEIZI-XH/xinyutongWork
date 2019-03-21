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
                    <div class="marketing_advantage_list"> <img :src="picData[1]" alt="响应式跨屏营销网站" /> </div>
                    </div>
                    <div class="span3 col-sm-6">
                    <div class="span12 wow flipInY">
                        <div class="marketing_advantage_list"> <img :src="picData[0]" />
                        <div class="marketing_advantage_brief">
                            <div class="brief_title">全网营销<span><img :src="picData[2]" alt="响应式网站营销" /></span></div>
                            <div class="brief_text">响应式全屏幕营销网站，无需重复投资无需重复维护，无需重复运营</div>
                        </div>
                        </div>
                    </div>
                    <div class="span12 wow flipInY">
                        <div class="marketing_advantage_list"> <img :src="picData[0]" />
                        <div class="marketing_advantage_brief">
                            <div class="brief_title">优化搜索<span><img :src="picData[5]" alt="响应式网站SEO" /></span></div>
                            <div class="brief_text">SEO轻松提高百度谷歌等搜索引擎的关键词自然排名。</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="span3 col-sm-6">
                    <div class="span12 wow flipInY">
                        <div class="marketing_advantage_list"> <img :src="picData[0]" />
                        <div class="marketing_advantage_brief">
                            <div class="brief_title">微信无缝对接<span><img :src="picData[3]" alt="平台微信营销" /></span></div>
                            <div class="brief_text">全面整合微信营销，数据对接微信互动与分享</div>
                        </div>
                        </div>
                    </div>
                    <div class="span12 wow flipInY">
                        <div class="marketing_advantage_list"> <img :src="picData[0]" />
                        <div class="marketing_advantage_brief">
                            <div class="brief_title">二维码<span><img :src="picData[6]" alt="二维码分享" /></span></div>
                            <div class="brief_text">生成页面二维码，任意分享</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="span3 col-sm-6">
                    <div class="span12 wow flipInY">
                        <div class="marketing_advantage_list"> <img :src="picData[0]" />
                        <div class="marketing_advantage_brief">
                            <div class="brief_title">社交分享<span><img :src="picData[4]" alt="跨屏网站社交分享" /></span></div>
                            <div class="brief_text">一键分享到微博、QQ空间朋友圈等社交网络</div>
                        </div>
                        </div>
                    </div>
                    <div class="span12 wow flipInY">
                        <div class="marketing_advantage_list"> <img :src="picData[0]" />
                        <div class="marketing_advantage_brief">
                            <div class="brief_title">分销体系<span><img :src="picData[7]" alt="响应式分销商城网站" /></span></div>
                            <div class="brief_text">系统化整合客户快速营销</div>
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
                require('../../assets/images/054.jpg'),
                require('../../assets/images/019.jpg'),
                require('../../assets/images/020.png'),
                require('../../assets/images/021.png'),
                require('../../assets/images/022.png'),
                require('../../assets/images/023.png'),
                require('../../assets/images/024.png'),
                require('../../assets/images/025.png')
            ]
        }
    }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
    
</style>