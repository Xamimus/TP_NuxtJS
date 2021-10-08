<template>
    <div class="dashboard-container">
        <h1>Dashboard</h1>
        <h2>{{ $store.state.users.currentUser.email }}</h2>
        <v-btn color="warning" @click="logOut">Déconnexion</v-btn>
        <v-btn color="danger" @click="removeUser">Supprimer mon profil</v-btn>
    </div>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
    // LOGOUT + REMOVE USER
    created() {
        if(!this.$store.state.users.isLogged){
            this.$router.replace('/auth/login')
        }
    },
    methods: {
        logOut() {
            this.$store.dispatch(ACTIONS.TOGGLE_LOGIN_METHOD)
            this.$router.replace('/auth/login')
        },
        removeUser() {
            this.$store.dispatch(ACTIONS.REMOVE_USER_METHOD, {
                email: this.$store.state.users.currentUser.email
            })
            this.logOut()
        }
    }
}
</script>