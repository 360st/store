<script setup>
const props = defineProps({
    subcategories: Object,
    parent:  Object
})
const route = useRoute()
</script>
<template>

    <nav>
        <ul>
            <li v-if="props.parent.name" class=" uppercase border border-gray-300 inline-block mr-6 mb-2 p-1 px-3 last:mr-0"><nuxt-link :to="`../${props.parent.slug}`">Wróć do: {{ props.parent.name }}</nuxt-link></li>
            <li v-for="sub in props.subcategories" :key="sub.id" class=" uppercase border border-gray-300 inline-block mr-2 mb-2 p-1 px-3 last:mr-0">
                <nuxt-link :to="`${route.params.kategoria}/${sub.slug}`">{{sub.name}}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>