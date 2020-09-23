<template>
  <div class='search-btn'>
    <van-cell-group>
      <van-field
        v-model="searchValue"
        left-icon="search"
        placeholder="请输入搜索关键词"
      />
      <van-button
        class="btn"
        @click="search"
      >搜索</van-button>
    </van-cell-group>
    <div class="guess">
      <div class="title">猜你喜欢</div>
      <div class="container">
        <span
          class='item'
          v-for="guess in guesses"
          :key='guess.id'
        > {{ guess.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBtn',
  components: {},
  props: {},
  data () {
    return {
      guesses: [
        {
          id: 0,
          message: '前端课程2019版更新'
        },
        {
          id: 1,
          message: '博学谷'
        }
        , {
          id: 2,
          message: '前端公开课'
        },
        {
          id: 3,
          message: '前端8天训练营'
        },
        {
          id: 4,
          message: '院校帮'
        },
        {
          id: 5,
          message: '前端提升课程'
        },
        {
          id: 6,
          message: '前端'
        },
        {
          id: 7,
          message: '传智播客'
        }, {
          id: 8,
          message: '黑马程序员'
        }, {
          id: 9,
          message: '酷丁鱼'
        }, {
          id: 10,
          message: '传智汇'
        }],
      searchValue: ''
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    search () {
      this.$toast('您点击了搜索按钮');
    }
  }
}
</script>

<style scoped lang='less'>
.van-field {
  margin: 10px 100px 10px 10px;
  width: 80%;
  background-color: #f5f6f8;
  border-radius: 20px;
  border: none;
}
.btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  border: none;
}
.guess {
  position: relative;
  margin-top: 10px;
  padding: 0 10px 0 10px;
  .title {
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .container {
    font-size: 16px;
    padding-top: 24px;
    .item {
      margin: 10px 10px 10px 10px;
      line-height: 36px;
      white-space: nowrap;
    }
  }
}
</style>