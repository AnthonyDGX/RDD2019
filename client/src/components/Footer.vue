<template>
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
                        <img src="../assets/isisWhite.png" width="40" height="40" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-02.png" width="70" height="40" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-03.png" width="40" height="40" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-04.png" width="40" height="40" alt="">
                    </a>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/whites-05.png" width="40" height="40" alt="">
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
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.footerRow {
    
}
.navBot {
  width: 100%;
  background: linear-gradient(90deg, black 0%, #0d0f21 0%, #051f3f 100%);
  position: fixed;
  left: 0;
  bottom: 0;
  padding-top: 0rem;
    padding-bottom: 0rem;
}
 .icons {
    display: inline-flex;
   flex-direction: row-reverse;
   align-items: center;
   padding-bottom: 3px;
   padding-top: 3px;
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
  
  .customIcons {
    display: flex!important;
    height: 30px;
    width: 30px;
    background: white;
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

  .vh10 {
    min-height: 10vh;
  }
</style>
