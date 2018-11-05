<template>
    <button class="g-button" :class="position"><!--简写 :class="{[`icon-${iconPosition}`]: true}"-->
        <g-icon
                class="icon"
                v-if="iconType && !isLoading"
                :icon-name="iconType"
        >
        </g-icon>
        <g-icon
                class="icon loading"
                icon-name="loading"
                v-if="isLoading"
        >
        </g-icon>
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
            },
            isLoading: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            position: function () {
                let reg = /left|right/g;
                if (!this.iconType) {
                    return;
                }
                if (reg.test(this.iconPosition)) {
                    return 'icon-' + this.iconPosition;
                } else {
                    return 'icon-left';
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading {
        animation: loading 2s infinite linear;
    }

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
            order: 1;
            margin-right: .3em;
        }
        .content {
            order: 2;
        }
        &.icon-right {
            .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            .content {
                order: 1;
            }
        }
    }
</style>