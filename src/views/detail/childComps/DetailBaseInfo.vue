<template>
  <div v-if="Object.keys(goods).length !== 0" class="base_info">
    <div class="goods_title">{{ goods.title }}</div>
    <div class="goods_price_wrap">
      <span class="n_price">￥{{ goods.realPrice }}</span>
      <span class="o_price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="goods_info">
      <div>{{ goods.columns[0] }}</div>
      <div>{{ goods.columns[1] }}</div>
      <div>{{ goods.services[1].name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  components: {},
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.base_info {
  padding: 5px;
  color: #ccc;
  border-bottom: 2px solid rgb(238, 234, 234);
  background-color: #fff;
}
.goods_title {
  color: #222;
}
.goods_price_wrap {
  margin: 10px 0;
}
.n_price {
  font-size: 23px;
  color: var(--color-tint);
}
.o_price {
  font-size: 15px;
  margin-left: 5px;
  text-decoration-line: line-through;
}
.discount {
  background-color: var(--color-tint);
  border-radius: 10px;
  color: #fff;
  font-size: 10px;
  padding: 4px;
  margin-left: 5px;

  position: relative;
  top: -10px;
}
.goods_info {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin-top: 25px;
  margin-bottom: 10px;
}
</style>
