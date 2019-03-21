<template>
    <div class="">
        <!-- 顶部 banner -->
        <top-banner></top-banner>
        <!-- 文字轮播 -->
        <main-lunbo></main-lunbo>
        <!-- 侧边框按钮 -->
        <slide-btn></slide-btn>
        <!-- 产品列表 -->
        <product-list></product-list>
        <!-- 营销优势 -->
        <market-advance></market-advance>
        <!-- 合作伙伴 -->
        <cooperative></cooperative>
        <!-- 底部 -->
        <footer-bar></footer-bar>
    </div>
</template>
<script>
import TopBanner from '../../components/TopBanner/TopBanner.vue'
import MainLunbo from '../../components/MainLunbo/MainLunbo.vue'
import SlideBtn from '../../components/SlideBtn/SlideBtn.vue'
import ProductList from '../../components/ProductList/ProductList.vue'
import MarketAdvance from '../../components/MarketAdvance/MarketAdvance.vue'
import cooperative from '../../components/CooperativePartner/CooperativePartner.vue'
import footerBar from '../../components/footerBar/footerBar.vue'

export default {
    data() {
        return {
            
        }
    },
    components: {
        'top-banner': TopBanner,
        'main-lunbo': MainLunbo,
        'slide-btn': SlideBtn,
        'product-list': ProductList,
        'market-advance': MarketAdvance,
        cooperative,
        "footer-bar": footerBar
    }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
    @import '../../assets/css/mixin.less';
    
</style>