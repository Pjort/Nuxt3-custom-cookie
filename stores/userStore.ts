import { defineStore } from "pinia";

export const useUserStore = defineStore("main", {
    state: () => ({
        token: useCookie<string>("token").value,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        setToken(token: string) {
            useCookie<string>("token").value = token;
            this.token = token;
        },
        login() {
            this.setToken("sadasd.asdasd.asdasd");
        },
        logout() {
            this.setToken("");
            navigateTo("/");
        },
    },
});
