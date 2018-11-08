<template>
    <div class="g-toast" :class="showPosition">
        <div class="g-toast-content">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default"></div>
        </div>
        <div class="g-toast-btn" v-if="showCloseBtn" @click="handleCloseClick">{{closeBtn.text}}</div>
    </div>
</template>

<script>
    export default {
        name: "GToast",
        props: {
            // 自动关闭
            autoClose: {
                type: Boolean,
                default: true
            },
            // 几秒后自动关闭
            autoCloseDelay: {
                type: Number,
                default: 50
            },
            // 关闭按钮
            closeBtn: {
                type: Object,
                default() {
                    return {
                        text: '关闭'
                    }
                }
            },
            showCloseBtn: {
                type: Boolean,
                default: false
            },
            // 是否开启HTML(确保所传html是可信的，否则容易导致XSS攻击)
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'middle', 'bottom'].indexOf(value) >= 0;
                }
            }
        },
        computed: {
            showPosition: function() {
                return {[`g-toast-${this.position}`]: true};
            }
        },
        created() {
            console.log(this.$slots,333);
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000)
            }
        },
        methods: {
            test() {
                console.log('扩展功能接口预留!');
            },
            close() {
                this.$el.remove();
                this.$destroy();
            },
            handleCloseClick() {
                this.close();
                if(this.closeBtn && Object.prototype.toString.call(this.closeBtn.callback) === '[object Function]') {
                    // this => 当前toast组件实例
                    this.closeBtn.callback(this);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $toast-min-height: 40px;
    .g-toast {
        position: fixed;
        display: flex;
        font-size: 14px;
        min-height: $toast-min-height;
        min-width: 150px;
        max-width: 240px;
        line-height: 1.72;
        color: #fff;
        background-color: rgba(0, 0, 0, .75);
        box-shadow: 0 0 3px rgba(0, 0, 0, .5);
        border-radius: 4px;
        .g-toast-content{
            flex: 1;
            padding: 8px 16px;
            text-align: center;
        }
        .g-toast-btn {
            flex: none;
            width: 60px;
            display: flex;
            align-items: center;
            padding: 0 16px;
            cursor: pointer;
            border-left: 1px solid #999;
            white-space: nowrap;
        }
        &.g-toast-top {
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        &.g-toast-middle {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        &.g-toast-bottom {
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>