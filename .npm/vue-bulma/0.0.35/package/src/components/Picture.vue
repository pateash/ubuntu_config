<template>
    <figure :class="figureCss()">
        <img :src="url" :alt="alt" :class="css">
    </figure>
</template>

<script>
    export default {
        props: {

            /*
             * The alt text for image.
             */
            alt: String,

            /*
             * Css classes to be added to the image.
             */
            css: String,

            /*
             * The size of the image
             */
            size: String,

            /*
             * The source of the image.
             */
            url: {
                required: true,
                type: String
            }
        },

        methods: {
            /*
             * Get the css classes for the figure.
             */
            figureCss() {
                return {
                    'image': true,
                    'is-16x16': this.size == '16x16' || this.size == '16',
                    'is-24x24': this.size == '24x24' || this.size == '24',
                    'is-32x32': this.size == '32x32' || this.size == '32',
                    'is-48x48': this.size == '48x48' || this.size == '48',
                    'is-96x96': this.size == '96x96' || this.size == '96',
                    'is-128x128': this.size == '128x128' || this.size == '128',
                    'is-square': this.size == 'square' || this.size == '1by1' || this.size == '1x1',
                    'is-4by3': this.size == '4by3' || this.size == '4x3',
                    'is-3by2': this.size == '3by2' || this.size == '3x2',
                    'is-16by9': this.size == '16by9' || this.size == '16x9',
                    'is-2by1': this.size == '2by1' || this.size == '2x1'
                }
            }
        }
    }
</script>