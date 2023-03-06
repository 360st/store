<script setup>
for (var i = 0; i < 3; i++){
    setTimeout(function() {alert(i), 1000 + i})
}
</script>
<template>
    <NuxtLayout name="custom">
        <CommonTheHeader />
        <CommonMainTheRandomSectionFirst />
        <CommonMainTheRandomSectionSecond />
        <CommonMainTheBaner />
    </NuxtLayout>
</template>
