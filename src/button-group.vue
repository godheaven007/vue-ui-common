<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .g-button-group {
        display: flex;
        > .g-button {
            position: relative;
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                border-top-left-radius: var(--border-raidus);
                border-bottom-left-radius: var(--border-raidus);
            }
            &:last-child {
                border-top-right-radius: var(--border-raidus);
                border-bottom-right-radius: var(--border-raidus);
            }
            &:hover{
                z-index: 1;
            }
        }
    }
</style>