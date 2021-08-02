<template>
  <div class="shop_info">
    <div class="shop_logo">
      <img :src="shopInfo.logo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop_middle">
      <div class="left">
        <div class="left_left">
          <div class="goods_sell">{{ shopInfo.sells | sellCountFilter }}</div>
          <div>总销量</div>
        </div>
        <div class="left_right">
          <div class="goods_count">{{ shopInfo.goodsCount }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ score_better: item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ better_more: item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="go_shop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  components: {},
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
.shop_info {
  border-bottom: 2px solid rgb(243, 236, 236);
  padding-bottom: 20px;
  background-color: #fff;
}
.shop_logo img {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin: 20px 10px;
  vertical-align: middle;
}

.shop_middle {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
}
.left {
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  /* align-items: center; */
  border-right: 1px solid #ccc;
}
.goods_sell {
  margin-bottom: 10px;
}
.goods_count {
  margin-bottom: 10px;
}
.right {
  flex: 1;
  /* align-items: center; */
  /* justify-content: center; */
  text-align: center;
  margin-left: 30px;
}
.right table td {
  padding: 5px 0;
}
.score {
  color: greenyellow;
}
.better span {
  color: #fff;
  background-color: greenyellow;
}
.score_better {
  color: red;
}
.better_more span {
  color: #fff;
  background-color: red;
}
.go_shop {
  text-align: center;
  margin: 30px 0;
}
.go_shop span {
  padding: 10px;
  background-color: #ccc;
  border-radius: 20px;
}
</style>
