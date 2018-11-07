<template>
    <div class="g-toast">
        <slot></slot>
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
            }
        },
        mounted() {
            if(this.autoClose) {
                setTimeout(()=>{
                    this.close();
                }, this.autoCloseDelay * 1000)
            }
        },
        methods: {
            close() {
                this.$el.remove();
                this.$destroy();
            }
        }
    }
</script>

<style lang="scss" scoped>
    $fontSize: 14px;
    $toastHeight: 40px;
    $toastBg: rgba(0,0,0,.75);
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
        box-shadow: 0 0 3px rgba(0,0,0,.5);
        border-radius: 4px;
    }
</style>