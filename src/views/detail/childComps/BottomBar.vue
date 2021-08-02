<template>
  <div class="bottom_bar">
    <div class="bottom_left">
      <div class="service">
        <i class="icon"></i>
        <span>客服</span>
      </div>
      <div class="service">
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div class="service">
        <i class="icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom_right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  components: {},
  data() {
    return {};
  },
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>

<style scoped>
.bottom_bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 12px;
  display: flex;
  text-align: center;
  box-shadow: 0 0 1px gray;
}
.bottom_left {
  flex: 1;
  display: flex;
}
.bottom_left > div {
  flex: 1;
  border-right: 1px solid rgba(128, 128, 128, 0.2);
}
.bottom_left .icon {
  display: block;
  background: url("~assets/img/detail/detail_bottom.png");
  width: 1rem;
  height: 16px;
  margin: 10px auto 0;
}
.service .icon {
  background-position: 0 -2.4rem;
}
.shop .icon {
  background-position: 0 -4.5rem;
}
.bottom_right {
  display: flex;
  flex: 1;
}
.bottom_right > div {
  flex: 1;
  line-height: 49px;
}
.cart {
  background-color: rgb(225, 174, 0);
}
.buy {
  background-color: var(--color-tint);
  color: white;
}
</style>
