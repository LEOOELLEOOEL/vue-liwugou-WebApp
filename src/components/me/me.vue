<template>
  <div id="me">
    <div class="title">
      <div class="setbtn" @click="showsetting">
        <i class="iconfont">&#xe61f;</i>
      </div>
      <div class="name">轩缘飘雪</div>
      <div class="icon">
        <i class="iconfont">&#xe63e;</i>
        <i class="iconfont">&#xe60a;</i>
      </div>
    </div>
    <div class="content">
      <div class="top">
        <div class="icon">
          <img class="img" :src="userData.avatar">
        </div>
        <div class="detail">
          <div class="points">
            <div class="score">{{userData.score}}</div>
            <div class="word">积分</div>
          </div>
          <div class="line"></div>

          <div class="focus">
            <div class="score">{{userData.focus}}</div>
            <div class="word">关注</div>
          </div>
          <div class="line"></div>
          <div class="news">
            <div class="score">0</div>
            <div class="word">新消息</div>
          </div>

        </div>
      </div>
      <div class="bottom">
        <div class="item" @click="showcart">
          <i class="iconfont">&#xe607;</i><br>
          <div class="title">购物车</div>
        </div>
        <div class="item" @click="showorder">
          <i class="iconfont">&#xe612;</i><br>
          <div class="title">订单</div>
        </div>
        <div class="item">
          <i class="iconfont">&#xe687;</i><br>
          <div class="title">礼券</div>
        </div>
        <div class="item">
          <i class="iconfont">&#xe619;</i><br>
          <div class="title">送礼提醒</div>
        </div>
      </div>
    </div>
    <splitline class="splitline"></splitline>
    <div class="footer">
      <div class="header">
        <div class="wrapper">
          <div class="left" @click="tab(0)" ref="leftTab">单品</div>
          <div class="right" @click="tab(1)" ref="rightTab">攻略</div>
          <div class="underline" ref="underline"></div>
        </div>
      </div>
      <div class="details">
        <div class="wrappers" ref="detailsWrapper">
          <div style="min-height: 10rem">
            <div id="danPing" class="content">
              <div class="favorite">
                <div class="present">我喜欢的礼物</div>
                <div class="count">共0个</div>
                <div class="image">
                  <div class="wrapper">
                    <i class="iconfont">&#xe699;</i><br>
                  </div>
                </div>
              </div>
              <div class="order">
                <div class="add">
                  <i class="iconfont">&#xe62b;</i>
                  <div class="word">新建礼物清单</div>
                </div>
              </div>
            </div>
            <div id="gongLve" class="content">
              <div class="container">
                <div class="image">
                  <img src="http://opc4ef7kt.bkt.clouddn.com/me/gonglve/me-gonglve.jpg-optimize">
                </div>
                <div class="contain">
                  <div class="title">春风十里温柔如你，小礼物述尽浓情蜜意</div>
                  <br>
                  <div class="explains">
                    <div class="date">4-06</div>
                    <div class="nickname">萌萌哒怪叔叔</div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <transition name="settingfade">
      <div v-show="settingShow" ref="setting" class="setting">
        <div class="top">
          <div class="arrow" @click="hidesetting">
            <i class="iconfont">&#xe659;</i>
          </div>
          <div class="title">
            <div class="content">设置</div>
          </div>
        </div>
        <div class="settingWrapper" ref="settingWrapper">
          <div class="settingWrap">
            <splitline class="splitline1"></splitline>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe675;</i></div>
                <div class="detail">
                  <div class="word">我的身份</div>
                  <div class="right">
                    <div class="status">男孩 大学生</div>
                    <div class="arrow">
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe611;</i></div>
                <div class="detail">
                  <div class="word">更换手机号码</div>
                  <div class="right">
                    <div class="status">{{userData.telephone}}</div>
                    <div class="arrow">
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <splitline style="margin-top: 2px"></splitline>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe60c;</i></div>
                <div class="detail">
                  <div class="word">扫一扫</div>
                  <div class="right">
                    <div class="arrow">
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe699;</i></div>
                <div class="detail">
                  <div class="word">喜欢单品到默认清单</div>
                  <div class="right">
                    <div class="status" style="margin-top: 5px;margin-right: 16px">
                      <mt-switch v-model="order"></mt-switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe6d7;</i></div>
                <div class="detail">
                  <div class="word">收货地址</div>
                  <div class="right">
                    <div class="status">暂无</div>
                    <div class="arrow">
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe603;</i></div>
                <div class="detail">
                  <div class="word">消息推送设置</div>
                  <div class="right">
                    <div class="status">已开启</div>
                    <div class="arrow">
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe632;</i></div>
                <div class="detail">
                  <div class="word">清除缓存</div>
                  <div class="right">
                    <div class="status">12.8MB</div>
                    <div class="arrow">
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <splitline></splitline>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe633;</i></div>
                <div class="detail">
                  <div class="word">好评将积分</div>
                  <div class="right">
                    <div class="arrow">
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe64a;</i></div>
                <div class="detail">
                  <div class="word">意见反馈</div>
                  <div class="right">
                    <div class="arrow">
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe63e;</i></div>
                <div class="detail">
                  <div class="word">客服电话</div>
                  <div class="right">
                    <div class="arrow">
                      <div class="status">400-8888-8888</div>
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe600;</i></div>
                <div class="detail">
                  <div class="word">检查更新</div>
                  <div class="right">
                    <div class="arrow">
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe6b1;</i></div>
                <div class="detail">
                  <div class="word">网络检查</div>
                  <div class="right">
                    <div class="arrow">
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <splitline></splitline>
            <div class="item">
              <div class="tuisong">
                <div class="icon">
                  <i class="iconfont">&#xe847;</i></div>
                <div class="detail">
                  <div class="word">关于礼物购</div>
                  <div class="right">
                    <div class="arrow">
                      <i class="iconfont">&#xe637;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <splitline></splitline>
            <div class="logout" @click="userlogout">
              退出当前账号


            </div>
            <splitline></splitline>
            <splitline></splitline>
          </div>

        </div>
      </div>
    </transition>
    <transition name="cartfade">
      <div v-show="cartShow" ref="cart" class="cart">
        <div class="title">
          <div class="arrow" @click="hidecart" style="z-index: 10;">
            <i class="iconfont">&#xe626;</i>
          </div>
          <div class="name">
            购物车


          </div>
        </div>
        <div class="list" ref="cartlist">
          <div class="item">
            <div class="cartitem" v-show="cartexit" v-for="(item,index) in cartData">
              <splitline v-show="index===0" style="margin-top: -7px"></splitline>
              <div class="contents">
                <div class="presentImg">
                  <img :src="item.img_url">
                </div>
                <div class="carttitle">{{item.title}}</div>
                <div class="subject">{{item.subject}}</div>
                <div class="price">￥{{item.price}}</div>
                <div class="amount">x{{item.amount}}</div>
              </div>
              <splitline class="cartunderline"></splitline>
            </div>
            <splitline v-show="!cartexit"></splitline>
            <div class="cartIcon" v-show="!cartexit"><i class="iconfont">&#xe647;</i></div>
            <div class="word" v-show="!cartexit">还没添加礼物哦QAQ~</div>
          </div>

        </div>
      </div>
    </transition>
    <transition name="orderfade">
      <div v-show="orderShow" ref="order" class="orderDetail">
        <div class="header">
          <div class="arrow" @click="hideorder">
            <i class="iconfont">&#xe626;</i>
          </div>
          <div class="subject" style="z-index: 0;">我的订单</div>
          <div class="faqIcon">
            <i class="iconfont">&#xe601;</i>
          </div>
        </div>
        <div class="detailTab" ref="detailtab">
          <div class="item" @click="detailtab(0)" ref="detailTab1">全部</div>
          <div class="item" @click="detailtab(1)" ref="detailTab2">待支付</div>
          <div class="item" @click="detailtab(2)" ref="detailTab3">待发货</div>
          <div class="item" @click="detailtab(3)" ref="detailTab4">已发货</div>
        </div>
        <div class="orderline" ref="orderline"></div>
        <div class="wrapper" ref="orderwrapper">
          <div>
            <div class="wrappercontent">
              <div class="orderWrap">
                <div class="orderImage">
                  <i class="iconfont">&#xe648;</i><br>
                </div>
                <div class="word">还没有订单哦QAQ~</div>
              </div>
            </div>
            <div class="wrappercontent">
              <div class="orderWrap">
                <div class="orderImage">
                  <i class="iconfont">&#xe648;</i><br>
                </div>
                <div class="word">还没有订单哦QAQ~</div>
              </div>
            </div>
            <div class="wrappercontent">
              <div class="orderWrap">
                <div class="orderImage">
                  <i class="iconfont">&#xe648;</i><br>
                </div>
                <div class="word">还没有订单哦QAQ~</div>
              </div>
            </div>
            <div class="wrappercontent">
              <div class="orderWrap">
                <div class="orderImage">
                  <i class="iconfont">&#xe648;</i><br>
                </div>
                <div class="word">还没有订单哦QAQ~</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </transition>
    <transition name="spinnerfade">
      <div class="spinnerWrapper" v-show="showspinner">
        <mt-spinner class="mt-spinner" type="double-bounce" color="#ff2d47" :size="50"></mt-spinner>
      </div>
    </transition>
    <div class="login" ref="loginpanel" v-show="showlogin">
      <div class="avatarwrapper">
        <div class="avtarCotnent">
          <div class="avatar">
            <img src="http://opc4ef7kt.bkt.clouddn.com/me_avatar.png-optimize">
          </div>
        </div>
        <div class="words">
          注册登录


        </div>
        <div class="loginTip">
          {{loginTip}}


        </div>
      </div>
      <div class="inputPanel">
        <div class="phoneNumber">
          <div class="icon">
            <i class="iconfont">&#xe615;</i>
          </div>
          <div class="inputbox">
            <input @blur="showTab"  @focus="hiddenTab" type="text" placeholder="输入手机号" ref="username">
            <div class="inputline"></div>
          </div>

        </div>
        <div class="password">
          <div class="icon">
            <i class="iconfont">&#xe660;</i>
          </div>
          <div class="inputbox">
            <input @blur="showTab" @focus="hiddenTab" type="password" placeholder="请输入密码" ref="password">
            <div class="inputline"></div>
          </div>
        </div>
        <div class="loginswitch" @click="logintab">{{loginregister}}</div>
        <div class="confirmBtn">
          <div @click="userlogin" class="value" v-show="loginbtnstatus">登录</div>
          <div @click="userregister" class="value" v-show="!loginbtnstatus">注册</div>
        </div>
      </div>
      <div class="oauth">
        <div class="explain">
          <div class="leftline">
          </div>
          <div class="contents">使用社交账号登录</div>
          <div class="rightline"></div>
        </div>
        <div class="iconItems">
          <div class="oauthItem">
            <i class="iconfont">&#xe640;</i>
          </div>
          <div class="oauthItem">
            <i class="iconfont">&#xe63c;</i>
          </div>
          <div class="oauthItem">
            <i class="iconfont">&#xe641;</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import splitline from '../common/splitLine.vue';
  import BScroll from 'better-scroll';
  export default {
    name: 'me',
    data () {
      return {
        settingShow: false,
        orderShow: false,
        cartShow: false,
        order: true,
        colors: ['#321e1e', '#ff2d47'],
        showspinner: true,
        showlogin: true,
        userData: {},
        cartData: [],
        loginTip: '',
        loginbtnstatus: true,
        loginregister: '新用户注册',
        cartexit: false,
        switch: true
      };
    },
    created() {
      this.$nextTick(() => {
        this._initdetailsWrapperScroll();
        this._initSettingScroll();
        this._initOrderScroll();
        this._initCartScroll();
      });
    },
    mounted() {
      setTimeout(() => {
        this.showspinner = false;
      }, 300);
    },
    activated() {
      let telephone = window.localStorage.getItem('telephone');
      this.$http.post('http://www.leoel.top/api/getCart.php', {telephone: telephone}, {emulateJSON: true}).then((response) => {
        response = response.body;
        if (response.code === 200) {
          this.cartData = response.data;
          if (!this.cartData) {
            this.cartexit = false;
          } else {
            this.cartexit = true;
          }
        }
      });
      this.$nextTick(() => {
        this._initdetailsWrapperScroll();
        this._initSettingScroll();
        this._initOrderScroll();
        this._initCartScroll();
      });
    },
    methods: {
      showTab() {
        if (!this.switch) {
          this.$emit('showblock');
          this.switch = true;
        }
      },
      hiddenTab() {
        if (this.switch) {
          this.$emit('hideblock');
          this.switch = false;
        }
      },
      logintab() {
        if (this.loginregister === '新用户注册') {
          this.loginbtnstatus = false;
          this.loginregister = '老用户登录';
        } else {
          this.loginbtnstatus = true;
          this.loginregister = '新用户注册';
        }
      },
      userlogout() {
        this.$refs.username.value = '';
        this.$refs.password.value = '';
        this.showlogin = true;
        this.settingShow = false;
      },
      userlogin() {
        let telephone = this.$refs.username.value;
        let password = this.$refs.password.value;
        if (!telephone) {
          this.loginTip = '手机号不能为空';
        } else if (!password) {
          this.loginTip = '密码不能为空';
        } else {
          this.showspinner = true;
          this.$http.post('http://www.leoel.top/api/login.php', {
            telephone: telephone,
            password: password
          }, {emulateJSON: true}).then((response) => {
            response = response.body;
            if (response.code === 200) {
              this.userData = response.data[0];
              this.showspinner = false;
              this.loginTip = '登陆成功！';
              window.localStorage.setItem('telephone', telephone);
              this.$http.post('http://www.leoel.top/api/getCart.php', {telephone: telephone}, {emulateJSON: true}).then((response) => {
                response = response.body;
                if (response.code === 200) {
                  this.cartData = response.data;
                  if (!this.cartData) {
                    this.cartexit = false;
                  } else {
                    this.cartexit = true;
                  }
                }
              });
              let _this = this;
              setTimeout(function () {
                _this.showlogin = false;
                _this.loginTip = '';
              }, 800);
            }
            if (response.code === 300) {
              this.showspinner = false;
              this.loginTip = '手机号或密码错误';
              this.userData = {
                userid: '',
                username: '',
                telephone: '',
                password: '',
                avatar: 'http://opc4ef7kt.bkt.clouddn.com/me_avatar.png-optimize',
                score: '',
                focus: ''
              };
              this.showlogin = true;
            }
          });
        }
      },
      userregister() {
        let telephone = this.$refs.username.value;
        let password = this.$refs.password.value;
        if (!telephone) {
          this.loginTip = '手机号不能为空';
        } else if (!password) {
          this.loginTip = '密码不能为空';
        } else if (!(/^1[34578]\d{9}$/.test(telephone))) {
          this.loginTip = '手机号码格式不正确！';
        } else if (password.length < 6) {
          this.loginTip = '密码应至少为6位！';
        } else {
          this.showspinner = true;
          this.$http.post('http://www.leoel.top/api/register.php', {
            telephone: telephone,
            password: password
          }, {emulateJSON: true}).then((response) => {
            response = response.body;
            if (response.code === 200) {
              this.userData = {
                telephone: telephone,
                password: password,
                avatar: 'http://opc4ef7kt.bkt.clouddn.com/me_avatar.png-optimize',
                score: '',
                focus: ''
              };
              this.showspinner = false;
              this.loginTip = '恭喜，注册成功！';
              let _this = this;
              setTimeout(function () {
                _this.showlogin = false;
                _this.loginTip = '';
              }, 800);
            }
            if (response.code === 300) {
              this.showspinner = false;
              this.loginTip = '该手机号已被注册！';
              this.userData = {
                userid: '',
                username: '',
                telephone: '',
                password: '',
                avatar: 'http://opc4ef7kt.bkt.clouddn.com/me_avatar.png-optimize',
                score: '',
                focus: ''
              };
              this.showlogin = true;
            }
          });
        }
      },
      detailtab(index) {
        let _that = this.$refs;
        let orderline = _that.orderline;
        let detailTab1 = _that.detailTab1;
        let detailTab2 = _that.detailTab2;
        let detailTab3 = _that.detailTab3;
        let detailTab4 = _that.detailTab4;
        let orderwrapper = _that.orderwrapper;
        switch (index) {
          case 0:
            orderline.style.transform = 'translate3d(0,0,0)';
            detailTab1.style.color = '#ff2d47';
            detailTab2.style.color = '#461e1e';
            detailTab3.style.color = '#461e1e';
            detailTab4.style.color = '#461e1e';
            orderwrapper.style.transform = 'translate3d(0,0,0)';
            break;
          case 1:
            orderline.style.transform = 'translate3d(4rem,0,0)';
            detailTab1.style.color = '#461e1e';
            detailTab2.style.color = '#ff2d47';
            detailTab3.style.color = '#461e1e';
            detailTab4.style.color = '#461e1e';
            orderwrapper.style.transform = 'translate3d(-16rem,0,0)';
            break;
          case 2:
            orderline.style.transform = 'translate3d(8rem,0,0)';
            detailTab1.style.color = '#461e1e';
            detailTab2.style.color = '#461e1e';
            detailTab3.style.color = '#ff2d47';
            detailTab4.style.color = '#461e1e';
            orderwrapper.style.transform = 'translate3d(-32rem,0,0)';
            break;
          case 3:
            orderline.style.transform = 'translate3d(12rem,0,0)';
            detailTab1.style.color = '#461e1e';
            detailTab2.style.color = '#461e1e';
            detailTab3.style.color = '#461e1e';
            detailTab4.style.color = '#ff2d47';
            orderwrapper.style.transform = 'translate3d(-48rem,0,0)';
            break;
        }
      },
      showsetting() {
        this.settingShow = true;
        this.$nextTick(() => {
          this._initdetailsWrapperScroll();
          this._initSettingScroll();
          this._initOrderScroll();
          this._initCartScroll();
        });
      },
      showcart() {
        this.cartShow = true;
        this.$nextTick(() => {
          this._initdetailsWrapperScroll();
          this._initSettingScroll();
          this._initOrderScroll();
          this._initCartScroll();
        });
      },
      showorder() {
        this.orderShow = true;
        this.$nextTick(() => {
          this._initdetailsWrapperScroll();
          this._initSettingScroll();
          this._initOrderScroll();
          this._initCartScroll();
        });
      },
      hidecart() {
        this.cartShow = false;
        this.cartScroll.scrollTo(0, 0, 0);
      },
      hideorder() {
        this.orderShow = false;
      },
      hidesetting() {
        this.settingShow = false;
      },
      _initdetailsWrapperScroll() {
        this.$nextTick(() => {
          if (!this.detailsWrapperScroll) {
            this.detailsWrapperScroll = new BScroll(this.$refs.detailsWrapper, {
              click: true, probeType: 3
            });
          } else {
            this.detailsWrapperScroll.refresh();
          }
        });
      },
      _initSettingScroll() {
        this.$nextTick(() => {
          if (!this.Settingscroll) {
            this.Settingscroll = new BScroll(this.$refs.settingWrapper, {
              click: true, probeType: 3
            });
          } else {
            this.Settingscroll.refresh();
          }
        });
      },
      _initCartScroll() {
        this.$nextTick(() => {
          if (!this.cartScroll) {
            this.cartScroll = new BScroll(this.$refs.cartlist, {
              click: true, probeType: 3
            });
          } else {
            this.cartScroll.refresh();
          }
        });
      },
      _initOrderScroll() {
        this.$nextTick(() => {
          if (!this.orderScroll) {
            this.orderScroll = new BScroll(this.$refs.orderwrapper, {
              click: true, probeType: 3
            });
          } else {
            this.orderScroll.refresh();
          }
        });
      },
      tab(index) {
        let that = this.$refs;
        let _this = that.detailsWrapper.style;
        let leftTab = that.leftTab.style;
        let rightTab = that.rightTab.style;
        let underline = that.underline.style;
        if (index) {
          leftTab.color = this.colors[0];
          rightTab.color = this.colors[1];
        } else {
          leftTab.color = this.colors[1];
          rightTab.color = this.colors[0];
        }
        ;
        let Transiton = 'transform .15s ease';
        _this.webkitTransition = Transiton;
        _this.transition = Transiton;
        _this.webTransform = 'translate3d(-' + (index * 16) + 'rem,0,0)';
        _this.transform = 'translate3d(-' + (index * 16) + 'rem,0,0)';
        underline.webkitTransition = Transiton;
        underline.transition = Transiton;
        underline.webTransform = 'translate3d(' + (index * 72) + 'px,0,0)';
        underline.transform = 'translate3d(' + (index * 72) + 'px,0,0)';
      }
    },
    components: {
      splitline
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  #me {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    padding-top: 16px;
    color: #130000;
    background-color: #fffefe;
    font-size: 0;
    .login {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: #fffefe;
      z-index: 10;
      .avatarwrapper {
        width: 16rem;
        height: 7rem;
        color: #321e1e;
        text-align: center;
        .avtarCotnent {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .avatar {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            border: 1px solid #f1e8e8;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .words {
          font-size: 15px;
          margin-top: -1rem;
        }
        .loginTip {
          font-size: 14px;
          margin-top: 1rem;
          color: #ff2d47;
        }

      }
      .inputPanel {
        color: #503c3c;
        font-size: 14px;
        padding: 0 2rem;
        margin-top: 40px;
        .phoneNumber, .password {
          width: 12rem;
          font-size: 0;
          .icon {
            display: inline-block;
            line-height: 30px;
            width: 1.5rem;
            .iconfont {
              font-size: 22px;
              color: #afa0a0;
            }
          }
          .inputbox {
            width: 10.5rem;
            display: inline-block;
            font-size: 13px;
            line-height: 40px;
            input {
              border: none;
              outline: none;
              color: #503c3c;
              line-height: 40px;
              vertical-align: middle;
            }
            ::-moz-placeholder {
              color: #000;
              opacity: 1;
            }
            input:-ms-input-placeholder {
              color: #8c7878;
              opacity: 1;
            }

            input::-webkit-input-placeholder {
              color: #8c7878;
              opacity: 1;
            }
            input:-ms-input-placeholder {
              text-align: center;
            }
            input::-webkit-input-placeholder {
              text-align: center;
            }
            .inputline {
              height: 1px;
              width: 100%;
              background-color: #f0e6e6;
            }
          }
        }
        .loginswitch {
          padding: 5px;
          color: #ff2d47;
          text-align: right;
          text-decoration: underline;
          margin-top: 20px;
        }
        .confirmBtn {
          margin-top: 5px;
          width: 12rem;
          height: 1.8rem;
          background-color: #ff2d47;
          border: none;
          line-height: 1.8rem;
          border-radius: 4px;
          text-align: center;
          .value {
            color: #ffffff;
            font-size: 15px;
            line-height: 1.95rem;
          }
        }
      }
      .oauth {
        margin-top: 50px;
        width: 16rem;
        padding: 0 2rem;
        .explain {
          position: relative;
          width: 12rem;
          text-align: center;
          .contents {
            display: inline-block;
            width: 6rem;
            font-size: 12px;
            color: #8c7878;
          }
          .leftline, .rightline {
            display: inline-block;
            height: 1px;
            width: 3rem;
            margin-top: 6px;
            background-color: #f0e6e6;
          }
          .leftline {
            position: absolute;
            left: 0;
            margin-left: 0;
          }
          .rightline {
            position: absolute;
            right: 0;
          }
        }
        .iconItems {
          width: 12rem;
          display: flex;
          text-align: center;
          line-height: 4.5rem;
          .oauthItem {
            flex: 1;
            .iconfont {
              font-size: 36px;
              color: #645a5a;
            }
          }

        }
      }
    }
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
    .title {
      padding-left: 16px;
      padding-right: 16px;
      display: flex;
      .setbtn {
        display: inline-block;
        flex: 1;
        .iconfont {
          font-size: 24px;

        }
      }
      .name {
        flex: 4;
        display: inline-block;
        font-size: 18px;
        line-height: 26px;
        text-align: center;
        height: 30px;
      }
      .icon {
        flex: 1;
        display: inline-block;
        height: 30px;
        text-align: right;
        .iconfont {
          font-size: 22px;
        }
        .iconfont:first-child {
          margin-right: 9px;
        }
      }
    }
    .content {
      padding-left: 16px;
      padding-right: 16px;
      .top {
        height: 60px;
        margin-top: 20px;
        border: none;
        position: relative;
        .icon {
          position: absolute;
          top: 0;
          left: 0;
          width: 70px;
          height: 70px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .detail {
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 70px;
          font-size: 11px;
          display: flex;
          clear: both;
          .points {
            flex: 1;
            text-align: center;
            margin-top: 20px;
            .score {
              font-weight: bold;
              font-size: 15px;
            }
          }
          .focus {
            flex: 1;
            text-align: center;
            margin-top: 20px;
            .score {
              font-weight: bold;
              font-size: 15px;
            }
          }
          .news {
            flex: 1;
            text-align: center;
            margin-top: 20px;
            .score {
              font-weight: bold;
              font-size: 15px;
            }
          }
          .line {
            display: inline-block;
            width: 1px;
            height: 20px;
            margin-top: 25px;
            vertical-align: middle;
            background-color: #F0E6E6;
          }
        }

      }
      .bottom {
        position: absolute;
        left: 0;
        right: 0;
        display: flex;
        margin-top: 35px;
        font-size: 11px;
        text-align: center;
        .item {
          flex: 1;
          .iconfont {
            font-size: 22px;
            color: #645a5a;
          }
          .title {
            display: inline-block;
            margin-top: 5px;
          }
        }
      }
    }
    .splitline {
      position: absolute;
      margin-top: 90px;
    }
    .footer {
      position: absolute;
      top: 225px;
      bottom: 0;
      width: 100%;
      .header {
        position: absolute;
        left: 0;
        right: 0;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-bottom: 1px solid #f0e6e6;
        background-color: #fffefe;
        z-index: 10;
        .wrapper {
          position: relative;
          display: inline-block;
          width: 110px;
          font-size: 14px;
          color: #331e1e;
          div {
            display: inline-block;
            padding: 5px;
          }
          .left {
            float: left;
            color: #ff2d47;
          }
          .right {
            float: right;
          }
          .underline {
            position: absolute;
            left: 3px;
            bottom: 10px;
            display: block;
            height: 2px;
            padding: 0;
            background-color: #ff2d47;
            border-radius: 1px;
            width: 32px;
          }
        }
      }
      .details {
        position: absolute;
        top: 42px;
        left: 0;
        right: 0;
        bottom: 2rem;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
        z-index: 1;
        .wrappers {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 32rem;
          .content {
            display: inline-block;
            width: 16rem;
            padding: 0;
          }
          .favorite {
            font-size: 15px;
            margin-top: 25px;
            margin-left: 16px;
            .count {
              color: #a09696;
              font-size: 10px;
              line-height: 26px;
            }
            .image {
              width: 3.4rem;
              height: 3.4rem;
              background-color: #faf5f5;
              color: #a09696;
              .wrapper {
                width: 100%;
                height: 100%;
                display: flex;
                text-align: center;
                align-items: center;
                .iconfont {
                  flex: 1;
                  font-size: 22px;
                  color: #dcd2d2;
                }
              }

            }
          }
          .order {
            margin-top: 40px;
            font-size: 0;
            margin-left: 16px;
            .add {
              .iconfont {
                display: inline-block;
                color: #ff4258;
                font-size: 35px;
                height: 100%;
                vertical-align: middle;
              }
              .word {
                display: inline-block;
                vertical-align: middle;
                font-size: 15px;
                height: 100%;
                margin-left: 15px;
              }
            }
          }
          #gongLve {
            position: absolute;
            left: 16rem;
            top: 0;
            right: 0;
            bottom: 0;
            .container {
              position: absolute;
              left: 0;
              top: .19rem;
              right: 0;
              border-bottom: 1px solid #f0e6e6;
              .image {
                position: absolute;
                display: inline-block;
                left: 0;
                top: .45rem;
                width: 5.8rem;
                margin-left: .5rem;
                height: 3.3rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .contain {
                position: absolute;
                top: .8rem;
                display: inline-block;
                width: 10.2rem;
                height: 3.3rem;
                left: 6rem;
                .title, .date, .nickname {
                  display: inline-block;
                }
                .title {
                  font-size: 12px;
                  margin-top: .5rem;
                  color: #503c3c;
                }
                .explains {
                  color: #8c7878;
                  padding: 16px;
                  margin-top: -.1rem;
                  .date {
                    font-size: 11px;
                    margin-right: 10px;
                  }
                  .nickname {
                    font-size: 11px;
                  }
                }

              }

            }
          }
        }

      }
    }
    .setting {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      background-color: #fffefe;
      transform: translate3d(0, 0, 0);
      &.settingfade-enter-active, &.settingfade-leave-active {
        transition: all .3s ease;
      }
      &.settingfade-enter, &.settingfade-leave-to {
        transform: translate3d(100%, 0, 0)
      }
      .iconfont {
        color: #a09696;
        font-size: 22px;
      }
      .top {
        position: relative;
        left: 0;
        right: 0;
        top: 0;
        height: 46px;
        line-height: 46px;
        padding: 0 15px;
        background-color: #fffefe;
        border-bottom: 1px solid #f0e6e6;
        z-index: 40;
        .arrow {
          position: absolute;
          .iconfont {
            font-size: 20px;
          }
        }
        .title {
          font-size: 18px;
          color: #321e1e;
          text-align: center;
          display: flex;
          .content {
            flex: 1;
          }
        }
      }
      .settingWrapper {
        position: absolute;
        left: 0;
        right: 0;
        top: 46px;
        bottom: 0;
        .splitline1 {
          border-top: 1px solid #f0e6e6;
        }
        .item {
          padding-left: 16px;
          font-size: 16px;
          .tuisong {
            height: 44px;
            line-height: 44px;
            display: flex;
            margin-top: 4px;
            div {
              display: inline-block;
            }
            .icon {
              flex: 1;
              margin-right: 10px;
            }
            .detail {
              flex: 12;
              margin-top: 1px;
              border-bottom: 0.5px solid #a09696;
              .word {
                float: left;
              }
              .right {
                float: right;
                .arrow {
                  .iconfont {
                    font-size: 16px;
                    margin-right: 14px;
                  }
                }
              }
            }
          }
        }
        .logout {
          text-align: center;
          font-size: 18px;
          color: #ff2d47;
          height: 44px;
          line-height: 44px;
        }
      }

    }
    .cart {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 100;
      background-color: #fffefe;
      font-size: 0;
      transform: translate3d(0, 0, 0);
      &.cartfade-enter-active, &.cartfade-leave-active {
        transition: all .3s ease;
      }
      &.cartfade-enter, &.cartfade-leave-to {
        transform: translate3d(100%, 0, 0)
      }
      .title {
        position: absolute;
        left: 0rem;
        right: 0;
        top: .1rem;
        height: 2rem;
        border-bottom: 1px solid #f0e6e6;
        .arrow {
          position: absolute;
          left: 1rem;
          top: 0;
          line-height: 2rem;
          color: #645a5a;
          .iconfont {
            font-size: 20px;
          }

        }
        .name {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          color: #321e1e;
          font-size: 17px;
        }
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: 2rem;
        bottom: 0;
        overflow: hidden;
        .splitLine {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
        }
        .item {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          text-align: center;
          overflow-x: hidden;
          .cartitem {
            position: relative;
            width: 14rem;
            height: 4.7rem;
            padding: 10px 1rem 0;
            .presentImg {
              position: absolute;
              left: 1rem;
              display: inline-block;
              width: 4rem;
              height: 4rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .carttitle {
              position: absolute;
              display: inline-block;
              left: 5rem;
              margin-top: 5px;
              margin-left: 10px;
              font-size: 14px;
              color: #333333;
            }
            .subject {
              position: absolute;
              display: inline-block;
              left: 5rem;
              top: 35px;
              margin-left: 10px;
              font-size: 12px;
              color: #999999;
            }
            .cartunderline {
              position: absolute;
              top: 4.1rem;
              margin-top: 16px;
            }
            .price {
              position: absolute;
              left: 5rem;
              margin-left: 10px;
              bottom: 30px;
              font-size: 16px;
              color: #ff4258;
            }
            .amount {
              position: absolute;
              right: 1rem;
              bottom: 30px;
              color: #333333;
              font-size: 16px;
            }
          }
          .iconfont {
            display: inline-block;
            margin-top: 5rem;
            font-size: 90px;
            color: #ff9d9c;
          }
          .word {
            line-height: 120px;
            color: #9b9696;
          }
        }

      }
    }
    .orderDetail {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #fffefe;
      z-index: 100;
      color: #321e1e;
      opacity: 1;
      overflow: hidden;
      transform: translate3d(0, 0, 0);
      &.orderfade-enter-active, &.orderfade-leave-active {
        transition: transform .3s ease;
      }
      &.orderfade-enter, &.orderfade-leave-to {
        transform: translate3d(100%, 0, 0)
      }
      .header {
        position: absolute;
        left: 0;
        top: .1rem;
        right: 0;
        height: 2rem;
        line-height: 2rem;
        padding: 0 .6rem;
        .arrow {
          position: absolute;
          left: .8rem;
          height: 2rem;
          line-height: 2rem;
          z-index: 10;
        }
        .iconfont {
          color: #645a5a;
          font-size: 19px;
        }
        .arrow, .faqIcon {
          display: inline-block;
        }
        .faqIcon {
          margin-top: -.1rem;
          .iconfont {
            font-size: 15px;
          }
        }
        .faqIcon {
          position: absolute;
          top: 0;
          right: .8rem;
          line-height: 2rem;
          height: 2rem;
        }
        .subject {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          height: 2rem;
          line-height: 2rem;
          font-size: 17px;
          text-align: center;
        }
      }
      .detailTab {
        position: absolute;
        left: 0;
        top: 2.5rem;
        right: 0;
        height: 1rem;
        line-height: 1rem;
        display: flex;
        text-align: center;
        .item {
          flex: 1;
          font-size: 14px;
        }
        :first-child {
          color: #ff2d47;
        }
      }
      .orderline {
        position: absolute;
        left: .87rem;
        top: 3.6rem;
        width: 2.2rem;
        height: 2px;
        border-radius: 2px;
        background-color: #ff2d47;
        transition: transform .2s ease;
      }
      .wrapper {
        position: absolute;
        left: 0;
        top: 3.9rem;
        width: 64rem;
        bottom: 0;
        background-color: #faf5f5;
        overflow: hidden;
        font-size: 0;
        transition: transform .3s ease;
        .wrappercontent {
          width: 16rem;
          height: 22rem;
          display: inline-block;
          .orderWrap {
            width: 16rem;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .orderImage {
              .iconfont {
                font-size: 80px;
                color: #ff2d47;
              }
            }
            .word {
              font-size: 15px;
              color: #9b9696;
            }
          }
        }

      }
    }
  }
</style>
