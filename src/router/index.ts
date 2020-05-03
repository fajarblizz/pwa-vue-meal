import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Area from '../views/Area.vue';
import Meals from '../views/Meals.vue';
import Category from '../views/Category.vue';
import Detail from '../components/Detail.vue';
import Cate from '../components/IsiCategory.vue';


Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/area',
    name: 'Area',
    component: Area,
  },
  {
    path: '/meals',
    name: 'Meals',
    component: Meals,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/list-category/:id',
    name: 'Come',
    component: Cate
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
