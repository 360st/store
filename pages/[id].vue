<script setup>
    const breadcrumbs = ref()
    const error = ref(null)

    onErrorCaptured(e => {
        error.value = e
    })

</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
        <div v-if="error">{{ error }}</div>
        <Suspense v-else>
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