<script setup lang="ts">
import { incontournable } from "../core/checklist";
import TableItemDialog from "../components/shared/TableItemDialog.vue";

let v_incontournable = incontournable
v_incontournable[0].checked = true;
v_incontournable[1].checked = true;
v_incontournable[2].checked = true;

</script>

<template>
    <v-container>
        <template v-for="item in v_incontournable">
            <TableItemDialog :item="item"></TableItemDialog>
        </template>
    </v-container>
</template>
