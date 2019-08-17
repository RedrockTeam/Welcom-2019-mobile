<template>
  <div>
      
      <transition name="in">
              <router-view></router-view>
          </transition>
  </div>
</template>

<script>
import gongLue from './gonglue.vue'
export default {
components: {
    gongLue
}

}

</script>
<style lang="scss"  scoped>
@keyframes bounce{
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
/* .in-enter-active{
    animation: bounce .5s reverse;
}
@keyframes bounce{
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.in-leave-active {
  animation: bounce-in .5s reverse;
} */
</style>