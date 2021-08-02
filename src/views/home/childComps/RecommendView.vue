<template>
  <div class="home_recommend">
    <div class="recommend_item" v-for="item in recommends" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.home_recommend {
  width: 100%;
  display: flex;
  padding: 10px 0 20px;
  vertical-align: middle;
  text-align: center;
  border-bottom: 10px solid #eee;
}
.recommend_item {
  flex: 1;
  font-size: 13px;
}
.home_recommend img {
  width: 80%;
  margin-bottom: 10px;
}
</style>
