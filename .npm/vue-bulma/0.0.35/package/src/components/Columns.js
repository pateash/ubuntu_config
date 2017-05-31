module.exports = {
    template: `
        <div :class="css()">
            <slot></slot>
        </div>
    `,

    props: {
        /*
         * Determine if the columns are visible on desktop only.
         */
        desktop: {
            default: false,
            type: Boolean
        },

        /*
         * Determine if the columns are gapless.
         */
        gapless: {
            default: false,
            type: Boolean
        },

        /*
         * Determine if the columns are mobile responsive.
         */
        mobile: {
            default: false,
            type: Boolean
        },

        /*
         * Determine if the columns can stretch multiple lines.
         */
        multiline: {
            default: false,
            type: Boolean
        },

        /*
         * Determine if the columns are visible on tablet only.
         */
        tablet: {
            default: false,
            type: Boolean
        },

    },

    methods: {
        /**
         * Get the css classes for the columns.
         *
         * @return {Object}
         */
        css() {
            return {
                'columns': true,
                'is-mobile': this.mobile,
                'is-desktop': this.desktop,
                'is-tablet': this.tablet,
                'is-multiline': this.multiline,
                'is-gapless': this.gapless
            }
        }
    }
}