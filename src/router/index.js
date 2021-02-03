import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Profil from "@/views/Profil";
import Carte from "@/views/Carte";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/trouver-un-bar',
    name: 'Carte',
    component: Carte
  }

]

const router = new VueRouter({
  routes
})

export default router
