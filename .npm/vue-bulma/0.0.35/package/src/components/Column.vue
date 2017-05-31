<template>
    <div :class="css()">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            /*
             * The column's size.
             */
            size: String,

            /*
             * The column's mobile size.
             */
            mobileSize: String,

            /*
             * The column's tablet size.
             */
            tabletSize: String,

            /*
             * The column's desktop size.
             */
            desktopSize: String,

            /*
             * The column's offset.
             */
            offset: String,

            /*
             * The column's mobile offset.
             */
            mobileOffset: String,

            /*
             * The column's tablet offset.
             */
            tabletOffset: String,

            /*
             * The column's desktop offset.
             */
            desktopOffset: String,

            /*
             * Determine if the column should be narrow.
             */
            narrow: {
                default: false,
                type: Boolean
            },

            /*
             * Determine if the column should be narrow on mobile devices.
             */
            narrowMobile: {
                default: false,
                type: Boolean
            },

            /*
             * Determine if the column should be narrow on tablet devices.
             */
            narrowTablet: {
                default: false,
                type: Boolean
            },

            /*
             * Determine if the column should be narrow desktop devices.
             */
            narrowDesktop: {
                default: false,
                type: Boolean
            }
        },

        methods: {
            /**
             * Get the css classes for the column.
             *
             * @return {Object}
             */
            css() {
                return {
                    'column': true,

                    // Size
                    'is-one-quarter': this.size == 'quarter' || this.size == 'one-quarter' || this.size == '1/4',
                    'is-one-third': this.size == 'third' || this.size == 'one-third' || this.size == '1/3',
                    'is-half': this.size == 'half' || this.size == 'one-half' || this.size == '1/2',
                    'is-two-thirds': this.size == 'two-thirds' || this.size == '2/3',
                    'is-three-quarters': this.size == 'three-quarters' || this.size == '3/4',
                    'is-2': this.size == '2',
                    'is-3': this.size == '3',
                    'is-4': this.size == '4',
                    'is-5': this.size == '5',
                    'is-6': this.size == '6',
                    'is-7': this.size == '7',
                    'is-8': this.size == '8',
                    'is-9': this.size == '9',
                    'is-10': this.size == '10',
                    'is-11': this.size == '11',

                    // Mobile Size
                    'is-one-quarter-mobile': this.mobileSize == 'quarter' || this.mobileSize == 'one-quarter' || this.mobileSize == '1/4',
                    'is-one-third-mobile': this.mobileSize == 'third' || this.mobileSize == 'one-third' || this.mobileSize == '1/3',
                    'is-half-mobile': this.mobileSize == 'half' || this.mobileSize == 'one-half' || this.mobileSize == '1/2',
                    'is-two-thirds-mobile': this.mobileSize == 'two-thirds' || this.mobileSize == '2/3',
                    'is-three-quarters-mobile': this.mobileSize == 'three-quarters' || this.mobileSize == '3/4',
                    'is-2-mobile': this.mobileSize == '2',
                    'is-3-mobile': this.mobileSize == '3',
                    'is-4-mobile': this.mobileSize == '4',
                    'is-5-mobile': this.mobileSize == '5',
                    'is-6-mobile': this.mobileSize == '6',
                    'is-7-mobile': this.mobileSize == '7',
                    'is-8-mobile': this.mobileSize == '8',
                    'is-9-mobile': this.mobileSize == '9',
                    'is-10-mobile': this.mobileSize == '10',
                    'is-11-mobile': this.mobileSize == '11',

                    // Tablet Size
                    'is-one-quarter-tablet': this.tabletSize == 'quarter' || this.tabletSize == 'one-quarter' || this.tabletSize == '1/4',
                    'is-one-third-tablet': this.tabletSize == 'third' || this.tabletSize == 'one-third' || this.tabletSize == '1/3',
                    'is-half-tablet': this.tabletSize == 'half' || this.tabletSize == 'one-half' || this.tabletSize == '1/2',
                    'is-two-thirds-tablet': this.tabletSize == 'two-thirds' || this.tabletSize == '2/3',
                    'is-three-quarters-tablet': this.tabletSize == 'three-quarters' || this.tabletSize == '3/4',
                    'is-2-tablet': this.tabletSize == '2',
                    'is-3-tablet': this.tabletSize == '3',
                    'is-4-tablet': this.tabletSize == '4',
                    'is-5-tablet': this.tabletSize == '5',
                    'is-6-tablet': this.tabletSize == '6',
                    'is-7-tablet': this.tabletSize == '7',
                    'is-8-tablet': this.tabletSize == '8',
                    'is-9-tablet': this.tabletSize == '9',
                    'is-10-tablet': this.tabletSize == '10',
                    'is-11-tablet': this.tabletSize == '11',

                    // Desktop Size
                    'is-one-quarter-desktop': this.desktopSize == 'quarter' || this.desktopSize == 'one-quarter' || this.desktopSize == '1/4',
                    'is-one-third-desktop': this.desktopSize == 'third' || this.desktopSize == 'one-third' || this.desktopSize == '1/3',
                    'is-half-desktop': this.desktopSize == 'half' || this.desktopSize == 'one-half' || this.desktopSize == '1/2',
                    'is-two-thirds-desktop': this.desktopSize == 'two-thirds' || this.desktopSize == '2/3',
                    'is-three-quarters-desktop': this.desktopSize == 'three-quarters' || this.desktopSize == '3/4',
                    'is-2-desktop': this.desktopSize == '2',
                    'is-3-desktop': this.desktopSize == '3',
                    'is-4-desktop': this.desktopSize == '4',
                    'is-5-desktop': this.desktopSize == '5',
                    'is-6-desktop': this.desktopSize == '6',
                    'is-7-desktop': this.desktopSize == '7',
                    'is-8-desktop': this.desktopSize == '8',
                    'is-9-desktop': this.desktopSize == '9',
                    'is-10-desktop': this.desktopSize == '10',
                    'is-11-desktop': this.desktopSize == '11',

                    // Offset
                    'is-offset-one-quarter': this.offset == 'quarter' || this.offset == 'one-quarter' || this.offset == '1/4',
                    'is-offset-one-third': this.offset == 'third' || this.offset == 'one-third' || this.offset == '1/3',
                    'is-offset-half': this.offset == 'half' || this.offset == 'one-half' || this.offset == '1/2',
                    'is-offset-two-thirds': this.offset == 'two-thirds' || this.offset == '2/3',
                    'is-offset-three-quarters': this.offset == 'three-quarters' || this.offset == '3/4',
                    'is-offset-2': this.offset == '2',
                    'is-offset-3': this.offset == '3',
                    'is-offset-4': this.offset == '4',
                    'is-offset-5': this.offset == '5',
                    'is-offset-6': this.offset == '6',
                    'is-offset-7': this.offset == '7',
                    'is-offset-8': this.offset == '8',
                    'is-offset-9': this.offset == '9',
                    'is-offset-10': this.offset == '10',
                    'is-offset-11': this.offset == '11',

                    // Mobile Offset
                    'is-offset-one-quarter-mobile': this.mobileOffset == 'quarter' || this.mobileOffset == 'one-quarter' || this.mobileOffset == '1/4',
                    'is-offset-one-third-mobile': this.mobileOffset == 'third' || this.mobileOffset == 'one-third' || this.mobileOffset == '1/3',
                    'is-offset-half-mobile': this.mobileOffset == 'half' || this.mobileOffset == 'one-half' || this.mobileOffset == '1/2',
                    'is-offset-two-thirds-mobile': this.mobileOffset == 'two-thirds' || this.mobileOffset == '2/3',
                    'is-offset-three-quarters-mobile': this.mobileOffset == 'three-quarters' || this.mobileOffset == '3/4',
                    'is-offset-2-mobile': this.mobileOffset == '2',
                    'is-offset-3-mobile': this.mobileOffset == '3',
                    'is-offset-4-mobile': this.mobileOffset == '4',
                    'is-offset-5-mobile': this.mobileOffset == '5',
                    'is-offset-6-mobile': this.mobileOffset == '6',
                    'is-offset-7-mobile': this.mobileOffset == '7',
                    'is-offset-8-mobile': this.mobileOffset == '8',
                    'is-offset-9-mobile': this.mobileOffset == '9',
                    'is-offset-10-mobile': this.mobileOffset == '10',
                    'is-offset-11-mobile': this.mobileOffset == '11',

                    // Tablet Offset
                    'is-offset-one-quarter-tablet': this.tabletOffset == 'quarter' || this.tabletOffset == 'one-quarter' || this.tabletOffset == '1/4',
                    'is-offset-one-third-tablet': this.tabletOffset == 'third' || this.tabletOffset == 'one-third' || this.tabletOffset == '1/3',
                    'is-offset-half-tablet': this.tabletOffset == 'half' || this.tabletOffset == 'one-half' || this.tabletOffset == '1/2',
                    'is-offset-two-thirds-tablet': this.tabletOffset == 'two-thirds' || this.tabletOffset == '2/3',
                    'is-offset-three-quarters-tablet': this.tabletOffset == 'three-quarters' || this.tabletOffset == '3/4',
                    'is-offset-2-tablet': this.tabletOffset == '2',
                    'is-offset-3-tablet': this.tabletOffset == '3',
                    'is-offset-4-tablet': this.tabletOffset == '4',
                    'is-offset-5-tablet': this.tabletOffset == '5',
                    'is-offset-6-tablet': this.tabletOffset == '6',
                    'is-offset-7-tablet': this.tabletOffset == '7',
                    'is-offset-8-tablet': this.tabletOffset == '8',
                    'is-offset-9-tablet': this.tabletOffset == '9',
                    'is-offset-10-tablet': this.tabletOffset == '10',
                    'is-offset-11-tablet': this.tabletOffset == '11',

                    // Desktop Offset
                    'is-offset-one-quarter-desktop': this.desktopOffset == 'quarter' || this.desktopOffset == 'one-quarter' || this.desktopOffset == '1/4',
                    'is-offset-one-third-desktop': this.desktopOffset == 'third' || this.desktopOffset == 'one-third' || this.desktopOffset == '1/3',
                    'is-offset-half-desktop': this.desktopOffset == 'half' || this.desktopOffset == 'one-half' || this.desktopOffset == '1/2',
                    'is-offset-two-thirds-desktop': this.desktopOffset == 'two-thirds' || this.desktopOffset == '2/3',
                    'is-offset-three-quarters-desktop': this.desktopOffset == 'three-quarters' || this.desktopOffset == '3/4',
                    'is-offset-2-desktop': this.desktopOffset == '2',
                    'is-offset-3-desktop': this.desktopOffset == '3',
                    'is-offset-4-desktop': this.desktopOffset == '4',
                    'is-offset-5-desktop': this.desktopOffset == '5',
                    'is-offset-6-desktop': this.desktopOffset == '6',
                    'is-offset-7-desktop': this.desktopOffset == '7',
                    'is-offset-8-desktop': this.desktopOffset == '8',
                    'is-offset-9-desktop': this.desktopOffset == '9',
                    'is-offset-10-desktop': this.desktopOffset == '10',
                    'is-offset-11-desktop': this.desktopOffset == '11',

                    // Narrow
                    'is-narrow': this.narrow,
                    'is-narrow-mobile': this.narrowMobile,
                    'is-narrow-tablet': this.narrowTablet,
                    'is-narrow-desktop': this.narrowDesktop
                }
            }
        }
    }
</script>