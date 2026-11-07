import { afterEach } from "vitest";
import { config } from "@vue/test-utils";
import { createVuetify } from "vuetify";

// Chaque composant monté dispose de Vuetify, comme dans l'app
config.global.plugins = [createVuetify()];

// happy-dom n'implémente pas visualViewport, utilisé par les dialogues Vuetify pour se positionner
if (!("visualViewport" in globalThis)) {
    Object.defineProperty(globalThis, "visualViewport", {
        configurable: true,
        value: Object.assign(new EventTarget(), {
            width: window.innerWidth,
            height: window.innerHeight,
            offsetLeft: 0,
            offsetTop: 0,
            pageLeft: 0,
            pageTop: 0,
            scale: 1,
        }),
    });
}

afterEach(() => {
    localStorage.clear();
});
