<script setup>
import { useMainStore } from '@/store/useMainStore';
</script>
<template>

    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <CommonTheHeader />
        <CommonMainTheRandomSectionFirst />
        <CommonMainTheRandomSectionSecond />        
        <CommonMainTheBaner />
        <CommonMainTheLogos />
        <NuxtLayout name="footer" />
    </div>   
</template>