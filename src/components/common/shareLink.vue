<template>
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
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'sharelink'
  };
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
