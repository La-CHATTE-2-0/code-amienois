import { afterEach } from "vitest";
import { config } from "@vue/test-utils";
import { createVuetify } from "vuetify";

// Chaque composant monté dispose de Vuetify, comme dans l'app
config.global.plugins = [createVuetify()];

afterEach(() => {
    localStorage.clear();
});
