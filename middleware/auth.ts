export default defineNuxtRouteMiddleware(() => {
    const token = useCookie<string>("token");
    // console.log("checking token", token.value);
    if (!token.value) {
        navigateTo("/");
    }
});
