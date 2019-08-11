import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Accueil from '@/components/Accueil'
import Faq from '@/components/FAQ'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/Accueil',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/FAQ',
      name: 'Faq',
      component: Faq
    },
  ]
})
