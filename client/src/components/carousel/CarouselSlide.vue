<template>
  <div
    class
    v-show="mainElement || rightElement || leftElement || midLeftElement || midRightElement"
  >
    <div class="middle" v-show="mainElement">
        <!-- <img  class="responsiveImage" src="../../assets/antoine.png" v-bind:alt="'/assets/' + student.photoProfil"> -->
        {{student.prenom}} {{student.nom}}
        </div>

    <slot></slot>
    <div class="right hidden" v-show="rightElement">
        
      {{student.prenom}} {{student.nom}}
      <slot></slot>
    </div>
    <div class="midRight hidden" v-show="midRightElement">
      {{student.prenom}} {{student.nom}}
      <slot></slot>
    </div>
    <div class="midLeft hidden" v-show="midLeftElement">
      {{student.prenom}} {{student.nom}} 
      <slot></slot>
    </div>
    <div class="left hidden" v-show="leftElement">
      {{student.prenom}} {{student.nom}}
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      maxSlide: 0,
      left: false,
      midLeft: false,
      midRight: false,
      right: false,
      middle: false,
      student: {
        nom: "",
        prenom: "",
        reve: "",
        surnom: "",
        descr: "",
        photoReve: "",
        photoProfil: ""
      }
    };
  },
  mounted() {},
  computed: {
    visible() {
      return this.index === this.$parent.index;
    },
    rightElement() {
      if (this.$parent.index === this.maxSlide - 2 && this.index === 0) {
        console.log("RIGHT");
        this.right = true;
        return this.right;
      }
      if (this.$parent.index === this.maxSlide - 1 && this.index === 1) {
        console.log(this.index);
        this.right = true;
        return this.right;
      }
      this.index === this.$parent.index + 2
        ? (this.right = true)
        : (this.right = false);
      return this.right;
    },
    leftElement() {
      if (this.$parent.index === 0 && this.index === this.maxSlide - 2) {
        this.left = true;
        return this.left;
      }
      if (this.$parent.index === 1 && this.index === this.maxSlide - 1) {
        this.left = true;
        return this.left;
      }
      this.index === this.$parent.index - 2
        ? (this.left = true)
        : (this.left = false);
      return this.left;
    },
    midRightElement() {
      if (this.$parent.index === this.maxSlide - 1 && this.index === 0) {
        this.midRight = true;
        return this.midRight;
      }
      this.index === this.$parent.index + 1
        ? (this.midRight = true)
        : (this.midRight = false);
      return this.midRight;
    },
    midLeftElement() {
      if (this.$parent.index === 0 && this.index === this.maxSlide - 1) {
        this.midLeft = true;
        return this.midLeft;
      }
      this.index === this.$parent.index - 1
        ? (this.midLeft = true)
        : (this.midLeft = false);
      return this.midLeft;
    },
    mainElement() {
      this.index === this.$parent.index
        ? (this.middle = true)
        : (this.middle = false);
      return this.middle;
    }
  }
};
</script>

<style lang="scss" scoped>
.hidden {
  @media (max-width: 992px) {
    display: none;
  }
}

.maxWidth {
  @media (max-width: 992px) {
    width: 100% !important;
  }
}

.left {
  text-align: left;
  position: absolute;
  left: 0;
  padding-top: 20%;
  width: 8%;
}

.right {
  text-align: right;
  position: absolute;
  right: 0;
  width: 8%;
  padding-top: 20%;
}
.midRight {
  text-align: right;
  position: absolute;
  right: 10%;
  width: 15%;
  padding-top: 10%;
}
.midLeft {
  text-align: left;
  position: absolute;
  left: 10%;
  width: 15%;
  padding-top: 10%;
}

.middle {
  text-align: center;
  position: absolute;
  width: 46%;
  left: calc(50% - 23%);
  @media (max-width: 992px) {
    width: 80% !important;
    left: calc(50% - 40%);
  }
}

.mainPicture {
  // background-color: #e7f2fd;
  background-image: url("../../assets/Picture2.png");
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

.secondPicture {
  // background-color: #e7f2fd;
  background-image: url("../../assets/Picture2.png");
  width: 145px;
  height: 80px;
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
</style>