import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'
import AddItemView from '@/views/AddItemView.vue'
import CreateOutfitView from '@/views/CreateOutfitView.vue'
import ListAllOutfitsView from '@/views/ListAllOutfitsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MenuView,
    },
    {
      path: '/items',
      name: 'items',
      component: AddItemView,
    },
    {
      path: '/outfits',
      name: 'outfits',
      component: CreateOutfitView,
    },
    {
      path: '/outfits/all',
      name: 'outfits-all',
      component: ListAllOutfitsView,
    },
  ],
})

export default router
