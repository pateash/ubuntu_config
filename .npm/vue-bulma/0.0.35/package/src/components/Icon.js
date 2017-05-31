module.exports = {
    template: `
        <span :class="wrapperCss()">
            <i :class="iconCss()"></i>
        </span>
    `,

    props: {
        /*
         * The icon.
         */
        icon: {
            required: true,
            type: String
        },

        /*
         * Determines if the icon has a fixed width.
         */
        fixed: {
            default: false,
            type: Boolean
        },

        /*
         * The direction to flip the icon.
         */
        flip: String,

        /*
         * Determine if the icon should pulse.
         */
        pulse: {
            default: false,
            type: Boolean
        },

        /*
         * The amount to rotate the icon.
         */
        rotate: [Number, String],

        /*
         * The size of the icon.
         */
        size: String,

        /*
         * Determine if the icon should spin.
         */
        spin: {
            default: false,
            type: Boolean
        }
    },

    methods: {
        /**
         * Get the css classes for the icon wrapper.
         *
         * @return {Object}
         */
        wrapperCss() {
            return {
                'icon': true,
                'is-small': this.size == 'small' || this.size == 'sm',
                'is-medium': this.size == 'medium' || this.size == 'md',
                'is-large': this.size == 'large' || this.size == 'lg'
            }
        },

        /**
         * Get the css classes for the icon.
         *
         * @return {Object}
         */
        iconCss() {
            var classes = {
                'fa': true,
                'fa-fw': this.fixed,
                'fa-rotate-90': this.rotate == 90,
                'fa-rotate-180': this.rotate == 180,
                'fa-rotate-270': this.rotate == 270,
                'fa-flip-horizontal': this.flip == 'horizontal',
                'fa-flip-vertical': this.flip == 'vertical',
                'fa-spin': this.spin,
                'fa-pulse': this.pulse
            }

            var icon = 'fa-' + this.icon;

            classes[icon] = true;

            return classes;
        }
    }
}