<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-bar-control
      class="tab_control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-bar-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingLoad="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-bar-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-bar-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="bindClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { debounce } from "common/utils";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import TabBarControl from "components/content/tabbarControl/TabBarControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import { itemListenerMixin } from "common/mixin";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabBarControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currenType: "pop",
      isShowBackTop: false,
      offsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      itemImgListener: null,
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currenType].list;
    },
  },
  activated() {
    this.$refs.scroll.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    // console.log(this.saveY);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    // 关闭图片监听
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  mixins: [itemListenerMixin],
  methods: {
    /* 
   事件监听相关 
   */
    bindClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // console.log(position);
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
      // 2.决定tabbatControl是否吸顶
      this.isTabFixed = -position.y > this.offsetTop;
    },
    loadMore() {
      // console.log("上拉加载更多");
      this.getHomeGoods(this.currenType);
      this.$refs.scroll.scroll.refresh();
    },
    tabClick(index) {
      this.currenIndex = index;
      // console.log(index);
      switch (index) {
        case 0:
          this.currenType = "pop";
          break;
        case 1:
          this.currenType = "new";
          break;
        case 2:
          this.currenType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    swiperImageLoad() {
      this.offsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    /* 
    网络请求相关 
    */
    // 请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    // 请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
        this.$refs.scroll.scroll.refresh();
      });
    },
  },
};
</script>

<style scoped>
.home_nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 20px;
  z-index: 1;
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1; */
}
.tab_control {
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.content {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>
