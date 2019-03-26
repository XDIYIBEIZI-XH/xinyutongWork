<template>
    <div class="banner">
        <div class="rowFluid">
            <div class="span12">
            <div class="owl-demo">
                <transition-group name='list' tag="ul">
                    <li v-for="(items,index) in bannerData" :key="items.banner_title" v-show="curpage == index">
                         <div class="item" v-for="(items,index) in bannerData" :key="index" v-show="curpage == index">
                            <h3 class="banner_title">{{items.banner_title}}</h3>
                            <div class="banner_text">{{items.banner_text}}</div>
                            <div class="banner_button"> <a target="_blank" title="详细咨询">{{items.banner_button}}</a> </div>
                        </div>
                    </li>
                </transition-group>
            </div>
            </div>
        </div>
        <div id="container" class="mpage">
            <div id="anitOut" class="anitOut"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bannerData : [
                {'banner_title': '打破传统-企业免网站制作费','banner_text': '2016-找我们做网站我们只收取空间域名成本价，免取网站高额制作费用。','banner_button': '马上咨询'},
                {'banner_title': '主流三合一响应式网站','banner_text': '一个网站就能自动适应PC端+平板端+手机端使用','banner_button': '马上咨询'},
                {'banner_title': '为企业所想 满足企业需求','banner_text': '升级以您的需求为导向,提升以您的价值为目标','banner_button': '马上咨询'}
            ],
            prevTid: '',
            curpage: 0,
        }
    },
    mounted() {
        this.autoSlide();
    },
    methods: {
        //上一页
        // preSlide (){
        //     console.log('123');
        // },
        //下一页
        nextSlide (){
            this.curpage += 1;
            if(this.curpage > (this.bannerData.length - 1)){
                this.curpage = 0;
            }
        },
        autoSlide (){
            clearInterval(this.prevTid);
            this.prevTid = setInterval(() => {
                this.nextSlide();
            },5000)
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/mixin.less';
    .banner {
        overflow: hidden;
        text-align: center;
        z-index: 10;
        position: relative;
        // background: #000;
        // background: rgba(0, 0, 0, 0);
        .bg-image('../../assets/images/bg-new.png');
        height: 700px;
    }
    .owl-demo {
        position: relative;
    }
    .owl-demo div {
        // position: absolute;
        // top: 0;
        // left: 0;
    }

    /* 必需 */

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateX(50px);
    }
</style>

