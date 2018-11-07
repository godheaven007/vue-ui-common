<template>
    <div class="g-toast">
        <slot></slot>
        <div class="line"></div>
        <span class="close" v-if="closeBtn" @click="handleCloseClick">{{closeBtn.text}}</span>
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
                default: 30
            },
            // 关闭按钮
            closeBtn: {
                type: Object,
                default: () => ({
                    text: '关闭',
                    callback: () => {

                    }
                })
            }
        },
        created() {
            console.log(this.closeBtn);
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    $fontSize: 14px;
    $toastHeight: 40px;
    $toastBg: rgba(0, 0, 0, .75);
    .g-toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        font-size: $fontSize;
        height: $toastHeight;
        line-height: 1.8;
        color: #fff;
        padding: 0 16px;
        background-color: $toastBg;
        box-shadow: 0 0 3px rgba(0, 0, 0, .5);
        border-radius: 4px;
        > .line {
            width: 1px;
            height: 100%;
            background-color: #999;
            margin: 0 16px;
        }
    }
</style>