<template>
    <div>
        <button @click="setToken">Set cookie</button>
        <button @click="removeToken">Remove cookie</button>
        <button @click="login">Login</button>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";

if (useUserStore().token) {
    console.log("Token is set");
} else {
    console.log("Token is not set");
}

const setToken = () => {
    useUserStore().setToken("sadasd.asdasd.asdasd");
};

const removeToken = () => {
    useUserStore().logout();
};

const login = () => {
    useUserStore().login();
    navigateTo("/dashboard");
};
</script>
