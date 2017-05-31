<template>
    <div :class="css()">
        <slot></slot>
    </div>
</template>

<script>
    export default {
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
</script>