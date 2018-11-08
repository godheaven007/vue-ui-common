// 插件
import Toast from './toast';
export default {
    install(Vue, options) {
        // 生成toast实例
        Vue.prototype.$toast = function(message, toastOptions) {
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor({
                propsData: toastOptions,
                // 需要对用户传过来对值进行验证
                // propsData: {
                //     closeBtn: toastOptions.closeBtn
                // }
            });
            // 默认插槽传值
            toast.$slots.default = message;
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}