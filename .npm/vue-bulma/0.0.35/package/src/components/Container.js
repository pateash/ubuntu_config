module.exports = {
    template: `
        <div :class="css()">
            <slot></slot>
        </div>
    `,
    
    props: {
        fluid: {
            default: false,
            type: Boolean
        }
    },

    methods: {
        css() {
            return {
                'container': ! this.fluid,
                'container-fluid': this.fluid
            }
        }
    }
}