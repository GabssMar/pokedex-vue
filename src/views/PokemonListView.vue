<script>
import CardPokemon from '@/components/CardPokemon.vue';
export default {
  name: 'PokemonListView',
  components: {CardPokemon},
  data() {
    return {
      limit: 20,
      offset: 0,
      pokemons: [],
      total: 0,
      currentPage: 1
    }
  },
  watch: {
    currentPage(newCurrentPage) {
      this.offset = (newCurrentPage - 1 ) * this.limit
      this.fetchPokemons();
    }
  },
  mounted() {
    this.fetchPokemons()
  },
  methods: {
    fetchPokemons() {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`;
      fetch(url).then(res => res.json())
        .then(data => {
          console.log(data)
          this.pokemons = data.results
          this.total = data.count
          console.log(this.pokemons)
        })
    }
  }
}
</script>

<template>
  <div class="container d-flex flex-column align-items-center">
    <b-row class="justify-content-center w-100">
      <b-col cols="12" md="4" lg="3" v-for="pokemon in pokemons" :key="pokemon.name">
        <card-pokemon :pokemon="pokemon"/>
      </b-col>
    </b-row>
    <b-pagination v-model="currentPage" :per-page="limit" :total-rows="total" align="center"/>
  </div>
</template>

<style>

</style>
