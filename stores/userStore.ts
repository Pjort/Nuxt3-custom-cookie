import { defineStore } from "pinia";

export const userStore = defineStore("main", {
    state: () => ({
        token: useCookie<string>("token"),
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        setToken(token: string) {
            this.token = token;
        },
    },
});
