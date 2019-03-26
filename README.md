# 鑫_factory

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


项目还在完善中，目前仅有首页功能。


此项目入到的问题
1. new Vue({
  router,

  render: h => h(App)
}).$mount("#app")  问题
因为不同脚手架的处理方式不同，并不是所有的都适合原始的默认方式

2. 引入.css文件时一直报错   !!vue-style-loader!css-loader?{"sourceMap":true}!../../node_modules/vue-loader/lib/style-compiler/
因为直接引入的css文件中，有些目录路径下没有具体文件导致报错
或者 没有加载stylus-loader 中间件

3. 静态图片资源如何引入
  1、在模板中直接引入图片资源（如果图片比较多的话，会比较麻烦）
  2、将图片资源放在static文件夹下
  3、图片资源在assets文件夹下，data中必须用require加载，否则会当成字符串来处理
  解决方案： 利用sass或less ，定义 mixin 文件
            .bg-image("../images/weixin.png");

4. 报错 Missing semi-colon(分号;) or unrecognised media features on import
   引入的时候文件缺少 ; 结束符

5. transition-group 过渡动画使用时，用法（注意： key值不能用index，否则报错）
``` html
<transition-group name='list' tag="ul">
  <li v-for="(items,index) in bannerData" :key="items.banner_title" v-show="curpage == index">
    <div class="item" v-for="(items,index) in bannerData" :key="index" v-show="curpage == index">
      <h3 class="banner_title">{{items.banner_title}}</h3>
      <div class="banner_text">{{items.banner_text}}</div>
      <div class="banner_button">
        <a target="_blank" title="详细咨询">{{items.banner_button}}</a> 
      </div>
    </div>
  </li>
</transition-group>
```
6. 关闭vue-cli的黄色警告
  脚手架创建项目的时候 不小心安装了eslint，运行时报了一堆警告！
  ```html
    const createLintingRule = () => ({
      /*test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src'), resolve('test')],
      options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: !config.dev.showEslintErrorsInOverlay
      }*/
    })
  ```
