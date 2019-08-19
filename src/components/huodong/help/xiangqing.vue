<template>
  <div class="xiangqing">
    <btn-h></btn-h>
    <main-card>
      <div class="qmsg">
        <div class="qfirstline">
          <div class="qperson">
            <div class="avatar">
              <img :src="ansmsg.author.avatar" />
            </div>
            <div class="qname" v-html="ansmsg.author.name"></div>
          </div>

          <div class="sta" v-html="ansmsg.status"></div>
        </div>

        <div class="qcontent" v-html="ansmsg.content"></div>
        <div class="qphotos" v-show="!(ansmsg.photoUrls==[])">
          <img v-for="item in realphotoUrls" :key="item.index" :src="item" />
        </div>
      </div>
      <alist-card
        v-for="oneanswer in ansmsg.answer"
        :key="oneanswer.index"
        class="item"
        :oneanswer="oneanswer"
      ></alist-card>
    </main-card>
  </div>
</template>

<script>
import alistCard from "@/components/huodong/help/alistcard.vue";
export default {
  created() {
    this.$axios
      .get(
        "https://wx.idsbllp.cn/234/seniorhelpme/question/id?id=" +
          this.$route.query.id
      )
      .then(response => {
        this.ansmsg = response.data;
        console.log(response);
        const realphotourls = [];
        this.ansmsg.photoUrls.forEach(photo => {
          const realphoto =
            "https://wx.idsbllp.cn/234/seniorhelpme/getImage?imageName=" +
            photo.split("/", 4)[3];
          realphotourls.push(realphoto);
          this.realphotoUrls = realphotourls;
        });
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  data() {
    return {
      ansmsg: {
        id: 72,
        content: "OK",
        photoUrls: [
          "/data/image/x7o9e2jpswp.jpg",
          "/data/image/6earcc6fexl.jpg"
        ],
        tags: [
          {
            id: 1,
            name: "生活",
            createdAt: "2019-08-14 21:34:43",
            updatedAt: "2019-08-15 10:43:39"
          },
          {
            id: 2,
            name: "学习",
            createdAt: "2019-08-14 21:35:24",
            updatedAt: "2019-08-15 10:43:36"
          },
          {
            id: 3,
            name: "校园周边",
            createdAt: "2019-08-14 21:35:40",
            updatedAt: "2019-08-15 10:40:31"
          },
          {
            id: 4,
            name: "快递",
            createdAt: "2019-08-14 21:35:59",
            updatedAt: "2019-08-15 10:43:43"
          },
          {
            id: 5,
            name: "迎新",
            createdAt: "2019-08-14 21:36:14"
          },
          {
            id: 6,
            name: "军训",
            createdAt: "2019-08-14 21:36:40"
          },
          {
            id: 7,
            name: "招新",
            createdAt: "2019-08-14 21:36:57"
          }
        ],
        answer: [
          {
            id: 55,
            content: "回复测试",
            photoUrls: ["/data/image/6khlmb59w4u.jpg"],
            author: {
              id: 279,
              stuNum: 2018211214,
              name: "刘静",
              gender: "女",
              avatar:
                "http://thirdwx.qlogo.cn/mmopen/vi_32/r1dibKNYicMMdypdkd1syv9UJiavR9H6iaMuoILj3ricPHKxub6UvYj7RcG8eCfskzmGEU75wzZ940S8nxXCL6QyEpA/132",
              role: 0
            },
            approvalNum: 0,
            opposeNum: 0,
            createdAt: "2019-08-15 12:35:01"
          },
          {
            id: 69,
            content: "回复正常",
            photoUrls: ["/data/image/6khlmb59w4u.jpg"],
            author: {
              id: 125,
              stuNum: 2017213376,
              name: "胡开翔",
              avatar:
                "http://thirdwx.qlogo.cn/mmopen/vi_32/g36NDGOqYzTWQs3KDI8zov9r1Dm2w01ITMlMIlpPGjaiboDafNRIZbKDR02NziaFybMGXVEX2ptML9NXjpFK6tww/132",
              role: 0
            },
            approvalNum: 0,
            opposeNum: 0,
            createdAt: "2019-08-16 13:16:49"
          },
          {
            id: 70,
            content: "我要来了",
            photoUrls: ["/data/image/6khlmb59w4u.jpg"],
            author: {
              id: 69,
              stuNum: 2017213143,
              name: "伍尚欢",
              avatar:
                "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erMGsDCNqXYs7Kby3Ao3IbicPKSuSgDQBibJyQSTmg1UcM9gU2iaYsImIUgurXzooJUH4Sia2jZ5ibhibqg/132",
              role: 0
            },
            approvalNum: 0,
            opposeNum: 0,
            createdAt: "2019-08-16 13:18:06"
          },
          {
            id: 71,
            content: "正常！！",
            photoUrls: ["/data/image/6khlmb59w4u.jpg"],
            author: {
              id: 131,
              stuNum: 2017210097,
              name: "张恒瑞",
              avatar:
                "http://thirdwx.qlogo.cn/mmopen/vi_32/ON1ia3q8kib5fWRu4jHIGnnEEX24hweicxZbLvfT6QAXVmNy4OXdrLkYZWiaqHGWfvxUVBT46a5RW4tdKRMMsYNrfA/132",
              role: 0
            },
            approvalNum: 0,
            opposeNum: 0,
            createdAt: "2019-08-16 13:19:33"
          },
          {
            id: 75,
            content:
              "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
            photoUrls: ["/data/image/6khlmb59w4u.jpg"],
            author: {
              id: 189,
              stuNum: 2018212822,
              name: "林泽智",
              avatar:
                "http://thirdwx.qlogo.cn/mmopen/vi_32/fIJFx1XX0QYu1vYm80co8DLwrqR5zCmeEcXrWmt8gQwibmt8onSFFHySC7yJWfZUT4SOJhmKibJBiac8ic3TSWeQxA/132",
              role: 0
            },
            approvalNum: 0,
            opposeNum: 0,
            createdAt: "2019-08-16 13:25:46"
          }
        ],
        author: {
          id: 275,
          stuNum: 2018212426,
          name: "白烛葵",
          gender: "男",
          avatar:
            "http://thirdwx.qlogo.cn/mmopen/vi_32/zr6xMeP9OGeticETriadXFhsjSjvWppQH0jVsElO5Y5YKP5hfYmeWkVMOtYibxMCrBMfoVBpU9qVRcU77CiaicxNrGw/132",
          role: 1,
          createdAt: "2019-08-14 13:45:38"
        },
        answersCount: "30",
        status: "未解决",
        createdAt: "2019-08-14 13:46:44"
      },
      realphotoUrls: []
    };
  },

  components: {
    alistCard
  }
};
</script>
<style lang="scss" scoped>
.qmsg {
  width: 602px;
  // height: 345px;
  margin: auto auto;
  margin: 27px 28px 18px 30px;
  .qfirstline {
    width: 602px;
    height: 95px;
    display: flex;
    justify-content: space-between;
    .qperson {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .avatar {
        width: 73px;
        height: 73px;
        border: 1px solid #6c91ff;
        border-radius: 50%;
        overflow: hidden;
        margin: 8px 18px 8px 8px;
      }
      .qname {
        font-family: "pingfang-regular";
        font-size: 22px;
        color: #fff;
        opacity: 0.65;
        line-height: 73px;
      }
    }
    .sta {
      font-family: "pingfang-regular";
      font-size: 22px;
      color: #fff;
      opacity: 0.4;
      line-height: 73px;
    }
  }
  .qcontent {
    font-size: 24px;
    font-family: "pingfang-regular";
    color: #fff;
    opacity: 0.8;
    line-height: 40px;
    margin: 15px;
  }
  .qphotos {
    display: flex;
    flex-wrap: wrap;
    width: 640px;
    // overflow: auto;
    img {
      width: 128px;
      height: 128px;
      margin: 10px 12px;
      border: 2px solid #3181ef;
    }
  }
}
.item {
  margin: 14px auto;
}
</style>