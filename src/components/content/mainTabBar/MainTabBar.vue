<template>
  <div class="main_tab_bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="tab_icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img
          slot="tab_icon_active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="tab_name">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="tab_icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img
          slot="tab_icon_active"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="tab_name">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="tab_icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="tab_icon_active"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="tab_name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <img slot="tab_icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="tab_icon_active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="tab_name">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
