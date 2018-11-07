## Toast组件

### 如何使用
通过vue实例调用，譬如：this.$toast('hello')/vm.$toast('world')。

### 实现方式
1. [Vue插件](https://cn.vuejs.org/v2/guide/plugins.html)
2. [Vue动态创建实例](https://zhuanlan.zhihu.com/p/38076208)


## propsData使用

// Vue构造器生成
let Constructor = Vue.extend({
    template: `<div>{{msg}} {{name}}</div>`,
    data() {
        return {
            msg: 'hello'
        }
    },
    props: ['name']
});

// 利用Vue构造器生成Vue实例

new Constructor({
    propsData: {
        name: 'world'
    }
});