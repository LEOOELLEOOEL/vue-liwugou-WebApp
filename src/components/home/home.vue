<template>
  <div id="home" ref="home">
    <div class="header">
      <div class="title">礼物购</div>
      <div class="input" @click="inputsearch">
        <div style="display: inline-block;margin-left: 40px;margin-top: 3px;font-size: 13px;">
          <i class="iconfont" style="font-size: 13px">&#xe610;</i>选份走心好礼送给Ta



        </div>
      </div>
      <div class="scanner" style="color: #ff2d47;">
        <i class="iconfont">&#xe60c;</i>
      </div>
    </div>
    <div class="tabBar">
      <div class="tabtitle">
        <div class="item" @click="tabswitch(0)" ref="tabitem1">
          <router-link to="choice">
            精选集


          </router-link>
        </div>
        <div class="item" @click="tabswitch(1)" ref="tabitem2">
          <router-link to="girlfriend">
            送女友


          </router-link>
        </div>
        <div class="item" @click="tabswitch(2)" ref="tabitem3">
          <router-link to="boyfriend">
            送基友


          </router-link>
        </div>
        <div class="item" @click="tabswitch(3)" ref="tabitem4">
          <router-link to="elder">
            送长辈


          </router-link>
        </div>
      </div>
      <div class="tabline" ref="tabline"></div>
    </div>
    <div class="content">
      <transition name="routerfade">
        <keep-alive>
          <router-view @showcatedetail="showcatedetail" @showdetails="showPresentDetail" class="routerview">
          </router-view>
        </keep-alive>
      </transition>
    </div>
    <transition name="searchfade">
      <div ref="search" class="search" v-show="showsearch">
        <div class="input">
          <div class="inputBar">
            <i class="iconfont">&#xe610;</i>
            <div class="word">选份走心好礼送给Ta</div>
          </div>
          <div class="cancelBtn" @click='searchcancel'>取消</div>
        </div>
        <div class="keywords">
          <div class="body">
            <div class="title">
              <i class="iconfont">&#xe62c;</i>
              <div class="word">大家都在搜</div>
            </div>
            <div class="list">
              <div class="item">情侣</div>
              <div class="item">生日</div>
              <div class="item">项链</div>
              <div class="item" style="color: #5a5a5a">手链</div>
            </div>
          </div>
          <splitline></splitline>
        </div>
      </div>
    </transition>
    <commonDetail @showcommondetail="showcommondetail" @hidecommondetail="hidecommondetail" ref="commonDetail"
                  :cateitemdetail="cateitemdetail" :cateitemtitle="cateitemtitle" class="commonDetail"
                  v-show="showcommonExplain"></commonDetail>
    <transition name="itemdetail">
      <div class="item-detail" v-show="showItemDetail">
        <div class="title">
          <div class="left" @click="hideItemDetail">
            <i class="iconfont">&#xe626;</i>
          </div>
          <div class="name">攻略详情</div>
        </div>
        <div class="content" ref="itemContent">
          <div ref="itemdetailcontent">
            <div class="image">
              <img :src="ItemDetail.img_url">
            </div>
            <div class="words">
              <div class="sub-title">
                {{ItemDetail.title}}


              </div>
              <div class="split"></div>
              <div class="details">
                {{ItemDetail.contents}}


              </div>
            </div>
          </div>
        </div>
        <div class="bottom-bar">
          <div class="favorite" @click="addFavorite">
            <i class="iconfont" ref="favoriteIcon">&#xe64b;</i>{{ItemDetail.favorite_num}}


          </div>
          <div class="share" @click="showsharepanel">
            <i class="iconfont">&#xe684;</i>{{ItemDetail.share_num}}


          </div>
          <div class="comments">
            <i class="iconfont">&#xe7e9;</i>{{ItemDetail.comments_num}}


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
  </div>
</template>

<script type="text/ecmascript-6">
  import splitline from '../common/splitLine.vue';
  import commonDetail from '../common/commonDetail.vue';
  import BScroll from 'better-scroll';
  export default {
    name: 'home',
    data () {
      return {
        showcommonExplain: false,
        showsearch: false,
        showItemDetail: false,
        homeData: [],
        shareFlag: false,
        ItemDetail: {},
        cateitemdetail: [],
        cateitemtitle: '',
        favoriteFlag: false
      };
    },
    created() {
      this.$nextTick(() => {
        this._initItemScroll();
      });
    },
    activated() {
      this.$nextTick(() => {
        this._initItemScroll();
      });
    },
    methods: {
      addFavorite() {
        let favoriteIcon = this.$refs.favoriteIcon;
        if (!this.favoriteFlag) {
          this.favoriteFlag = !this.favoriteFlag;
          this.$http.get('http://www.leoel.top/api/changefavorite.php?favorite=add&presentid=' + this.ItemDetail.presentid + '&status=' + this.ItemDetail.status).then((response) => {
            response = response.body;
            if (response.code === 200) {
              favoriteIcon.className = 'iconfont addfav';
              favoriteIcon.innerHTML = '&#xe699;';
              this.ItemDetail.favorite_num = parseInt(this.ItemDetail.favorite_num) + 1;
            }
          });
        } else if (this.favoriteFlag) {
          this.favoriteFlag = !this.favoriteFlag;
          this.$http.get('http://www.leoel.top/api/changefavorite.php?favorite=reduce&presentid=' + this.ItemDetail.presentid + '&status=' + this.ItemDetail.status).then((response) => {
            response = response.body;
            if (response.code === 200) {
              favoriteIcon.className = 'iconfont';
              favoriteIcon.innerHTML = '&#xe64b;';
              this.ItemDetail.favorite_num = this.ItemDetail.favorite_num - 1;
            }
          });
        }
      },
      showcommondetail(item) {
        this.ItemDetail = item;
        this.showItemDetail = true;
        this.$nextTick(() => {
          this._initItemScroll();
        });
      },
      hidecommondetail() {
        this.showcommonExplain = false;
        this.$refs.commonDetail.scroll.scrollTo(0, 0, 0);
      },
      showcatedetail(item, cateitemtitle) {
        this.cateitemdetail = item;
        this.cateitemtitle = cateitemtitle;
        this.showcommonExplain = true;
        this.$refs.commonDetail._initScroll();
      },
      showPresentDetail(item) {
        this.ItemDetail = item;
        this.showItemDetail = true;
        this.$nextTick(() => {
          this._initItemScroll();
          this.itemscroll.scrollTo(0, 0, 0);
        });
      },
      showsharepanel() {
        this.shareFlag = true;
      },
      maskHide() {
        this.shareFlag = false;
      },
      hideItemDetail() {
        let favoriteIcon = this.$refs.favoriteIcon;
        this.favoriteFlag = false;
        this.showItemDetail = false;
        favoriteIcon.className = 'iconfont';
        favoriteIcon.innerHTML = '&#xe64b;';
        this.itemscroll.scrollTo(0, 0, 0);
      },
      inputsearch() {
        this.showsearch = true;
      },
      searchcancel() {
        this.showsearch = false;
      },
      tabswitch(index) {
        let _that = this.$refs;
        let tabline = _that.tabline;
        let tabitem1 = _that.tabitem1.children[0];
        let tabitem2 = _that.tabitem2.children[0];
        let tabitem3 = _that.tabitem3.children[0];
        let tabitem4 = _that.tabitem4.children[0];
        switch (index) {
          case 0:
            tabline.style.transform = 'translate3d(0,0,0)';
            tabitem1.style.color = '#ff2d47';
            tabitem1.style.fontWeight = 'bold';
            tabitem2.style.color = '#8c7878';
            tabitem2.style.fontWeight = 'normal';
            tabitem3.style.color = '#8c7878';
            tabitem3.style.fontWeight = 'normal';
            tabitem4.style.color = '#8c7878';
            tabitem4.style.fontWeight = 'normal';
            break;
          case 1:
            tabline.style.transform = 'translate3d(calc(.845rem + 40px),0,0)';
            tabitem1.style.color = '#8c7878';
            tabitem1.style.fontWeight = 'normal';
            tabitem2.style.color = '#ff2d47';
            tabitem2.style.fontWeight = 'bold';
            tabitem3.style.color = '#8c7878';
            tabitem3.style.fontWeight = 'normal';
            tabitem4.style.color = '#8c7878';
            tabitem4.style.fontWeight = 'normal';
            break;
          case 2:
            tabline.style.transform = 'translate3d(calc(1.68rem + 80px),0,0)';
            tabitem1.style.color = '#8c7878';
            tabitem1.style.fontWeight = 'normal';
            tabitem2.style.color = '#8c7878';
            tabitem2.style.fontWeight = 'normal';
            tabitem3.style.color = '#ff2d47';
            tabitem3.style.fontWeight = 'bold';
            tabitem4.style.color = '#8c7878';
            tabitem4.style.fontWeight = 'normal';
            break;
          case 3:
            tabline.style.transform = 'translate3d(calc(2.54rem + 120px),0,0)';
            tabitem1.style.color = '#8c7878';
            tabitem1.style.fontWeight = 'normal';
            tabitem2.style.color = '#8c7878';
            tabitem2.style.fontWeight = 'normal';
            tabitem3.style.color = '#8c7878';
            tabitem3.style.fontWeight = 'normal';
            tabitem4.style.color = '#ff2d47';
            tabitem4.style.fontWeight = 'bold';
            break;
        }
      },
      _initItemScroll() {
        this.$nextTick(() => {
          if (!this.itemscroll) {
            this.itemscroll = new BScroll(this.$refs.itemContent, {
              click: true, probeType: 3
            });
          } else {
            this.itemscroll.refresh();
          }
        });
      }
    },
    components: {
      splitline,
      commonDetail
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  #home {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    overflow: hidden;
    font-size: 0;
    color: #8c7878;
    background-color: #fffefe;
    #commonExplain {
      transform: translate3d(0, 0, 0);
      &.commonExfade-enter-active, &.commonExfade-leave-active {
        transition: transform .3s ease;
      }
      &.commonExfade-enter, &.commonExfade-leave-to {
        transform: translate3d(100%, 0, 0)
      }
    }
    .header {
      position: relative;
      left: 0;
      top: 0;
      right: 0;
      display: flex;
      padding-left: 18px;
      padding-right: 0;
      .title {
        display: inline-block;
        flex: 1;
        height: 30px;
        line-height: 30px;
        padding-top: 11px;
        float: left;
        clear: both;
        font-size: 16px;
        color: #FF4258;
        text-align: left;
        font-weight: bolder;
      }
      .input {
        flex: 4;
        margin-top: 8px;
        display: inline-block;
        height: 32px;
        line-height: 32px;
        background-color: #FAF5F5;
        border-radius: 40px;
      }
      .scanner {
        display: inline-block;
        text-align: center;
        margin-top: 11px;
        height: 30px;
        line-height: 30px;
        flex: 1;
        float: left;
        clear: both;
        .iconfont {
          font-size: 20px;
        }
      }
    }
    .tabBar {
      position: relative;
      height: 40px;
      line-height: 40px;
      margin-top: 5px;
      .tabtitle {
        padding-left: 18px;
        .item {
          display: inline-block;
          font-size: 13px;
          margin-right: 20px;
          a {
            color: #8c7878;
          }
          &:first-child > a {
            color: #ff2d47;
            font-weight: bold;
          }
        }
      }

      .tabline {
        position: absolute;
        left: 18px;
        right: 0;
        bottom: .2rem;
        height: 2px;
        border-radius: 2px;
        background-color: #ff2d47;
        width: 39px;
        transition: transform .2s ease;
      }
    }
    .content {
      position: absolute;
      top: 88px;
      left: 0;
      right: 0;
      bottom: 0;
      .routerview {
        &.routerfade-enter {
          transform: translate3d(100%, 0, 0)
        }
        &.routerfade-enter-active, &.routerfade-leave-active {
          transition: transform .2s ease;
        }
        &.routerfade-leave-to {
          transform: translate3d(-100%, 0, 0)
        }
      }
      .contentwrap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        z-index: 1;
        .contentwrapper {
          .swipe {
            .mt-swipe {
              height: 200px;
              .swipe-item {
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
          .catewrapper {
            font-size: 10px;
            .cateitemtop {
              display: flex;
              .top {
                width: 100%;
                display: flex;
                height: 80px;
                text-align: center;
                align-items: center;
                .item {
                  flex: 1;
                  .iconfont {
                    font-size: 26px;
                    line-height: 40px;
                  }
                  border-right: 1px solid #faf5f5;
                }
                .item:last-child {
                  border-right: none;
                }
                border-bottom: 1px solid #faf5f5;
              }
            }
            .cateitembottom {
              display: flex;
              .top {
                width: 100%;
                display: flex;
                height: 80px;
                text-align: center;
                align-items: center;
                .item {
                  flex: 1;
                  .iconfont {
                    font-size: 26px;
                    line-height: 40px;
                  }
                  border-right: 1px solid #faf5f5;
                }
                .item:last-child {
                  border-right: none;
                }
              }
            }

          }
          .presents {
            .contain {
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
                  img[lazy=loading] {
                    width: 2rem;
                    height: 2rem;
                    margin-left: 50%;
                    transform: translate3d(-50%, 0, 0);
                    margin-top: 3rem;

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
      }
    }
    .item-detail {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #fffefe;
      z-index: 100;
      transform: translate3d(0, 0, 0);
      &.itemdetail-enter-active, &.itemdetail-leave-active {
        transition: transform .3s ease;
      }
      &.itemdetail-enter, &.itemdetail-leave-to {
        transform: translate3d(100%, 0, 0);
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
          padding-left: 0;
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
      .title {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 2rem;
        line-height: 2rem;
        color: #321e1e;
        border-bottom: 1px solid #f0e6e6;
        div {
          display: inline-block;
          margin-top: .15rem;
        }
        .left {
          position: absolute;
          left: .5rem;
          bottom: 0;
          top: 0;
          z-index: 10;
          .iconfont {
            font-size: 17px;
          }
        }
        .name {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          text-align: center;
          font-size: 17px;
        }
        .look {
          position: absolute;
          right: .5rem;
          bottom: 0;
          top: 0;
          font-size: 15px;
        }
      }
      .content {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 2rem;
        top: 2rem;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        z-index: 1;
        .image {
          width: 16rem;
          height: 9rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .words {
          padding: 1rem 1rem;
          color: #503c3c;
          text-align: justify;
          .sub-title {
            font-size: 19px;
            line-height: 30px;
            font-weight: bold;
          }
          .split {
            width: 40px;
            height: 1px;
            margin-top: 30px;
            margin-bottom: 20px;
            background-color: #8c7878;
          }
          .details {
            font-size: 14px;
            line-height: 36px;
          }
        }
      }
      .bottom-bar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2rem;
        line-height: 2rem;
        color: #321e1e;
        border-top: 1px solid #e0e0e0;
        text-align: center;
        > div {
          position: absolute;
          top: 0;
          bottom: 0;
          display: inline-block;
          font-size: 16px;
          .iconfont {
            margin-right: 5px;
          }
        }
        .favorite {
          left: 1rem;
          .iconfont {
            font-size: 22px;
            color: #321e1e;
          }
          .iconfont.addfav {
            font-size: 22px;
            color: #ff2d47;
          }
        }
        .share {
          left: 6.5rem;
          text-align: center;
          width: 3rem;
          .iconfont {
            font-size: 20px;
          }
        }
        .comments {
          right: 1rem;
          .iconfont {
            font-size: 20px;
          }
        }
      }
    }
    .search {
      z-index: 100;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #ffffff;
      opacity: 1;
      &.searchfade-enter-active, &.searchfade-leave-active {
        transition: opacity .15s linear;
      }
      &.searchfade-enter, &.searchfade-leave-to {
        opacity: 0;
      }
      .input {
        width: 100%;
        height: 100%;
        height: 2rem;
        line-height: 2rem;
        background-color: #faf5f5;
        .inputBar {
          position: absolute;
          left: 1rem;
          top: .3rem;
          width: 10rem;
          padding: 0 1rem;
          border-radius: 20px;
          height: 1.4rem;
          background-color: #fffefe;
          line-height: 1.4rem;
          color: #9b9696;
          font-size: 12px;
          .iconfont {
            display: inline-block;
            font-size: 11px;
            margin-top: .1rem;
          }
          .word {
            display: inline-block;
            width: 8rem;
            vertical-align: bottom;
            color: #9b9696;
            line-height: 1.4rem;
            padding-left: .5rem;
          }
        }
        .cancelBtn {
          position: absolute;
          top: 0;
          bottom: 0;
          font-size: 15px;
          top: 0;
          height: 2rem;
          right: 1rem;
          color: #5a5a5a;
        }
      }
      .keywords {
        position: absolute;
        top: 2rem;
        left: 0;
        right: 0;
        color: #989696;
        .body {
          padding: 0 1rem;
          .title {
            height: 2rem;
            line-height: 2rem;
            .iconfont {
              font-size: 18px;
            }
            .word {
              display: inline-block;
              position: absolute;
              margin-left: .3rem;
              top: .1rem;
              bottom: 0;
              height: 2rem;
              line-height: 2rem;
              font-size: 14px;
            }
          }
          .list {

            .item {
              display: inline-block;
              margin: .35rem .35rem .35rem 0;
              width: 2.5rem;
              height: 2.2em;
              padding-bottom: .15rem;
              color: #ff2d47;
              font-size: 13px;
              text-align: center;
              vertical-align: middle;
              line-height: 1.6rem;
              background-color: #fdf0f0;
              border-radius: 2px;
            }
          }
        }

      }
    }
    .commonDetail {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
    }
  }
</style>
