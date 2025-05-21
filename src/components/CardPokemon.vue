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
    }
  }
}
</script>

<template>
  <b-card class="mb-3 text-center d-flex" :title="pokemon.name">
    <b-img :src=getImageUrl() height="120px;"/>
    <b-button variant="primary">
      Ver Detalhes
    </b-button>
  </b-card>
</template>

<style>

</style>
