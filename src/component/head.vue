<template>
    <div class="head">
<!--          <mt-header title="走,到重邮追梦去|2018迎新网">
              <router-link :to="{name:'home'}" slot="left">
                   <mt-button icon="back"></mt-button>
               </router-link> 
               <mt-button icon="more" slot="right"></mt-button>
               <bt-vue slot="btn"></bt-vue>
          </mt-header>  -->
          <div class="headBtn">
               <bt-vue></bt-vue>
          </div>
    </div>
</template>

<script>
import  botton from './button.vue'
export default {
    components:{
        'bt-vue' : botton
    }
}
</script>

<style scoped>
.head{
    width: 100%;
}
.headBtn{
    width: 100%;
    height: 70px;
}
</style>
