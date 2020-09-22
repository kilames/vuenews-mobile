<template>
  <div class='article-list'>
    <van-pull-refresh
      v-model="isRefresh"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <article-item
          v-for="(article, index) in list"
          :key="index"
          :article="article"
        />
        <!-- <van-cell
          v-for="(article, index) in list"
          :key="index"
          :title="article.title"
        /> -->
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'
import ArticleItem from '../../../components/article-item/article-item'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      error: false,
      isRefresh: false
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    async onLoad () {
      try {
        const { data } = await getArticles({
          id: this.channel.id,
        })
        console.log(data)
        this.list.push(...data)
        this.loading = false

        if (!data.length) {
          this.finished = true
        }

      } catch (err) {
        this.err = true
        this.loading = false
        console.log('请求失败', err)

      }
    },
    async onRefresh () {
      try {
        const { data } = await getArticles({
          id: this.channel.id,
        })

        this.list.unshift(...data)
        this.loading = false

        if (!data.length) {
          this.finished = true
        }

        this.isRefresh = false
      } catch (err) {
        console.log('请求失败', err)
      }
    }
  }
}
</script>

<style scoped lang='less'>
.article-list {
  height: 89vh;
  overflow-y: auto;
}
</style>