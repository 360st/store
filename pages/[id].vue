<script setup></script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <Breadcrumbs />
        <Suspense>
            <template #default>
                <ProductSuspense />
            </template>
            <template #fallback>
                <ProductSkeleton />
            </template>
        </Suspense>
        
        <NuxtLayout name="footer" />
    </div>
</template>