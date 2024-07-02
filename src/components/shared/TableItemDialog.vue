<script setup lang="ts">
import { ref } from "vue";
import { type CheckListItem } from "../../core/checklist";

const dialog = ref(false)

defineProps<{
    item: CheckListItem,
}>()
</script>

<template>
    <v-card class="my-2 mx-2 py-2">
        <v-row class="align-center">
            <v-col cols="2">
                <v-checkbox-btn v-on:click="item.checked = !item.checked" class="pa-2" :value="item.checked"></v-checkbox-btn>
            </v-col>
            <v-col cols="7">
                {{ item.label }}
            </v-col>
            <v-col cols="3">
                <v-btn @click="dialog = true" class="" color="grey-lighten-1" icon="mdi-information" variant="text"></v-btn>
            </v-col>
        </v-row>
    </v-card>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        :title="item.label"
        :text="item.description"
      >
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
