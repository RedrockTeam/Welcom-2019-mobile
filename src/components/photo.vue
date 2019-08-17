<template>
      <vue-preview :slides="slide1" class="photo_con"></vue-preview>
</template>

<script>
export default {
    data () {
      return {
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',//预览时的大图
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',//默认的小图
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 500,//双击时放大的尺寸
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
      }
    },
    methods: {
    }
}
</script>

<style  scoped>
.photo_con{
  width: 100%;
  text-align: center;
}
</style>

