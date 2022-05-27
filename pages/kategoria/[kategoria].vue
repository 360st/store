<script setup>
const categoryId = ref(null)
const totalPagesInCategory = ref(null)
const getCategoryId = (id) => {
    categoryId.value = id
}
const getTotalPagesInCategory = (value) => {
    totalPagesInCategory.value = value
}

</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <Breadcrumbs />
        <div class=" container">
            <Suspense>
                <CategoriesSuspense @categoryId="getCategoryId" />
                <template #fallback>
                    <div class="animate-pulse w-64 h-9 bg-stone-100 mt-4 mb-4 rounded"></div>
                </template>
            </Suspense>
            <ListTopBaner />
            <ListSubcategories />
            <ListFilters />

            <Suspense v-if="categoryId">
                <ul class="mb-16 grid grid-cols-12 gap-4 justify-center">
                    <ListSuspense :categoryId="categoryId" @totalPagesInCategory="getTotalPagesInCategory" />
                </ul>
                <template #fallback>
                    <ListSkeleton />
                </template>
            </Suspense>
            <ListPagination v-if="totalPagesInCategory" :totalPagesInCategory="totalPagesInCategory" />
        </div>
        <NuxtLayout name="footer" />
    </div>
</template>