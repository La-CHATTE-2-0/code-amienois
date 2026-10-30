<script setup lang="ts">
import { ref } from "vue";
import { CheckListItem } from "../../types/checklistTypes";

const dialog = ref(false);

defineProps<{
    item: CheckListItem;
}>();

// État coché géré par la page (progression et sauvegarde)
const checked = defineModel<boolean>("checked", { default: false });
</script>

<template>
    <li class="check-item" :class="{ 'check-item--done': checked }">
        <v-checkbox-btn
            v-model="checked"
            :id="`check-${item.id}`"
            color="primary"
            density="comfortable"
        ></v-checkbox-btn>
        <!-- Toute la ligne est cliquable, pas seulement la case -->
        <label :for="`check-${item.id}`" class="check-item__label">
            {{ item.label }}
        </label>
        <v-btn
            v-if="item.description"
            @click="dialog = true"
            icon="mdi-information-outline"
            :aria-label="`Plus d'informations : ${item.label}`"
            variant="text"
            size="small"
            class="check-item__info"
        ></v-btn>
    </li>

    <v-dialog v-model="dialog" max-width="520" v-if="item.description">
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

<style scoped>
.check-item {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px 4px 4px;
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

/* La case Vuetify s'étire par défaut : on la garde à sa taille */
.check-item :deep(.v-selection-control) {
    flex: none;
}

.check-item__label {
    flex: 1;
    padding-block: 8px;
    cursor: pointer;
    transition: color 180ms ease;
}

.check-item--done .check-item__label {
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
    text-decoration: line-through;
}

.check-item__info {
    flex: none;
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}
</style>
