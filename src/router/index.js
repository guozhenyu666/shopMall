import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const Home = () => import('home/Home.vue')
const Category = () => import('category/Category.vue')
const Profile = () => import('profile/Profile.vue')
const Cart = () => import('cart/Cart.vue')



const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
