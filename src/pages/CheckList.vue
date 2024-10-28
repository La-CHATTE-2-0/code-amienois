<script setup lang="ts">
import { incontournable, fringues, pratique, delires } from "../core/checklist";
import TableItemDialog from "../components/shared/TableItemDialog.vue";

function handleReset() {
    const keys = [...incontournable, ...fringues, ...pratique, ...delires].map(
        (el) => el.id
    );
    keys.forEach((id) => localStorage.setItem(id, "false"));
    window.location.reload();
}
</script>

<template>
    <v-container>
        <div class="table-warning-fal pa-2 mb-5">
            <h2>⚠️ Avant de partir en congrès</h2>
            <ol class="ml-2 mb-4">
                <li class="ml-4 mb-4">
                    Assure-toi en premier lieu que ton dossier pour le congrès
                    soit complet sur la liste de l’événement (fiche, paiement,
                    chèques de caution, attestation sur l’honneur…).
                </li>
                <li class="ml-4 mb-4">
                    Ensuite, trouve-toi une place dans un covoit qui part pour
                    le congrès. Tu peux toi-même proposer d’en organiser un.
                </li>
                <li class="ml-4 mb-4">
                    Il faut impérativement se renseigner sur les conditions
                    météo prévues lors du weekend (de journée comme de nuit !).
                    Cela permettra d’adapter au mieux les recommandations
                    suivantes aux besoins réels sur place.
                </li>
                <li class="ml-4 mb-4">
                    Sécurise tes insignes et tes pin’s. Ta fal risque d’être pas
                    mal ballotée durant le weekend
                </li>
            </ol>
        </div>

        <h2 class="text-start mt-4">Les incontournables à emmener</h2>
        <template v-for="item in incontournable">
            <TableItemDialog :item="item"></TableItemDialog>
        </template>

        <h2 class="text-start mt-4">
            Vêtements à prendre (en fonction de la météo)
        </h2>
        <template v-for="item in fringues">
            <TableItemDialog :item="item"></TableItemDialog>
        </template>

        <h2 class="text-start mt-4">Bien pratique en congrès</h2>
        <template v-for="item in pratique">
            <TableItemDialog :item="item"></TableItemDialog>
        </template>

        <h2 class="text-start mt-4">Si c'est ton délire</h2>
        <template v-for="item in delires">
            <TableItemDialog :item="item"></TableItemDialog>
        </template>

        <div data-fal-article>
            <div class="table-warning-fal pa-2 my-5">
                <h3>⚠️ Lors du congrès</h3>
                <ol class="ml-2 mb-4">
                    <li class="ml-4 mb-4">
                        A l’arrivée, va voir l’orga (généralement situé à
                        l’entrée du site) pour pointer et récupérer ton Welcome
                        pack (Tu y trouveras un pin’s, un écocup, le CD du
                        congrès et d’autres goodies).
                    </li>
                    <li class="ml-4 mb-4">
                        Il n’est pas conseillé de garder son téléphone portable
                        sur soit pendant l’événement pour ne pas le perdre lors
                        de quelques péripéties.
                    </li>
                    <li class="ml-4 mb-4">
                        Interdiction formelle de prendre des photos lorsque des
                        gens sont nus ! (Ça arrivera plus d’une fois xD).
                    </li>
                    <li class="ml-4 mb-4">
                        Si vous avez le moindre problème pendant le weekend,
                        n’hésitez pas à aller voir vos anciens ou l’orga qui
                        essayeront de vous aider autant qu’ils le peuvent. De
                        plus, des secouristes sont généralement présents pendant
                        les soirées pour prendre en charge ceux qui en ont
                        besoin.
                    </li>
                </ol>
            </div>
            <div class="text-caption" style="text-align: right">
                <span>
                    <em>
                        D'après Nicolas “FéeS’EL Picarde” T., Ex GC Sciences Amiens
                    </em>
                </span>
            </div>
        </div>

        <div data-fal-article class="mt-3">
            <img
                src="/images/other/pommo_2023.jpg"
                class="mt-3 mb-3 rounded"
                alt="ômienois à la Pommo 2023"
                loading="lazy"
                width="100%"
            />
            <div class="w-100">
                <v-btn
                    color="blue-darken-4"
                    class="w-100"
                    v-on:click="handleReset"
                >
                    Réinitialiser la liste
                </v-btn>
            </div>
        </div>
    </v-container>
</template>
