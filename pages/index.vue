<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <v-card-title align="center" class="headline">
        <h1>Accueil</h1>
        </v-card-title>
      </v-card>
      <v-card v-if="!$store.state.auth.isLogged">
        <h2>Vous n'êtes pas connecté :</h2>
        <v-btn class="success" to="/auth/login">Connexion</v-btn>
        <v-btn class="success" to="/auth/register">Inscription</v-btn>
      </v-card>
      <v-card v-else>
        <h2>Bienvenue</h2>
        <v-btn class="success" to="/dashboard"></v-btn>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>

export default {
  data: () => ({
    name: '',
  }),
}
</script>