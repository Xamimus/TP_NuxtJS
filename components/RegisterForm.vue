<template>
  <div class="register-form-container">
    <p v-if="errors.length > 0">
      <b>Merci de corriger les erreurs suivantes :</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </p>

    <p>
      <v-text-field
        v-model="name"
        label="Nom d'utilisateur"
        required
      ></v-text-field>
    </p>

    <p>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>
    </p>
    <p>
      <v-text-field v-model="password" label="Mot de passe" type="password"></v-text-field>
    </p>
    <p>
      <v-btn color="success" @click="register">Valider</v-btn>
    </p>
    <v-btn color="info" to="/auth/login">Connexion</v-btn>
  </div>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  data: () => ({
    name: '',
    email: '',
    password: '',
    errors: [],
  }),
  mounted() {
    this.$store.dispatch(ACTIONS.INIT_USERS, localStorage.getItem('users'))
  },
  methods: {
    register() {
      this.checkAdd()
      if(!this.errors.length) {
        this.$store.dispatch(ACTIONS.ADD_USER_METHOD, {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        this.$store.dispatch(ACTIONS.TOGGLE_LOGIN_METHOD, {
          name: this.name,
        })
        this.$router.replace('/dashboard')
      }
    },
    checkAdd() {
      this.errors = [];

      if (!this.name) {
        this.errors.push('Le champ "Nom" est requis.');
      }
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
    }
  },
}
</script>
