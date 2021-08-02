<template>
  <div class="detail_nav">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          class="title_item"
          v-for="(item, index) in titles"
          @click="titleClick(index)"
          :class="{ active: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.detail_nav {
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.title {
  display: flex;
}
.title_item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
  /* border-bottom: 5px solid var(--color-tint); */
}
.back img {
  margin-top: 12px;
}
</style>
