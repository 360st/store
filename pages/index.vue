<script setup>
const router = useRouter()

router.options.scrollBehavior = (to, from, savedPosition) => {
    if(savedPosition){
        return savedPosition
    } else {
        return { top: 0 }
    }
}
</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <CommonTheHeader />
        <CommonMainTheRandomSectionFirst />
        <CommonMainTheRandomSectionSecond />        
        <CommonMainTheBaner />
        <NuxtLayout name="footer" />
    </div>   
</template>