## 表单input

1. 针对【readonly】、【disabled】等input特有的属性，作为组件变量传递时，可以直接使用
    普通使用：<input type="text" is-disabled="true"/>
    直接使用：<input type="text" disabled/>

    export default {
        props: {
            isDisabled: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
        }
    }

2. input之readonly与disabled区别
    disabled无法focus，readonly可focus

3. input事件
    vue中针对input的事件，需写成<input @focus="doFocus" @change="doChange" @blur="doBlur" @input="doInput"/>
