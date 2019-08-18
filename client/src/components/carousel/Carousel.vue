<template>
  <div class="carousel">
      <div class="row h90">
 <slot></slot>
      </div>
   
    <button class="carousel__nav carousel__suivant" @click.prevent="next">suivant</button>
    <button class="carousel__nav carousel__precedent" @click.prevent="prev">precedent</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      slides: [],
      students: [
          {
              nom: "NGuyen Van 0",
              prenom: "Antoine",
              reve: "Astronaute",
              surnom: "Titi",
              descr: "Pirouette Cacahuete",
              photoReve: "astro.png",
              photoProfil: "antoine.png"
          },
          {
              nom: "NGuyen Van 1",
              prenom: "Antoine",
              reve: "Astronaute",
              surnom: "Titi",
              descr: "Pirouette Cacahuete",
              photoReve: "astro.png",
              photoProfil: "antoine.png"
          },
          {
              nom: "NGuyen Van 2",
              prenom: "Antoine",
              reve: "Astronaute",
              surnom: "Titi",
              descr: "Pirouette Cacahuete",
              photoReve: "astro.png",
              photoProfil: "antoine.png"
          },
          {
              nom: "NGuyen Van 3",
              prenom: "Antoine",
              reve: "Astronaute",
              surnom: "Titi",
              descr: "Pirouette Cacahuete",
              photoReve: "astro.png",
              photoProfil: "antoine.png"
          },
          {
              nom: "NGuyen Van 4",
              prenom: "Antoine",
              reve: "Astronaute",
              surnom: "Titi",
              descr: "Pirouette Cacahuete",
              photoReve: "astro.png",
              photoProfil: "antoine.png"
          },{
              nom: "NGuyen Van 5",
              prenom: "Antoine",
              reve: "Astronaute",
              surnom: "Titi",
              descr: "Pirouette Cacahuete",
              photoReve: "astro.png",
              photoProfil: "antoine.png"
          }
      ]
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
      slide.student = this.students[i]   

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
.h90 {
    height: 90%;
}
</style>