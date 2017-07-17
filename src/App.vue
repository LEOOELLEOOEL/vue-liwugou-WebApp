<template>
  <div id="app">
    <transition name="routerfade">
      <keep-alive>
        <router-view @showblock="showblock" @hideblock="hiddenblock"  class="routerView"></router-view>
      </keep-alive>
    </transition>
    <div ref="tabBlock" class="block">
      <div class="tab">
        <div class="tab-item">
          <router-link to="/home">
            <i class="iconfont">&#xe614;</i><br>
            <span>首页</span>

          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/billboard">
            <i class="iconfont">&#xe604;</i><br>
            <span>榜单</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/category">
            <i class="iconfont">&#xe60b;</i><br>
            <span>分类</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/me">
            <i class="iconfont">&#xe609;</i><br>
            <span>我的</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    methods: {
      showblock() {
          this.$refs.tabBlock.style.position = 'fixed';
      },
      hiddenblock() {
        this.$refs.tabBlock.style.position = 'static';
      }
    }
  };
</script>
<style lang="less" rel="stylesheet/less">
  @import "http://opc4ef7kt.bkt.clouddn.com/common/iconfont/iconfont.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    .routerView {
      opacity: 1;
      &.routerfade-enter-active, &.routerfade-leave-active {
        transition: opacity .15s linear;
      }
      &.routerfade-enter,&.routerfade-leave-to {
        opacity:0;
      }
    }
    .block {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1.4rem;
      padding-top: 5px;
      padding-bottom: 5px;
      color: #321e1e;
      background-color: #fffefe;
      z-index: 40;
      .tab {
        font-size: 0;
        display: flex;
        text-align: center;
        .tab-item {
          flex: 1;
          .iconfont {
            font-size: 24px;
            color: #b9AAAA;
          }
          span {
            font-size: 10px;
          }
          a.router-link-active {
            color: #FF4258;
          }
          a.router-link-active .iconfont {
            color: #FF4258;
          }
        }
      }
    }
  }
</style>
