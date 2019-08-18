<template>
  <div class v-show="mainElement || rightElement || leftElement">
    <div class="middle" v-show="mainElement">{{student.prenom}} {{student.nom}}</div>

    <slot></slot>
    <div class="right hidden" v-show="rightElement">
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
      if (this.$parent.index === this.maxSlide - 1 && this.index === 0) {
        console.log("RIGGGHT");
        console.log(this.index);
        this.right = true;
        return this.right;
      }
      this.index === this.$parent.index + 1
        ? (this.right = true)
        : (this.right = false);
      return this.right;
    },
    leftElement() {
      if (this.$parent.index === 0 && this.index === this.maxSlide - 1) {
        console.log("LEFFFT");
        console.log(this.index);
        this.left = true;
        return this.left;
      }
      this.index === this.$parent.index - 1
        ? (this.left = true)
        : (this.left = false);
      return this.left;
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
  left: 0px;
  padding-top: 10%;
  width: 20%;
}

.right {
  text-align: right;
  position: absolute;
  right: 0px;
  width: 20%;
  padding-top: 10%;
}

.middle {
  text-align: center;
  position: absolute;
  width: 60%;
  left: calc(50% - 30%);
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