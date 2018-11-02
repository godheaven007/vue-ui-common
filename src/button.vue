<template>
    <button class="g-button" :class="position"><!--简写 :class="{[`icon-${iconPosition}`]: true}"-->
        <svg class="icon" v-if="iconType">
            <use :xlink:href=`#i-${iconType}`></use>
        </svg>
        <span class="content">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        // props: ['iconType', 'iconPosition'],
        props: {
            iconType: {},
            iconPosition: {
                type: String,
                default: 'left'
            }
        },
        computed: {
            position: function() {
                let reg = /left|right/g;
                if(reg.test(this.iconPosition)) {
                    return 'icon-' + this.iconPosition;
                }
                return '';
            }
        }
    }
</script>

<style scoped lang="scss">

    .g-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-raidus);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        .icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }

        .icon {order: 1; margin-right: .3em;}
        .content{order: 2;}
        &.icon-right{
            .icon{order: 2; margin-right: 0; margin-left: .3em;}
            .content{order: 1;}
        }
    }
</style>