<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';
const { searchValue } = storeToRefs(useMainStore())

</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <div class=" container">
            <h1 class=" font-light text-3xl my-4">{{ searchValue }}</h1>
            <div id="error"></div>
            <Suspense>
                <ul class="mb-16 grid grid-cols-12 gap-4 justify-center">
                    <ListSuspense  :searchValue="searchValue" :upSell="false" />
                </ul>
                <template #fallback>
                    <ListSkeleton />
                </template>
            </Suspense>
        </div>
        <NuxtLayout name="footer" />
    </div>
</template>

