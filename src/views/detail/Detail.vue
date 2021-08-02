<template>
  <div class="goods_detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" class="nav_bar">
    </detail-nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods>
      <detail-param-info
        :paramInfo="paramInfo"
        ref="params"
      ></detail-param-info>
      <comment-info :commentInfo="commentInfo" ref="comment"></comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native="bindClick" v-show="isShowBackTop"></back-top>
    <bottom-bar @addToCart="addCart"></bottom-bar>
    <toast :message="message" v-show="isShow"></toast>
  </div>
</template>

<script>
import {
  getDetail,
  Goods,
  shopInfo,
  GoodsParam,
  getRecommend,
} from "network/detail";

import { debounce } from "common/utils";

import { mapActions, mapGetters } from "vuex";

import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoods from "./childComps/DetailGoods.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import CommentInfo from "./childComps/CommentInfo.vue";
import BottomBar from "./childComps/BottomBar.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import Toast from "components/common/toast/Toast.vue";

import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";
import { duration } from "moment";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoods,
    DetailParamInfo,
    Scroll,
    CommentInfo,
    GoodsList,
    BottomBar,
    BackTop,
    Toast,
  },

  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      itemImgListener: null,
      isShowBackTop: false,
      themeTopYs: [],
      currentIndex: 0,
      message: "",
      isShow: false,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.data.result;
      // 1.获取顶部轮播图数据
      this.topImages = res.data.result.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.获取店铺基本信息
      this.shopInfo = new shopInfo(data.shopInfo);

      // 4.获取商品信息
      this.detailInfo = data.detailInfo;

      // 5.获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // this.$refs.scroll.scroll.refresh();
      // 6.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.data.list;
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
  },
  destroyed() {
    // 取消全局图片加载监听
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      this.$refs.scroll.refresh;
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs);
    },
    contentScroll(position) {
      // 判断backtop是否显示
      this.isShowBackTop = -position.y > 1000 ? true : false;

      // 获取y值
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      // console.log(length);
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY > this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
          console.log(i);
        }
      }
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    bindClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    addCart() {
      // 1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 将商品添加到购物车
      // this.$store.commit("addCart", product);
      // this.addCart(product).then((res) => {
      //   console.log(res);
      // });
      this.$store.dispatch("addCart", product).then((res) => {
        console.log(res);
        this.isShow = true;
        this.message = res;

        setTimeout(() => {
          this.isShow = false;
          this.message = "";
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
.goods_detail {
  margin-top: 44px;
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.nav_bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.content {
  height: calc(100vh - 44px - 49px);
  /* overflow: hidden; */
}
</style>
