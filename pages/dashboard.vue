<script setup lang="ts">
const token = useCookie<string>("token");

const logout = () => {
    token.value = "";
    console.log(token.value);
    navigateTo("/");
};
definePageMeta({
    middleware: ["auth"],
    // or middleware: 'auth'
});
</script>

<template>
    <div>
        <h1>Dashboard</h1>
        <p>Token: {{ token }}</p>
        <button @click="logout">Log out</button>
    </div>
</template>
