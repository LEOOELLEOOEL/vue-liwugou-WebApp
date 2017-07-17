<template>
  <div class="contentwrap" ref="contentwrap">
    <div class="contentwrapper" id="contentwrapper">
      <div class="swipe">
        <mt-swipe class="mt-swipe" :auto="3000" :speed="300">
          <mt-swipe-item class="swipe-item">
            <img src="http://opc4ef7kt.bkt.clouddn.com/home/swipper01.png-optimize">
          </mt-swipe-item>
          <mt-swipe-item class="swipe-item">
            <img src="http://opc4ef7kt.bkt.clouddn.com/home/swipper02.png-optimize">
          </mt-swipe-item>
          <mt-swipe-item class="swipe-item">
            <img src="http://opc4ef7kt.bkt.clouddn.com/home/swipper03.png-optimize">
          </mt-swipe-item>
          <mt-swipe-item class="swipe-item">
            <img src="http://opc4ef7kt.bkt.clouddn.com/home/swipper04.png-optimize">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <splitline></splitline>
      <div class="catewrapper">
        <div class="cateitemtop">
          <div class="top">
            <div class="item" @click="showcateitem(0)">
              <i class="iconfont" style="color: #ff9e9d;">&#xe66f;</i><br>
              百元礼物

            </div>
            <div class="item"  @click="showcateitem(1)">
              <i class="iconfont" style="color: #ffcd7a;">&#xe64f;</i><br>
              创意礼物

            </div>
            <div class="item"  @click="showcateitem(2)">
              <i class="iconfont" style="color: #ffcac4;">&#xe616;</i><br>
              最新Get

            </div>
          </div>
        </div>
      </div>
      <splitline></splitline>
      <div class='presents'>
        <div class="contain" @click="showdetails(item)" v-for="(item,index) in choiceData">
          <div class="present" >
            <div class="header">
              <div class="avatar">
                <img :src="item.avatar+'-optimize'">
                <div class="detail"><span>{{item.nickname}}</span><br> <span class="small">{{item.signature}}</span></div>
              </div>
            </div>
            <div class="image">
              <img v-lazy.contentwrapper="item.img_url+'-optimize'">
            </div>
            <div class="explain">
              <div class="title">{{item.title}}</div>
              <div class="detail">{{item.contents}}</div>
              <div class="line"></div>
            </div>
            <div class="footer">
              <div class="left">
                栏目&nbsp;{{item.column}}

              </div>
              <div class="favorite">
                <i class="iconfont">&#xe602;&nbsp;&nbsp;{{item.favorite_num}}</i>
              </div>
            </div>
          </div>
          <splitline></splitline>
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
  import splitline from '../../common/splitLine.vue';
  export default {
    name: 'choice',
    data () {
      return {
        showspinner: true,
        choiceData: [],
        baiyuanData: [],
        ideaData: [],
        newGetData: []
      };
    },
    created() {
      this.$http.get('http://www.leoel.top/api/home_choice.php').then((response) => {
        response = response.body;
        if (response.code === 200) {
          this.choiceData = response.data;
          setTimeout(() => {
            this.showspinner = false;
          }, 300);
        }
        this.$nextTick(() => {
          this._initScroll();
        });
      });
    },
    mounted() {
      this.$http.get('http://www.leoel.top/api/home_elder.php').then((response) => {
        response = response.body;
        if (response.code === 200) {
          this.baiyuanData = response.data;
        }
      });
      this.$http.get('http://www.leoel.top/api/home_boyfriend.php').then((response) => {
        response = response.body;
        if (response.code === 200) {
          this.ideaData = response.data;
        }
      });
      this.$http.get('http://www.leoel.top/api/home_girlfriend.php').then((response) => {
        response = response.body;
        if (response.code === 200) {
          this.newGetData = response.data;
        }
      });
    },
    activated() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    methods: {
      showcateitem(item) {
        if (!item) {
          this.$emit('showcatedetail', this.baiyuanData, '百元礼物');
        } else if (item === 1) {
          this.$emit('showcatedetail', this.ideaData, '创意礼物');
        } else {
          this.$emit('showcatedetail', this.newGetData, '最新Get');
        }
      },
      showdetails(item) {
        this.$emit('showdetails', item);
      },
      _initScroll() {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.contentwrap, {
            click: true, probeType: 3
          });
        } else {
          this.scroll.refresh();
        }
      }
    },
    components: {
      splitline
    }
  };
</script>

<style lang="less" rel="stylesheet/less" >
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
