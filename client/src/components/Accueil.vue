<template>

  <div>
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
      >
      </vue-particles>

    <div class="darkTheme">
        <Header :itemMenu="accueil"></Header>

        <div class="container vh80 mainContainer">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6 col-12 mainTitleCard">
                    <h1>REMISE DES diplômes</h1>
                    <h2>Promotion 2019</h2>
                </div>

            </div>
            <div class="row justify-content-center align-items-center counter">
                <div class="col-md-2 col-6">
                    <div class="row">
                        <div class="counterCard" id="days">

                        </div>
                    </div>
                    <div class="row textCounter">
                        JOURS
                    </div>
                </div>
                <div class="col-md-2 col-6">
                    <div class="row">
                        <div class="counterCard" id="hours">

                        </div>
                    </div>
                    <div class="row textCounter">
                        HEURES
                    </div>
                </div>
                <div class="col-md-2 col-6">
                    <div class="row">
                        <div class="counterCard" id="minutes">

                        </div>
                    </div>
                    <div class="row textCounter">
                        MINUTES
                    </div>
                </div>
                <div class="col-md-2 col-6">
                    <div class="row">
                        <div class="counterCard" id="seconds">

                        </div>
                    </div>
                    <div class="row textCounter">
                        SECONDES
                    </div>
                </div>

            </div>

            <div class="row justify-content-center align-items-center">
                <div class="col-12 col-md-6 inscriptionButton">
                    <button type="button" class="btn btn-primary button">S'INSCRIRE</button>
                </div>
            </div>


        </div>
        <div class="navbar navbar-fixed-bottom vh10 navBot">
            <div class="row footerRow" style="width: 100%;">
                <div class="col-7 logos">
                    <a class="navbar-brand" href="#">
                        <img src="../assets/isisWhite.png" width="50" height="50" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-02.png" width="70" height="50" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-03.png" width="50" height="50" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-04.png" width="50" height="50" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-05.png" width="50" height="50" alt="">
                    </a>

                </div>
                 <div class="col-12 icons iconsMobile">
                    <div>
                        <a class="navbar-brand customIcons" href=""> <i class="fa fa-instagram customIcon"></i> </a>
                    </div>
                    <div>
                            <a class="navbar-brand customIcons" href=""> <i class="fa fa-twitter customIcon"></i> </a>
                        </div>
                    <div>
                        <a class="navbar-brand customIcons" href=""> <i class="fa fa-facebook customIcon"></i> </a>
                    </div>
                </div>
                <div class="col-12 logosMobile">
                    <a class="navbar-brand" href="#">
                        <img src="../assets/isisWhite.png" width="50" height="50" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-02.png" width="70" height="50" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-03.png" width="50" height="50" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-04.png" width="50" height="50" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-05.png" width="50" height="50" alt="">
                    </a>

                </div>
                <div class="col-5 icons">
                    <div>
                        <a class="navbar-brand customIcons" href=""> <i class="fa fa-instagram customIcon"></i> </a>
                    </div>
                    <div>
                            <a class="navbar-brand customIcons" href=""> <i class="fa fa-twitter customIcon"></i> </a>
                        </div>
                    <div>
                        <a class="navbar-brand customIcons" href=""> <i class="fa fa-facebook customIcon"></i> </a>
                    </div>
                </div>
               
            </div>

        </div>

        <!--/.Navbar-->
    </div>
  </div>
</template>

<script>
// import Index from '../assets/js/index'
// import Particules from '../assets/js/particules'
// import test from '../assets/js/test'
import { setCounter } from '../assets/js/index.js'
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'Accueil',
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      accueil: 'accueil'
    }
  },
  components: {
    Header
  },
  mounted () {
    setCounter();
  }
}



// particules()

</script>


<style lang="scss">
body {
    margin: 0!important;
    overflow-x: hidden;
    // background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(13, 15, 33, 1) 0%, rgba(5, 31, 63, 1) 100%)!important;

  }
  
  h1 {
    background: -webkit-linear-gradient(#9e7d6e, #d5ba97);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: calson;
    // font-weight: bold;
    text-transform: uppercase;
  }

  h2 {
    background: -webkit-linear-gradient(#9e7d6e, #d5ba97);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: calson;
    // font-weight: bold;

    // text-transform: uppercase
  }
  
  footer {
    position: fixed;
    height: 50px;
    bottom: 0;
    width: 100%;
  }

  @font-face {
  font-family: calson;
  src: url('../assets/css/calson.ttf');
}

@font-face {
  font-family: proxima;
  src: url('../assets/css/proxima.ttf');
}

  .footerRow {
      padding-left: 1rem;
  }
  
  .icons {
    display: inline-flex;
   flex-direction: row-reverse;
   align-items: center;
   padding-bottom: 3px;

   @media (max-width: 750px){
       display: none;
    }
  }

  .iconsMobile {
      display: none;
      @media (max-width: 750px) {
          display: flex;
      }
  }

  .logos {
      @media (max-width: 750px) {
          display: none;
      }
  }

   .logosMobile {
       display: none;
      @media (max-width: 750px) {
          display: flex;
      }
  }
  
  .bg-info {
    background: transparent!important;
  }
  
  .vh10 {
    min-height: 10vh;
  }
  
  .customIcons {
    display: flex!important;
    height: 30px;
    width: 30px;
    background: transparent;
    border-radius: 50%;
    transition: 0.7s; 
  }
  
  .customIcons:hover {
      transform: translateY(-10px);  
  }
  
  .customIcon {
    margin: 0 auto;
      align-self: center;
      color: #d5ba97;
  
      
  }
  
  // .customIcon:hover {
  //   transform: translateY(2px)
  // }
  
  
  .vh80 {
    min-height: 80vh;
  }
  
  .navbar-brand {
    font-weight: bolder !important;
  }
  
  .mainContainer {
    width: 95%;
    display: grid;
  }
  
  .textCounter {
    font-family: 'Roboto';
    color: #d5ba97;
    margin: 0;
    right: 0;
    // direction: rtl;
  }
  .navbar-toggler{
    border: solid 0px !important;
  }
  .inscriptionButton {
    text-align: center;
    margin-top: 1.5rem !important;
    border-top: solid 1px #d5ba97;
    padding: 1.5rem 0rem 1.5rem 0rem;
  }
  
  .navBot {
    background-color: transparent!important;
    padding-bottom: 0px!important;
    padding-top: 0px!important;
    display: inline-flex;
    width: 100%;
  }
  
  .button {
    margin-top: 1.5rem;
    background: #d5ba97 !important;
    background: linear-gradient(90deg, #9e7d6e, #d5ba97);
    border: transparent !important;
    font-size: 1.5rem !important;
    border-radius: 3rem !important;
    padding: 1rem 1.5rem !important;
    transition: 0.7s!important;
    font-weight: bold;
  }
  
  .button:active {
    box-shadow: 0 0 0 0rem rgb(213, 186, 151) !important;
  }
  
  .button:focus {
    box-shadow: 0 0 0 0rem rgb(213, 186, 151) !important;
  }
  
  .button:hover {
    transform: translateY(-10px);
  }
  
  .counterCard {
    // background-color: #e7f2fd;
    background-image: url("../assets/Picture1.png");
    width: 145px;
    height: 110px;
    font-size: 42px;
    color: #303030;
    text-align: center;
    line-height: 110px;
    // border-radius: 80px 200px 200px 362px;
    margin: 0 auto 5px;
    -webkit-transition-duration: 700ms;
    -o-transition-duration: 700ms;
    transition-duration: 700ms;
    background-position: center;
  
    background-size: contain;
  
    background-repeat: no-repeat;
  }
  
  .counterCard:hover {
    // background-color: #d5ba97;
    background-image: url("../assets/Picture2.png");
    color: #fff;
    // -webkit-box-shadow: 0 6px 50px 8px rgba(21, 131, 233, .15);
    // box-shadow: 0 6px 50px 8px rgba(21, 131, 233, .15);
  }
  
  .counter {
    margin-top: 1.5rem;
  }
  
  .darkTheme {
    min-height: 100vh;
    min-width: 100%;
  
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(13, 15, 33, 1) 0%, rgba(5, 31, 63, 1) 100%);
  }
  
  
  .menuItem {
    color: #d5ba97 !important;
    font-family: 'Roboto';
    font-size: 0.75rem;
    font-weight: bolder;
  }
  
  .active {
    color: white !important;
  }
  
  .mainTitleCard {
    text-align: center;
    color: #d5ba97 !important;
    border-bottom: solid 1px #d5ba97;
    padding: 1.5rem 0rem 1.5rem 0rem;
  }
  
  canvas { 
    display: block;
    vertical-align: bottom; 
  } /* ---- particles.js container ---- */ 
  #particles-js{ 
    position:absolute; 
    width: 100%; 
    height: 100%;  
    overflow: hidden;
  }
</style>