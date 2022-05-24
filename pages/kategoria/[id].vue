<script setup></script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
            <Breadcrumbs />
            <div class=" container">
                <Title />
                <ListTopBaner />
                <ListSubcategories />
                <ListFilters />
                <ul class="mb-16 grid grid-cols-12 gap-4 justify-center">
                <Suspense>
                    <ListSuspense listId="4h8" />
                    <template #fallback>
                        <ListSkeleton />
                    </template>
                </Suspense>
                </ul>

            </div>
        <NuxtLayout name="footer" />
    </div>
</template>