<template>
  <div>
    <div class="home-wrap">
      <!-- 头部-顶部图片搜索栏一行 -->
      <header>
        <img
          class="home-banner"
          src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&imageView&thumbnail=750x0&quality=75"
          alt
        />
        <div class="home-search">
          <img class="home-search-logo" src="./images/logo.png" alt />
          <van-search class="home-search-ipt" v-model="value" placeholder="请输入搜索关键词" />
          <div class="home-search-btn">登录</div>
        </div>
      </header>
      <!-- 导航栏 -->
      <nav class="home-nav">
        <!-- 可拖动部分和隐藏显示的头部部分 -->
        <div class="home-nav-list">
          <div class="home-nav-list-hideTit" v-if="!isShow">全部频道</div>
          <van-tabs v-if="isShow">
            <van-tab v-for="nav in navList" :title="nav" :key="nav"></van-tab>
          </van-tabs>
        </div>
        <!-- 右侧的按钮 -->
        <div class="home-nav-toggle" ref="icon" @click="isShowList">
          <div class="home-nav-icon"></div>
        </div>
        <!-- 隐藏显示的部分 -->
        <div v-if="!isShow">
          <ul class="home-nav-hideCon">
            <li v-for="nav1 in navListCon" :key="nav1">{{nav1}}</li>
          </ul>
        </div>
      </nav>
      <!-- 轮播图+文字广告 -->
      <div class="home-carousel">
        <van-swipe :autoplay="1500" indicator-color="black">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
            <!-- <img :src="image" alt /> -->
          </van-swipe-item>
        </van-swipe>
        <!-- 文字广告部分 -->
        <div class="home-carousel-adv">
          <div>
            <i>
              <img src="./images/icon-1.png" alt />
            </i>
            <span class="advWord">网易自营品牌</span>
          </div>
          <div>
            <i>
              <img src="./images/icon-2.png" alt />
            </i>
            <span class="advWord">30天无忧退货</span>
          </div>
          <div>
            <i>
              <img src="./images/icon-3.png" alt />
            </i>
            <span class="advWord">48小时快速退款</span>
          </div>
        </div>
      </div>
      <!-- 小菜单 -->
      <div class="home-cartgoryList">
        <ul>
          <li class="home-cartgoryList-item">
            <div class="home-cartgoryList-img">
              <img src="./images/xinpin.png" alt />
            </div>
            <div class="home-cartgoryList-text">新品首发</div>
          </li>
          <li class="home-cartgoryList-item">
            <div class="home-cartgoryList-img">
              <img src="./images/jujia.png" alt />
            </div>
            <div class="home-cartgoryList-text">居家生活</div>
          </li>
          <li class="home-cartgoryList-item">
            <div class="home-cartgoryList-img">
              <img src="./images/fushi.png" alt />
            </div>
            <div class="home-cartgoryList-text">服饰鞋包</div>
          </li>
          <li class="home-cartgoryList-item">
            <div class="home-cartgoryList-img">
              <img src="./images/meishi.png" alt />
            </div>
            <div class="home-cartgoryList-text">美食酒水</div>
          </li>
          <li class="home-cartgoryList-item">
            <div class="home-cartgoryList-img">
              <img src="./images/gehu.png" alt />
            </div>
            <div class="home-cartgoryList-text">个护清洁</div>
          </li>
          <li class="home-cartgoryList-item">
            <div class="home-cartgoryList-img">
              <img src="./images/muyin.png" alt />
            </div>
            <div class="home-cartgoryList-text">母婴亲子</div>
          </li>
          <li class="home-cartgoryList-item">
            <div class="home-cartgoryList-img">
              <img src="./images/yundong.png" alt />
            </div>
            <div class="home-cartgoryList-text">运动旅行</div>
          </li>
          <li class="home-cartgoryList-item">
            <div class="home-cartgoryList-img">
              <img src="./images/shuma.png" alt />
            </div>
            <div class="home-cartgoryList-text">数码家电</div>
          </li>
          <li class="home-cartgoryList-item">
            <div class="home-cartgoryList-img">
              <img src="./images/quanqiu.png" alt />
            </div>
            <div class="home-cartgoryList-text">全球特色</div>
          </li>
          <li class="home-cartgoryList-item">
            <div class="home-cartgoryList-img">
              <img src="./images/haohuo.png" alt />
            </div>
            <div class="home-cartgoryList-text">好货抄底</div>
          </li>
        </ul>
      </div>
      <!-- 大菜单 -->
      <div class="home-cartgoryListBig">
        <div class="home-cartgoryListBig-top">
          <img src="./images/xinren.png" alt />
        </div>
        <div class="home-cartgoryListBig-bot">
          <div class="bot-top">
            <img src="./images/yinlian.png" alt />
          </div>
          <div class="bot-bot">
            <img class="whiteGive" src="./images/baisong.png" alt />
            <img class="mouthHover" src="./images/kouzhao.png" alt />
          </div>
        </div>
      </div>
      <!-- 新人专享礼 -->
      <div class="home-new">
        <div class="home-new-tit">
          <span>新人专享礼</span>
        </div>
        <div class="home-new-bot">
          <div class="home-new-bot-left">
            <p>新人专项享礼包</p>
            <img src="./images/15yuan.png" alt />
          </div>
          <div class="home-new-bot-right">
            <div class="right-top">
              <p>福利社</p>
              <p class="todyPrice">今日特价</p>
              <img class="maoliang" src="./images/maoliang.png" alt />
            </div>
            <div class="right-bot">
              <p>新人拼团</p>
              <p class="oneyuan">一元起包邮</p>
              <img class="xifashui" src="./images/xifashui.png" alt />
            </div>
          </div>
        </div>
      </div>
      <!-- 类目热销榜 -->
      <div class="home-type">
        <div class="home-type-tit">
          <span>类目热销榜</span>
        </div>
        <div class="home-type-twocard">
          <div class="towcard-left">
            <span>热销榜</span>
            <img src="./images/bed.png" alt />
          </div>
          <div class="towcard-right">
            <span>好评榜</span>
            <img src="./images/toilet.png" alt />
          </div>
        </div>
        <div class="home-type-list">
          <ul>
            <li class="list-item">
              <div>居家生活榜</div>
              <img src="./images/list01.png" alt />
            </li>
            <li class="list-item">
              <div>美食酒水榜</div>
              <img src="./images/list02.png" alt />
            </li>
            <li class="list-item">
              <div>服饰鞋包榜</div>
              <img src="./images/list03.png" alt />
            </li>
            <li class="list-item">
              <div>个护清洁榜</div>
              <img src="./images/list04.png" alt />
            </li>
            <li class="list-item">
              <div>数码家电榜</div>
              <img src="./images/list05.png" alt />
            </li>
            <li class="list-item">
              <div>全球严选榜</div>
              <img src="./images/list06.png" alt />
            </li>
            <li class="list-item">
              <div>母婴亲子榜</div>
              <img src="./images/list07.png" alt />
            </li>
            <li class="list-item">
              <div>运动旅行榜</div>
              <img src="./images/list08.png" alt />
            </li>
          </ul>
        </div>
      </div>
      <!-- 限时购 -->
      <div class="home-limit">
        <div class="home-limit-tit">
          <span class="tit-left">限时购</span>
          <span class="tit-right">更多&#8594;</span>
        </div>
        <div class="home-limit-con">
          <ul>
            <li>
              <img src="./images/limit01.png" alt />
              <span>￥55</span>
            </li>
            <li>
              <img src="./images/limit02.png" alt />
              <span>￥55</span>
            </li>
            <li>
              <img src="./images/limit03.png" alt />
              <span>￥55</span>
            </li>
            <li>
              <img src="./images/limit04.png" alt />
              <span>￥55</span>
            </li>
            <li>
              <img src="./images/limit05.png" alt />
              <span>￥55</span>
            </li>
            <li>
              <img src="./images/limit06.png" alt />
              <span>￥55</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="home-limit">
        <div class="home-limit-tit">
          <span class="tit-left">限时购</span>
          <span class="tit-right">更多&#8594;</span>
        </div>
        <div class="home-limit-con">
          <ul>
            <li>
              <img src="./images/limit01.png" alt />
              <span>￥55</span>
            </li>
            <li>
              <img src="./images/limit02.png" alt />
              <span>￥55</span>
            </li>
            <li>
              <img src="./images/limit03.png" alt />
              <span>￥55</span>
            </li>
            <li>
              <img src="./images/limit04.png" alt />
              <span>￥55</span>
            </li>
            <li>
              <img src="./images/limit05.png" alt />
              <span>￥55</span>
            </li>
            <li>
              <img src="./images/limit06.png" alt />
              <span>￥55</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部 -->
      <div class="home-footer">
        <div class="home-footer-btn">
          <div class="btn-left">下载App</div>
          <div class="btn-right">电脑版</div>
        </div>
        <div class="home-footer-des">
          <p>网易公司版权所有@1997-2020</p>
          <p>食品经营许可证JY13301080111719</p>
        </div>
      </div>
      <!-- 占位区 -->
      <div class="home-holdplace"></div>
      <!-- 右侧悬浮红包 -->
      <div class="home-giftRigt">
        <img src="./images/gift.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      // 搜索框内的数据
      value: '',
      // 导航栏内的数据
      navList: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '严选全球'],
      // 切换展示的变量
      isShow: true,
      // 隐藏内容的数据
      navListCon: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '严选全球'],
      // 轮播图数据
      images: ['https://yanxuan.nosdn.127.net/9fbe61073c6c621103c6d22254faa90d.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/163f5fd560a0dec61b54300fce11271c.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/ed18bba74776b3af55b69fe3ad320737.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/6a6741241f504b1de1c0f76fde5a8ae3.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/d32e22aca0c3dea59c6135578f8594b3.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/c8f6ea8569234c98d5f33c757b3b7960.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/7406334eaca021f7316b86ee21c3f320.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/5154b7bb15f4647b4afc14e2712f10dc.jpg?type=webp&imageView&quality=75&thumbnail=750x0']
    }
  },
  methods: {
    isShowList() {
      this.isShow = !this.isShow
      // this.$refs.icon.className = this.isShow ? 'home-nav-icon' : 'home-nav-icon-up'
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.home-wrap {
  width: 100%;
  // 头部-顶部图片搜索栏一行
  header {
    .home-banner {
      width: 100%;
      height: 100%;
    }
    .home-search {
      display: flex;
      // justify-content: space-around;
      .home-search-logo {
        width: 138px;
        height: 40px;
        margin: 0px 25px;
      }
      .home-search-ipt {
        margin: 0;
        padding: 0;
        border: 0;
        width: 442px;
        align-self: flex-start;
      }
      .home-search-btn {
        width: 74px;
        height: 40px;
        border: 1px solid red;
        font-size: 14px;
        margin: 0 0 0 16px;
        text-align: center;
        line-height: 40px;
        color: red;
        border-radius: 8px;
      }
    }
  }
  // 导航栏
  .home-nav {
    width: 100%;
    margin-top: 15px;
    position: relative;
    .home-nav-list {
      font-size: 20px;
      height: 60px;
      // line-height: 60px;
      .home-nav-list-hideTit {
        line-height: 60px;
        font-size: 30px;
        margin-left: 25px;
      }
    }
    .home-nav-toggle {
      position: absolute;
      right: 0;
      top: 0;
      width: 100px;
      height: 60px;
      text-align: center;
      background-color: white;
      .home-nav-icon {
        width: 30px;
        height: 30px;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp);
        background-size: 100% 100%;
        display: inline-block;
        margin-bottom: 25px;
        z-index: 999;
      }
    }
    .home-nav-hideCon {
      width: 100%;
      height: 312px;
      font-size: 18px;
      display: flex;
      flex-wrap: wrap;
      z-index: 999;
      position: absolute;
      background-color: white;
      li {
        margin: 0 0 40px 30px;
        width: 150px;
        height: 56px;
        text-align: center;
        line-height: 56px;
        border: 1px solid #6666667a;
      }
    }
  }
  // 轮播图
  .home-carousel {
    .home-carousel-adv {
      width: 750px;
      height: 36px;
      padding: 0px 30px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      img {
        width: 32px;
        height: 32px;
        vertical-align: middle;
      }
    }
  }
  // 小菜单
  .home-cartgoryList {
    width: 100%;
    ul {
      display: flex;
      flex-wrap: wrap;
      .home-cartgoryList-item {
        width: 110px;
        height: 156px;
        margin: 10px 20px 9px;
        .home-cartgoryList-text {
          font-size: 16px;
        }
      }
    }
  }
  // 大菜单
  .home-cartgoryListBig {
    margin-top: 32px;
    width: 100%;
    background-color: #7e85ed;
    .home-cartgoryListBig-top {
      img {
        margin: 0;
        padding: 0;
      }
    }
    .home-cartgoryListBig-bot {
      .bot-top {
        margin-left: 20px;
        // margin-top: -10px;
        img {
          width: 710px;
        }
      }
      .bot-bot {
        width: 351px;
        height: 186px;
        display: flex;
        padding-bottom: 20px;
        .whiteGive {
          margin-left: 20px;
        }
        .mouthHover {
          margin-left: 10px;
        }
      }
    }
  }
  // 新人专享礼
  .home-new {
    width: 100%;
    margin: 20px 0;
    .home-new-tit {
      width: 100%;
      height: 90px;
      font-size: 35px;
      line-height: 90px;
      text-align: center;
    }
    .home-new-bot {
      padding: 0 0 0 30px;
      width: 100%;
      display: flex;
      .home-new-bot-left {
        font-size: 35px;
        width: 343px;
        height: 434px;
        background-color: #f9e9cf;
        p {
          padding: 30px 0 0 30px;
        }
        img {
          width: 258px;
          height: 257px;
          margin-left: 42.5px;
          margin-top: 20px;
        }
      }
      .home-new-bot-right {
        margin-left: 5px;
        .right-top {
          width: 343px;
          height: 215px;
          background-color: #fbe2d3;
          font-size: 35px;
          position: relative;
          padding: 20px 0 0 30px;
          .todyPrice {
            font-size: 15px;
            color: #888;
          }
          .maoliang {
            position: absolute;
            right: 0;
            bottom: 0;
            height: 200px;
            width: 200px;
          }
        }
        .right-bot {
          width: 343px;
          height: 215px;
          background-color: #ffecc2;
          font-size: 35px;
          position: relative;
          padding: 20px 0 0 30px;
          margin-top: 5px;
          .oneyuan {
            font-size: 15px;
            color: #888;
          }
          .xifashui {
            position: absolute;
            right: 0;
            bottom: 0;
            height: 200px;
            width: 200px;
          }
        }
      }
    }
  }
  // 类目热销榜
  .home-type {
    width: 100%;
    padding: 0 30px;
    .home-type-tit {
      width: 100%;
      height: 100px;
      text-align: left;
      line-height: 100px;
      font-size: 35px;
    }
    .home-type-twocard {
      width: 100%;
      display: flex;
      .towcard-left {
        width: 340px;
        height: 200px;
        font-size: 28px;
        line-height: 200px;
        margin: 0 10px 10px 0;
        display: flex;
        justify-content: space-between;
        background-color: #f8f2e3;
        // display: table-cell;
        // vertical-align: middle;
        span {
          padding: 0 0 0 24px;
        }

        img {
          width: 200px;
          height: 200px;
        }
      }
      .towcard-right {
        width: 340px;
        height: 200px;
        font-size: 28px;
        line-height: 200px;
        margin: 0 10px 10px 0;
        display: flex;
        justify-content: space-between;
        background-color: #ebeff6;
        span {
          padding: 0 0 0 24px;
        }
        img {
          width: 200px;
          height: 200px;
        }
      }
    }
    .home-type-list {
      padding: 0 0px 20px 0px;
      width: 100%;
      ul {
        display: flex;
        flex-wrap: wrap;
        .list-item {
          width: 165px;
          height: 180px;
          background-color: #f5f5f5;
          margin: 0 6px 6px 0;
          font-size: 24px;

          div {
            text-align: center;
            margin: 10px 0 0;
          }
          img {
            width: 120px;
            height: 120px;
            margin-left: 22.5px;
          }
        }
      }
    }
  }
  // 限时购
  .home-limit {
    width: 100%;
    .home-limit-tit {
      width: 100%;
      height: 100px;
      font-size: 35px;
      padding: 0 30px;
      line-height: 100px;
      overflow: hidden;
      .tit-left {
        text-align: left;
      }
      .tit-right {
        float: right;
      }
    }
    .home-limit-con {
      width: 100%;
      padding: 0 10px 0 30px;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 216px;
          height: 300px;
          background-color: #f5f5f5;
          margin: 0 20px 0 0;
          padding: 0 0 30px;
          img {
            width: 216px;
            height: 216px;
          }
          span {
            font-size: 10px;
            margin-bottom: 10px;
            padding: 0 0 0 20px;
            display: block;
            color: red;
          }
        }
      }
    }
  }
  // 底部
  .home-footer {
    width: 100%;
    height: 244px;
    padding: 54px 20px 28px;
    background-color: #414141;
    .home-footer-btn {
      display: flex;
      justify-content: center;
      margin: 0 0 36px;
      .btn-left {
        width: 171px;
        height: 62px;
        font-size: 18px;
        text-align: center;
        line-height: 62px;
        border: 1px solid #ffffff;
        color: #ffffff;
        margin: 0 50px 0 0;
      }
      .btn-right {
        width: 171px;
        height: 62px;
        font-size: 18px;
        text-align: center;
        line-height: 62px;
        border: 1px solid #ffffff;
        color: #ffffff;
      }
    }
    .home-footer-des {
      font-size: 18px;
      text-align: center;
      color: #999999;
    }
  }
  .home-holdplace {
    width: 100%;
    height: 100px;
  }
  .home-giftRigt {
    width: 112px;
    height: 80px;
    position: fixed;
    right: 0px;
    bottom: 252px;
  }
}
</style>