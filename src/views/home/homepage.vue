<template>
  <div class='container'>
    <!-- 顶部header -->
    <van-nav-bar
      class='homepage'
      fixed
    >
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
      animated
      swipeable
      color="#466DE2"
      title-active-color='#466DE2'
      background='#f4f5f6'
      fixed
    >
      <van-tab
        :key='channel.id'
        v-for="channel in channels"
        :title="channel.message"
      >
        <article-list :channel='channel' />
      </van-tab>

    </van-tabs>

  </div>
</template>

<script>
// import { getUserChannels } from '@/api/user'
import ArticleList from './components/articleList'

export default {
  name: 'HomeIndex',
  components: {
    ArticleList
  },
  props: {},
  data () {
    return {
      active: 0,
      channels: [
        {
          id: 0,
          message: '头条'
        },
        {
          id: 1,
          message: '社会'
        }
        , {
          id: 2,
          message: '国内'
        },
        {
          id: 3,
          message: '国际'
        },
        {
          id: 4,
          message: '娱乐'
        },
        {
          id: 5,
          message: '体育'
        },
        {
          id: 6,
          message: '科技'
        }]
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
.container {
  padding-top: 92px;
}
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
/deep/.homepage-tabs {
  .van-tab {
    height: 46px;
    min-width: 80px;
  }

  .van-tabs__wrap {
    position: fixed;
    top: 46px;
    z-index: 2;
    left: 0;
    right: 0;
  }
}
</style>
