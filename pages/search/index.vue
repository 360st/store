<script setup>
const route = useRoute()

</script>
<template>
    <NuxtLayout name="custom">
        <div class=" container">
            <h1 class=" font-light text-3xl my-4">{{ route.query.value }}</h1>
            <div id="error"></div>
            <Suspense>
                <ul class="mb-16 grid grid-cols-12 gap-4 justify-center">
                    <ListSuspense :searchValue="route.query.value" :upSell="false" />
                </ul>
                <template #fallback>
                    <ListSkeleton />
                </template>
            </Suspense>
        </div>
    </NuxtLayout>
</template>

