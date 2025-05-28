<script>
export default {
  name: 'CardPokemon',
  props: {
    pokemon: Object
  },
  methods: {
    getImageUrl() {
      const id = this.pokemon.url.split("/").filter(Boolean).pop()
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    },
    goToDetails() {
      this.$router.push({
        name: 'PokemonDetail',
        params: { name: this.pokemon.name }
      });
    }
  }
}
</script>

<template>
  <b-card class="mb-3 text-center d-flex" :title="pokemon.name">
    <b-img :src="getImageUrl()" height="120px"/>
    <b-button variant="primary" class="mt-2" @click="goToDetails">
      Ver Detalhes
    </b-button>
  </b-card>
</template>

<style>
</style>
