import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Carts from '../pages/Carts'
import Mine from '../pages/Mine'
import Category from '../pages/Category'
import Goodsdesc from '../pages/home/goodsdesc/goodsdesc'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:Home},
  {path:'/category',component:Category},
  {path:'/mine',component:Mine},
  {path:'/carts',component:Carts},
  {path:'/goodsdesc/:id',component:Goodsdesc}

 
]



const router = new VueRouter({
  routes
})

export default router
