<template>
    <svg class="g-icon">
        <use :xlink:href=`#i-${iconName}`></use>
    </svg>
</template>

<script>
    export default {
        props: ['iconName']
    }
</script>

<style scoped lang="scss">
    .g-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>