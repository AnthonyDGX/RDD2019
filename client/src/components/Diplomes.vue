<template>
  <div class="darkTheme">
    <transition name="fade"></transition>
    <vue-particles
      color="#d5ba97"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="1.5"
      linesColor="#dedede"
      :linesWidth="0"
      :lineLinked="false"
      :lineOpacity="0"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="push"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <Header :itemMenu="faq"></Header>

    <div class="container vh80 mainContainer">
      <section class="carousel row justify-content-center align-items-center">
        <div class="mainCard col-11 col-lg-10">
          <div class="cardHeader row justify-content-center align-items-center">
            <div class="title">
              <h1>Nos diplômés</h1>
            </div>
          </div>
          <div class="cardContent">
            <carousel>
              <carousel-slide></carousel-slide>
              <carousel-slide></carousel-slide>
              <carousel-slide></carousel-slide>
              <carousel-slide></carousel-slide>
            </carousel>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./carousel/Carousel";
import CarouselSlide from "./carousel/CarouselSlide";
export default {
  name: "Diplomes",
  components: {
    Header,
    Footer,
    Carousel,
    CarouselSlide
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      faq: "faq"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cardContent {
    height: 80%;
    padding-bottom: 2rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 1rem;
}

.active {
  color: white !important;
}
.noPadding {
  padding-left: 0px;
  padding-right: 0px;
}
@font-face {
  font-family: calson;
  src: url("../assets/css/calson.ttf");
}

h1 {
  color: #d5ba97;
  font-family: calson;
  font-size: 2rem;
  font-weight: bolder;
}

b {
  color: #9e7d62;
}

#particles-js {
  position: absolute;
  height: 90vh;
  width: 100vw;
}
.cardHeader {
  padding-top: 3rem;
  height: 20%;
}

.darkTheme {
  min-height: 100vh;
  min-width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(13, 15, 33, 1) 0%,
    rgba(5, 31, 63, 1) 100%
  );
}

.vh80 {
  min-height: 80vh;
}

.navbar-brand {
  font-weight: bolder !important;
}

.mainContainer {
  width: 100%;
  display: grid;
}

.mainCard {
  height: 100%;
  width: 100%;
  background: #fdfdfe;
  border-radius: 30px;
}
</style>
