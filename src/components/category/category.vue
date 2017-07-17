<template>
  <div id="category">
    <div class="title">
      <div class="wrapper">
        <div class="left" @click="tabswitch(0)" ref="gonglve">
          <router-link to="strategy">
            攻略

          </router-link>
        </div>
        <div class="right" @click="tabswitch(1)" ref="danping">
          <router-link to="singleproduct">
            单品

          </router-link>
        </div>
      </div>
      <div class="switch" ref="underline"></div>
    </div>
    <div class="search" @click="showsearchdetail">
      <i class="iconfont">&#xe610;</i>
      送选份走心好礼送给Ta

    </div>
    <div class="contentwrapper" @click="chooseItem">
      <transition name="categoryrouter">
        <keep-alive>
          <router-view @showItemDetail="showItemDetail" class="routerview"></router-view>
        </keep-alive>
      </transition>

    </div>
    <transition name="searchfade">
      <div ref="searchdetail" class="searchdetail" v-show="showsearch">
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
              <div class="item" style="color: #5a5a5a">手机壳</div>
            </div>
          </div>
          <splitline></splitline>
        </div>
      </div>
    </transition>
    <transition name="commonExfade">
      <div id="commonExplain" ref="commonExplain" v-show="showcommonExplain">
        <div id="header">
          <div class="arrow" @click="hidecommon">
            <i class="iconfont">&#xe626;</i>
          </div>
          <div class="sub">{{itemDetailTitle}}</div>
          <div class="shareIcon" @click="showsharemask">
            <i class="iconfont">&#xe684;</i>
          </div>
        </div>
        <div class="content" ref="contents">
          <div class="wrapper">
            <div class="wrap" @click="showitemDetails(item)" v-for="(item,index) in itemDetailData">
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
    <transition name="itemdetail">
      <div class="item-detail" v-show="showitempage">
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
  import BScroll from 'better-scroll';
  export default {
    name: 'category',
    data () {
      return {
        showsearch: false,
        showcommonExplain: false,
        shareFlag: false,
        itemDetailTitle: '',
        itemDetailData: [],
        showitempage: false,
        ItemDetail: {},
        favoriteFlag: false
      };
    },
    created() {
      this.$http.get('http://www.leoel.top/api/home_choice.php').then((response) => {
        response = response.body;
        if (response.code === 200) {
          this.itemDetailData = response.data;
          setTimeout(() => {
            this.showspinner = false;
          }, 300);
        }
        this.$nextTick(() => {
          this._initcomExScroll();
          this._inititemScroll();
        });
      });
    },
    activated() {
      this.$nextTick(() => {
        this._initcomExScroll();
        this._inititemScroll();
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
      showsharepanel() {
        this.shareFlag = true;
      },
      hideItemDetail() {
        this.showitempage = false;
        let favoriteIcon = this.$refs.favoriteIcon;
        favoriteIcon.className = 'iconfont';
        favoriteIcon.innerHTML = '&#xe64b;';
        this.itemContentScroll.scrollTo(0, 0, 0);
      },
      showitemDetails(item) {
        this.ItemDetail = item;
        this.showitempage = true;
        this.$nextTick(() => {
          this._inititemScroll();
        });
      },
      showItemDetail(title) {
        this.itemDetailTitle = title;
      },
      showsharemask() {
        this.shareFlag = true;
      },
      maskHide() {
        this.shareFlag = false;
      },
      hidecommon() {
        this.showcommonExplain = false;
        this.contentsScroll.scrollTo(0, 0, 0);
      },
      _initcomExScroll() {
        this.$nextTick(() => {
          if (!this.contentsScroll) {
            this.contentsScroll = new BScroll(this.$refs.contents, {
              click: true, probeType: 3
            });
          } else {
            this.contentsScroll.refresh();
          }
        });
      },
      _inititemScroll() {
        this.$nextTick(() => {
          if (!this.itemContentScroll) {
            this.itemContentScroll = new BScroll(this.$refs.itemContent, {
              click: true, probeType: 3
            });
          } else {
            this.itemContentScroll.refresh();
          }
        });
      },
      chooseItem() {
        this.showcommonExplain = true;
        this.$nextTick(() => {
          this._initcomExScroll();
        });
      },
      showsearchdetail() {
        this.showsearch = true;
      },
      searchcancel() {
        this.showsearch = false;
      },
      tabswitch(index) {
        let _this = this.$refs;
        let underline = _this.underline;
        let gonglve = _this.gonglve.children[0];
        let danping = _this.danping.children[0];
        if (!index) {
          underline.style.transform = 'translate3d(0,0,0)';
          gonglve.style.color = '#ff2d47';
          gonglve.style.fontWeight = 'bold';
          danping.style.color = '#321e1e';
          danping.style.fontWeight = 'normal';
        } else {
          underline.style.transform = 'translate3d(calc(0.8rem + 31px),0,0)';
          gonglve.style.color = '#321e1e';
          gonglve.style.fontWeight = 'normal';
          danping.style.color = '#ff2d47';
          danping.style.fontWeight = 'bold';
        }
      }
    },
    components: {
      splitline
    }
  };
</script>
<style lang="less" rel="stylesheet/less">
  #category {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 0;
    bottom: 0rem;
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
    #commonExplain {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #fffefe;
      z-index: 50;
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
    .searchdetail {
      z-index: 100;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: -2rem;
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
              margin-left: 1rem;
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
    .title {
      position: relative;
      display: flex;
      height: 50px;
      line-height: 50px;
      .wrapper {
        width: 2rem;
        flex: 1;
        text-align: center;
        font-size: 14px;
        div {
          display: inline-block;
        }
        .left {
          margin-right: .8rem;
          font-weight: bold;
        }
        a {
          color: #321e1e;
        }
        a.router-link-active {
          color: #ff2d47;
          font-weight: bold;
        }
      }
      .switch {
        position: absolute;
        left: 6.05rem;
        bottom: .2rem;
        height: 2px;
        width: 40px;
        border-radius: 2px;
        background-color: #ff2d47;
        transition: transform .2s ease;
      }
    }
    .search {
      margin: 0 .5rem;
      height: 28px;
      border-radius: 20px;
      color: #927f7f;
      background-color: #faf5f5;
      line-height: 28px;
      font-size: 12px;
      padding-left: 26%;
      .iconfont {
        font-size: 14px;
      }
    }
    .contentwrapper {
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      bottom: 0;
      .routerview {
        &.categoryrouter-enter {
          transform: translate3d(100%, 0, 0);
        }
        &.categoryrouter-enter-active, &.categoryrouter-leave-active {
          transition: transform .2s ease;
        }
        &.categoryrouter-leave-to {
          transform: translate3d(-100%, 0, 0);
        }
      }
      .contents {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        z-index: 1;
        .cate-item {
          color: #8c7878;
          font-size: 10px;
          background-color: #fefefe;
          .body {
            .top {
              padding: 15px .5rem 0;
              line-height: 20px;
              font-size: 12px;
            }
            .items {
              padding: 0 .25rem;
              font-size: 0;
              .item {
                margin: .25rem;
                position: relative;
                display: inline-block;
                width: 7.25rem;
                height: 4.2rem;
                overflow: hidden;
                border-radius: 5px;
                background-color: #f3efee;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }

  }
</style>
