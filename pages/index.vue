<template>
  <div class="home-container text-center">
    <h1>Accueil</h1>
    <h2>{{ name }}</h2>
    <div v-if="$store.state.auth.isLogged">
      Coucou
    </div>
    <div v-else>
      <register-form />
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    name: '',
  }),
  mounted() {
    localStorage.setItem('OUI', true)
    this.name = localStorage.getItem('OUI')
  }
}
</script>