<template>
    <div :class="alertCss()" v-show="show">
        <button class="delete"
                v-show="dismissible && ! important"
                @click="show = false">
        </button>
        <div :class="textCss()">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            /*
             * The alert's text alignment.
             */
            align: String,

            /*
             * Determine if the alert is dismissible.
             */
            dismissible: {
                default: false,
                type: Boolean
            },

            /*
             * Determine if the alert is important and should not fade.
             */
            important: {
                default: false,
                type: Boolean
            },

            /*
             * The amount of time before the alert fades out.
             */
            timer: {
                default: 3500,
                type: [String, Number]
            },

            /*
             * The type of alert.
             */
            type: String
        },

        data() {
            return {
                show: true
            }
        },

        ready() {
            if ( ! this.important) {
                setTimeout(function () {
                    this.show = false;
                }.bind(this), this.timer);
            }
        },

        methods: {
            /**
             * Get the css classes for the alert.
             *
             * @return {Object}
             */
            alertCss() {
                return {
                    'notification': true,
                    'is-primary': this.type == 'primary',
                    'is-info': this.type == 'info',
                    'is-success': this.type == 'success',
                    'is-warning': this.type == 'warning',
                    'is-danger': this.type == 'danger'
                }
            },

            /**
             * Get the alignment class for the text.
             */
            textCss() {
                return {
                    'has-text-left': this.align == 'left',
                    'has-text-centered': this.align == 'center',
                    'has-text-right': this.align == 'right'
                }
            }
        }
    }
</script>