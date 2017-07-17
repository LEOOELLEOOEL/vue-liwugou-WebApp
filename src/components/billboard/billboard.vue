<template>
  <div id="billboard">
    <div class="top">
      <div class="title">礼物榜</div>
      <div class="share" @click="showshare">
        <i class="iconfont">&#xe684;</i>
      </div>
      <div class="tab">
        <div class="item" @click="tabswitch(0)" ref="tabrecom">
          <router-link class="recommend" to="recommend">
            每日推荐






          </router-link>
        </div>
        <div class="item" @click="tabswitch(1)" ref="tabtop">
          <router-link to="top100">
            TOP100






          </router-link>
        </div>
        <div class="item" @click="tabswitch(2)" ref="taborig">
          <router-link to="original">
            原创榜






          </router-link>
        </div>
      </div>
      <div class="tabLine" ref="tabline"></div>
    </div>
    <div class="contentwrapper">
      <transition name="billboardrouter">
        <keep-alive>
          <router-view @showitemdetail="showDetail" class="routerview"></router-view>
        </keep-alive>
      </transition>
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
    <transition name="giftDetailfade">
      <div class="giftDetail" v-show="showgiftDetail">
        <div class="header">
          <div class="arrow" style="z-index: 10" ref="backBtn" @click="hidegiftDetail">
            <i class="iconfont">&#xe626;</i>
          </div>
          <div class="list">
            <div class="wrapper">
              <div class="item" @click="detailTab(0)" ref="detailTab_1">单品</div>
              <div class="item" @click="detailTab(1)" ref="detailTab_2">详情</div>
              <div class="item" @click="detailTab(2)" ref="detailTab_3">评论</div>
            </div>
          </div>
          <div class="commendIcon" ref="commendIcon">
            <i class="iconfont">&#xe64a;</i>
          </div>
          <div class="switchLine" ref="switchline"></div>
        </div>
        <transition name="contentsfade">
          <div class="contents" ref="giftDetail" v-show="showgiftcontents">
            <div id="giftLazyWrap">
              <div class="image">
                <img :src="giftItemDetail.img_url">
              </div>
              <div class="subject">
                <div class="title">{{giftItemDetail.title}}</div>
                <div class="small-title">{{giftItemDetail.subject}}</div>
              </div>
              <div class="price">￥{{giftItemDetail.price}}</div>
              <div class="favorite">
                <i class="iconfont">&#xe602;</i>
                <div class="number">&nbsp;&nbsp;{{giftItemDetail.favorite}}</div>
              </div>
              <div class="explain">
                {{giftItemDetail.contents}}






              </div>
              <splitline></splitline>
              <div class="products">
                <div class="title">
                  <div class="leftLine"></div>
                  <div class="tip">精品攻略推荐</div>
                  <div class="rightLine"></div>
                </div>
                <div class="container" ref="picWrapper">
                  <div class="subContainer">
                    <div class="item">
                      <img
                        src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-scrolly/details-scrolly01.jpg-optimize">
                    </div>
                    <div class="item">
                      <img
                        src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-scrolly/details-scrolly02.jpg-optimize">
                    </div>
                    <div class="item">
                      <img
                        src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-scrolly/details-scrolly03.jpg-optimize">
                    </div>
                    <div class="item">
                      <img
                        src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-scrolly/details-scrolly04.jpg-optimize">
                    </div>
                  </div>
                </div>
              </div>
              <splitline></splitline>
              <div class="like">
                <div class="title">
                  <div class="leftLine"></div>
                  <div class="tip">你可能喜欢</div>
                  <div class="rightLine"></div>
                </div>
                <div class="container">
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[0]">
                    </div>
                    <div class="explains">
                      <div class="titles">唯美绣花纱帘</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥30</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[1]">
                    </div>
                    <div class="explains">
                      <div class="titles">andrew花心木面单尤克里里</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥298</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[2]">
                    </div>
                    <div class="explains">
                      <div class="titles">宽松条纹短款上衣</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥79</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[3]">
                    </div>
                    <div class="explains">
                      <div class="titles">海象冰激凌</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥30</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[4]">
                    </div>
                    <div class="explains">
                      <div class="titles">表白神器咕噜机</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥130</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[5]">
                    </div>
                    <div class="explains">
                      <div class="titles">美国多功能单肩包</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥159</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[6]">
                    </div>
                    <div class="explains">
                      <div class="titles">柏瑞迪银耳环长款女耳坠耳</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥89.9</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[7]">
                    </div>
                    <div class="explains">
                      <div class="titles">耐热玻璃冷水壶</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥25.9</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[8]">
                    </div>
                    <div class="explains">
                      <div class="titles">橡皮章新手包试水彩色材料包</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥47.5</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[9]">
                    </div>
                    <div class="explains">
                      <div class="titles">白色卡通短袖T恤</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥88.8</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[10]">
                    </div>
                    <div class="explains">
                      <div class="titles">马来西亚COCON可康果冻</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥32.5</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[11]">
                    </div>
                    <div class="explains">
                      <div class="titles">荆棘鸟十周年典藏纪念版</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥28.3</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[12]">
                    </div>
                    <div class="explains">
                      <div class="titles">雕刻橡皮章新手工具</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥29.99</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[13]">
                    </div>
                    <div class="explains">
                      <div class="titles">恋爱幸运色 钢笔盒</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥208</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[14]">
                    </div>
                    <div class="explains">
                      <div class="titles">透明玻璃菠萝瓶</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥99.6</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="image">
                      <img v-lazy.giftLazyWrap="detailsImgSrc[15]">
                    </div>
                    <div class="explains">
                      <div class="titles">Panasonic挂耳式入耳耳机</div>
                      <div class="details">蕾丝雕花镂空手链</div>
                      <div class="prices">￥78.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <transition name="detailsfade">
          <div class="giftDetails" ref="giftDetails" v-show="showgiftdetails">
            <div id="detailsWrapper">
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image01.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image02.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image03.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image04.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image05.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image06.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image07.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image08.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image09.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image10.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image11.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image12.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image13.jpg-optimize">
                <splitline></splitline>
              </div>
              <div class="item">
                <img src="http://opc4ef7kt.bkt.clouddn.com/biilboard/details-explain/present-image14.jpg-optimize">
                <splitline></splitline>
              </div>
            </div>
          </div>
        </transition>
        <transition name="commendfade">
          <div class="giftCommend" ref="giftCommend" v-show="showgiftcommend">
            <div id="giftCommend">
              <div class="item">
                <div id="header">
                  <div id="image">
                    <img src="http://opc4ef7kt.bkt.clouddn.com/home/avatar/home-avatar01.jpg-optimize">
                  </div>
                  <div id="nickname">吾心所系~</div>
                  <br>

                  <div id="datetime">4月1日 上午2:18</div>
                </div>
                <div id="contents">
                  外瓜家的东西永远很好玩啊






                </div>
              </div>
              <div class="item">
                <div id="header">
                  <div id="image">
                    <img src="http://opc4ef7kt.bkt.clouddn.com/home/avatar/home-avatar02.jpg-optimize">
                  </div>
                  <div id="nickname">娃子</div>
                  <br>

                  <div id="datetime">4月1日 上午2:18</div>
                </div>
                <div id="contents">
                  真好看 但是真的太贵了啊 学生狗买不起啊






                </div>
              </div>
              <div class="item">
                <div id="header">
                  <div id="image">
                    <img src="http://opc4ef7kt.bkt.clouddn.com/home/avatar/home-avatar03.jpg-optimize">
                  </div>
                  <div id="nickname">HEY Baby</div>
                  <br>

                  <div id="datetime">4月1日 上午2:18</div>
                </div>
                <div id="contents">
                  好看 学生党可以算是节日礼物送人






                </div>
              </div>
              <div class="item">
                <div id="header">
                  <div id="image">
                    <img src="http://opc4ef7kt.bkt.clouddn.com/home/avatar/home-avatar04.jpeg-optimize">
                  </div>
                  <div id="nickname">人生海海</div>
                  <br>

                  <div id="datetime">4月1日 上午2:18</div>
                </div>
                <div id="contents">
                  好好看哦，看着就想要呢






                </div>
              </div>
              <div class="item">
                <div id="header">
                  <div id="image">
                    <img src="http://opc4ef7kt.bkt.clouddn.com/home/avatar/home-avatar05.jpg-optimize">
                  </div>
                  <div id="nickname">shrimappa~</div>
                  <br>

                  <div id="datetime">4月1日 上午2:18</div>
                </div>
                <div id="contents">
                  真的太喜欢了！






                </div>
              </div>
              <div class="item">
                <div id="header">
                  <div id="image">
                    <img src="http://opc4ef7kt.bkt.clouddn.com/home/avatar/home-avatar06.jpg-optimize">
                  </div>
                  <div id="nickname">清风拂面带点甜</div>
                  <br>

                  <div id="datetime">4月1日 上午2:18</div>
                </div>
                <div id="contents">
                  韩货排第一我也是醉了






                </div>
              </div>
              <div class="item">
                <div id="header">
                  <div id="image">
                    <img src="http://opc4ef7kt.bkt.clouddn.com/home/avatar/home-avatar07.jpg-optimize">
                  </div>
                  <div id="nickname">老姐和你的故事</div>
                  <br>

                  <div id="datetime">4月1日 上午2:18</div>
                </div>
                <div id="contents">
                  看到这个产地建议大家就甭想买了






                </div>
              </div>
              <div class="item">
                <div id="header">
                  <div id="image">
                    <img src="http://opc4ef7kt.bkt.clouddn.com/home/avatar/home-avatar08.gif-optimize">
                  </div>
                  <div id="nickname">勿忘初心</div>
                  <br>

                  <div id="datetime">4月1日 上午2:18</div>
                </div>
                <div id="contents">
                  还不错嘛，我稀罕，超喜欢






                </div>
              </div>
              <div class="item">
                <div id="header">
                  <div id="image">
                    <img src="http://opc4ef7kt.bkt.clouddn.com/home/avatar/home-avatar09.jpeg-optimize">
                  </div>
                  <div id="nickname">薄荷味的口香糖</div>
                  <br>

                  <div id="datetime">4月1日 上午2:18</div>
                </div>
                <div id="contents">
                  超好看，么么哒






                </div>
              </div>
              <div class="item">
                <div id="header">
                  <div id="image">
                    <img src="http://opc4ef7kt.bkt.clouddn.com/home/avatar/home-avatar10.jpg-optimize">
                  </div>
                  <div id="nickname">沐雨橙风</div>
                  <br>

                  <div id="datetime">4月1日 上午2:18</div>
                </div>
                <div id="contents">
                  前排承包哥哥哈哈哈






                </div>
              </div>

            </div>
          </div>
        </transition>
        <div class="footerBar">
          <div class="icons">
            <div class="wrapper">
              <div class="item" @click='userfavorite'>
                <i class="iconfont" ref="favoriteIcon">&#xe64b;</i>
              </div>
              <div class="item" @click="sharelinkpanel">
                <i class="iconfont">&#xe684;</i>
              </div>
            </div>
          </div>
          <div class="buyBtn" @click="addtocart">{{cartbtnword}}</div>
        </div>
        <transition name="maskfaded">
          <div class="mask-layer" v-show="sharegiftDetailshare">
          </div>
        </transition>
        <transition name="sharefade">
          <div class="share-link" v-show="sharegiftDetailshare">
            <div class="shareheader">
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
            <div class="sharefooter">
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
            <div class="cancel" @click="hidegiftdetailmask">取消</div>
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
    name: 'billboard',
    data () {
      return {
        showgiftcontents: true,
        showgiftdetails: false,
        showgiftcommend: false,
        shareFlag: false,
        showgiftDetail: false,
        sharegiftDetailshare: false,
        detailsImgSrc: ['http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like01.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like02.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like03.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like04.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like05.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like06.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like07.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like08.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like09.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like10.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like11.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like12.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like13.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like14.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like15.png-optimize',
          'http://opc4ef7kt.bkt.clouddn.com/biilboard/details-like/details-like16.png-optimize'],
        giftItemDetail: {},
        favoriteFlag: false,
        cartbtnword: '加入购物车'
      };
    },
    created() {
      this.$nextTick(() => {
        this._initGiftScroll();
        this._initPicScroll();
        this._initDetialsScroll();
        this._initGiftCommendScroll();
      });
    },
    activated() {
      this.$nextTick(() => {
        this._initGiftScroll();
        this._initPicScroll();
        this._initDetialsScroll();
        this._initGiftCommendScroll();
      });
    },
    methods: {
      addtocart() {
        let telephone = window.localStorage.getItem('telephone');
        let presentid = this.giftItemDetail.presentid;
        let status = this.giftItemDetail.status;
        let imgUrl = this.giftItemDetail.img_url;
        let title = this.giftItemDetail.title;
        let subject = this.giftItemDetail.subject;
        let price = this.giftItemDetail.price;
        this.$http.post('http://www.leoel.top/api/addCart.php', {
          telephone: telephone,
          presentid: presentid,
          status: status,
          img_url: imgUrl,
          title: title,
          subject: subject,
          price: price
        }, {emulateJSON: true}).then((response) => {
          response = response.body;
          if (response.code === 200) {
            this.cartbtnword = '已加入购物车';
          }
        });
      },
      userfavorite() {
        let favoriteIcon = this.$refs.favoriteIcon;
        if (!this.favoriteFlag) {
          this.favoriteFlag = !this.favoriteFlag;
          favoriteIcon.className = 'iconfont addfav';
          favoriteIcon.innerHTML = '&#xe699;';
        } else if (this.favoriteFlag) {
          this.favoriteFlag = !this.favoriteFlag;
          favoriteIcon.className = 'iconfont';
          favoriteIcon.innerHTML = '&#xe64b;';
        }
      },
      showDetail(item) {
        this.giftItemDetail = item;
        this.showgiftDetail = true;
        this.$nextTick(() => {
          this._initGiftScroll();
          this._initPicScroll();
          this._initDetialsScroll();
          this._initGiftCommendScroll();
          this.giftScroll.scrollTo(0, 0, 0);
        });
      },
      sharelinkpanel() {
        this.sharegiftDetailshare = true;
      },
      hidegiftdetailmask() {
        this.sharegiftDetailshare = false;
      },
      hidegiftDetail() {
        let favoriteIcon = this.$refs.favoriteIcon;
        favoriteIcon.className = 'iconfont';
        favoriteIcon.innerHTML = '&#xe64b;';
        this.showgiftDetail = false;
        this.cartbtnword = '加入购物车';
      },
      showgiftDetail() {
        this.showgiftDetail = true;
      },
      detailTab(index) {
        let That = this.$refs;
        let switchline = That.switchline;
        let detailTab1 = That.detailTab_1;
        let detailTab2 = That.detailTab_2;
        let detailTab3 = That.detailTab_3;
        let commendIcon = That.commendIcon;
        let backBtn = That.backBtn;
        switch (index) {
          case 0:
            switchline.style.transform = 'translate3d(0,0,0)';
            switchline.style.backgroundColor = '#ffffff';
            detailTab1.style.color = '#ffffff';
            detailTab2.style.color = '#ffffff';
            detailTab3.style.color = '#ffffff';
            this.showgiftcontents = true;
            this.showgiftdetails = false;
            this.showgiftcommend = false;
            commendIcon.style.display = 'none';
            backBtn.style.color = '#ffffff';
            this.$nextTick(() => {
              this._initGiftScroll();
              this._initPicScroll();
              this._initDetialsScroll();
              this._initGiftCommendScroll();
            });
            break;
          case 1:
            switchline.style.transform = 'translate3d(3rem,0,0)';
            switchline.style.backgroundColor = '#ff2d47';
            detailTab1.style.color = '#321e1e';
            detailTab2.style.color = '#ff2d47';
            detailTab3.style.color = '#321e1e';
            this.showgiftcontents = false;
            this.showgiftdetails = true;
            this.showgiftcommend = false;
            commendIcon.style.display = 'none';
            backBtn.style.color = '#645a5a';
            this.$nextTick(() => {
              this._initGiftScroll();
              this._initPicScroll();
              this._initDetialsScroll();
              this._initGiftCommendScroll();
            });
            break;
          case 2:
            switchline.style.transform = 'translate3d(6rem,0,0)';
            switchline.style.backgroundColor = '#ff2d47';
            switchline.style.color = '#ff2d47';
            detailTab1.style.color = '#321e1e';
            detailTab2.style.color = '#321e1e';
            detailTab3.style.color = '#ff2d47';
            this.showgiftcontents = false;
            this.showgiftdetails = false;
            this.showgiftcommend = true;
            commendIcon.style.display = 'block';
            backBtn.style.color = '#645a5a';

            this.$nextTick(() => {
              this._initGiftScroll();
              this._initPicScroll();
              this._initDetialsScroll();
              this._initGiftCommendScroll();
            });
            break;
        }
      },
      tabswitch(index) {
        let _that = this.$refs;
        let tabline = _that.tabline;
        let tabrecom = _that.tabrecom.children[0];
        let tabtop = _that.tabtop.children[0];
        let taborig = _that.taborig.children[0];
        switch (index) {
          case 0:
            tabline.style.transform = 'translate3d(0,0,0)';
            tabrecom.style.color = '#ff2d47';
            tabrecom.style.fontWeight = 'bold';
            tabtop.style.color = '#8c7878';
            tabtop.style.fontWeight = 'normal';
            taborig.style.color = '#8c7878';
            taborig.style.fontWeight = 'normal';
            this.$nextTick(() => {
              this._initGiftScroll();
              this._initPicScroll();
              this._initDetialsScroll();
              this._initGiftCommendScroll();
            });
            break;
          case 1:
            tabline.style.transform = 'translate3d(5.35rem,0,0)';
            tabrecom.style.color = '#8c7878';
            tabrecom.style.fontWeight = 'normal';
            tabtop.style.color = '#ff2d47';
            tabtop.style.fontWeight = 'bold';
            taborig.style.color = '#8c7878';
            taborig.style.fontWeight = 'normal';
            this.$nextTick(() => {
              this._initGiftScroll();
              this._initPicScroll();
              this._initDetialsScroll();
              this._initGiftCommendScroll();
            });
            break;
          case 2:
            tabline.style.transform = 'translate3d(10.65rem,0,0)';
            tabrecom.style.color = '#8c7878';
            tabrecom.style.fontWeight = 'normal';
            tabtop.style.color = '#8c7878';
            tabtop.style.fontWeight = 'normal';
            taborig.style.color = '#ff2d47';
            taborig.style.fontWeight = 'bold';
            this.$nextTick(() => {
              this._initGiftScroll();
              this._initPicScroll();
              this._initDetialsScroll();
              this._initGiftCommendScroll();
            });
            break;
        }
      },
      _initGiftCommendScroll() {
        this.$nextTick(() => {
            if (!this.giftCommendScroll) {
              this.giftCommendScroll = new BScroll(this.$refs.giftCommend, {
                click: true, probeType: 3
              });
            } else {
              this.giftCommendScroll.refresh();
            }
          }
        );
      },
      _initDetialsScroll() {
        this.$nextTick(() => {
            if (!this.giftDetailsScroll) {
              this.giftDetailsScroll = new BScroll(this.$refs.giftDetails, {
                click: true, probeType: 3
              });
            } else {
              this.giftDetailsScroll.refresh();
            }
          }
        );
      },
      _initGiftScroll() {
        this.$nextTick(() => {
            if (!this.giftScroll) {
              this.giftScroll = new BScroll(this.$refs.giftDetail, {
                click: true, probeType: 3
              });
            } else {
              this.giftScroll.refresh();
            }
          }
        );
      },
      _initPicScroll() {
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            });
          } else {
            this.picScroll.refresh();
          }
        });
      },
      showshare() {
        this.shareFlag = true;
      },
      maskHide() {
        this.shareFlag = false;
      }
    },
    components: {
      splitline
    }
  };
</script>
<style lang="less" rel="stylesheet/less">
  #billboard {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 0;
    background-color: #fffefe;
    overflow: hidden;
    color: #8c7878;
    .top {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      text-align: center;
      height: 3.4rem;
      line-height: 36px;
      padding-top: 5px;
      background-color: #fffefe;
      z-index: 20;
      .title {
        display: inline-block;
        font-size: 17px;
        color: #461e1e;
      }
      .share {
        position: absolute;
        display: inline-block;
        right: 20px;
        margin-top: -2px;
        .iconfont {
          font-size: 20px;
          color: #645a5a;
        }
      }
      .tab {
        margin-top: -5px;
        display: flex;
        .recommend {
          color: #ff2d47;
        }
        .item {
          display: inline-block;
          flex: 1;
          font-size: 13px;
          text-align: center;
          padding: 5px;
          a {
            color: #8c7878;
          }
          a.router-link-active {
            color: #ff2d47;
            font-weight: bold;
          }
        }
      }
      .tabLine {
        position: absolute;
        left: 1.53rem;
        bottom: .15rem;
        right: 0;
        height: 2px;
        width: 2.3rem;
        background-color: #ff2d47;
        border-radius: 2px;
        transition: transform .2s ease;
      }
    }
    .contentwrapper {
      position: absolute;
      top: 3.6rem;
      left: 0;
      right: 0;
      bottom: 0;
      transform: translate3d(0, 0, 0);
      .routerview {
        &.billboardrouter-enter {
          transform: translate3d(100%, 0, 0);
        }
        &.billboardrouter-enter-active, &.billboardrouter-leave-active {
          transition: transform .2s ease;
        }
        &.billboardrouter-leave-to {
          transform: translate3d(-100%, 0, 0);
        }
      }

      .content {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        font-size: 0;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        z-index: 1;
        .subject {
          width: 16rem;
          height: 7rem;
          background-color: #f0ebeb;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .items {
          background-color: #faf5f5;
          padding: .22rem;
          font-size: 0;
          .item {
            position: relative;
            display: inline-block;
            margin: .22rem;
            width: 7.34rem;
            overflow: hidden;
            border-radius: 5px;
            .image {
              display: inline-block;
              width: 7.34rem;
              height: 7rem;
              background-color: #f0ebeb;
              img {
                width: 100%;
                height: 100%;
              }
              img[lazy=loading] {
                width: 2rem;
                height: 2rem;
                margin-left: 2.67rem;
                margin-top: 2.5rem;

              }
            }
            .explain {
              position: relative;
              display: block;
              padding-left: 10px;
              width: 7.34rem;
              height: 3.5rem;
              background-color: #ffffff;
              font-size: 12px;
              .title {
                color: #321e1e;
                line-height: 30px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              .detail {
                color: #a09696;
                line-height: 0.8rem;
              }
              .price {
                position: absolute;
                bottom: .3rem;
                font-size: 14px;
                color: #ff2d47;
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
    .giftDetail {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #ffffff;
      z-index: 100;
      transform: translate3d(0, 0, 0);
      &.giftDetailfade-enter-active, &.giftDetailfade-leave-active {
        transition: transform .3s ease;
      }
      &.giftDetailfade-enter, &.giftDetailfade-leave-to {
        transform: translate3d(100%, 0, 0)
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
        .shareheader, .sharefooter {
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
        .shareheader {
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
      .header {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 2rem;
        padding: 0 1rem;
        color: #ffffff;
        z-index: 10;
        .arrow {
          position: absolute;
          line-height: 2rem;
          .iconfont {
            font-size: 16px;
          }
        }
        .list {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          line-height: 2rem;
          text-align: center;
          margin: 0 auto;
          .wrapper {
            width: 9rem;
            font-size: 14px;
            margin-left: 3.5rem;
            display: flex;
            .item {
              flex: 1;
            }
            :first-child {
              color: #ffffff;
            }
          }
        }
        .commendIcon {
          position: absolute;
          right: 1rem;
          top: 0;
          height: 2rem;
          line-height: 2rem;
          display: none;
          color: #645a5a;
          .iconfont {
            display: inline-block;
            font-size: 20px;
          }
        }
        .switchLine {
          position: absolute;
          left: 4.25rem;
          right: 0;
          bottom: .3rem;
          height: 2px;
          background-color: #ffffff;
          border-radius: 2px;
          width: 1.5rem;
          transition: transform .2s ease;
        }
      }
      .contents {
        position: absolute;
        left: 0;
        top: 0;
        width: 16rem;
        bottom: 2rem;
        text-align: center;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        z-index: 1;
        opacity: 1;
        &.contentsfade-enter-active, &.contentsfade-leave-active {
          transition: opacity .15s linear;
        }
        &.contentsfade-enter, &.contentsfade-leave-to {
          opacity: 0;
        }
        .image {
          width: 16rem;
          height: 15rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .subject {
          .title {
            margin-top: 1.2rem;
            font-size: 18px;
            color: #281e1e;

          }
          .small-title {
            font-size: 15px;
            line-height: 35px;
            color: #827878;
          }
        }
        .price {
          font-size: 21px;
          color: #ff2d47;
          line-height: 35px;
        }
        .favorite {
          margin-bottom: 1.3rem;
          i {
            display: inline-block;
            font-size: 10px;
          }
          .number {
            display: inline-block;
            font-size: 12px;
          }

        }
        .explain {
          text-align: justify;
          padding: 0 .5rem;
          font-size: 13px;
          line-height: 21px;
        }
        .products {
          .title {
            height: 2.2rem;
            width: 8rem;
            margin-left: 4rem;
            line-height: 2.2rem;
            text-align: center;
            .leftLine, .rightLine {
              display: inline-block;
              width: 1.4rem;
              height: 1px;
              line-height: 1px;
              background-color: #dcd7d7;
              border-radius: 1px;
              vertical-align: middle;
              margin-top: -7px;

            }
            .leftLine {

            }
            .rightLine {
            }
            .tip {
              width: 4.6rem;
              display: inline-block;
              font-size: 12px;
              color: #a09696;
            }
          }
          .container {
            overflow: hidden;
            width: 100%;
            .subContainer {
              width: 43rem;
              height: 5.625rem;
              margin: 0 -.5rem .5rem -.5rem;
              font-size: 0;
              .item {
                display: inline-block;
                width: 10rem;
                height: 5.625rem;
                margin-right: .5rem;
                img {
                  width: 100%;
                  height: 100%;
                  border-radius: 5px;
                }
              }
              :last-child {
                margin-right: 0;
              }
            }
          }
        }
        .like {
          .title {
            height: 2.2rem;
            width: 8rem;
            margin-left: 4rem;
            line-height: 2.2rem;
            text-align: center;
            .leftLine, .rightLine {
              display: inline-block;
              width: 1.4rem;
              height: 1px;
              line-height: 1px;
              background-color: #dcd7d7;
              border-radius: 1px;
              vertical-align: middle;
              margin-top: -7px;
            }
            .tip {
              width: 4.6rem;
              display: inline-block;
              font-size: 12px;
              color: #a09696;
            }
          }
          .container {
            background-color: #faf5f5;
            padding: .22rem;
            font-size: 0;
            .item {
              position: relative;
              display: inline-block;
              margin: .22rem;
              width: 7.34rem;
              overflow: hidden;
              border-radius: 5px;
              .image {
                display: inline-block;
                width: 7.34rem;
                height: 7.6rem;
                background-color: #f0ebeb;
                img {
                  width: 100%;
                  height: 100%;
                }
                img[lazy=loading] {
                  width: 2rem;
                  height: 2rem;
                  margin-left: 0;
                  margin-top: 2.5rem;

                }
              }
              .explains {
                position: relative;
                display: block;
                padding-left: 10px;
                width: 7.34rem;
                height: 3.5rem;
                background-color: #ffffff;
                font-size: 12px;
                .titles {
                  position: absolute;
                  left: 10px;
                  color: #321e1e;
                  line-height: 30px;
                  margin-left: 0;
                }
                .details {
                  position: absolute;
                  left: 10px;
                  top: 30px;
                  color: #a09696;
                  line-height: 0.8rem;
                }
                .prices {
                  position: absolute;
                  bottom: .3rem;
                  font-size: 14px;
                  color: #ff2d47;
                }

              }
            }
          }
        }
      }
      .giftDetails {
        position: absolute;
        left: 0;
        top: 2rem;
        width: 16rem;
        bottom: 2rem;
        overflow-x: hidden;
        overflow-y: auto;
        opacity: 1;
        &.detailsfade-enter-active, &.detailsfade-leave-active {
          transition: opacity .15s linear;
        }
        &.detailsfade-enter, &.detailsfade-leave-to {
          opacity: 0;
        }
        #detailsWrapper {
          min-height: 30rem;
          img {
            width: 16rem;
          }
        }

      }
      .giftCommend {
        position: absolute;
        left: 0;
        top: 2rem;
        width: 16rem;
        bottom: 2rem;
        overflow: hidden;
        opacity: 1;
        &.commendfade-enter-active, &.commendfade-leave-active {
          transition: opacity .15s linear;
        }
        &.commendfade-enter, &.commendfade-leave-to {
          opacity: 0;
        }
        .item {
          color: #6e5a5a;
          #header {
            position: relative;
            padding: 0.6rem 1rem;
            #image {
              width: 1.7rem;
              height: 1.7rem;
              display: inline-block;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
            #nickname {
              display: inline-block;
              vertical-align: top;
              margin-top: .2rem;
              margin-left: .4rem;
              font-size: 13px;
              font-weight: bold;
            }
            #datetime {
              display: inline-block;
              position: absolute;
              left: 3.15rem;
              top: 1.8rem;
              font-size: 11px;
              color: #a09696;
            }
          }
          #contents {
            padding: 0 1rem .6rem 1rem;
            font-size: 13px;
            color: #321e1e;
            border-bottom: 1px solid #f0e6e6;
          }
        }

      }
      .footerBar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2.2rem;
        color: #ffffff;
        display: flex;
        background-color: #ffffff;
        border-top: 1px solid #f0ebeb;
        z-index: 20;
        .icons {
          flex: 3;
          .wrapper {
            display: flex;
            text-align: center;
            color: #645a5a;
            .item {
              flex: 1;
              line-height: 2.2rem;
              .iconfont {
                display: inline-block;
                font-size: 31px;
                color: #321e1e;
                padding-top: .15rem;
              }
              .iconfont.addfav {
                font-size: 31px;
                color: #ff2d47;
              }
            }
            .item:last-child .iconfont {
              margin-top: -.08rem;
            }
          }
        }
        .buyBtn {
          flex: 5;
          text-align: center;
          line-height: 2.2rem;
          font-size: 13px;
          background-color: #ff2d47;
          padding-top: .1rem;
          color: #ffffff;
        }
      }
    }
  }
</style>
