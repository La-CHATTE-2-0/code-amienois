import { describe, expect, it, vi } from "vitest";
import { flushPromises } from "@vue/test-utils";

describe("main", () => {
    it("monte l'application dans #app", async () => {
        vi.spyOn(window, "scrollTo").mockImplementation(() => {});
        document.body.innerHTML = '<div id="app"></div>';
        await import("../src/main");
        await flushPromises();
        expect(document.querySelector(".v-application")).not.toBeNull();
        document.body.innerHTML = "";
    });
});
