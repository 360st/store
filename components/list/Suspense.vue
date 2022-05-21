<script setup>
const props = defineProps({
   // datas: Object,
    productsId: String
})
const { data: frontPage } = await useFetch(`/api/include/${props.productsId}`)
</script>
<template>
<ListProducts v-for="data in frontPage" :key="data.id" :name="data.name" :slug="data.slug" :attributes="data.attributes" :price="data.price"
                    :id="data.id" :image="data.images" />    
</template>