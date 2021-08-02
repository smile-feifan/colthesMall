<template>
  <!-- <scroll class="content"> -->
  <div class="category_list">
    <ul class="list_item" v-for="(item, index) in categoryData">
      <li>{{ item.title }}</li>
    </ul>
  </div>
  <!-- </scroll> -->
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";
export default {
  name: "CategoryList",
  components: { Scroll },
  props: {
    categoryData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.category_list {
  width: 100%;
  font-size: 13px;
}
.list_item {
  text-align: center;
}
.list_item li {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 10px 20px;
}
/* .content {
  height: calc(100vh - 44px -49px);
} */
</style>
