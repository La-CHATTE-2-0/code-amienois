<template>
    <v-container>
        <article data-fal-article="">
            <div class="mb-4 fal-img-flyer">
                <img
                    loading="lazy"
                    src="/images/other/flyer.jpg"
                    alt="Flyer Monôme"
                />
            </div>

            <p class="text-justify mb-4">
                À la fin du XIXe siècle, le <strong>monôme</strong> était une
                manifestation étudiante sous forme d'un cortège ou d'une
                procession en file indienne.
            </p>

            <div class="mb-4 fal-img">
                <img
                    loading="lazy"
                    src="/images/other/monome_gm.jpg"
                    alt="GM Monôme"
                />
            </div>

            <p class="text-justify mb-4">
                À Amiens, depuis le XXe siècle, les étudiants faluchards
                défilent en cohorte et chantent ensemble de nombreuses
                paillardes, traversant le centre-ville qui accueille en cette
                période le marché de Noël, jusqu'à la place Marie-sans-chemise,
                où les Grands-Maîtres remettent sa faluche à cette dernière, une
                faluche comportant les couleurs de toutes les disciplines des
                étudiants faluchards de la ville.
            </p>

            <div class="mb-4 fal-img text-center">
                <img
                    class="fal-img--detouree"
                    alt="Faluche de Marie-sans-chemise"
                    loading="lazy"
                    style="max-width: 500px"
                    src="/images/other/faluchemarie.webp"
                />
            </div>

            <p class="text-justify mb-4">
                Par leurs discours, les Grands-Maîtres transmettent aux
                néo-faluchards la tradition et l'histoire de ce monument connu
                de tous les Amiénois.
            </p>

            <div class="mb-4 fal-img text-center">
                <img
                    alt="Monôme groupe"
                    loading="lazy"
                    src="/images/other/monome_groupe.jpg"
                />
            </div>

            <p class="text-justify mb-4">
                Il est devenu une tradition, pouvant être considéré comme une
                véritable particularité de la faluche amiénoise, de célébrer ce
                type d'évènement qui se fait rarement ailleurs.
            </p>

            <div class="mb-4 fal-img">
                <img
                    alt="Marie-sans-chemise"
                    loading="lazy"
                    src="/images/carousel/marie_sans_chemise.jpg"
                />
            </div>
        </article>
    </v-container>
</template>

<style>
/* Photos : même arrondi que les autres pages, liseré pour le mode sombre */
.fal-img,
.fal-img-flyer {
    img {
        border-radius: 12px;
        outline: 1px solid rgba(var(--v-theme-on-surface), 0.14);
        outline-offset: -1px;
    }
}

.fal-img {
    img {
        width: 100%;
        max-width: 100%;
    }
}

.fal-img-flyer {
    text-align: center;
    img {
        width: 100%;
        max-width: 500px;
    }
}

/* Image détourée sur fond transparent : ni arrondi ni liseré */
.fal-img img.fal-img--detouree {
    border-radius: 0;
    outline: none;
}
</style>
