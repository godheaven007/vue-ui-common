<template>
    <div class="g-toast">
        go
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GToast"
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