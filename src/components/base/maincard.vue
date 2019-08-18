<template>
  <div id="card">
    <div class="cardcenter">
      <div class="incardcenter">
        <slot></slot>
      </div>
    </div>
    <div class="cardfooter">
      <div class="cardfootertop"></div>
      <div class="cardfooterbottom"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
#card {
  width: 750px;
  margin: auto auto;
  box-sizing: border-box;
  .cardcenter {
    box-sizing: border-box;
    width: 690px;
    margin: 0 auto;
    border-left: 11px solid #4d75e8;
    border-right: 11px solid #4d75e8;
    .incardcenter {
      box-sizing: border-box;
      overflow-y: scroll;
      overflow-x: hidden;
      // overflow: auto;
      border-left: 2px solid #0235c7;
      border-right: 2px solid #0235c7;
      background-color: #8eaafd;
    }
  }
  .cardfooter {
    box-sizing: border-box;
    width: 690px;
    height: 8px;
    margin: auto auto;
    .cardfootertop {
      box-sizing: border-box;
      width: 690px;
      height: 3px;
      background-color: #1b4ad2;
    }
    .cardfooterbottom {
      box-sizing: border-box;
      width: 690px;
      height: 5px;
      background-color: #4d75e8;
    }
  }
}
</style>