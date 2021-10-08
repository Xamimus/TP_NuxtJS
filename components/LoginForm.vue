<template>
  <div>
    <v-text-field v-model="email" label="E-mail" required></v-text-field>
    <v-text-field v-model="password" label="Mot de passe" type="password"></v-text-field>
    <v-btn color="success" @click="login"> Log user </v-btn>
  </div>
</template>

<script>
import { ACTIONS } from '~/store/auth'

export default {
  data: () => ({
    name: '',
    email: '',
  }),
  methods: {
    login() {
      this.$store.dispatch(ACTIONS.LOGIN_METHOD, {
        name: this.name,
        email: this.email,
      })
    },
  },
}
</script>
