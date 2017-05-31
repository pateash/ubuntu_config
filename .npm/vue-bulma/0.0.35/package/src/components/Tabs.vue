<template>
    <div :class="css()">
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            /*
             * The alignment of tabs.
             */
            align: {
                type: String
            },

            /*
             * Determines if the tabs are boxed.
             */
            boxed: {
                default: false,
                type: Boolean
            },

            /*
             * Determines if the tabs should be fullwidth.
             */
            fullwidth: {
                default: false,
                type: Boolean
            },

            /*
             * Determines if the tabs are toggleable.
             */
            toggled: {
                default: false,
                type: Boolean
            },
        },
        methods: {
            /**
             * Get the css classes for the tabs.
             *
             * @returns {Object}
             */
            css() {
                return {
                    'tabs': true,
                    'is-centered': this.align === 'center',
                    'is-right': this.align === 'right',
                    'is-boxed': this.boxed,
                    'is-toggle': this.toggled,
                    'is-fullwidth': this.fullwidth
                }
            }
        }
    }
</script>