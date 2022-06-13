<script setup>
const breadcrumbs = ref()
const error = ref(null)

onErrorCaptured(e => {
    error.value = e
})

</script>
<template>
    <NuxtLayout name="custom">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
        <div v-if="error">{{ error }}</div>
        <Suspense v-else>
            <template #default>
                <ProductSuspense @breadcrumbs="(val) => breadcrumbs = val" />
            </template>
            <template #fallback>
                <ProductSkeleton />
            </template>
        </Suspense>
    </NuxtLayout>
</template>