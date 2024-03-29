import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载
const Home=()=>import('../views/home/Home.vue');
const Category=()=>import("../views/category/Category.vue");
const Cart=()=>import("../views/cart/Cart.vue");
const Profile=()=>import("../views/profile/Profile.vue");
const Detail=()=>import("../views/detail/Detail.vue")

const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      title:'分类'
    }
  },
  {
    path:'/cart',
    component:Cart,
    meta:{
      title:'购物车'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'我的'
    }
  },
  {
    path:'/detail/:iid',
    component:Detail,
    meta:{
      title:'详情页'
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title;
  next()
})
export default router
