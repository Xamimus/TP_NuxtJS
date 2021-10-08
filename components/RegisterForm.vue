<template>
  <div>
    <v-text-field
      v-model="name"
      label="Nom d'utilisateur"
      required
    ></v-text-field>

    <v-text-field v-model="email" label="E-mail" required></v-text-field>

    <v-btn color="success" @click="add"> Add user </v-btn>
    <h3>{{ $store.state.users.users }}</h3>
  </div>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  data: () => ({
    name: '',
    email: '',
    users: [
      {name: "Roger", mail: "roger@test.fr"},
      {name: "Jacques", mail: "jacques@test.fr"}
    ],
  }),
  mounted() {
    localStorage.setItem('users', JSON.stringify(this.users))

    //COPIER CETTE LIGNE DANS LE LOGIN
    this.$store.dispatch(ACTIONS.INIT_USERS, JSON.parse(localStorage.getItem('users')))
    

  },
  methods: {
    add() {
      // console.log(this.name)
      // console.log(this.$store)
      this.$store.dispatch(ACTIONS.ADD_USER_METHOD, {
        name: this.name,
        email: this.email,
      })
    },
  },
}
</script>
