<template>
  <div>
       
    <nav class="navbar navbar-expand-lg navbar-dark primary-color header vh10">
       
      <!-- Navbar brand -->
       <router-link class="navbar-brand" to="/">RDD 2k19</router-link>
      <!-- Collapse button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mainMenu"
        aria-controls="mainMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible content -->
      <div class="collapse navbar-collapse" id="mainMenu">
        <!-- Links -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
             <router-link class="nav-link menuItem" to="/Accueil">ACCUEIL</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link menuItem" href="#">NEWS</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link menuItem active" to="/Faq">FAQ</router-link>
            <!-- <a class="nav-link menuItem" href="/Faq">FAQ</a> -->
          </li>
          <li class="nav-item">
            <a class="nav-link menuItem" href="#">INSCRIPTIONS</a>
          </li>
        </ul>
        <!-- Links -->
      </div>
      <!-- Collapsible content -->
      
    </nav>
    
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.header {
  background: linear-gradient(90deg, black 0%, #0d0f21 0%, #051f3f 100%);
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
}
.active {
    color: #d5ba97!important;
}
.vh10 {
    min-height: 10vh;
  }
</style>
