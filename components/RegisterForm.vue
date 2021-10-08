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
    users: [],
  }),
  mounted() {
    localStorage.setItem('users', JSON.stringify(this.users))

    //COPIER CETTE LIGNE DANS LE LOGIN
    this.$store.dispatch(ACTIONS.INIT_USERS, JSON.parse(localStorage.getItem('users')))
    

  },
  methods: {
    register() {
      this.checkAdd()
      if(this.errors.length === 0) {
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
      if (this.name && this.email) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Le champ "Nom" est requis.');
      }
      if (!this.email) {
        this.errors.push('Le champ "Email" est requis');
      }
      if (!this.password) {
        this.errors.push('Le champ "Mot de passe" est requis');
      }
    }
  },
}
</script>
