<script setup lang="ts">
import {
    Article0,
    Article1,
    Article2,
    Article3,
    Article4,
    Article5,
    Article6,
    Article7,
    Article8,
    Article9,
    Article10,
    Article12,
    Article13,
    Article14,
    Article15,
    Article16,
    Article17,
} from "../components/articles/index";
import Birthday from "../components/Birthdays.vue";
import pages from "../core/enums/page";
</script>

<template>
    <v-container>
        <Birthday></Birthday>
        <Article0 class="mt-3"></Article0>
        <Article1 class="mt-3"></Article1>
        <Article2 class="mt-3"></Article2>
        <Article3 class="mt-3"></Article3>
        <Article4 class="mt-3"></Article4>
        <Article5 class="mt-3"></Article5>
        <Article6 class="mt-3"></Article6>
        <Article7 class="mt-3"></Article7>
        <div class="my-2" style="text-align: center">
            <img
                style="width: 100%; max-height: 350px; max-width: 650px"
                loading="lazy"
                alt="Exemple circulaire"
                src="/images/circu/circu.png"
            />
            <p class="fw-light text-center">Exemple de circulaire</p>
        </div>
        <Article8 class="mt-3"></Article8>
        <Article9 class="mt-3"></Article9>
        <Article10 class="mt-3"></Article10>
        <Article12 class="mt-3"></Article12>
        <Article13 class="mt-3"></Article13>
        <Article14 class="mt-3"></Article14>
        <Article15 class="mt-3"></Article15>
        <Article16 class="mt-3"></Article16>
        <Article17 class="mt-3"></Article17>

        <div style="text-align: right; padding-right: 15px">
            <span class="text-h6">Les Croix</span>
        </div>

        <v-card class="mx-auto mt-5">
            <v-img
                height="auto"
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Francois_Rabelais_-_Portrait.jpg"
                cover
                class="align-end"
            >
            </v-img>
            <v-card-title class="pt-4">François Rabelais</v-card-title>
            <v-card-text class="pt-4">
                <p>
                    Est-il utile de rappeler que notre maître à penser n’est
                    autre que François Rabelais ?
                </p>
                <p class="pt-2">
                    Bon vivant, aimant la chaire et le bon vin, il n’en était
                    pas moins, médecin, latiniste, géographe et moine. Dans le
                    plus pur respect de son œuvre, festoyons, rions et chantons
                    gaiement, mais souvenons nous aussi que Pantagruel et
                    Gargantua étaient deux géants, aussi sachons adapter notre
                    consommation à notre morphologie et donnons de la Faluche et
                    des Faluchards une image en accord avec le respect que nous
                    devons à Monsieur Rabelais.
                </p>
                <figure class="text-end">
                    <blockquote class="blockquote">
                        <p>
                            "Si désirez être bon Pantagruélistes (c'est à dire
                            vivre en paix, joie, santé, faisant toujours grande
                            chère), ne vous fiez jamais en gens qui regardent
                            par un pertuis."
                        </p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        François Rabelais,
                        <cite title="Pantagruel">Pantagruel (1532)</cite>
                    </figcaption>
                </figure>
            </v-card-text>
        </v-card>

        <v-card class="mx-auto mt-5">
            <v-img
                height="auto"
                src="/images/carousel/honoris.jpg"
                cover
                class="align-end"
            >
            </v-img>
            <v-card-title class="pt-4">Honoris Causa</v-card-title>
            <v-card-text class="pt-4">
                La faluche Honoris Causa est remise au mérite à des non
                étudiants (patron de bar, de restos, etc.) qui par leurs actes
                ou leur sens du commerce ont fait quelque chose pour la Faluche
                et les faluchards, ainsi que leurs traditions. C'est donc une
                faluche de velours noir ou amarante décorée avec un circulaire
                en satin blanc où est écrit "Honoris Causa". Ce titre
                honorifique vient du titre de Docteur Honoris Causa. Un doctorat
                Honoris Causa (du latin "causa" qui exprime le but, précédé du
                génitif de "honor", "honoris" qui exprime l'honneur: "pour
                l'honneur") est un titre honorifique décerné par une université
                ou une faculté à une personnalité éminente.
            </v-card-text>
        </v-card>

        <v-card class="mx-auto mt-5">
            <v-img
                height="auto"
                src="/images/carousel/marie_sans_chemise.jpg"
                cover
                class="align-end"
                alt="Marie Sans Chemise"
            >
            </v-img>
            <v-card-title class="pt-4"> Le Monôme </v-card-title>

            <v-card-text class="pt-4">
                À Amiens, les étudiants faluchards défilent en cohorte et
                chantent de nombreuses paillardes, traversant le centre ville
                qui accueille en cette période le marché de noël, jusqu’à la
                place Marie sans chemise, où les Grand-Maître Faluchards
                remettent sa faluche à Marie sans chemise, accompagné d'un
                discours.
            </v-card-text>

            <template v-slot:actions>
                <v-btn
                    append-icon="mdi-chevron-right"
                    color="red-lighten-2"
                    text="En savoir plus"
                    variant="outlined"
                    block
                    :to="pages.monome.url"
                ></v-btn>
            </template>
        </v-card>

        <v-card class="mx-auto my-5">
            <v-img
                height="auto"
                src="/images/carousel/chatte.jpg"
                cover
                class="align-end align-right"
                alt="La CHATTE 2.0"
            >
            </v-img>
            <v-card-title class="pt-4">La CHATTE 2.0</v-card-title>
            <v-card-text class="pt-4">
                La CHATTE 2.0 est l'association falucharde de la ville d'Amiens.
                Elle a pour but d'animer la ville faluchard au delà des
                baptêmes, en organisant des apérals, le Monôme, et des commandes
                d'insignes pour mettre à jour nos faluches.
            </v-card-text>

            <template v-slot:actions>
                <v-btn
                    append-icon="mdi-chevron-right"
                    color="red-lighten-2"
                    text="Linktree"
                    variant="outlined"
                    href="https://linktr.ee/lachatte2.0"
                    block
                ></v-btn>
            </template>
        </v-card>
    </v-container>
</template>
