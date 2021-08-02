<template>
  <div class="comment_info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="commentInfo_title">
      <span class="commentInfo_name">用户评价</span>
      <span class="commentInfo_more">更多</span>
    </div>
    <div class="commentInfo_info">
      <div class="u_info">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.content }}</span>
      </div>
      <div class="commentInfo_content">
        <div class="content">
          {{ commentInfo.content }}
        </div>
        <p class="content_info">
          {{ commentInfo.created | dataShow }}
        </p>
        <div class="content_info">{{ commentInfo.style }}</div>
      </div>
    </div>

    <div class="shop_replay" v-if="commentInfo.explain != null">
      {{ commentInfo.explain }}
    </div>
    <div class="commentInfo_img" v-if="commentInfo.image != null">
      <img
        v-for="(item, index) in commentInfo.images"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script>
var moment = require("moment");
moment.locale("zh-cn");
export default {
  name: "CommentInfo",
  components: {},
  props: {
    commentInfo: {
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
    dataShow(value) {
      // const data = new Date(value * 1000);
      return moment(value).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>

<style scoped>
.comment_info {
  font-size: 0.65rem;
  padding: 0.42rem;
}
.commentInfo_title {
  padding: 0.42rem 0;
  padding-bottom: 0.8rem;
  border-bottom: 0.8rem;
  position: relative;
}
.commentInfo_more {
  position: absolute;
  right: -0.26rem;
  top: 0rem;
}
.commentInfo_more::after {
  content: "";
  background: url("../../../assets/img/detail/right_arrow.svg") 0 0/1.06rem
    1.06rem;
  display: inline-block;
  position: relative;
  top: 0.26rem;
  width: 1.06rem;
  height: 1.06rem;
}
.u_info img {
  margin-top: 3px;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  border: 0.04rem solid rgba(128, 128, 128, 0.3);
}
.u_info span {
  margin-left: 0.42rem;
}
.content {
  line-height: 1rem;
  color: #666;
}
.content_info {
  color: #999;
  padding: 0.3rem 0;
}
.shop_reply {
  border-top: 0.04rem solid rgba(128, 128, 128, 0.4);
  padding: 0.5rem 0;
  color: gray;
  line-height: 0.8rem;
}
.commentInfo_img img {
  margin-right: 0.21rem;
  width: auto;
  height: 4.26rem;
}
</style>
