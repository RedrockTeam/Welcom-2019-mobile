<template>
<div :class=" this.$route.path === checkRoute ? ['active-box' , 'fengCai_btn'] : ['notactive-box' , 'fengCai_btn']">
     <div class="btn_head clearFix">
          <div :class=" this.$route.path === checkRoute ? ['btn_head_high','active-top-tall-border']  : ['btn_head_high','notactive-top-tall-border'] ">
               <div :class=" this.$route.path === checkRoute ? ['box_con','active-top-box']  : ['box_con','notactive-top-box'] ">
                    <div></div>
                    <div></div>
               </div>
               <div class="border_hidden"></div>
          </div>
          <div :class="this.$route.path === checkRoute ? ['btn_head_low','active-top-low-border']  : ['btn_head_low','notactive-top-low-border']"></div>
     </div>
     <div class="btn_text">{{content}}</div>
     <div class="btn_down clearFix">
          <div :class="this.$route.path === checkRoute ? ['down_left','active-bottom-left']  : ['down_left','notactive-bottom-left']"></div>
          <div class="down_right">
               <span :class="this.$route.path === checkRoute ? ['tall','active-bottom-right-tall']  : ['tall','notactive-bottom-right-tall']"></span>
               <span :class="this.$route.path === checkRoute ? ['low','active-bottom-right-low']  : ['low','notactive-bottom-right-low']"></span>
          </div>
     </div>
</div>

</template>

<script>
export default {
      props:['content' , 'checkRoute'],
      methods:{
      }
}
</script>

<style scoped>
.notactive-top-tall-border{
    border-bottom: 2px solid #87fffe;
/*     border-right: 3px solid #87fffe; */
}
.active-top-tall-border{
   border-bottom: 2px solid #ffbecc;
/*    border-right: 3px solid #ffbecc; */
}

.notactive-top-box div{
    background-color: #ffb8cc;

}
.active-top-box div{
    background-color:#abf8ff;
}
.notactive-top-box  div::before{
    background-color:#ff90b0;
}
.active-top-box  div::before{
    background-color:#38e2fc;
}

.notactive-top-low-border{
   border-bottom: 2px solid #87fffe;
}
.active-top-low-border{
   border-bottom: 2px solid #ffbecc;
}
.notactive-bottom-left{
    border-top: 2px solid #87fffe;
    border-right: 2px solid #87fffe;
}
.active-bottom-left{
    border-top: 2px solid #ffbecc;
    border-right: 2px solid #ffbecc;
}
.notactive-bottom-right-tall{
   border-top: 2px solid #87fffe;
   border-left: 2px solid #87fffe;
}
.active-bottom-right-tall{
   border-top: 2px solid #ffbcce;
   border-left: 2px solid #ffbcce;
}
.notactive-bottom-right-low{
  border-top: 2px solid #87fffe;
/*   border-left: 2px solid #87fffe; */
}
.active-bottom-right-low{
  border-top: 2px solid #ffbcce;
}
.notactive-box{
    background-color:#90d8ff;
    color: #1545c5;
}
.active-box{
    background-color:#ff648c;
    color: #fff;
}

        .fengCai_btn{
        	width: 147px;
            height: 68px;
            margin-right: 14px;
        	border-top:5px solid #1c46be;
        }
        .fengCai_btn .btn_head{
        	display: flex;
        	width: 100%;
        	height: 16px;
        }
        .fengCai_btn .btn_head .btn_head_high{
        	display: inline-block;
        	width: 40%;
        	height: 100%;
        	line-height: 20px;
        	background-color:#4d75e8;
        }
        .fengCai_btn .btn_head .btn_head_high::before{
        	content: '';
        	display: inline-block;
            position:relative;
        	width: 4px;
        	height: 100%;
            left: -15px;
            vertical-align: top;
            margin-right: 5px;
        	background-color: #1c46be;
        }
        .fengCai_btn .btn_head .btn_head_high .box_con{
            position: relative;
            top: -20px;
            left: 10px;
        	display: inline-block;
        	width: 50px;
        	height: 80%;
        	vertical-align: top;
        	line-height: 15px;
        }
        .fengCai_btn .btn_head .btn_head_high .box_con div{
        	display: inline-block;
            width: 8px;
            height: 8px;
            vertical-align: top;
            margin-top: 2px;
            margin-right: 5px;
        }
        .fengCai_btn .btn_head .btn_head_high .box_con div::before{
        	position: relative;
        	top: 2px;
        	left: -2px;
        	content: '';
        	display: block;
        	width: 8px;
        	height: 7px;
        }

        .fengCai_btn .btn_head .btn_head_high .border_hidden{
        	display: inline-block;
        	float: right;
        	width: 5px;
        	height: 60%;
        	vertical-align: top;
        }
        .fengCai_btn .btn_head .btn_head_high .border_hidden::before{
/*         	display: block;
        	content: '';
        	height: 100%;
        	width: 100px;
        	background-color: #4d75e8; */
        }
        .box_con  div:first-child{
        	margin-left: 5px;
        }
        .fengCai_btn .btn_head .btn_head_low{
        	display:inline-block;
        	width: 60%;
        	height: 70%;
        	background-color:#4d75e8;
        }
/*         .fengCai_btn .btn_head .btn_head_low::after{
        	width: 3px;
        	height: 100%;
        	content: '';
        	display: block;
        	margin-left: 64px;
        	background-color:#1842b8;
        } */
        .fengCai_btn .btn_text{
        	width: 100%;
            height: 40px;
            font-size: 28px;
        	text-align: center;
        	line-height: 40px;
        }
        .fengCai_btn .btn_down{
        	width: 100%;
            height: 12px;
        }
        .down_left{
        	display: inline-block;
        	width: 30px;
            height: 5px;
            margin-top: 2px;
            float: left;
            border-bottom: 2px solid #1842ba;
        	background-color:#4b74e6;
            vertical-align: top;
        }
        .fengCai_btn .btn_down .down_right{
        	display:flex;
        	float: right;
            width: 50px;
            height: 100%;
            vertical-align: top;
        }
        .fengCai_btn .btn_down .down_right span{
        	display: inline-block;
        	background-color: #4b74e6;
        	border-bottom: 2px solid #1842ba;
        }
        .fengCai_btn .btn_down .down_right .tall{
        	width: 30px;
        	height:5px;
            margin-top: 2px;
        }
        .fengCai_btn .btn_down .down_right .tall::before{
/*         	content: '';
        	display: block;
        	width: 30px;
        	position: relative;
            left: 20px;
            height: 6px;
        	background-color:  #4b74e6;
         	border-bottom: 2px solid #1842ba; */
        }
        .fengCai_btn .btn_down .down_right .low{
        	width: 20px;
        	height:5px;
            margin-top: 2px;
        }
</style>
