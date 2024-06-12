<script setup lang="ts">
import { incontournable } from "../core/checklist";
import TableItemDialog from "../components/shared/TableItemDialog.vue";
</script>

<template>
    <v-table>
        <thead></thead>
        <tbody>
            <template v-for="item in incontournable">
                <TableItemDialog :item="item"></TableItemDialog>
            </template>
        </tbody>
    </v-table>
</template>
