import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Accueil from '@/components/Accueil'
import Faq from '@/components/FAQ'
import Diplomes from '@/components/Diplomes'
import Memories from '@/components/Memories'

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
    {
      path: '/Diplomes',
      name: 'Diplomes',
      component: Diplomes
    },
    {
      path: '/Memories',
      name: 'Memories',
      component: Memories
    }
  ]
})
