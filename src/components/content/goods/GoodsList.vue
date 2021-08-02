<template>
  <div class="goods_list">
    <goods-list-item
      v-for="(item, index) in goods"
      :goodsItem="item"
      class="goods_item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { GoodsListItem },
  data() {
    return {};
  },
};
</script>

<style scoped>
.goods_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
