<template>
  <div class="category">
    <nav-bar class="nav_bar">
      <div slot="center">分类列表</div>
    </nav-bar>
    <scroll class="content">
      <category-list :categoryData="categoryData"></category-list>
    </scroll>
  </div>
</template>

<script>
import { getCategory } from "network/category";
import CategoryList from "./childComps/CategoryList.vue";
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
export default {
  name: "Category",
  components: {
    CategoryList,
    NavBar,
    Scroll,
  },
  data() {
    return {
      categoryData: [],
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      getCategory().then((res) => {
        this.categoryData = res.data.data.category.list;
      });
    },
  },
};
</script>

<style scoped>
.nav_bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0, 0, 1px, rgba(0, 0, 0, 0.2);
}
.content {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
  width: fit-content;
}
</style>
