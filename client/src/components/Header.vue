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
             <router-link v-bind:class="[itemMenu == 'accueil' ? 'nav-link menuItem active' : 'nav-link menuItem']" to="/Accueil">ACCUEIL</router-link>
          </li>
          <li class="nav-item">
            <a v-bind:class="[itemMenu == 'news' ? 'nav-link menuItem active' : 'nav-link menuItem']"  href="#">NEWS</a>
          </li>
          <li class="nav-item">
            <router-link v-bind:class="[itemMenu == 'faq' ? 'nav-link menuItem active' : 'nav-link menuItem']" to="/Faq">FAQ</router-link>
            <!-- <a class="nav-link menuItem" href="/Faq">FAQ</a> -->
          </li>
          <li class="nav-item">
            <a v-bind:class="[itemMenu == 'inscription' ? 'nav-link menuItem active' : 'nav-link menuItem']" href="#">INSCRIPTIONS</a>
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
  props: ['itemMenu'],
  created: function () {
  },
  data() {
    return {
      
    };
  }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  background: transparent;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0);
}
.active {
    color: white!important;
}
.vh10 {
    min-height: 10vh;
  }

  .menuItem {
    color: #d5ba97!important;
    font-family: 'Roboto';
    font-size: 0.75rem;
    font-weight: bolder;
  }

  .menuItem.active {
          color: white!important;

  }

  .navbar-brand {
      font-weight: bolder;
  }
</style>
