import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Carts from '../pages/Carts'
import Mine from '../pages/Mine'
import Category from '../pages/Category'
import Goodsdesc from '../pages/home/goodsdesc/goodsdesc'
import Login from '../components/login'
import Reg from '../components/reg'
import More from '../pages/home/more'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:Home},
  {path:'/category',component:Category},
  {path:'/mine',component:Mine},
  {path:'/carts',component:Carts},
  {path:'/goodsdesc/:id',component:Goodsdesc},
  {path:'/more/:id',component:More},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg}
]




const router = new VueRouter({
  routes
})


router.beforeEach((to,from,next)=>{
  // to 将要访问的路径
  // from 从哪个路径跳转而来
  // next 是一个函数 表示放行
  // next（'/login'） 强制跳转
  // 如果访问的是登录页，直接放行
  if(to.path === '/login') return next();
  //获取token
  if(to.path === '/mine' || to.path === '/carts'){
    const tokenStr = window.sessionStorage.getItem('token')
  //如果不存在，就强制跳转至登录页面
  if(!tokenStr) return  next({ path: '/login',query: { redirect: to.fullPath }})
  //如果存在，就放行 
  next()
  }
  next()
})
export default router
