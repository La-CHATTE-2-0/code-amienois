import { flushPromises, mount, type ComponentMountingOptions } from "@vue/test-utils";
import { createMemoryHistory, createRouter, type Router } from "vue-router";
import type { Component } from "vue";

// Routeur minimal : les pages contiennent des <router-link> et lisent parfois la route courante
export function createTestRouter(): Router {
    return createRouter({
        history: createMemoryHistory(),
        routes: [{ path: "/:pathMatch(.*)*", component: { template: "<div />" } }],
    });
}

export async function mountWithRouter(
    component: Component,
    options: ComponentMountingOptions<any> = {},
    path = "/"
) {
    const router = createTestRouter();
    await router.push(path);
    await router.isReady();
    const wrapper = mount(component as any, {
        ...options,
        global: { ...options.global, plugins: [router, ...(options.global?.plugins ?? [])] },
    });
    await flushPromises();
    return { wrapper, router };
}
