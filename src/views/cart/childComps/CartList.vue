<template>
  <div class="cart_list" v-if="cartList.length !== 0">
    <div
      class="list_item"
      v-for="(item, index) in cartList"
      :key="item.iid"
      v-if="item.image"
    >
      <div class="item_selector">
        <check-botton
          :isChecked="item.checked"
          @click.native="checkClick(index)"
        ></check-botton>
      </div>
      <div class="item_img">
        <img :src="item.image" alt="" />
      </div>
      <div class="item_info">
        <p class="item_title">{{ item.title }}</p>
        <p class="item_desc">{{ item.desc }}</p>
        <div class="item_price">
          <div class="price">￥{{ item.price }}</div>
          <div class="count">X{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBotton from "components/content/checkBottom/CheckBotton.vue";
export default {
  name: "CartList",
  components: {
    CheckBotton,
  },
  data() {
    return {
      isChecked: true,
    };
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    checkClick(index) {
      this.cartList[index].checked = !this.cartList[index].checked;
    },
  },
};
</script>

<style scoped>
.list_item {
  display: flex;
  padding: 10px;
  /* text-align: center; */
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  /* justify-content: space-between; */
  align-items: center;
}
.item_selector {
  margin-right: 9px;
}
.item_selector input {
  width: 18px;
  height: 18px;
}
.item_img {
  flex: 1;
  width: 3rem;
  height: 100%;
}
.item_img img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.item_info {
  flex: 3;
  width: 70%;
  height: 100px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.item_title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  color: black;
  /* margin-bottom: 15px; */
}
.item_desc {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
}
.item_price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  color: orangered;
  font-size: 20px;
}
.count {
  font-size: 12px;
}
</style>
