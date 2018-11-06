<template>
    <div class="g-input" :class="{'error': errorMsg}">
        <input type="text" :value="text" :disabled="disabled" :readonly="readonly">
        <template v-if="errorMsg">
            <icon class="input-error" icon-name="error"></icon>
            <span>{{errorMsg}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon';

    export default {
        components: {
            Icon
        },
        props: {
            text: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            errorMsg: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    $width: 128px;
    $height: 32px;

    $border-color: #999;
    $border-color-hover: #666;
    $border-color-error: #F1453D;

    $box-shadow-color:rgba(0,0,0,.3);
    $box-shadow-color-error: rgba(241, 69, 61, .3);

    $fontSize: 14px;
    $border-radius: 4px;
    $color: #666;
    $color-error: #F1453D;

    .g-input {
        font-size: $fontSize;
        > input {
            width: $width;
            height: $height;
            line-height: $height;
            padding: 0 8px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            outline: none;
            font-size: inherit;
            color: $color;
            background-color: #fff;
            &:focus {
                box-shadow:  0 1px 3px $box-shadow-color inset;
            }
            &:hover {
                border-color: $border-color-hover;
            }
            &[disabled], &[readonly] {
                cursor: not-allowed;
                border-color: #aaa;
                color: #aaa;
            }
        }
        &.error {
            color: $color-error;
            > input {
                border: 1px solid $border-color-error;
                &:focus {
                    box-shadow:  0 1px 3px $box-shadow-color-error inset;
                }
                &:hover {
                    border-color: $border-color-error;
                }
            }
        }
        > .input-error {
            fill: red;
        }
    }
</style>