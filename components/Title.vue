<script setup>

const props = defineProps({
    name: String
})

</script>
<template>
    <h1 class=" font-light text-3xl my-4">{{ props.name }}</h1>
</template>