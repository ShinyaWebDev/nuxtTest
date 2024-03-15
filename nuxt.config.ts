import vuetify from "vite-plugin-vuetify";
import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
    build: {
        transpile: ["vuetify"],
    },
    plugins: ["~/plugins/vue-draggable-next.js"],

    hooks: {
        "vite:extendConfig": (config) => {
            config.plugins.push(
                vuetify({
                    styles: { configFile: resolve("./settings.scss") },
                })
            );
        },
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    experimental: {
        watcher: "chokidar",
    },
    modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
});
