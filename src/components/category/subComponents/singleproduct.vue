<template>
  <div class="contents" ref="wrapper">
    <div id="lazydiv">
      <div class="cate-item">
        <div class="body">
          <div class="top">
            <div class="left">品类</div>
          </div>
          <div class="items">
            <div class="item" @click="showItemDetail(item.title)" v-for="(item,index) in ItemsCateImage">
              <img :src="item.imgUrl">
            </div>
          </div>
        </div>
        <splitline></splitline>
      </div>
      <div class="cate-item">
        <div class="body">
          <div class="top">
            <div class="left">风格</div>
          </div>
          <div class="items">
            <div class="item" @click="showItemDetail(item.title)" v-for="(item,index) in ItemsStyleImage">
              <img :src="item.imgUrl">
            </div>
          </div>
        </div>
        <splitline></splitline>
      </div>
      <div class="cate-item">
        <div class="body">
          <div class="top">
            <div class="left">对象</div>
          </div>
          <div class="items">
            <div class="item" @click="showItemDetail(item.title)" v-for="(item,index) in ItemsObjectImage">
              <img :src="item.imgUrl">
            </div>
          </div>
        </div>
        <splitline></splitline>
      </div>
    </div>
    <transition name="spinnerfade">
      <div class="spinnerWrapper" v-show="showspinner">
        <mt-spinner class="mt-spinner" type="double-bounce" color="#ff2d47" :size="50"></mt-spinner>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import splitline from '@/components/common/splitLine.vue';
  import BScroll from 'better-scroll';
  export default {
    name: 'singleproduct',
    data () {
      return {
        showspinner: true,
        ItemsCateImage: [
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category01.png-optimize', title: '礼物'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category02.png-optimize', title: '家具'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category03.png-optimize', title: '穿搭'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category04.png-optimize', title: '美物'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category05.png-optimize', title: '饰品'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category06.png-optimize', title: '鞋包'}
        ],
        ItemsStyleImage: [
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category07.png-optimize', title: '创意生活'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category08.png-optimize', title: '萌萌哒'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category09.png-optimize', title: '文艺风'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category10.png-optimize', title: '科技范'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category11.png-optimize', title: '奇葩搞怪'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category12.png-optimize', title: '设计感'}
        ],
        ItemsObjectImage: [
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category13.png-optimize', title: '送女友'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category14.png-optimize', title: '送男友'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category15.png-optimize', title: '送同事'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category16.png-optimize', title: '送长辈'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category17.png-optimize', title: '送基友'},
          {imgUrl: 'http://opc4ef7kt.bkt.clouddn.com/category/itemImage/category18.png-optimize', title: '送闺蜜'}
        ]
      };
    },
    created() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    mounted() {
      setTimeout(() => {
        this.showspinner = false;
      }, 300);
    },
    activated() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    methods: {
      showItemDetail(title) {
        this.$emit('showItemDetail', title);
      },
      _initScroll() {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.wrapper, {
              click: true, probeType: 3
            });
          } else {
            this.scroll.refresh();
          }
        });
      }
    },
    components: {
      splitline
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  .spinnerWrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #faf5f5;
    z-index: 30;
    opacity: 1;
    &.spinnerfade-enter-active, &.spinnerfade-leave-active {
      transition: opacity .15s linear;
    }
    &.spinnerfade-enter, &.spinnerfade-leave-to {
      opacity: 0;
    }
    .mt-spinner {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -25px;
      margin-top: -25px;
      z-index: 1000;
    }
  }
</style>
