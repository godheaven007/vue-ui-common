
import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Toast from './toast';
import Plugin from './plugin';


Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-toast', Toast);
Vue.use(Plugin);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    },
    methods: {
        doInput(event) {
            console.log(event.target);
        },
        doFocus() {
            console.log('focus');
        },
        showToast1() {
            this.showToast('top');
        },
        showToast2() {
            this.showToast('middle');
        },
        showToast3() {
            this.showToast('bottom');
        },
        showToast(position) {
            this.$toast('提示信息', {
                showCloseBtn: true,
                position,
                // enableHtml: true,
                // autoClose: true,
                // autoCloseDelay: 30,
                closeBtn: {
                    text: '确认',
                    callback: function(toast) {
                        console.log('被我关闭了！');
                        toast.test();
                    }
                }
            });
        }
    },
});