<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { idPaginationPage } = storeToRefs(useMainStore())
const route = useRoute()
const props = defineProps({
    // datas: Object,
    productsId: String,
    upSell: Boolean,
    categoryId: String
})

const emit = defineEmits(['totalPagesInCategory'])
const { data: list, pending } = props.categoryId ? await useAsyncData('list', () => $fetch(`/api/list/${props.categoryId}?strona=${idPaginationPage.value || 1}`), {initialCache: false, watch: [idPaginationPage]}) : await useFetch(`/api/include/${props.productsId}`)
//const { data: list, pending, refresh } = props.categoryId ? await useFetch(`/api/list/${props.categoryId}?strona=${idPaginationPage.value || 1}`) : await useFetch(`/api/include/${props.productsId}`)
const displayList = computed(() => props.categoryId ? list.value[0].data : list.value)

if (props.categoryId) {
    emit('totalPagesInCategory', list.value[1].totalPages)
}
// watch( () => idPaginationPage.value, () => {
//         console.log(idPaginationPage.value)
//          refresh()
// })
</script>
<template>
    <div v-if="pending" class=" fixed text-lg bg-white w-full h-full opacity-50 left-0 top-0 z-50 flex justify-center items-center"><p>Ładowanie</p></div>
    <ListProducts :class="{ 'w-1/4': upSell, 'col-span-3': categoryId }" :upSell="upSell" v-for="data in displayList"
        :key="data.id" :name="data.name" :slug="data.slug" :attributes="data.attributes" :price="data.price"
        :id="data.id" :image="data.images" />
    <li class=" w-1/4" v-if="upSell"><img src="@/assets/images/product/baner-achive-content-rabat.png" alt="Rabat" />
    </li>
</template>