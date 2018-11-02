<template>
    <button class="g-button">{{msg}}</button>
</template>

<script>
    export default {
        data() {
            return {
                msg: '按钮'
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-raidus);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }
</style>