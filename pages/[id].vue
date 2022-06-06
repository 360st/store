<script setup>
    const breadcrumbs = ref()
</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
        <Suspense>
            <template #default>
                <ProductSuspense @breadcrumbs=" (val) => breadcrumbs = val"   />
            </template>
            <template #fallback>
                <ProductSkeleton />
            </template>
        </Suspense>
        
        <NuxtLayout name="footer" />
    </div>
</template>