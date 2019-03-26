<template>
    <section class="">
        <!-- 文字轮播 -->
        <main-lunbo></main-lunbo>
        <!-- 侧边框按钮 -->
        <slide-btn></slide-btn>
        <!-- 产品列表 -->
        <product-list></product-list>
        <!-- 企业优势 -->
        <platform-advance></platform-advance>
        <!-- 营销优势 -->
        <market-advance></market-advance>
        <!-- 合作伙伴 -->
        <cooperative></cooperative>
    </section>
</template>

<script>
// import TopBanner from '../../components/TopBanner/TopBanner.vue'
import MainLunbo from '../../components/MainLunbo/MainLunbo.vue'
import SlideBtn from '../../components/SlideBtn/SlideBtn.vue'
import ProductList from '../../components/ProductList/ProductList.vue'
import PlatformAdvance from '../../components/PlatformAdvance/PlatformAdvance.vue'
import MarketAdvance from '../../components/MarketAdvance/MarketAdvance.vue'
import cooperative from '../../components/CooperativePartner/CooperativePartner.vue'
// import footerBar from '../../components/footerBar/footerBar.vue'

export default {
    data() {
        return {
            
        }
    },
    components: {
        // 'top-banner': TopBanner,
        'main-lunbo': MainLunbo,
        'slide-btn': SlideBtn,
        'product-list': ProductList,
        'platform-advance': PlatformAdvance,
        'market-advance': MarketAdvance,
        cooperative,
        // "footer-bar": footerBar
    }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
    @import '../../assets/css/mixin.less';
    
</style>