<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";

const token = useUserStore().token;

const logout = () => {
    useUserStore().logout();
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
