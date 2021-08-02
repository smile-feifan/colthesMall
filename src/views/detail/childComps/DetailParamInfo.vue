<template>
  <div v-if="Object.keys(paramInfo).length !== 0" class="param_info">
    <table
      v-for="(table, index) in paramInfo.sizes"
      class="info_size"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info_param">
      <tr v-for="(info, index) in paramInfo.infos">
        <td class="info_param_key">{{ info.key }}</td>
        <td class="param_value">{{ info.value }}</td>
      </tr>
    </table>
    <!-- <div class="info_img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  components: {},
  props: {
    paramInfo: {
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
.param_info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
}
.param_info table {
  width: 100%;
  border-collapse: collapse;
}
.param_info table tr {
  height: 42px;
}
.param_info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info_param_key {
  width: 95px;
}
.info_param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param_value {
  color: #eb4868;
}
</style>
