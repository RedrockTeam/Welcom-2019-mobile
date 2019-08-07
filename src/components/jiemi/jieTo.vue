<template>
<ul class="jie_link"> 
    <li ><router-link :to="{name:'Gender' , query:{id:0}}" :class="'/jiemi' === this.$route.path ? 'router-link-active' : ''">男女比例</router-link></li>
    <li ><router-link :to="{name:'subject'}">最难科目</router-link></li>
    <li ><router-link :to="{name:'students'}">生源比例</router-link></li>
</ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.jie_link{
    width: 100%;
    height: 30px;
    display: flex;
}
.jie_link li{
    width: 33.3%;
    height: 100%;
    text-align: center
}
.jie_link li a{
    color: inherit;
}
.router-link-active{
    color: #26a2ff !important;
}

</style>

