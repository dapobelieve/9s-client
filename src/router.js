import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
// import Test from './components/Test.vue';
import { AdminIndex, AdminHome } from './admin';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: Test,
  // },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/admin',
    component: AdminIndex,
    children: [
      {
        path: 'home',
        name: 'admin-home',
        component: AdminHome,
      },
      // add other admin routes here
    ],
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  // },
];

const router = new Router({
  routes,
});

// do any beforeEach here

export default router;
