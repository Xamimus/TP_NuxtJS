<template>
    <div class="register-container">
        <h1>Page d'inscription</h1>
        <register-form />
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