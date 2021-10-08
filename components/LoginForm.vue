<template>
  <div>
    <p v-if="errors.length > 0">
      <b>Merci de corriger les erreurs suivantes :</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </p>
    <v-text-field v-model="email" label="E-mail" required></v-text-field>
    <v-text-field v-model="password" label="Mot de passe" type="password"></v-text-field>
    <v-btn color="success" @click="login">Connexion</v-btn>
    <v-btn color="info" to="/auth/register">Inscription</v-btn>
  </div>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  data: () => ({
    email: '',
    password: '',
    errors: [],
  }),
  mounted() {
    this.$store.dispatch(ACTIONS.INIT_USERS, localStorage.getItem('users'))
  },
  methods: {
    login() {
      this.checkLog()
      if(!this.errors.length && this.checkCredentials()) {
        this.$store.dispatch(ACTIONS.TOGGLE_LOGIN_METHOD, {
          email: this.email,
          password: this.password,
        })
        this.$router.replace('/dashboard')
      }
    },
    checkLog() {
      this.errors = [];

      if (!this.email) {
        this.errors.push('Le champ "Email" est requis');
      } else {
        if (this.email.indexOf('@') == -1 || this.email.indexOf('.') == -1) {
        this.errors.push('Le champ "Email" est incorrect');
        }
      }
      if (!this.password) {
        this.errors.push('Le champ "Mot de passe" est requis');
      }
    },
    checkCredentials() {
      let usersArray = JSON.parse(localStorage.getItem("users"))
      console.log(usersArray.some(user => user.email === this.email && user.password === this.password))
      return usersArray.some(user => user.email === this.email && user.password === this.password)
    },
  },
}
</script>
