<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive"><slot name="tab_icon"></slot></div>
    <div v-else><slot name="tab_icon_active"></slot></div>
    <div :style="activeStyle"><slot name="tab_name"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "rgb(255, 0, 128)",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab_bar_item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 5px;
}
</style>
