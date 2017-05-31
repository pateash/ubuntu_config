module.exports = {
    template: `
        <article :class="css()">
            <div class="message-header" v-if="title">
                {{ title }}
            </div>
            <div class="message-body">
                <slot></slot>
            </div>
        </article>
    `,

    props: {
        /*
         * The message's title.
         */
        title: String,

        /*
         * The message's type.
         */
        type: String,
    },

    methods: {
        /**
         * Get the css classes for the message.
         *
         * @return {Object}
         */
        css() {
            return {
                'message': true,
                'is-primary': this.type == 'primary',
                'is-info': this.type == 'info',
                'is-success': this.type == 'success',
                'is-warning': this.type == 'warning',
                'is-danger': this.type == 'danger',
            }
        }
    }
}