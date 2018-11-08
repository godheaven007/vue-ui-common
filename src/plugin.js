// 插件
import Toast from './toast';


// 创建toast实例
function createToast({Vue, message, propsData, resetToast}) {
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({propsData});
    // 默认插槽传值
    toast.$slots.default = message;
    toast.$mount();
    toast.$on('reset', resetToast);
    document.body.appendChild(toast.$el);
    return toast;
}

let curToast;

export default {
    install(Vue, options) {
        // 生成toast实例
        Vue.prototype.$toast = function (message, toastOptions) {
            if (curToast) {
                curToast.close();
            }
            curToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                // 重置toast为null
                resetToast: () => {
                    curToast = null;
                }
            });
        }
    }
}