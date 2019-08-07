<template>
   <div>
     <jieTo-vue></jieTo-vue>
     <router-view></router-view>
   </div>
</template>

<script>
import jieTo from './jiemi/jieTo.vue'
export default {
     data(){
         return{

         }
     },
     components:{
         'jieTo-vue':jieTo
     }
}
</script>

<style>

</style>
