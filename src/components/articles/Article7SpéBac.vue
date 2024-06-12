<script setup lang="ts">
import "../../sass/base/_tables.scss";
</script>
<template>
    <v-table class="table align-middle" data-fal-table="insigne">
        <caption class="d-none">
            Insignes bac spés Amiens
        </caption>
        <thead>
            <tr>
                <th>Baccalauréat</th>
                <th>Insigne</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="pt-2">Scientifique spécialité SVT</div>
                    <div class="py-2">
                        <v-icon icon="mdi-repeat"></v-icon>
                        Epsilon au code national
                    </div>
                </td>
                <td>Phi + Epsilon φε</td>
                <td data-fal-insigne>
                    <img
                        loading="lazy"
                        width="100"
                        height="100"
                        src="/images/insigne/phi_epsilon.png"
                        alt="Phi Epsilon"
                    />
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
