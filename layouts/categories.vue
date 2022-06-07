<script setup>
const categoryId = ref(null)
const totalPagesInCategory = ref(null)
const breadcrumbsName = ref('')
const breadcrumbsParentName = ref('')

const error = ref(null)

onErrorCaptured(e => {
    error.value = e
})

</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <Breadcrumbs :breadcrumbsName="breadcrumbsName" :breadcrumbsParentName="breadcrumbsParentName" />
        <div class=" container">
            <div v-if="error">{{ error }}</div>
            <Suspense v-else>
                <CategoriesSuspense @categoryId="(val) => categoryId = val"
                    @breadcrumbsName="(val) => breadcrumbsName = val"
                    @breadcrumbsParentName="(val) => breadcrumbsParentName = val" />
                <template #fallback>
                    <CategoriesSkeleton />
                </template>
            </Suspense>

            <Suspense v-if="categoryId">
                <ul class="mb-16 grid grid-cols-12 gap-4 justify-center">
                    <ListSuspense :categoryId="categoryId"
                        @totalPagesInCategory="(val) => totalPagesInCategory = val" />
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