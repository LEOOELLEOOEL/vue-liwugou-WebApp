<template>
  <div class="content" ref="content">
    <div id="lazyDiv">
      <div class="subject">
        <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/top100/top100.png-optimize">
      </div>
      <div class="items">
        <div class="item" @click="showPresentDetail(item)" v-for="(item,index) in top100Data">
          <div class="image">
            <img v-lazy.lazyDiv="item.img_url+'-optimize'">
          </div>
          <div class="explain">
            <div class="title">{{item.title}}</div>
            <div class="detail">{{item.subject}}</div>
            <div class="price">￥{{item.price}}</div>
          </div>
        </div>
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
  import BScroll from 'better-scroll';
  export default {
    name: 'original',
    data () {
      return {
        showspinner: true,
        top100Data: []
      };
    },
    created() {
      this.$http.get('http://www.leoel.top/api/billboard_top100.php').then((response) => {
        response = response.body;
        if (response.code === 200) {
          this.top100Data = response.data;
          setTimeout(() => {
            this.showspinner = false;
          }, 300);
        }
        this.$nextTick(() => {
          this._initScroll();
        });
      });
    },
    activated() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    methods: {
      showPresentDetail(item) {
        this.$emit('showitemdetail', item);
      },
      _initScroll() {
        if (!this.Scroll) {
          this.Scroll = new BScroll(this.$refs.content, {
            click: true, probeType: 3
          });
        } else {
          this.Scroll.refresh();
        }
      }
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
    &.spinnerfade-enter,&.spinnerfade-leave-to {
      opacity:0;
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
