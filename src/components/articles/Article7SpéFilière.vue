<script setup lang="ts">
import "../../sass/base/_tables.scss";
</script>

<template>
    <v-table class="table align-middle" data-fal-table="insigne">
        <caption class="d-none">
            Insignes fillières spés Amiens
        </caption>
        <tbody>
            <tr>
                <td>
                    <div class="pt-2">Assistante Sociale</div>
                    <div class="py-2">
                        <v-icon icon="mdi-repeat"></v-icon>
                        N'existe pas au code national
                    </div>
                </td>
                <td>Lettres AS</td>
                <td data-fal-insigne>
                    <img
                        loading="lazy"
                        width="100"
                        height="100"
                        src="/images/insigne/lettres_as.png"
                        alt="Lettres AS"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <div class="pt-2">Kinésithérapie</div>
                    <div class="py-2">
                        <v-icon icon="mdi-repeat"></v-icon>
                        Caducée de Mercure au code national
                    </div>
                </td>
                <td>Ciseaux + Caducée de Mercure</td>
                <td data-fal-insigne>
                    <img
                        loading="lazy"
                        width="100"
                        height="100"
                        src="/images/insigne/ciseaux_et_caducee_mercure.png"
                        alt="Ciseaux et Caducée de Mercure"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <div class="pt-2">Science de l'éducation</div>
                    <div class="py-2">
                        <v-icon icon="mdi-repeat"></v-icon>
                        N'existe pas au code national
                    </div>
                </td>
                <td>Lettres SDE</td>
                <td data-fal-insigne>
                    <img
                        loading="lazy"
                        width="100"
                        height="100"
                        src="/images/insigne/lettres_sde.png"
                        alt="Lettres SDE"
                    />
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
