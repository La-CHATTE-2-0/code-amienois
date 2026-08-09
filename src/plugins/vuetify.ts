import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        blueprint: md3,
        theme: {
            defaultTheme: "dark",
        },
    });

    nuxtApp.vueApp.use(vuetify);
});
