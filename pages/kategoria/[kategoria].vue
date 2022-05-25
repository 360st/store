<script setup>
const listId = ref(null)
const getId = (id) => {
    listId.value = id
}
</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <Breadcrumbs />
        <div class=" container">
            <Suspense>
                <CategoriesSuspense @categoryId="getId" />
                <template #fallback>
                    <div class="animate-pulse w-64 h-9 bg-stone-100 mt-4 mb-4 rounded"></div>
                </template>
            </Suspense>
            <ListTopBaner />
            <ListSubcategories />
            <ListFilters />

            <Suspense v-if="listId">
                <ul class="mb-16 grid grid-cols-12 gap-4 justify-center">
                    <ListSuspense :listId="listId" />
                </ul>
                <template #fallback>
                    <ListSkeleton />
                </template>
            </Suspense>
        </div>
        <NuxtLayout name="footer" />
    </div>
</template>