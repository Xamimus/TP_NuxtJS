<template>
    <div class="dashboard-container">
        <h1>Dashboard de {{ $store.state.users.currentUser.name }}</h1>
        <v-btn color="warning" @click="logOut">Déconnexion</v-btn>
        <v-btn color="danger">Supprimer mon profil</v-btn>
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
                mail: $store.state.users.currentUser.mail
            })
            this.logOut()
        }
    }
}
</script>