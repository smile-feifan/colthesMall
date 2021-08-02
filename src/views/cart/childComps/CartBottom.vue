<template>
  <div class="bottom_tool">
    <div class="check_content">
      <check-botton
        class="check_botton"
        :isChecked="isSellectAll"
        @click.native="checkClick"
      ></check-botton>
      <span>全选</span>
    </div>
    <div class="price">合计：￥{{ totalPrice }}</div>
    <div class="calculate" @click="calculate">去计算({{ checkLength }})</div>
    <toast :message="message" v-show="isShow"></toast>
  </div>
</template>

<script>
import CheckBotton from "components/content/checkBottom/CheckBotton.vue";
import Toast from "components/common/toast/Toast.vue";

export default {
  name: "CartBottom",
  components: {
    CheckBotton,
    Toast,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  computed: {
    isSellectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.filter((item) => !item.checked).length;
    },
    totalPrice() {
      return this.cartList
        .filter((item) => item.checked)
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
  },
  methods: {
    checkClick() {
      if (this.isSellectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
    calculate() {
      if (this.checkLength === 0) {
        this.isShow = true;
        this.message = "您还没有选购商品";

        setTimeout(() => {
          this.isShow = false;
          this.message = "";
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
.bottom_tool {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  z-index: 1;
}

.check_content {
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: 5px;
  width: 70px;
}
.check_botton {
  margin-right: 5px;
  width: 20px;
  height: 20px;
  line-height: 18px;
}
.price {
  flex: 1;
  margin-left: 20px;
}
.calculate {
  width: 90px;
  text-align: center;
  background-color: pink;
}
</style>
