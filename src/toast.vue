<template>
    <div class="g-toast">
        <div class="g-toast-content">
            <slot></slot>
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
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            showCloseBtn: {
                type: Boolean,
                default: false
            }
        },
        created() {
            console.log(this.closeBtn,333);
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000)
            }
        },
        methods: {
            close() {
                this.$el.remove();
                this.$destroy();
            },
            handleCloseClick() {
                this.close();
                if(this.closeBtn && Object.prototype.toString.call(this.closeBtn.callback) === '[object Function]') {
                    this.closeBtn.callback();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        font-size: 14px;
        min-width: 150px;
        max-width: 240px;
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
    }
</style>