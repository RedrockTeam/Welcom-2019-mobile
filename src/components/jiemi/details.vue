<template>
    <div class="details_con">
         <div class="details_option clearFix">
             <select @change="change($event)">
                 <option v-for=" (option , index) in options" :value = index>{{option}}</option>
             </select>
         </div>
         <div class="details_pic">
                <vue-preview :slides="slide"></vue-preview>
         </div>
    </div>
</template>

<script>
//引入动态更改route的query值
import merge from 'webpack-merge'
export default {
    data(){
        return{
            slide:[
                {
                    src: '',
                    msrc: '',
                    alt: '',
                    title: '',
                    w:500 ,
                    h:400
                }
            ]

        }
    },
    props:['options' , 'imgs'],
    methods:{
        change:function(e){
            let index = e.target.value
             this.$router.push({
                 query:merge(this.$route.query , {'id' : index })
             })
             this.slide[0].src = this.imgs[index]
             this.slide[0].msrc = this.imgs[index]
             this.slide[0].title = this.options[index]            
        }
    },
    created:function(){
             this.slide[0].src = this.imgs[0]
             this.slide[0].msrc = this.imgs[0]
             this.slide[0].title = this.options[0]        
    }
}

</script>

<style scoped>

.details_con{
    width: 100%;
    height: auto;
}
.details_con .details_option{
    width: 100%;
    height: 15px;
}
.details_con .details_option select{
    float:right;
}
.details_con .details_pic{
    width:100%;
    height:auto;
    overflow:hidden;
    margin: 20px 0 2px 2px;
}


</style>

