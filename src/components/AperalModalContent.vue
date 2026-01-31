<script setup>
const props = defineProps({
    aperal: Object,
    place: Object,
})
</script>

<template>
    <div class="aperal-popup">
        <h3>
            {{ props.aperal.city }} - {{ props.place.name }}
        </h3>
        <p v-if="props.aperal.description">
            {{ props.aperal.description }}
        </p>
        <p v-if="props.place.address">
            {{ props.place.address }}
        </p>
        <p v-if="props.aperal.contactUrl">
            <a :href="props.aperal.contactUrl" target="_blank" rel="noopener">Réseaux sociaux</a>
        </p>
    </div>
</template>

<style scoped>
.aperal-popup h3 { margin: 0 0 6px 0; font-size: 1rem }
.aperal-popup p { margin: 4px 0 }
</style>