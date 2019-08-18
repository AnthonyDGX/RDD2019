<template>
  <div class="carousel">
    <slot></slot>
    <button class="carousel__nav carousel__suivant" @click.prevent="next">suivant</button>
    <button class="carousel__nav carousel__precedent" @click.prevent="prev">precedent</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      slides: []
    };
  },
  computed: {
    slidesCount() {
      return this.slides.length;
    }
  },
  mounted() {
    this.slides = this.$children;
    this.slides.forEach((slide, i) => {
      slide.index = i;
      slide.maxSlide = this.slidesCount;
    });
  },
  methods: {
    next() {
      this.index++;
      if (this.index >= this.slidesCount) {
        this.index = 0;
      }
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.slidesCount - 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  height: 100%;
}
</style>