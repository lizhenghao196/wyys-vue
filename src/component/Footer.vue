<template>
  <van-tabbar
    v-model="active"
    class="footer_guide"
    active-color="#c0392b"
    inactive-color="#000"
    route
  >
    <van-tabbar-item class="footer_item" name="home" replace to="/home">
      <van-icon class="iconfont" class-prefix="icon" name="yemian-copy" />
      <p>首页</p>
    </van-tabbar-item>

    <van-tabbar-item class="footer_item" name="category" replace to="/category">
      <van-icon class="iconfont" class-prefix="icon" name="leimupinleifenleileibie" />
      <p>分类</p>
    </van-tabbar-item>
    <!-- <van-tabbar-item name="buy" icon="friends-o" replace to="/buy">值得买</van-tabbar-item> -->
    <van-tabbar-item name="buy" class="footer_item" replace to="/buy">
      <van-icon class="iconfont" class-prefix="icon" name="menu-two" />
      <p>值得买</p>
    </van-tabbar-item>
    <!-- <van-tabbar-item name="carBuy" icon="setting-o" replace to="/carBuy">购物车</van-tabbar-item> -->
    <van-tabbar-item class="footer_item" name="carBuy" replace to="/carBuy">
      <van-icon class="iconfont" class-prefix="icon" name="gouwuche" />
      <p>购物车</p>
    </van-tabbar-item>
    <!-- <van-tabbar-item name="self" icon="setting-o" replace to="/self">个人</van-tabbar-item> -->
    <van-tabbar-item class="footer_item" name="self" replace to="/self">
      <a>
        <van-icon class="iconfont" class-prefix="icon" name="renwu" />
      </a>

      <p>个人</p>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      active: 'home',
    };
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer_guide
  width 100%
  height 98px
  position fixed
  bottom 0
  text-align center
  a
    font-size 30px
  p
    margin-top 10px
    font-size 30px
</style>


