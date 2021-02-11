import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Carte from "@/views/Carte";
import GoogleMap from "@/components/GoogleMap";
import FicheCocktail from "@/components/FicheCocktail";
import Recherche from "@/views/Recherche";
import Favoris from "@/views/Favoris";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/recherche',
    name: 'Recherche',
    //déclarer la vue comme un component
    component: Recherche
  },
  {
    path: '/favoris',
    name: 'Favoris',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // A voir : c'est quoi ça Monsieur ?
    component: Favoris
  },
  {
    path: '/random',
    name: 'Random',
  },
  {
    path: '/trouver-un-bar',
    name: 'Carte',
    component: GoogleMap
  }

]

const router = new VueRouter({
  routes
})

export default router
