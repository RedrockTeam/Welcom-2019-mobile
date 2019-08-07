<template>
    <div class="head">
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
