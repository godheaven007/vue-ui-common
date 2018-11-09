<template>
    <div class="g-toast-wrap" :class="showPosition">
        <div class="g-toast">
            <!--<div class="line" ref="test"></div>-->
            <div class="g-toast-content">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default"></div>
            </div>
            <div class="g-toast-btn" v-if="showCloseBtn" @click="handleCloseClick">{{closeBtn.text}}</div>
        </div>
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
                default: 3
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
            showPosition: function () {
                return {[`g-toast-${this.position}`]: true};
            }
        },
        created() {
            // console.log(this.$slots,333);
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000)
            }
            // 通过获取元素高度，测试Vue.nextTick
            // let height = this.$refs.test;
            // this.$nextTick(function() {
            //     console.log(height.getBoundingClientRect());
            // });
            // console.log(height.getBoundingClientRect(),222);
        },
        methods: {
            test() {
                console.log('扩展功能接口预留!');
            },
            close() {
                this.$el.remove();
                this.$emit('reset');
                this.$destroy();
            },
            handleCloseClick() {
                this.close();
                if (this.closeBtn && Object.prototype.toString.call(this.closeBtn.callback) === '[object Function]') {
                    // this => 当前toast组件实例
                    this.closeBtn.callback(this);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $toast-min-height: 40px;
    $animation-duration: 1.5s;
    @keyframes fadeInDown {
        0% {opacity: 0; transform: translateY(-100%);}
        100% {opacity: 1; transform: translateY(0);}
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(100%);}
        100% { opacity: 1; transform: translateY(0);}
    }
    .g-toast-wrap {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.g-toast-top {
            top: 0;
            .g-toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: fadeInDown $animation-duration;
            }
        }
        &.g-toast-middle {
            transform: translate(-50%, -50%);
            .g-toast {
                animation: fadeIn $animation-duration;
            }
        }
        &.g-toast-bottom {
            bottom: 0;
            .g-toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: fadeInUp $animation-duration;
            }
        }
    }
    .g-toast {
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
        .line {
            width: 2px;
            height: 20px;
            background-color: #f00;
        }
        .g-toast-content {
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
    }
</style>