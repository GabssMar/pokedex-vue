import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonListView from "@/views/PokemonListView.vue";
import PokemonDetailsView from "@/views/PokemonDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pokemon_list',
      component: PokemonListView,
    },
    {
      path: '/pokemon/:name',
      name: 'PokemonDetail',
      component: PokemonDetailsView,
    }
  ],
})

export default router
