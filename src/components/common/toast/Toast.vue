<template>
  <div class="toast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 8px 10px;
  border-radius: 10px;
  z-index: 1;
}
</style>
