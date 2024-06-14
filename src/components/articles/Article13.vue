<script setup lang="ts">
import Article13Spé from "./Article13Spé.vue";
</script>

<template>
    <article data-fal-article="13">
        <h2>Article 13:</h2>
        <p class="text-justify">
            Dans chaque faculté, école ou ville, il sera procédé à l’élection
            d’un Grand Maître (GM), choisi par les faluchards au vu de ses
            mérites, et dont la tâche principale sera de veiller à l’application
            des principes de base qui régissent le port de la Faluche. Le Grand
            Maître est le garant des traditions, il veille aux baptêmes des
            étudiants de sa filière et fait procéder l’élection de son
            successeur. À Amiens les futures croix sont choisies par les croix
            partant à la retraite.
        </p>

        <div data-croix style="justify-content: center">
            <div>
                <a href="./pages/historique_croix.html">
                    <img loading="lazy" alt="GM" src="/images/insigne/gm.png" />
                </a>
            </div>
            <div>
                <img loading="lazy" alt="GC" src="/images/insigne/gc.png" />
            </div>
        </div>

        <p class="text-justify">
            Sa distinction est une croix du mérite émaillée de blanc soutenue
            par un ruban aux couleurs de la matière de la discipline ou de la
            ville du mandat. Lui seul est en mesure de décerner le Bacchus,
            l’abeille, la chouette, le coq... (voir article VIII). Il doit en
            outre certifier, avec le concours de trois autres porteurs de
            Faluche, l’acquisition de bouteilles.
        </p>

        <p class="text-justify">
            Il existe aussi des Grands Chambellans (GC) qui assistent le Grand
            Maître dans sa tâche. Leur distinction est une croix au mérite non
            émaillée soutenue par un ruban à la couleur de la matière de la
            discipline ou de la ville du mandat.
        </p>

        <div class="table-warning-fal px-3 pt-2 mt-4">
            <h3 class="">
                <v-icon icon="mdi-alert-box-outline"></v-icon>
                Spécifités Amiénoises
            </h3>
            <Article13Spé class="table-warning-fal px-4 py-2"></Article13Spé>
        </div>
    </article>
</template>
