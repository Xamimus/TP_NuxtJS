<template>
  <div>
    <v-text-field v-model="email" label="E-mail" required></v-text-field>
    <v-text-field v-model="password" label="Mot de passe" type="password"></v-text-field>
    <v-btn color="success" @click="login"> Connexion</v-btn>
    <v-btn color="info" to="/auth/register">Inscription</v-btn>
  </div>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login() {
      this.$store.dispatch(ACTIONS.LOGIN_METHOD, {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>
