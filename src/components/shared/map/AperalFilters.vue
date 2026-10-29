<script setup lang="ts">
import { aperalStatuses, weekDays } from "../../../services/aperalServices.ts";
import type { AperalStatus, WeekDay } from "../../../types/aperalTypes.ts";

defineProps<{
    dayCounts: Record<WeekDay, number>;
    statusCounts: Record<AperalStatus, number>;
    /** Version resserrée pour le panneau flottant sur mobile */
    compact?: boolean;
}>();

const selectedDays = defineModel<WeekDay[]>("days", { required: true });
const selectedStatuses = defineModel<AperalStatus[]>("statuses", { required: true });
</script>

<template>
    <div class="aperal-filters" :class="{ 'aperal-filters--compact': compact }">
        <v-chip-group v-model="selectedDays" multiple column>
            <v-chip
                v-for="day in weekDays"
                :key="day.value"
                :value="day.value"
                :disabled="!dayCounts[day.value]"
                :size="compact ? 'small' : undefined"
                color="primary"
                variant="outlined"
                filter
            >
                {{ day.label }}
                <span v-if="!compact" class="aperal-filters__count">{{ dayCounts[day.value] }}</span>
            </v-chip>
        </v-chip-group>

        <v-divider v-if="!compact" vertical class="mx-1" />

        <v-chip-group v-model="selectedStatuses" multiple column>
            <v-chip
                v-for="(status, key) in aperalStatuses"
                :key="key"
                :value="key"
                :size="compact ? 'small' : undefined"
                :color="status.color"
                variant="outlined"
            >
                <span class="aperal-filters__dot" :style="{ background: status.color }" />
                {{ status.label }}
                <span class="aperal-filters__count">{{ statusCounts[key] }}</span>
            </v-chip>
        </v-chip-group>
    </div>
</template>

<style scoped>
.aperal-filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
}

.aperal-filters--compact {
    flex-direction: column;
    gap: 0;
}

.aperal-filters--compact :deep(.v-slide-group__content) {
    justify-content: center;
}

.aperal-filters--compact .v-chip {
    margin: 3px !important;
}

.aperal-filters__count {
    margin-left: 6px;
    font-size: 0.75em;
    opacity: 0.65;
}

.aperal-filters__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 6px;
}
</style>
