<script>
export default {
  name: 'PokemonDetailsView',
  data() {
    return {
      pokemon: null
    }
  },
  methods: {
    capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  },
  mounted() {
    const name = this.$route.params.name;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {
        this.pokemon = data;
      })
  }
}
</script>

<template>
  <div class="card">
    <div v-if="pokemon" class="container text-center mt-4">
      <h2>{{ capitalize(pokemon.name) }}</h2>
      <img :src="pokemon.sprites.front_default" class="mb-3"/>
      <p><strong>Altura:</strong> {{ pokemon.height / 10 }} m</p>
      <p><strong>Peso:</strong> {{ pokemon.weight / 10 }} kg</p>
      <p><strong>Tipos:</strong>
        <span v-for="t in pokemon.types" :key="t.type.name" class="badge bg-primary mx-1">
        {{ capitalize(t.type.name) }}
        </span>
      </p>
      <router-link to="/" class="btn btn-secondary mt-3">Voltar</router-link>
    </div>
  </div>
</template>

<style>

</style>
