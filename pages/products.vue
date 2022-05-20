<script setup>
</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
            <Breadcrumbs />
            <div class=" container">
                <Title />
                <ListTopBaner />
                <ListSubcategories />
                <ListFilters />
                <ListProducts class=" mb-8" />
            </div>
        <NuxtLayout name="footer" />
    </div>
</template>