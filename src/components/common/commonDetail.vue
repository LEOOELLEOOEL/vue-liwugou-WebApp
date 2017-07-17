<template>
  <transition name="commonExfade">
    <div id="commonExplain" ref="commonExplain" v-show="showcommonExplain">
      <div id="header">
        <div class="arrow" @click="hidecommon">
          <i class="iconfont">&#xe626;</i>
        </div>
        <div class="sub">{{cateitemtitle}}</div>
        <div class="shareIcon" @click="showsharemask">
          <i class="iconfont">&#xe684;</i>
        </div>
      </div>
      <div class="content" ref="contents">
        <div class="wrapper">
          <div class="wrap" v-for="(item,index) in cateitemdetail" @click="showItemDetail(item)">
            <div class="present">
              <div class="header">
                <div class="avatar">
                  <img :src="item.avatar">
                  <div class="detail"><span>{{item.nickname}}</span><br> <span class="small">{{item.signature}}</span>
                  </div>
                </div>
              </div>
              <div class="image">
                <img :src="item.img_url">
              </div>
              <div class="explain">
                <div class="title">{{item.title}}</div>
                <div class="detail">
                  {{item.contents}}

                </div>
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
      <transition name="maskfaded">
        <div class="mask-layer" v-show="shareFlag">
        </div>
      </transition>
      <transition name="sharefade">
        <div class="share-link" v-show="shareFlag">
          <div class="header">
            <div class="item">
              <i class="iconfont">&#xe63c;</i><br>
              微信

            </div>
            <div class="item">
              <i class="iconfont">&#xe646;</i><br>
              朋友圈

            </div>
            <div class="item">
              <i class="iconfont">&#xe641;</i><br>
              QQ

            </div>
          </div>
          <div class="footer">
            <div class="item">
              <i class="iconfont">&#xe701;</i><br>
              微博

            </div>
            <div class="item">
              <i class="iconfont">&#xe645;</i><br>
              Qzone

            </div>
            <div class="item">
              <i class="iconfont">&#xe673;</i><br>
              复制链接

            </div>
          </div>
          <div class="cancel" @click="maskHide">取消</div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import splitline from './splitLine.vue';
  import BScroll from 'better-scroll';
  export default {
    name: 'commonDetail',
    props: {
      cateitemdetail: {
        type: Array,
        default() {
          return [];
        }
      },
      cateitemtitle: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        showcommonExplain: true,
        shareFlag: false
      };
    },
    created() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    activated() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    methods: {
      showItemDetail(item) {
        this.$emit('showcommondetail', item);
      },
      showsharemask() {
        this.shareFlag = true;
      },
      maskHide() {
        this.shareFlag = false;
      },
      hidecommon() {
        this.showcommonExplain = false;
        this.$emit('hidecommondetail');
      },
      _initScroll() {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.contents, {
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
  #commonExplain {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #fffefe;
    transform: translate3d(0, 0, 0);
    &.commonExfade-enter-active, &.commonExfade-leave-active {
      transition: transform .3s ease;
    }
    &.commonExfade-enter, &.commonExfade-leave-to {
      transform: translate3d(100%, 0, 0)
    }
    #header {
      padding: 0 1rem;
      height: 2rem;
      line-height: 2rem;
      border-bottom: 1px solid #f0e6e6;
      .arrow {
        position: absolute;
        left: 1rem;
        height: 2rem;
        line-height: 2rem;
        z-index: 10;
        .iconfont {
          display: inline-block;
          margin-top: .1rem;
          color: #645a5a;
          font-size: 18px;
        }
      }
      .sub {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        margin-top: .1rem;
        text-align: center;
        font-size: 17px;
        line-height: 2rem;
        color: #321e1e;
      }
      .shareIcon {
        position: absolute;
        right: 1rem;
        top: 0;
        .iconfont {
          color: #645a5a;
          font-size: 20px;
        }

      }
    }
    .content {
      position: absolute;
      left: 0;
      right: 0;
      top: 2rem;
      bottom: 0;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      z-index: 1;
      .wrapper {
        .wrap {
          .present {
            padding: 16px 16px 0 16px;
            .header {
              font-size: 0;
              padding-left: 0;
              .avatar img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
              }
              .avatar {
                display: inline-block;
                .detail {
                  display: inline-block;
                  padding-left: 10px;
                  font-size: 16px;
                  vertical-align: top;
                  color: #2e1a1a;
                  .small {
                    font-size: 12px;
                    line-height: 32px;
                  }
                }
              }

            }
            .image {
              margin: 5px 0;
              height: 8rem;
              background-color: #f0ebeb;
              border-radius: 6px;
              img {
                width: 100%;
                height: 100%;
                border-radius: 6px;
              }
            }
            .explain {
              font-size: 18px;
              text-align: justify;
              padding: .75rem 0 0 0;
              color: #503c3c;
              .detail {
                padding-top: .4rem;
                font-size: 12px;
                line-height: 20px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              .line {
                height: 1px;
                width: 100%;
                margin-top: .7rem;
                background-color: #f1e7e7;
              }
            }
            .footer {
              position: relative;
              width: 100%;
              clear: both;
              height: 2.2rem;
              .left {
                position: absolute;
                left: 0;
                line-height: 2.2rem;
                font-size: 11px;
                color: #8c7878;
              }
              .favorite {
                position: absolute;
                right: 0;
                line-height: 2.2rem;
                color: #8c7878;
                .iconfont {
                  font-size: 11px;
                }
              }
            }
          }
        }
      }
    }
    .mask-layer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #000000;
      z-index: 100;
      opacity: .4;
      &.maskfaded-enter-active, &.maskfaded-leave-active {
        transition: opacity .5s linear;
      }
      &.maskfaded-enter, &.maskfaded-leave-to {
        opacity: 0;
      }
    }
    .share-link {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 10rem;
      background-color: #ffffff;
      z-index: 100;
      transform: translate3d(0, 0, 0);
      &.sharefade-enter-active, &.sharefade-leave-active {
        transition: transform .3s linear;
      }
      &.sharefade-enter, &.sharefade-leave-to {
        transform: translate3d(0, 100%, 0);
      }
      .header, .footer {
        display: flex;
        text-align: center;
        font-size: 0;
        height: 3.5rem;
        color: #645a5a;
        .item {
          flex: 1;
          font-size: 12px;
          .iconfont {
            font-size: 36px;
          }
        }
      }
      .header {
        padding-top: 1rem;
      }
      .cancel {
        font-size: 14px;
        padding-top: 0.1rem;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        border-top: 1px solid #f0ebeb;
        color: #513d3d;
      }
    }
  }
</style>
