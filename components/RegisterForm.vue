<template>
  <form
  id="app"
  @submit="CheckAdd"
  action="/auth/register"
  method="post"
  >

    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error, e) in errors" :key="e">{{ error }}</li>
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
      <v-btn color="success" @click="CheckAdd"> Add user </v-btn>
    </p>

  </form>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  data: () => ({
    name: '',
    email: '',
    errors: [],
  }),
  mounted() {
    localStorage.setItem('users', JSON.stringify(this.users))

    //COPIER CETTE LIGNE DANS LE LOGIN
    this.$store.dispatch(ACTIONS.INIT_USERS, JSON.parse(localStorage.getItem('users')))
    

  },
  methods: {
    add() {
      this.$store.dispatch(ACTIONS.ADD_USER_METHOD, {
        name: this.name,
        email: this.email,
      })
    },
    checkAdd: function (e) {
      if (this.name && this.email) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.email) {
        this.errors.push('Email required.');
      }

      e.preventDefault();
    }
  },
}
</script>
