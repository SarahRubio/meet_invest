import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '@/views/accueil.vue'
import APropos from '@/views/aPropos.vue'
import EntrepreneurDetails from '@/views/entrepreneurDetails.vue'
import Entrepreneurs from '@/views/entrepreneurs.vue'
import Fonctionnement from '@/views/fonctionnement.vue'
import FormContact from '@/views/formContact.vue'
import FormEntrepreneur from '@/views/formEntrepreneur.vue'
import FormInvestisseur from '@/views/formInvestisseur.vue'
import Investisseur from '@/views/investisseur.vue'
import MentionsLegales from '@/views/mentionsLegales.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
  },
  {
    path: '/a-propos',
    name: 'APropos',
    component: APropos,
  },
  {
    path: '/entrepreneur-details',
    name: 'EntrepreneurDetails',
    component: EntrepreneurDetails,
  },
  {
    path: '/entrepreneurs',
    name: 'Entrepreneurs',
    component: Entrepreneurs,
  },
  {
    path: '/',
    name: 'Fonctionnement',
    component: Fonctionnement,
  },
  {
    path: '/',
    name: 'FormContact',
    component: FormContact,
  },
  {
    path: '/inscription-entrepreneur',
    name: 'FormEntrepreneur',
    component: FormEntrepreneur,
  },
  {
    path: '/inscription-investisseur',
    name: 'FormInvestisseur',
    component: FormInvestisseur,
  },
  {
    path: '/investisseurs',
    name: 'Investisseur',
    component: Investisseur,
  },
  {
    path: '/mentions-legales',
    name: 'MentionsLegales',
    component: MentionsLegales,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
