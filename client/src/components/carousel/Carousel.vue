<template>
    <div class="carousel">
        <div class="row justify-content-center" >
        <slot></slot>
        <button class="carousel__nav carousel__suivant" @click.prevent="next">suivant</button>
        <button class="carousel__nav carousel__precedent" @click.prevent="prev">precedent</button>

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            index: 1,
            slide: []
        }
    }, 
    mounted () {
        this.slide = this.$children;
        this.slide.forEach((slide, i) => {
            slide.index = i;
            slide.maxSlide = this.slide.length - 1 
        })
    },
    methods: {
        next() {
            this.index ++
        },
        prev() {
            this.index --
        }
    }
}
</script>