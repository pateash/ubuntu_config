module.exports = {
    template: `
        <span :class="css()">
            <slot></slot>
        </span>
    `,

    props: {
        /*
         * The tag's size.
         */
        size: String,

        /*
         * The tag's type.
         */
        type: String
    },

    methods: {
        css() {
            return {
                'tag': true,
                'is-dark': this.type == 'dark',
                'is-primary': this.type == 'primary',
                'is-info': this.type == 'info',
                'is-success': this.type == 'success',
                'is-warning': this.type == 'warning',
                'is-danger': this.type == 'danger',
                'is-small': this.size == 'small' || this.size == 'sm',
                'is-medium': this.size == 'medium' || this.size == 'md',
                'is-large': this.size == 'large' || this.size == 'lg'
            }
        }
    }
}