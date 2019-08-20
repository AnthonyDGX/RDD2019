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
    <Header :itemMenu="memories" :theme="black"></Header>

    <div class="vh80 mainContainer">
      <div class="row justify-content-center align-items-center">
        <div class="col-11 col-lg-5 col-md-6">
          <div class="row">
            <div class="card">
              <div class="cardHead">
                <div class="profilIcon p2k18"></div>
                <div class="profilText">
                  <div class="row" style="font-size: 1rem;line-height: 1rem; display: grid;">
                    <b>Promo2018</b>
                    <span>Castres, France</span>
                  </div>
                </div>
              </div>
              <img src="../assets/rdd2k18/IMG_9704.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="row" style="width: 100%; margin-left: 0px;">
                  <i class="fa fa-heart custIcons" style="color: red;"></i>
                  <i class="fa fa-comments custIcons"></i>
                </div>
                <div
                  style="font-weight: bold; font-size: 0.75rem; margin-bottom: 0.5rem; margin-top: 0.5rem"
                >2543 J'aime</div>

                <p class="card-text">
                  <span class="nameFont">Promo2018</span> #HAMZAAA
                </p>
              </div>
            </div>
          </div>

           <div class="row">
            <div class="card">
              <div class="cardHead">
                <div class="profilIcon tt"></div>
                <div class="profilText">
                  <div class="row" style="font-size: 1rem;line-height: 1rem; display: grid;">
                    <b>pierre.irib</b>
                    <span>Castres, France</span>
                  </div>
                </div>
              </div>
              <img src="../assets/rdd2k18/IMG_9743.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="row" style="width: 100%; margin-left: 0px;">
                  <i class="fa fa-heart custIcons" style="color: red;"></i>
                  <i class="fa fa-comments custIcons"></i>
                </div>
                <div
                  style="font-weight: bold; font-size: 0.75rem; margin-bottom: 0.5rem; margin-top: 0.5rem"
                >2543 J'aime</div>

                <p class="card-text">
                  <span class="nameFont">pierre.irib</span> #TETE Super soireee
                </p>
              </div>
            </div>
          </div>

          
          <div class="row">
            <div class="card">
              <div class="cardHead">
                <div class="profilIcon tt"></div>
                <div class="profilText">
                  <div class="row" style="font-size: 1rem;line-height: 1rem; display: grid;">
                    <b>TTdu81</b>
                    <span>Castres, France</span>
                  </div>
                </div>
              </div>
              <img src="../assets/rdd2k18/IMG_9200.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="row" style="width: 100%; margin-left: 0px;">
                  <i class="fa fa-heart custIcons" style="color: red;"></i>
                  <i class="fa fa-comments custIcons"></i>
                </div>
                <div
                  style="font-weight: bold; font-size: 0.75rem; margin-bottom: 0.5rem; margin-top: 0.5rem"
                >2543 J'aime</div>

                <p class="card-text">
                  <span class="nameFont">TTdu81</span> #TETE Super soireee
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="card">
              <div class="cardHead">
                <div class="profilIcon soso"></div>
                <div class="profilText">
                  <div class="row" style="font-size: 1rem;line-height: 1rem; display: grid;">
                    <b>SosoThaiti</b>
                    <span>Castres, France</span>
                  </div>
                </div>
              </div>
              <img src="../assets/rdd2k18/IMG_9272.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="row" style="width: 100%; margin-left: 0px;">
                  <i class="fa fa-heart custIcons" style="color: red;"></i>
                  <i class="fa fa-comments custIcons"></i>
                </div>
                <div
                  style="font-weight: bold; font-size: 0.75rem; margin-bottom: 0.5rem; margin-top: 0.5rem"
                >243 J'aime</div>

                <p class="card-text">
                  <span class="nameFont">SoSoThaiti</span>#BFF Super soireee
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 rightBand">
          <div class="row rightRow" style="height: 75px;">
            <div class="cardHead">
              <div class="profilIcon tt bigger"></div>
              <div class="profilText">
                <div class="row" style="font-size: 1rem;line-height: 1rem; display: grid;">
                  <b class="golden">RDD2k18</b>
                  <span style="color: white">Remise des Diplomes 2018</span>
                </div>
              </div>
            </div>
          </div>

          <div class="row rightRow stories">
            <div
              class="storiesHead"
              style="color: black;text-align: center;font-weight: bold;/*! margin: auto; */padding-top: 10px;"
            >Souvenirs de 2018</div>
            <div class="storiesBody">
              <!-- <div class="storie">
                <div>
                  <div class="profilIcon tt goldBorder" ></div>
                </div>
              </div>
               <div class="storie">
                <div>
                  <div class="profilIcon tt goldBorder"></div>
                </div>
              </div>
               <div class="storie">
                <div>
                  <div class="profilIcon tt goldBorder"></div>
                </div>
              </div>
               <div class="storie">
                <div>
                  <div class="profilIcon tt goldBorder"></div>
                </div>
              </div>
               <div class="storie">
                <div>
                  <div class="profilIcon tt goldBorder"></div>
                </div>
              </div>
               <div class="storie">
                <div>
                  <div class="profilIcon tt goldBorder"></div>
                </div>
              </div>-->
            </div>
            <div class="storiesFooter"></div>
          </div>
        </div>
      </div>
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
  name: "Memories",
  components: {
    Header,
    Footer,
    Carousel,
    CarouselSlide
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      memories: "memories",
      black: "black"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.storie {
  height: 3rem;
}
.goldBorder {
  border: solid 3px rgba(5, 31, 63, 1) 100%;
}
.navbar {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(13, 15, 33, 1) 0%,
    rgba(5, 31, 63, 1) 100%
  ) !important;
}

.header {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(13, 15, 33, 1) 0%,
    rgba(5, 31, 63, 1) 100%
  ) !important;
}
.custIcons {
  font-size: 1.25rem;
  margin-right: 1rem;
  transition: 0.7s;
}

.storiesHead {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
}

.storiesBody {
  height: 225px;
  width: 100%;
  overflow-y: scroll;
}

.storiesFooter {
  height: 25px;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.0975);
}

.stories {
  color: white;
  display: flex;
  margin-top: calc(75px + 1rem);

  width: 250px;

  height: 300px;

  background: white;

  border-radius: 3px;
}

.tt {
  background-image: url("../assets/rdd2k18/IMG_9200.jpg");
}

.soso {
  background-image: url("../assets/rdd2k18/IMG_9272.jpg");
}

.p2k18{
      background-image: url("../assets/rdd2k18/IMG_9704.jpg");

}

.bigger {
  margin-top: 0px !important;
  height: 3rem !important;
  width: 3rem !important;
}

.golden {
  color: #d5ba97;
}

.custIcons:hover {
  transform: scale(1.1);
}

.nameFont {
  font-size: 0.75rem;
  font-weight: bold;
}

.card-text {
  font-size: 0.75rem;
}

.profilIcon {
  height: 2rem;
  width: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  border-radius: 50%;
}

.profilText {
  font-size: 1.25rem;
  margin-left: 1.25rem;
  padding-top: 0.5rem;
  font-weight: lighter;
}

img {
  border-radius: 0px;
}

.cardHead {
  height: 3rem;
  display: flex;
}

.card-body {
  padding-top: 0.25rem !important;
}

.rightBand {
  height: 100%;
  margin-left: 1rem;
   @media (max-width: 768px) {
          display: none!important;
      }
}

.rightRow {
  position: fixed;
  display: grid;
  margin-left: 0.5rem;
  
}
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
  font-weight: bold;
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
  width: 100% !important;
  display: grid;
  padding-top: 12vh !important;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(13, 15, 33, 1) 0%,
    rgba(5, 31, 63, 1) 100%
  );
  padding-bottom: 3rem;
}

.mainCard {
  height: 100%;
  width: 100%;
  background: #fdfdfe;
  border-radius: 30px;
}

.head {
  position: fixed;
  width: 100%;
  height: 10vh !important;
  z-index: 99999;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(13, 15, 33, 1) 0%,
    rgba(5, 31, 63, 1) 100%
  );
}

.card {
  border: solid 0px;
  margin-bottom: 1rem;
}
</style>
