<template>
  <div class="tab_control">
    <div
      class="control_item"
      v-for="(item, index) in titles"
      :key="index"
      @click="handleControlItem(index)"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components: {},
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    handleControlItem(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab_control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.control_item {
  flex: 1;
}
.control_item span {
  padding: 5px;
}
.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>
