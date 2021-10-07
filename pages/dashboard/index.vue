<template>
    <div class="dashboard-container">
        <h1>Votre Dashboard</h1>
        <p>{{$store.state.users.users}}</p>
        <register-form />
    </div>
</template>

