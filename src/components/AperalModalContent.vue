<script setup>
const props = defineProps({
    aperal: Object,
    place: Object,
});
</script>

<template>
    <div class="aperal-popup">
        <h3>{{ props.aperal.city }}
            <template v-if="props.place.name"> - {{ props.place.name }}</template>
        </h3>
        <p v-if="props.aperal.frequency">
            {{ props.aperal.frequency }}
        </p>
        <p v-if="props.aperal.description">
            {{ props.aperal.description }}
        </p>
        <p v-if="props.place.address">
            {{ props.place.address }}
        </p>
        <p v-if="props.aperal.contactUrl" class="mt-4">
            <v-btn
                color="blue-lighten-2"
                text="En savoir plus"
                variant="tonal"
                block
                target="_blank"
                :href="props.aperal.contactUrl"
            />
        </p>
    </div>
</template>

<style scoped>
.aperal-popup h3 {
    margin: 0 0 6px 0;
    font-size: 1rem;
}
.aperal-popup p {
    margin: 4px 0;
}
</style>
