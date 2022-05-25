<script setup>
const categoryId = ref(null)
const emit = defineEmits(['categoryId'])
const route = useRoute()
const { data }  = await useFetch(`/api/categories/${route.params.kategoria}`, {pick: ['name', 'id']}) 

emit('categoryId', data.value.id)

</script>
<template>
    <Title :name="data.name" />
</template>