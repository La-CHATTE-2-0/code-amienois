import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Bitards from "../../../src/components/folklores/FolkloresFrancais.Bitards.vue";

describe("FolkloresFrancais.Bitards", () => {
    it("remplace la vidéo par un message hors ligne", async () => {
        const onLine = vi.spyOn(navigator, "onLine", "get").mockReturnValue(true);
        const wrapper = mount(Bitards);
        expect(wrapper.find("iframe").exists()).toBe(true);

        onLine.mockReturnValue(false);
        window.dispatchEvent(new Event("offline"));
        await wrapper.vm.$nextTick();
        expect(wrapper.find("iframe").exists()).toBe(false);
        expect(wrapper.find(".v-alert").exists()).toBe(true);

        onLine.mockReturnValue(true);
        window.dispatchEvent(new Event("online"));
        await wrapper.vm.$nextTick();
        expect(wrapper.find("iframe").exists()).toBe(true);
        wrapper.unmount();
    });
});
