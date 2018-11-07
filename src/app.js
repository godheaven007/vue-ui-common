
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
        showToast() {
            this.$toast('发送发送发送发送发送发送');
        }
    },
});