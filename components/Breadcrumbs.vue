<script setup>
    const route = useRoute()
    const router = useRouter()


</script>
<template>
    <div class=" bg-stone-200">
        <div class=" container">
            <nav class=" text-xs uppercase py-4 text-gray-500">
                <nuxt-link to="/">STRONA GŁÓWNA</nuxt-link> / <nuxt-link :to="`../${route.params.parent}`">{{route.params.parent}}</nuxt-link> / <nuxt-link :to="route.params.subcategory">{{route.params.subcategory}}</nuxt-link> / <nuxt-link :to="route.params.kategoria">{{route.params.kategoria}} </nuxt-link>
            </nav>
        </div>
    </div>
</template>