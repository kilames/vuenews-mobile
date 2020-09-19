<template>
  <div class='container'>
    <!-- 顶部header -->
    <van-nav-bar class='homepage'>
      <van-button
        class='homepage-logo'
        slot='title'
      >
        <img src="../../../public/logo.png">
      </van-button>
      <van-button slot='left'>
        <i class='iconfont newsemail'></i>
      </van-button>
      <van-button slot='right'>
        <i class='iconfont newssearch'></i>
      </van-button>
    </van-nav-bar>

    <!-- 导航栏 -->
    <van-tabs
      v-model="active"
      class='homepage-tabs'
    >
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>

  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      active: 0,
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style scoped lang='less'>
button {
  border: none;
}
.homepage {
  height: 46px;
  width: 100%;
  background-color: #fff;

  .homepage-logo img {
    width: 60%;
  }
  .iconfont {
    color: skyblue;
    font-size: 26px;
  }
}

.homepage-tabs .van-tab {
  background-color: #f4f5f6;
}
</style>
