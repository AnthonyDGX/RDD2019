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
      <div class="row justify-content-center align-items-center mtop centerText">
        <h1>Questions Fréquentes</h1>
      </div>

      <div class="row justify-content-center align-items-center mtop">
        <div class="col-12 col-lg-8 questionGroup">
          <div class="cardHeader">
            <div class="row question">
              <!-- <div class="col-2 col-lg-1 noPadding">
                <h1>Q.</h1>
              </div>-->
              <div class="col-12 leftCenterText">
                <b>1.</b> Qu'est ce qu'une RDD ?
              </div>
            </div>
          </div>

          <div class="row reponse">
            <!-- <div class="col-2 col-lg-1 noPadding">
              <h1>R.</h1>
            </div>-->
            <div
              class="col-12 leftCenterText"
            >D'après Wikipédia, la Remise des Diplômes est une cérémonie au cours de laquelle sont décernés un ou plusieurs titres universitaires, faisant passer les participants du statut d'étudiant à celui d'ancien élève (<i>alumni</i>)… <br/> D'après nous, c'est la meilleure soirée de l'année. C'est la seule occasion de venir sur ton 31.</div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mtop">
        <div class="col-12 col-lg-8 questionGroup">
          <div class="cardHeader">
            <div class="row question">
              <!-- <div class="col-2 col-lg-1 noPadding">
                <h1>Q.</h1>
              </div>-->
              <div class="col-12 leftCenterText">
                <b>2.</b> Quels sont les moyens de paiement ?
              </div>
            </div>
          </div>

          <div class="row reponse">
            <!-- <div class="col-2 col-lg-1 noPadding">
              <h1>R.</h1>
            </div>-->
            <div class="col-12 leftCenterText">
              Vous avez le choix entre : effectuer un
              <b>virement</b> au compte du BDE OSIRIS, payer par
              <b>chèque</b> à l'ordre de "ASSOCIATION OSIRIS"
              ou bien payer en
              <b>espèces</b> auprès d'une personne de l'organisation.'
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mtop">
        <div class="col-12 col-lg-8 questionGroup">
          <div class="cardHeader">
            <div class="row question">
              <!-- <div class="col-2 col-lg-1 noPadding">
                <h1>Q.</h1>
              </div> -->
              <div
                class="col-12 leftCenterText"
              > <b>3.</b> Puis-je assister à la Cérémonie uniquement ?</div>
            </div>
          </div>

          <div class="row reponse">
            <!-- <div class="col-2 col-lg-1 noPadding">
              <h1>R.</h1>
            </div>-->
            <div
              class="col-12 leftCenterText"
            >Tu es libre d'assister aux événements de ton choix. Cependant, nous te conseillons fortement de venir au Bal qui se déroulera dès la fin de la Cérémonie. Ce serait dommage de rater la moitié de la soirée et de ne pas dire un dernier 'au revoir' à nos anciens préférés…</div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mtop">
        <div class="col-12 col-lg-8 questionGroup">
          <div class="cardHeader">
            <div class="row question">
              <!-- <div class="col-2 col-lg-1 noPadding">
                <h1>Q.</h1>
              </div> -->
              <div
                class="col-12 leftCenterText"
              > <b>4.</b> Quel est le programme de la soirée ?</div>
            </div>
          </div>

          <div class="row reponse">
            <!-- <div class="col-2 col-lg-1 noPadding">
              <h1>R.</h1>
            </div>-->
            <div
              class="col-12 leftCenterText"
            >La soirée va être très chargée ! <button>Decouvrir</button> </div>
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
export default {
  name: "Faq",
  components: {
    Header,
    Footer
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

.question {
  margin: 0px;
  padding-left: 0.5rem;
  border-top: solid  #9e7d62;
  border-right: solid #9e7d62;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.11), 0 3px 3px rgba(0, 0, 0, 0.16);
  background: #e8e8e8;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  margin-top: -20px;
  transition: 0.7s;
  font-size: 1.5rem;
  line-height: 3.25rem;
  font-family: calson;
  color: #051f3e;
}
h1 {
  color: #d5ba97;
  font-family: calson;
  text-transform: uppercase;
}
.question h1 {
  color: #d5ba97;
  font-weight: bolder;
}

.reponse {
  margin: 0px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background: #e8e8e8;
  padding-bottom: 0.25rem;
  border-radius: 3px;
  margin-bottom: -1px;
  padding-top: 0.25rem;
}

b {
  color: #9e7d62;
}

.question * b {
  font-family: proxima;
}

.reponse h1 {
  padding-left: 0.25rem;
  color: #051f3e;
  font-weight: bolder;
}

.mtop {
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: transparent !important;
}

.questionGroup {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding-left: 0px;
  padding-right: 0px;
  border-radius: 5px;
  border-left: solid #9e7d62;
  border-bottom: solid 0.25rem #9e7d62;
  background: #e8e8e8;
}

.leftCenterText {
  margin: auto;
  text-align: justify;
  padding-bottom: 0.25rem;
}

.centerText {
  text-align: center;
}

#particles-js {
  position: absolute;
  height: 100vh;
  width: 100vw;
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
  width: 90%;
  display: grid;
}

.cardHeader {
  position: relative;
  padding: 8px;
  padding-bottom: 0px;
}

.question:hover {
  transform: translateY(-10px);
}
</style>
