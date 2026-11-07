import { afterEach, describe, expect, it, vi } from "vitest";
import { flushPromises } from "@vue/test-utils";
import CheckList from "../../../src/pages/ressources/CheckList.vue";
import { delires, fringues, incontournable, pratique } from "../../../src/core/checklist";
import { mountWithRouter } from "../../helpers/mountPage";
import { body, buttons } from "../../helpers/dom";

const total = [incontournable, fringues, pratique, delires].flat().length;
const first = incontournable[0];

async function mountPage() {
    const { wrapper } = await mountWithRouter(CheckList, { attachTo: document.body });
    return wrapper;
}

describe("CheckList", () => {
    afterEach(() => {
        vi.unstubAllGlobals();
        document.body.innerHTML = "";
    });

    it("part d'une valise vide", async () => {
        const wrapper = await mountPage();
        expect(wrapper.get(".check-progress__label").text()).toContain(`0 / ${total}`);
        expect(wrapper.find(".check-item--done").exists()).toBe(false);
    });

    it("reprend les éléments déjà cochés", async () => {
        localStorage.setItem(first.id, "true");
        const wrapper = await mountPage();
        expect(wrapper.get(".check-progress__label").text()).toContain(`1 / ${total}`);
        expect(wrapper.findAll(".check-item--done")).toHaveLength(1);
    });

    it("coche un élément et le retient", async () => {
        const wrapper = await mountPage();
        await wrapper.get(`#check-${first.id}`).setValue(true);
        expect(localStorage.getItem(first.id)).toBe("true");
        expect(wrapper.get(".check-progress__label").text()).toContain(`1 / ${total}`);
    });

    it("décoche tout après confirmation", async () => {
        localStorage.setItem(first.id, "true");
        const wrapper = await mountPage();
        // happy-dom ne fournit pas window.confirm
        const confirm = vi.fn(() => false);
        vi.stubGlobal("confirm", confirm);
        const reset = wrapper.findAll("button").find((b) => b.find(".mdi-restore").exists())!;

        await reset.trigger("click");
        expect(localStorage.getItem(first.id)).toBe("true");

        confirm.mockReturnValue(true);
        await reset.trigger("click");
        expect(localStorage.getItem(first.id)).toBe("false");
        expect(wrapper.get(".check-progress__label").text()).toContain(`0 / ${total}`);
    });

    it("détaille un élément dans une fenêtre", async () => {
        const wrapper = await mountPage();
        await wrapper.get(`[aria-label="Plus d'informations : ${first.label}"]`).trigger("click");
        await flushPromises();
        expect(body()).toContain(first.description);
        buttons("Ok")[0].click();
        await flushPromises();
        expect(wrapper.exists()).toBe(true);
    });
});
