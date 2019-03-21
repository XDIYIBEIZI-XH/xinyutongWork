<template>
    <div class="aside">
        <ul>
            <li> 
                <a href="#" target="_blank" title="合作"><img :src="picData[0]" alt="合作" />合作</a> 
            </li>
            <li class="consulting">
                <a href="#this" title="建站在线客服"><span></span><span></span><span></span>
                    <img :src="picData[1]" class="img1" alt="建站在线客服" />
                    <img :src="picData[3]" class="img2" alt="建站在线客服" />咨询
                </a>
            </li>
            <li> 
                <a href="#"><img :src="picData[2]" alt="建站帮助中心" />帮助</a> 
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data() {
        return {
            picData: [
                require('../../assets/images/057.png'),
                require('../../assets/images/059.png'),
                require('../../assets/images/060.png'),
                require('../../assets/images/061.png')
            ]
        }
    }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
    
</style>