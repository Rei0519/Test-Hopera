import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContattiView from '../views/ContattiView.vue';
import ProdottiView from '../views/prodotti/ProdottiView.vue';
import ChiSiamoView from '../views/ChiSiamoView.vue';
import ProgettiView from '../views/ProgettiView.vue';
import NotFound from '../views/NotFound.vue';
import InfoProdotti from '../views/prodotti/InfoProdotti.vue';


const routes = [
  {path:'',redirect:'/home'},
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chiSiamo',
    name: 'ChiSiamoView',
    component: ChiSiamoView
  },
  {
    path: '/prodotti',
    name: 'prodotti',
    component: ProdottiView
  },
  {
    path: '/progetti',
    name: 'ProgettiView',
    component: ProgettiView
  },
  {
    path: '/prodotti/:id',
    name: 'InfoProdotti',
    component: InfoProdotti,
    props:true
  },
  {
    path: '/contatti',
    name: 'contatti',
    component : ContattiView
  },
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }

  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
