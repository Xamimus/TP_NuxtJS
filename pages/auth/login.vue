<template>
    <div class="login-container">
        <h1>Page de connexion</h1>
        <login-form />
    </div>
</template>

<script>
export default {
    created() {
        if(this.$store.state.users.isLogged){
            this.$router.replace('/dashboard')
        }
    }
}
</script>