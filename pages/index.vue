<template>
    <div>
        <button @click="setToken">Set cookie</button>
        <button @click="removeToken">Remove cookie</button>
        <button @click="login">Login</button>
    </div>
</template>

<script setup lang="ts">
const token = useCookie<string>("token");
if (token.value) {
    console.log("Token is set");
} else {
    console.log("Token is not set");
}

const setToken = () => {
    token.value = "sadasd.asdasd.asdasd";
    console.log(token.value); // sadasd.asdasd.asdasd
};

const removeToken = () => {
    token.value = "";
    console.log(token.value);
};

const login = () => {
    token.value = "sadasd.asdasd.asdasd";
    console.log(token.value); // sadasd.asdasd.asdasd
    navigateTo("/dashboard");
};
</script>
