<template>
  <van-cell
    class='article-item'
    @click='openurl'
  >
    <div
      slot="title"
      class="title"
    >{{ article.title }}</div>
    <div
      slot="label"
      class="pic"
    >
      <van-image :src="article.thumbnail_pic_s" />
      <van-image :src="article.thumbnail_pic_s02" />
      <div
        slot="label"
        class="message"
      >
        <span class="time">时间：{{ article.date }}</span>
        <span class="authorname">作者：{{ article.author_name }}</span>
      </div>
    </div>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    openurl () {
      window.location.href = this.article.url
    }
  }
}
</script>

<style scoped lang='less'>
.article-item {
  height: 210px;
  padding: 10px 16px 10px 16px;
  font-size: 18px;
  .title {
    margin-bottom: 10px;
  }
  /deep/.pic {
    padding: 0 7px 0 7px;
    .van-image {
      width: 150px;
      margin: 0 7px 0px 7px;
    }
    .message {
      color: #bfbfbf;
      margin-bottom: 10px;
      .time {
        margin-right: 10px;
      }
    }
  }
}
</style>