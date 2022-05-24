<script setup>
const props = defineProps({
    upsell_ids: Array
})
const stringId = computed(() => props.upsell_ids.join(', '))
</script>
<template>
    <div class=" container">
        <h2 class="text-center text-2xl font-light mb-8">Dobierz do kompletu</h2>
        <ul class="mb-16 flex gap-8 justify-center">
            <ListSuspense :productsId="stringId" :upSell="true" />
        </ul>
    </div>
</template>