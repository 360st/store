<script setup>
import { useMainStore } from '@/store/useMainStore';

</script>
<template>

    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <CommonTheHeader />
        <Suspense>
            <SuspenseWrapper productsId=" 1511, 753, 9028, 6573, 6695, 1659" />
            <template #fallback>
                <SuspenseSkeleton />
            </template>
        </Suspense>
        <CommonMainTheBaner />
        <CommonMainTheLogos />
        <NuxtLayout name="footer" />
    </div>   
</template>