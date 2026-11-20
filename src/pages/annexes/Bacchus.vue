<script setup lang="ts">
import pages from "../../core/page";

const attributions = [
    "Vin",
    "Vigne",
    "Festivités",
    "Danse",
    "Théâtre",
    "Végétation",
    "Plaisirs",
    "Ivresse et débordements",
];

const representations = [
    { label: "Sur la tête", text: "Une couronne de vigne ou de lierre, parfois des cornes" },
    { label: "Son char", text: "Souvent tiré par des panthères ; le tonneau apparaît dans des œuvres plus tardives" },
    { label: "D’une main", text: "Le thyrse, un bâton entouré de lierre ou de vigne et terminé par une pomme de pin" },
    { label: "De l’autre", text: "Une grappe de raisin ou une coupe de vin, parfois une corne d’abondance" },
];
</script>

<template>
    <v-container>
        <article data-fal-article>
            <img
                class="fiche-image bacchus-hero"
                src="/images/other/bacchusorgies.webp"
                alt="Bacchanale en forêt : banquet, satyres et nymphes qui boivent et dansent"
                width="2250"
                height="1542"
            />

            <p class="fiche-lead bacchus-lead">
                Dieu du vin, des fêtes et des débordements, Bacchus a donné son
                nom à l’un des insignes les plus difficiles à obtenir sur la
                faluche.
                <router-link :to="`${pages.code.url}#article-8`">Voir les règles du port du Bacchus</router-link>.
            </p>

            <h2 class="mt-8">La vie de Bacchus</h2>
            <p>
                Bacchus est le fils que Jupiter (Zeus chez les Grecs) a eu avec
                sa maîtresse, <strong>Sémélé</strong>. Fille de Cadmos, roi de
                Thèbes, elle n’en reste pas moins une simple mortelle.
            </p>
            <p>
                La femme de Jupiter, la déesse <strong>Junon</strong>, n’apprécie
                pas d’avoir été trompée et décide de se venger. Elle convainc
                Sémélé de demander à Jupiter de se montrer sous sa forme divine,
                ce qui la fait mourir foudroyée.
            </p>
            <p>
                Voulant sauver son enfant, Jupiter l’enlève du ventre de Sémélé
                et le coud dans <strong>sa cuisse</strong> jusqu’à sa naissance.
                D’où son surnom de « deux fois né ».
            </p>
            <p>
                Après sa naissance, Bacchus est confié à Hermès, qui le conduit
                auprès des <strong>Nymphes de Nysa</strong>. Celles-ci l’élèvent
                et le protègent de la colère de Junon. Il grandit ainsi à l’abri
                des regards avant de devenir le dieu du vin, de la vigne et des
                festivités.
            </p>

            <h3 class="fiche-subtitle">Ses attributions</h3>
            <div class="fiche-chips">
                <v-chip
                    v-for="attribution in attributions"
                    :key="attribution"
                    variant="outlined"
                    size="small"
                >
                    {{ attribution }}
                </v-chip>
            </div>

            <h2 class="mt-8">Représentations</h2>
            <div class="fiche-intro bacchus-representations">
                <img
                    class="fiche-image fiche-portrait"
                    src="/images/other/bacchus.jpg"
                    alt="Bacchus enfant assis sur un tonneau, versant du vin dans une coupe"
                    width="811"
                    height="1260"
                    loading="lazy"
                />
                <dl class="fiche-cadre fiche-list">
                    <div v-for="item in representations" :key="item.label">
                        <dt>{{ item.label }}</dt>
                        <dd>{{ item.text }}</dd>
                    </div>
                </dl>
            </div>

            <h2 class="mt-8">Les fêtes</h2>
            <p>
                De nombreuses fêtes étaient dédiées à Bacchus, dont les plus
                connues sont les <strong>bacchanales</strong>. Ces cérémonies
                religieuses, souvent secrètes, étaient accompagnées de musique,
                de danses et de réjouissances.
            </p>
            <p>
                Dans certaines traditions romaines, elles étaient d’abord
                réservées aux femmes, avant que les hommes ne soient également
                admis.
            </p>
            <v-alert
                class="bacchus-alert"
                icon="mdi-information-outline"
                variant="tonal"
                density="compact"
                border="start"
            >
                Ces rassemblements suscitèrent la méfiance des autorités
                romaines. En 186 av. J.-C., le Sénat prit un décret pour
                réglementer sévèrement les cérémonies bachiques, notamment leurs
                réunions et leur organisation.
            </v-alert>
            <p>
                À Rome, d’autres fêtes étaient célébrées en l’honneur de Liber,
                divinité associée à Bacchus : les <strong>Liberalia</strong>,
                qui avaient lieu chaque année le 17 mars.
            </p>

            <p class="fiche-voir-aussi">
                Voir aussi :
                <router-link :to="pages.gambrinus.url">Gambrinus, roi de la bière</router-link>
            </p>
        </article>
    </v-container>
</template>

<style scoped>
article p {
    margin-top: 0.75rem;
}

.bacchus-hero {
    aspect-ratio: 16 / 9;
    object-fit: cover;
}

.bacchus-lead {
    margin-top: 1rem;
}

.bacchus-representations {
    margin-top: 0.75rem;
}

.bacchus-alert {
    margin-top: 1rem;
}
</style>
