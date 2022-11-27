export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie<string>("token");
    console.log("checking token", token.value);
    if (!token.value) {
        navigateTo("/");
    }
});
