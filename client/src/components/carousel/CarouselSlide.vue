<template>
  <div class="w33 maxWidth">
    <div class="" v-show="mainElement">
      <div class="mainPicture" id="minutes"></div>
           {{index}}

      <slot></slot>
    </div>
    <div class="" v-show="rightElement">
      <div class="mainPicture right"></div>
      {{index}}
      <slot></slot>
    </div>
    <div class="" v-show="leftElement">
      <div class="mainPicture left"></div>
           {{index}}

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      maxSlide: 0
    };
  },
  computed: {
    visible() {
      return this.index === this.$parent.index;
    },
    rightElement() {
      console.log(this.$parent.index);
      return this.index === this.$parent.index + 1;
    },
    leftElement() {
      return this.index === this.$parent.index - 1;
    },
    mainElement() {
      return this.index === this.$parent.index;
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

.w33 {
  width: 33%;
}

.left {
  padding-top: 50%;
}

.right {
  padding-top: 50%;
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