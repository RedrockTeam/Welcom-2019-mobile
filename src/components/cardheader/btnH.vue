<template>
  <div class="btn-header">
      <btn-animation class="btnd"></btn-animation>
  </div>
</template>

<script>
import btnAnimation from "@/components/animation/BtnAnimation";
export default {
components: {
    btnAnimation
  }

}

</script>
<style lang="scss" scoped>
.btn-header {
  width: 690px;
  height: 49px;
  background-image: url("../../assets/images/cardheader/btncard.png");
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: 100% auto;
  margin: auto auto;
  position: relative;

  .btnd {
    margin: 0;
    padding: 0;
    position: relative;
    left: 94px;
    height: 34px;
  }
}
</style>