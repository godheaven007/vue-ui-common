// 插件
import Toast from './toast';
export default {
    install(Vue, options) {
        // 生成toast组件
        Vue.prototype.$toast = function(message) {
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor();
            // 默认插槽传值
            toast.$slots.default = message;
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}