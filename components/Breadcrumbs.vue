<script setup>
const props = defineProps({
    breadcrumbs: Object,
    breadcrumbsName: String,
    breadcrumbsParentName: String
})
const route = useRoute()
const breadcrumbsList = ref(null)

watch(() => props.breadcrumbs, (val) => {
    breadcrumbsList.value = val.categories.sort((a, b) => {
        return a.id - b.id
    }).slice(0, 1)
})

const checkIfSub = computed(() => !route.params.subcategory ? props.breadcrumbsParentName : route.params.main)

</script>
<template>
    <div class=" bg-stone-200">
        <div class=" container">
            <nav v-if="props.breadcrumbs" class=" text-xs uppercase py-4 text-gray-500">
                <ul>
                    <li class=" inline-block mr-1">
                        <nuxt-link to="/">STRONA GŁÓWNA</nuxt-link>
                    </li>
                    <li class=" inline-block  mr-1">
                        / <nuxt-link :to="`/kategoria/${breadcrumbsList[0].slug}`">{{ breadcrumbsList[0].name }}
                        </nuxt-link>
                    </li>
                    <li class=" inline-block">
                        / {{ props.breadcrumbs.title }}
                    </li>
                </ul>
            </nav>
            <nav v-else class=" text-xs uppercase py-4 text-gray-500">
                <nuxt-link to="/">STRONA GŁÓWNA</nuxt-link>
                <nuxt-link v-show="route.params.main" :to="`../${route.params.main}`"> / {{ checkIfSub }}</nuxt-link>
                <nuxt-link v-show="route.params.subcategory" :to="route.params.subcategory"> / {{ props.breadcrumbsParentName }}</nuxt-link>
                <nuxt-link v-show="route.params.kategoria" :to="route.params.kategoria"> / {{ props.breadcrumbsName }}</nuxt-link>
            </nav>
        </div>
    </div>
</template>