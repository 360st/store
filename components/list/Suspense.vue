<script setup>
const props = defineProps({
    // datas: Object,
    productsId: String,
    upSell: Boolean,
    listId: String
})

const { data: list}  = props.listId ? await useFetch(`/api/list/${props.listId}`) : await useFetch(`/api/include/${props.productsId}`)

</script>
<template>
    <ListProducts :class="{'w-1/4': upSell, 'col-span-3': listId}" :upSell="upSell" v-for="data in list" :key="data.id" :name="data.name" :slug="data.slug"
        :attributes="data.attributes" :price="data.price" :id="data.id" :image="data.images" />
    <li class=" w-1/4" v-if="upSell"><img src="@/assets/images/product/baner-achive-content-rabat.png" alt="Rabat" /></li> 
</template>