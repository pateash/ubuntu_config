module.exports = {
    template: `
        <div :class="css()" v-show="show">
            <div class="modal-background" @click="show = false"></div>
            <div class="modal-content">
                <slot></slot>
            </div>
            <div class="modal-close" @click="show = false"></div>
        </div>
    `,

    props: {
        /*
         * The name of the modal
         */
        name: {
            required: true,
            type: String
        },

        /*
         * Whether or not the modal is visible.
         */
        show: {
            default: false,
            type: Boolean
        }
    },

    events: {
        /**
         * Handle an event to hide the modal.
         *
         * @param name {String}
         */
        hideModal(name) {
            this.show = name === this.name ? false : true;
        },

        /**
         * Handle an event to show the modal.
         *
         * @param name {String}
         */
        showModal(name) {
            this.show = name === this.name ? true : false;
        },

        /**
         * Handle an event to toggle the modal.
         *
         * @param name {String}
         */
        toggleModal(name) {
            this.show = name === this.name ? ! this.show : this.show;
        }
    },

    methods: {
        /**
         * Get the css classes for the modal.
         *
         * @returns {Object}
         */
        css() {
            return {
                'modal': true,
                'is-active': this.show
            }
        }
    }
}

Vue.prototype.$hideModal = function (name) {
    this.$broadcast('hideModal', name);
    this.$dispatch('hideModal', name);
}

Vue.prototype.$showModal = function (name) {
    this.$broadcast('showModal', name);
    this.$dispatch('showModal', name);
}

Vue.prototype.$toggleModal = function (name) {
    this.$broadcast('toggleModal', name);
    this.$dispatch('toggleModal', name);
}