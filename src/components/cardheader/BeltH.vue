<template>
  <div class="road">
      <div class="car1 car">
      </div>
      <div class="car2 car">
      </div>
      <div class="car3 car">
      </div>
      <div class="car4 car">
      </div>
      <div class="car5 car">
      </div>
  </div>
</template>

<style scoped lang="scss">
.road {
    height: 100px;
    width: 980px;
    position: relative;
    .car {
        float: left;
        background-color: rgb(120, 155, 255);
        width: 40px;
        height: 16px;
        position: absolute;
        top: 10px;
        animation: car 7.5s linear infinite;
        left: 90px;
        opacity: 0;
    }
    .car2 {
        animation-delay: 1.5s;
    }
    .car3 {
        animation-delay: 3s;
    }
    .car4 {
        animation-delay: 4.5s;
    }
    .car5 {
        animation-delay: 6s;
    } 
}
@keyframes car {
    0% {
        top: 10px;
        left: 90px;
        transform: rotate(0deg);
        opacity: 1;
    }
    80% {
        top: 10px;
        left: 486px;
        transform: rotate(0deg);
        opacity: 1;
    }
    85% {
        top: 10px;
        left: 495px;
        transform: rotate(45deg);
        opacity: 1;
    }
    90% {
        top: 20px;
        left: 505px;
        transform: rotate(90deg);
        opacity: 1;
    }
    95% {
        top: 40px;
        left: 505px;
        transform: rotate(90deg);
        opacity: 0;
    }
    97% {
        top: 40px;
        left: 90px;
        transform: rotate(0deg);
        opacity: 0;
    }
    98%{
        top: 10px;
        left: 90px;
        transform: rotate(0deg);
        opacity: 0;
    }
    99%{
        top: 10px;
        left: 90px;
        transform: rotate(0deg);
        opacity: 1;
    }
    100% {
        top: 10px;
        left: 90px;
        transform: rotate(0deg);
        opacity: 1;
    }
}
</style>
