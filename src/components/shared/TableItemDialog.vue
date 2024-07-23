<script setup lang="ts">
import { ref, onMounted } from "vue";
import { type CheckListItem } from "../../core/checklist";

const dialog = ref(false);
const checked = ref(false);

const props = defineProps<{
    item: CheckListItem;
}>();

function handleClick() {
    checked.value = !checked.value;
    localStorage.setItem(props.item.id, JSON.stringify(checked.value));
}

onMounted(() => {
    checked.value = JSON.parse(localStorage.getItem(props.item.id) ?? "false");
});
</script>

<template>
    <v-card class="my-3 py-2" variant="tonal">
        <v-row class="align-center">
            <v-col cols="2">
                <v-checkbox-btn
                    v-on:click="handleClick"
                    class="pa-2"
                    :model-value="checked"
                ></v-checkbox-btn>
            </v-col>
            <v-col cols="7">
                {{ item.label }}
            </v-col>
            <v-col cols="3" class="text-right pr-5">
                <v-btn
                    v-if="item.description"
                    @click="dialog = true"
                    class=""
                    color="grey-lighten-1"
                    icon="mdi-information"
                    variant="text"
                ></v-btn>
            </v-col>
        </v-row>
    </v-card>

    <v-dialog v-model="dialog" width="auto" v-if="item.description">
        <v-card :title="item.label" :text="item.description">
            <template v-slot:actions>
                <v-btn
                    class="ms-auto"
                    text="Ok"
                    @click="dialog = false"
                ></v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>
