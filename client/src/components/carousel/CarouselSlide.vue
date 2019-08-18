<template>
  <div class v-show="mainElement || rightElement || leftElement">
    <div class="middle" v-show="mainElement">middle {{index}}</div>

    <slot></slot>
    <div class="right" v-show="rightElement">
      rigth {{index}}
      <slot></slot>
    </div>
    <div class="left" v-show="leftElement">
      left {{index}}
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
      middle: false
    };
  },
  mounted() {
  },
  computed: {
    visible() {
        
      return this.index === this.$parent.index;
    },
    rightElement() {
        if(this.$parent.index === this.maxSlide -1 && this.index === 0) {
            console.log("RIGGGHT")
            console.log(this.index)
            this.right = true;
            return this.right;
        }
      this.index === this.$parent.index + 1
        ? (this.right = true)
        : (this.right = false);
      return this.right;
    },
    leftElement() {
         if(this.$parent.index === 0 && this.index === this.maxSlide - 1) {
            console.log("LEFFFT")
            console.log(this.index)
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

.w33 {
  width: 33%;
}

.left {
text-align: left}

.right {
text-align: right}

.middle {
    text-align:center;
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