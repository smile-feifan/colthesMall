<template>
  <div class="cart">
    <!-- 顶部导航栏 -->
    <nav-bar class="nav_bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <scroll class="content" ref="scroll">
      <cart-list class="cart_list" :cartList="cartList"></cart-list>
    </scroll>

    <!-- 底部工具栏 -->
    <cart-bottom :cartList="cartList"></cart-bottom>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import CartList from "./childComps/CartList.vue";
import CartBottom from "./childComps/CartBottom.vue";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottom,
    Scroll,
  },
  data() {
    return {};
  },
  activated() {
    console.log(1);
    this.$refs.scroll.refresh();
  },
  computed: {
    // cartLength() {
    //   return this.$store.getters.cartLength;
    // },
    ...mapGetters(["cartLength", "cartList"]),
  },
};
</script>

<style scoped>
.nav_bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.content {
  height: calc(100vh - 44px - 89px);
  overflow: hidden;
}
</style>
