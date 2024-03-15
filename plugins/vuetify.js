// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            defaultTheme: "purpleTheme",
            themes: {
                purpleTheme: {
                    dark: false,
                    colors: {
                        primary: "#8E73DF",
                        secondary: "#9b4990",
                        accent: "#8E73DF",
                        background: "#F2F2F2",
                        info: "#539BFF",
                        success: "#13DEB9",
                        warning: "#FFAE1F",
                        error: "#FA896B",
                        muted: "#5a6a85",
                        lightprimary: "#ECF2FF",
                        lightsecondary: "#E8F7FF",
                        lightsuccess: "#E6FFFA",
                        lighterror: "#FDEDE8",
                        lightwarning: "#FEF5E5",
                        textPrimary: "#2A3547",
                        textSecondary: "#2A3547",
                        borderColor: "#e5eaef",
                        inputBorder: "#000",

                        containerBg: "#ffffff",
                        hoverColor: "#f6f9fc",
                        surface: "#fff",
                        "on-surface-variant": "#fff",
                        grey100: "#F2F6FA",
                        grey200: "#EAEFF4",

                        "gradient-0": "#3d5afe",
                        "gradient-16": "#5456e3",
                        "gradient-32": "#7550bd",
                        "gradient-50": "#9b4990",
                        "gradient-66": "#c24263",
                        "gradient-82": "#e23c3c",
                        "gradient-100": "#f93822",
                    },
                    variables: {
                        "border-color": "#eeeeee",
                        "carousel-control-size": 10,
                    },
                },
            },
        },
    });

    nuxtApp.vueApp.use(vuetify);
});

// theme: {
//     themes: {
//         light: {
//             primary: "#8E73DF",
//             "primary-light": "#ecefff",
//             secondary: "#9b4990",
//             "secondary-light": "#ecefff",
//             error: "#E53935",
//             "error-light": "#fad7d7",
//             success: "#00E676" || "#009c25",
//
//         },
//     },
// },
