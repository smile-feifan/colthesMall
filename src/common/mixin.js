import BackTop  from "components/content/backTop/BackTop.vue"
import { debounce } from "./utils";
export const itemListenerMixin={
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
  }
}

export const backTopMixin={
  data(){
    return {
      isShowBackTop:false
    }
  },
  components:{
    BackTop
  },
  methods:{
    bindkClick() {
      this.$refs.scroll.scrollTo(0,0,300)
    },
  }
}