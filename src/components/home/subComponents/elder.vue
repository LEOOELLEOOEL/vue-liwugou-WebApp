<template>
  <div class="contentwrap" ref="contentwrap">
    <div class="contentwrapper" id="contentwrapper">
      <splitline></splitline>
      <ul class='presents'>
        <div class="contain"  @click="showdetails(item)"  v-for="(item,index) in elderData">
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
      </ul>
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
        elderData: []
      };
    },
    created() {
      this.$http.get('http://www.leoel.top/api/home_elder.php').then((response) => {
        response = response.body;
        if (response.code === 200) {
          this.elderData = response.data;
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
